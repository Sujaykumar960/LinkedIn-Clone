import React,{useState} from 'react'
import api from '../../api'

const MessageModal = ({selfData,userData}) => {

  const [message, setMessage] = useState("")

  const handleSendMessage = async() => {
    await api.post('/api/conversation/add-conversation',{receiverId: userData?._id, message}).then(res=>{
      window.location.reload();
    }).catch(err => {
      console.log(err)
      alert(err?.response?.data?.error)
    })
  }

  return (
    <div className='my-5'>
        <div className='w-full mb-4'>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' placeholder='Enter Meassage' cols={10} rows={10}></textarea>
        </div>
        <div onClick={handleSendMessage} className='bg-blue-950 text-white w-fit py-2 px-3 cursor-pointer rounded-2xl'>Send</div>
    </div>
  )
}

export default MessageModal