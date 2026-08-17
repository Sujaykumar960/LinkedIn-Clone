import React,{useState,useEffect} from 'react'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ImageModal = ({ isCircular,selfData }) => {

    const[imgLink,setImageLink] = useState(isCircular?selfData?.profilePic:selfData?.cover_pic);

    const[loading,setLoading] = useState(false);

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

  return (
    <div className='p-5 relative flex items-center flex-col h-full'>
        {
            isCircular ? (
                <img className='rounded-full w-[150px] h-[150px] mb-40' src={imgLink} alt="" />
            ) : (
                <img className='rounded-xl w-full h-[200px] object-cover mb-40' src={imgLink} alt="" />
            )
        }

        <label htmlFor="btn-submit" className='absolute bottom-2 left-0 p-3 bg-blue-900 text-white rounded-2xl cursor-pointer mb-7'>Upload</label>
        <input onChange={handleInputImage} type="file" className='hidden' id='btn-submit'/>

        {
            loading ? <Box sx={{ display: 'flex' }} className='absolute pb-2 pt-1'>
                        <CircularProgress aria-label="Loading…" />
                    </Box> : <div className='absolute bottom-10 right-0 p-3 bg-blue-950 text-white rounded-2xl cursor-pointer '>Submit</div>
            
        }
    </div>
  )
}

export default ImageModal