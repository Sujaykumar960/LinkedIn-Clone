import React,{ useState,useEffect } from 'react'
import clsx from 'clsx';
import Advertisement from '../../components/Advertisement/advertisement'
import Card from '../../components/Card/card'
import EditIcon from '@mui/icons-material/Edit';
import Post from '../../components/Post/post';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../components/Modal/modal'
import ImageModal from '../../components/ImageModal/imageModal';
import EditInfoModal from '../../components/EditInfoModal/editInfoModal';
import AboutModal from '../../components/AboutModal/aboutModal';
import ExpModal from '../../components/ExpModal/expModal';
import MessageModal from '../../components/MessageModal/messageModal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Profile = () => {
  const {id} = useParams();

  const [imageSetModal, setImageModal] = useState(false);
  const [circularImage,setCircularImage] = useState(true);

  const [infoModal, setInfoModal] = useState(false);
  const [aboutModal, setAboutModal] = useState(false);
  const [expModal, setExpModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);

  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState([]);
  const [ownData, setOwnData] = useState(null);

  const [updateExp,setUpdateExp] = useState({clicked:"", id:"",datas:{}});

  const updateExpEdit = (id,data) => {
    setUpdateExp({...updateExp,
      clicked:true, id:id, data:data

    })
    setExpModal(prev=>!prev)
  }

  useEffect(() => {
    fetchDataOnLoad()
  }, [])

  const fetchDataOnLoad = async() => {
    try{
      const [userDatas,postDatas,ownDatas] = await  Promise.all([
        axios.get(`http://localhost:4000/api/users/user/${id}`),
        axios.get(`http://localhost:4000/api/post/getTop5Post/${id}`),
        axios.get('http://localhost:4000/api/users/self',{withCredentials:true}),
      ]);
      
      setUserData(userDatas.data.user);
      setPostData(postDatas.data.posts);
      setOwnData(ownDatas.data.user);

      localStorage.setItem('userInfo', JSON.stringify(ownDatas.data.user));

    }catch(err){
        console.log(err);
        alert("Something want Wrong");
    }
  }


  const handleMessageModal = () => {
    setMessageModal(prev => !prev);
  }

  const handleExpModal = () => {
    if(expModal){
      setUpdateExp({clicked:"",id:"",datas:{}});
    }
    setExpModal(prev => !prev);
  }

  const handleAboutModal = () => {
    setAboutModal(prev => !prev);
  }

  const handleInfoModal = () => {
    setInfoModal(prev => !prev);
  }

  const handleImageModalOpenClose = () => {
    setImageModal(prev => !prev);
  }

  const handleOnEditCover = () => {
    setImageModal(true);
    setCircularImage(false);
  }

  const handleCircularImageOpen = () => {
    setImageModal(true);
    setCircularImage(true);
  }

  const handleEditFunc = async(data) => {
    await axios.put(`http://localhost:4000/api/users/update`,{user:data},{withCredentials:true}).then(res=>{
      window.location.reload();
    }).catch ((err) => {
      console.log(err);
      alert('Something Went Wrong');
    });
  }
  
  return (
    <div className={clsx('px-5', 'xl:px-50', 'py-5', 'mt-5', 'flex', 'flex-col', 'gap-5', 'w-full', 'pt-12', 'bg-gray-100')}>
        <div className={clsx('flex', 'justify-between')}>

            {/* Left Side Main Section */}
            <div className={clsx('w-full', 'md:w-[70%]')}>
              <div>
                <Card padding={0}>
                  <div className={clsx('w-full', 'h-fit', 'bg-gray-200')}>
                    <div className={clsx('relative', 'w-full', 'h-[200px]')}>
                      <div className={clsx('absolute', 'cursor-pointer', 'top-3', 'right-3', 'z-20', 'w-[35px]', 'flex', 'justify-center', 'items-center', 'h-[35px]', 'rounded-full', 'p-3', 'bg-white')} onClick={handleOnEditCover}><EditIcon /></div>
                      <img className={clsx('w-full', 'h-[200px]', 'rounded-tr-lg', 'rounded-tl-lg')} src={userData?.cover_pic} alt="" />
                      <div className={clsx('absolute', 'object-cover', 'top-24', 'left-6', 'z-10')} onClick={handleCircularImageOpen}><img className={clsx('rounded-full', 'border-2', 'border-white', 'cursor-pointer', 'w-30', 'h-30')} src={userData?.profilePic} alt="" /></div>
                    </div>

                    <div className={clsx('mt-10', 'relative', 'px-8', 'py-2')}>
                      <div className={clsx('absolute', 'cursor-pointer', 'top-0', 'right-3', 'z-20', 'w-[35px]', 'flex', 'justify-center', 'items-center', 'h-[35px]', 'rounded-full', 'p-3', 'bg-white')} onClick={handleInfoModal}><EditIcon /></div>
                      <div className='w-full'>
                        <div className='text-2xl'>{userData?.f_name}</div>
                        <div className='text-gray-700'>{userData?.headline}</div>
                        <div className={clsx('text-sm', 'text-gray-500')}>{userData?.curr_location}</div>
                        <div className={clsx('text-md', 'text-blue-800', 'w-fit', 'cursor-pointer', 'hover:underline')}>{userData?.friends?.length}</div>

                        <div className={clsx('md:flex', 'w-full', 'justify-between')}>
                          <div className={clsx('my-5', 'flex', 'gap-5')}>
                            <div className={clsx('cursor-pointer', 'p-2', 'border-1', 'rounded-lg', 'bg-blue-800', 'text-white', 'font-semibold')}>Open to</div>
                            <div className={clsx('cursor-pointer', 'p-2', 'border-1', 'rounded-lg', 'bg-blue-800', 'text-white', 'font-semibold')}>Share</div>
                            <div className={clsx('cursor-pointer', 'p-2', 'border-1', 'rounded-lg', 'bg-blue-800', 'text-white', 'font-semibold')}>Logout</div>
                          </div>
                          <div className={clsx('my-5', 'flex', 'gap-5')}>
                            <div className={clsx('cursor-pointer', 'p-2', 'border-1', 'rounded-lg', 'bg-blue-800', 'text-white', 'font-semibold')} onClick={handleMessageModal}>Message</div>
                            <div className={clsx('cursor-pointer', 'p-2', 'border-1', 'rounded-lg', 'bg-blue-800', 'text-white', 'font-semibold')}>Connect</div>
                          </div>
                        </div>


                      </div>
                    </div>

                  </div>

                </Card>
              </div>

              <div className='mt-5'>
                <Card padding={1}>
                  <div className={clsx('flex', 'justify-between', 'items-center')}>
                    <div className='text-xl'>About</div>
                    <div className='cursor-pointer' onClick={handleAboutModal}><EditIcon /></div>
                  </div>
                  <div className={clsx('text-gray-700', 'text-md', 'w-[80%]')}>{userData?.about || "No information added yet"}</div>
                </Card>
              </div>
              
              <div className='mt-5'>
                <Card padding={1}>
                  <div className={clsx('flex', 'justify-between', 'items-center')}>
                    <div className='text-xl'>Skills</div>
                  </div>
                  <div className={clsx('text-gray-700', 'text-md', 'my-2', 'w-full', 'flex', 'gap-4', 'flex-wrap')}>
                    
                    {
                      userData?.skills?.length > 0 ? (
                        userData?.skills?.map((item,index)=>{
                          return(
                            <div key={index} className={clsx('py-1', 'px-2', 'cursor-pointer', 'bg-blue-800', 'text-white', 'rounded-lg')}>{item}</div>
                          );
                        })
                      ) : (
                        <div className="text-gray-500">No skills added yet</div>
                      )
                    } 

                  </div>
                </Card>
              </div>

              <div className='mt-5'>
                <Card padding={1}>
                  <div className={clsx('flex', 'justify-between', 'items-center')}>
                    <div className='text-xl'>Activities</div>
                  </div>
                  <div className={clsx('cursor-pointer', 'px-3', 'py-1', 'w-fit', 'border-1', 'rounded-4xl', 'bg-green-800', 'text-white', 'font-semibold')}>Posts</div>

                  {/* Parent div for scrollable Activities */}
                  <div className={clsx('overflow-x-auto', 'my-2', 'flex', 'gap-1', 'overflow-y-hidden', 'w-full')}>

                    {
                      postData.map((item,index)=>{
                        return(
                          <Link key={index} to={`/profile/${id}/activities/${item._id}`} className={clsx('cursor-pointer', 'shrink-0', 'w-[350px]', 'h-[560px]')}>
                            <Post profile={1} item={item} personalData={ownData}/>
                          </Link>
                        );
                      })
                    }

                  </div>

                  <div className='w-full flex justify-center items-center'>
                    <Link to={`/profile/${id}/activities`} className='p-2 rounded-xl cursor-pointer hover:bg-gray-300'>Show all Posts <ArrowForwardIcon /></Link>
                  </div>
                </Card>
              </div>

              <div className='mt-5'>
                <Card padding={1}>
                  <div className={clsx('flex', 'justify-between', 'items-center')}>
                    <div className='text-xl'>Experience</div>
                    <div className='cursor-pointer' onClick={handleExpModal}><AddIcon /></div>
                  </div>

                  <div className='mt-5'>

                    {
                      userData?.experience?.map((item,index)=>{
                        return(
                          <div className={clsx('p-2', 'border-t-1', 'border-gray-300', 'flex', 'justify-between')}>
                            <div>
                              <div className='text-lg'>{item?.designation}</div>
                              <div className='text-sm'>{item?.company_name}</div>
                              <div className={clsx('text-sm', 'text-gray-500')}>{item?.duration}</div>
                              <div className={clsx('text-sm', 'text-gray-500')}>{item?.location}</div>
                            </div>
                            <div onClick={() => updateExpEdit(index, item)} className='cursor-pointer'><EditIcon /></div>
                          </div>
                        );
                      })

                    }
                    
                    

                  </div>
                </Card>

              </div>
            </div>



             {/* Right Side Add  */}
            <div className={clsx('hidden', 'md:flex', 'md:w-[28%]')}>
              <div className={clsx('sticky', 'top-19', 'w-full')}>
                <Advertisement />
              </div>

            </div>

        </div>

        {
          imageSetModal && (<Modal title="Upload Image" closeModal={handleImageModalOpenClose}> 
              <ImageModal handleEditFunc={handleEditFunc} selfData={ownData} isCircular={circularImage}/>
            </Modal>
          )
        }

        {
          infoModal && <Modal title="Edit Info" closeModal={handleInfoModal}>
            <EditInfoModal handleEditFunc={handleEditFunc} selfData={ownData} />
          </Modal>
        }

        {
          aboutModal && <Modal title="Edit About" closeModal={handleAboutModal}>
            <AboutModal handleEditFunc={handleEditFunc} selfData={ownData} /> 
          </Modal>
        }

        {
          expModal && <Modal title="Experience" closeModal={handleExpModal}>
            <ExpModal handleEditFunc={handleEditFunc} selfData={ownData} updateExp={updateExp} setUpdateExp={updateExpEdit} />
          </Modal>
        }

        {
          messageModal && <Modal title="Send Message" closeModal={handleMessageModal}>
            <MessageModal />
          </Modal>
        }
    
    </div>
  )
}

export default Profile
