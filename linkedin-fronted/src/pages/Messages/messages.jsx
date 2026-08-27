import React,{useState,useEffect,useRef} from 'react'
import Card from '../../components/Card/card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Conversation from '../../components/Conversation/conversation';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageIcon from '@mui/icons-material/Image';
import Advertisement from '../../components/Advertisement/advertisement';
import axios from 'axios'
import socket from '../../../socket' 

const Messages = () => {

    const [conversations,setConversations] = useState([]);

    const[ownData,setOwnData] = useState(null) 

    const [activeConvId, setActiveConvId] = useState(null)
    const [selectedConvDetails, setSelectedConDetail] = useState(null)

    const [messages,setMessages] = useState([]);

    const [loading,setLoading] = useState(false);
    const [imageLink, setImageLink] = useState(null);

    const [messageText,setMessageText] = useState("");

    const ref = useRef();

    useEffect(()=>{
        ref?.current?.scrollIntoView({behavior: "smooth"});
    },[messages])

    const handleSelectedConv = (id, userData) => {
        setActiveConvId(id)
        socket.emit("joinConversation", id)
        setSelectedConDetail(userData)
    }

    useEffect(() => {
        let userData = localStorage.getItem('userInfo')
        setOwnData(userData? JSON.parse(userData) : null)
        fetchConversationOnLoad();
    }, [])

    useEffect(() => {
        if(activeConvId){
            fetchMessages();
        }
    }, [activeConvId])

    useEffect(()=>{
        socket.on("receiveMessage",(response)=>{
            console.log(response)
            setMessages([...messages, response])
        })
    },[messages])

    const fetchMessages = async() => {
        await axios.get(`http://localhost:4000/api/message/${activeConvId}`,{withCredentials:true}).then(res=>{
            console.log(res);
            setMessages(res.data.message)
        }).catch(err => {
            console.log(err);
            alert("Something went Wrong");
        })
    }

    

    const fetchConversationOnLoad = async() => {
        await axios.get('http://localhost:4000/api/conversation/get-conversation',{withCredentials:true}).then(res=>{
            console.log(res.data.conversations)
            setConversations(res.data.conversations)
            setActiveConvId(res.data?.conversations[0]?._id)
            socket.emit("joinConversation", res.data?.conversations[0]?._id)
            let ownId = ownData?._id;
            let arr = res.data?.conversations[0]?.members?.filter((it) => it._id !== ownId);
            setSelectedConDetail(arr[0])
        }).catch(err => {
            console.log(err);
            alert("Something went Wrong");
        })
    }

    const handleInputImage = async(e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file',files[0]);

        data.append('upload_preset', 'linkedinClone');
        setLoading(true);
        try{
            const response = await axios.post("https://api.cloudinary.com/v1_1/qzt1h0ia/image/upload", data);
            const ImageUrl = response.data.url;
            setImageLink(ImageUrl);
        } catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    const handleSendMessage = async() => {
        await axios.post(`http://localhost:4000/api/message`,{ conversation:activeConvId, message:messageText, picture:imageLink },{withCredentials:true}).then(res => {
            socket.emit("sendMessage", activeConvId, res.data)
            setMessageText("")
            setImageLink(null)
            // setMessages([...messages, res.data])
            // socket.emit("sendMessage", activeConvId, res.data)
            // setMessageText("")
            // setImageLink(null)
        }).catch(err => {
            console.log(err);
            alert("Something went Wrong");
        })
    }


  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        <div className='w-full justify-between flex pt-5'>

            {/* left side */}
            <div className='w-full md:w-[70%]'>
                <Card padding={0}>
                    <div className='border-b-1 border-gray-300 px-5 py-5 font-semibold text-lg'>
                        Messaging
                    </div>

                    <div className='border-b-1 border-gray-300 px-5 py-5 font-semibold text-lg'>
                        <div className='py-1 px-3 cursor-pointer hover:bg-green-900 bg-green-800 font-semibold flex gap-2 w-fit rounded-2xl text-white'>Focused <ArrowDropDownIcon /></div>
                    </div>

                    {/* Chat Card */}
                    <div className='w-full md:flex md:flex'>
                        <div className='h-[590px] overflow-auto w-full md:w-[40%] border-r-1 border-gray-400'>
                            {/* For Each chat Conversation */}

                            {
                                conversations.map((item,index)=>{
                                    return(
                                        <Conversation activeConvId={activeConvId} handleSelectedConv={handleSelectedConv} key={index} item={item} ownData={ownData} />
                                    );
                                })
                            }

                        </div>


                        <div className='border-gray-400overflow-auto w-full md:w-[60%]'>
                            {/* Chat Area */}
                            <div className='border-gray-300 py-2 px-4 border-b-2 flex justify-between items-center'>
                                <div>
                                    <p className='text-sm font-semibold'> {selectedConvDetails?.f_name} </p>
                                    <p className='text-sm text-gray-400'> {selectedConvDetails?.headline}</p>
                                </div>
                                <div><MoreHorizIcon /></div>
                            </div>

                            <div className='h-[360px] w-full overflow-auto border-b-1 border-gray-300'>
                                <div className='w-full border-b-1 border-gray-300 gap-3 p-4' >
                                    <img src={selectedConvDetails?.profilePic} alt="User" className='w-16 h-16 rounded-full cursor-pointer' />
                                    <div className='my-2'>
                                        <p className='text-md'> {selectedConvDetails?.f_name}</p>
                                        <p className='text-sm text-gray-500'> {selectedConvDetails?.headline} </p>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    {/* For each message in messages */}
                                    
                                    {
                                        messages.map((item,index)=>{
                                            return(
                                                <div ref={ref} key={index} className='flex w-full cursor-pointer border-gray-300 gap-3 p-4'>
                                                    <div className='shrink-0'>
                                                        <img src={item?.sender?.profilePic} alt="User" className='w-8 h-8 rounded-[100%] cursor-pointer' />
                                                    </div>
                                                    <div className='mb-2 w-full'>
                                                        <div className='text-md'>{item?.sender?.f_name}</div>

                                                        <div className='text-sm mt-6 hover:bg-gray-200'>{item?.message}</div>
                                                        {
                                                            item?.picture && <div className='my-2'><img src={item?.picture} alt="" className='w-[240px] h-[180px] rounded-md'/></div>
                                                        }
                                                    </div>
                                                </div> 
                                            );
                                        })
                                    }
                                    
                                </div>
                            </div>

                            {/* Space for typing message */}
                            <div className='p-2 w-full border-b border-gray-200'>
                                <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} rows={4} name="" id="" className='bg-gray-200 outline-0 rounded-xl text-sm w-full p-3' placeholder='Write a message'></textarea>
                            </div>

                            <div className='p-3 flex justify-between items-center'>
                                <div>
                                    <label htmlFor="messageImage" className='cursor-pointer'><ImageIcon /></label>
                                    <input type="file" id='messageImage' onChange={handleInputImage} className='hidden'/>
                                </div>
                                {
                                    !loading && <div onClick={handleSendMessage} className='px-3 py-1 cursor-pointer rounded-2xl border bg-blue-800 text-white'>
                                        Send
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* right side */}
            <div className='hidden md:flex md:w-[25%]'>
                <div className='sticky top-19'>
                    <Advertisement />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Messages