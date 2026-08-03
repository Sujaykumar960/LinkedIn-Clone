import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { ToastContainer, toast } from 'react-toastify';

const AddModal = (props) => {

  const [ImageUrl, setImageUrl] = useState(null);
  const [desc, setDesc] = useState("");

  const handlePost = async() => {
    if(desc.trim().length===0 & !ImageUrl) return toast.error("Please enter any field");
  } 

  return (
    <div className=''>
        <div className='flex gap-4 items-center'>
            <div className='relative'>
                <img src={props.personalData?.profilePic} alt="Img" className='w-13 h-13 rounded-full'/>
            </div>
            <div className='text-2xl'>{props.personalData?.f_name}</div>
        </div>

        <div>
          <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} cols={50} rows={5} name="" id="" placeholder="What do you want to talk about?" className='my-3 outline-0 text-xl p-2'></textarea>
        </div>
        {
          ImageUrl && <div>
            <img src="https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=" alt="" className='w-20 h-20 rounded-xl'/>
          </div>
        }
        
        <div className='flex justify-between items-center'>
          <div className='my-6'>
            <label className='cursor-pointer' htmlFor="inputFile"> <ImageIcon /> </label>
            <input type="file" className='hidden' id="inputFile"/>
          </div>
          <div className='bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit' onClick={handlePost}>Post</div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddModal