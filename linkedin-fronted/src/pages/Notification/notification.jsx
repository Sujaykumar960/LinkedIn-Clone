import React, {useEffect,useState} from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard'
import Advertisement from '../../components/Advertisement/advertisement'
import Card from '../../components/Card/card'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate = useNavigate();

  const [ownData,setOwnData] = useState(null) ;

  const [notifications,setNotifications] = useState([]);

  const fetchNotificationData = async() => {
    await api.get('/api/notification').then(res=>{
      console.log(res.data.notifications);
      setNotifications(res.data.notifications);
    }).catch(err=>{
      console.log(err);
      alert("Something went Wrong");
    })
  }

  const handleOnClickNotification = async(item) => {
    await api.put('/api/notification/isRead',{notificationId:item._id}).then(res=>{
      if(item.type === "comment"){
        navigate(`/profile/${ownData?._id}/activities/${item?.postId}`)
      } else {
        navigate('/myNetwork')
      }
    }).catch(err=>{
      console.log(err);
      alert("Something went Wrong");
    })
  } 
  
  useEffect(() => {
    let userData = localStorage.getItem('userInfo')
    setOwnData(userData? JSON.parse(userData) : null)

    fetchNotificationData()
  },[])

  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>

      {/* left side bar */}
      <div className='w-[21%] sm:block sm:w-[23%] hidden py-5'>
        <div className='h-fit'>
          <ProfileCard data={ownData}/>
        </div>
      </div>


      {/* middle content */}
      <div className='w-full py-5 sm:w-[50%]'>
        <div>
            <Card padding={0}> 
                <div className='w-full'>

                    {/* For each Notifications */}


                    {
                      notifications.map((item,index)=>{
                        return(
                          <div key={index} onClick={() => {handleOnClickNotification(item)}} className={`border-b cursor-pointer flex gap-4 items-center border-gray-300 p-3 ${item?.isRead?'bg-gray-200': 'bg-blue-100'}`}>
                            <img src={item?.sender?.profilePic} alt="" className='rounded-full cursor-pointer w-17 h-17'/>
                            <div>{item?.content || "Notification"}</div>
                          </div>
                        );
                      })
                    }


                </div>
            </Card>
        </div>
      </div>

      {/* right side bar */}
      <div className='w-[26%] py-5 hidden md:block'>
        <div className='my-5 sticky top-19'>
          <Advertisement />
        </div>
      </div>

      
    </div>
  )
}

export default Notification