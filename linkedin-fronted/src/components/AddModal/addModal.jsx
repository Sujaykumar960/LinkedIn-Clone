import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import api from '../../api';

const AddModal = (props) => {

  const [imageUrl, setImageUrl] = useState(null);
  const [desc, setDesc] = useState("");

  // cloudname = qzt1h0ia
  // presetName = linkedinClone

  const handlePost = async() => {
    if(desc.trim().length===0 & !imageUrl) return toast.error("Please enter any field");

    await api.post('/api/post',{desc:desc,imageLink:imageUrl}).then((res => {
      window.location.reload();
    })).catch(err => {
      console.log(err);
    })
  } 

  const handleUploadImage = async(e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file',files[0]);

    data.append('upload_preset', 'linkedinClone');
    try{
      const response = await axios.post("https://api.cloudinary.com/v1_1/qzt1h0ia/image/upload", data)

      const ImageUrl = response.data.url;
      setImageUrl(ImageUrl);

    } catch(err){
      console.log(err);
    }
    
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
          imageUrl && <div>
            <img src={imageUrl} alt="" className='w-20 h-20 rounded-xl'/>
          </div>
        }
        
        <div className='flex justify-between items-center'>
          <div className='my-6'>
            <label className='cursor-pointer' htmlFor="inputFile"> <ImageIcon /> </label>
            <input onChange={handleUploadImage} type="file" className='hidden' id="inputFile"/>
          </div>
          <div className='bg-blue-950 text-white py-1 px-3 cursor-pointer rounded-2xl h-fit' onClick={handlePost}>Post</div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default AddModal