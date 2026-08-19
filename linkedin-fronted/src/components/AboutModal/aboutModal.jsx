import React,{useState} from 'react'
import axios from 'axios';

const AboutModal = ({handleEditFunc, selfData}) => {
    
    const [data, setData] = useState({ about: selfData?.about, skillInp:selfData?.skills?.join(','),resume:selfData?.resume });
    const[loading, setLoading] = useState(false);

    const onChangeHandle = (event,key) => {
        setData({...data, [key]:event.target.value});
    }

    const handleInputImage = async(e) => {
        const files = e.target.files;
        const formData = new FormData();
        formData.append('file',files[0]);

        formData.append('upload_preset', 'linkedinClone');
        setLoading(true);
        try{
            const response = await axios.post("https://api.cloudinary.com/v1_1/qzt1h0ia/image/upload", formData);

            const imageUrl = response.data.url;
            setData({...data, resume: imageUrl});
        } catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    const handleOnSave = async() => {
        try {
            let arr = data?.skillInp ? data.skillInp.split(',') : [];

            let newData = { ...selfData, about: data.about, skills: arr, resume: data.resume };
            console.log('Saving about data:', newData);
            await handleEditFunc(newData);
        } catch (error) {
            console.error('Error saving about data:', error);
            alert('Failed to save. Please try again.');
        }
    }

  return (
    <div className='my-8'>
        <div className='w-full mb-4'>
            <label>About*</label>
            <br />
            <textarea value={data.about} onChange={(e) => onChangeHandle(e, 'about')} name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} rows={3}></textarea>
        </div>
        <div className='w-full mb-4'>
            <label>Skills*(Add by separating commas)</label>
            <br />
            <textarea value={data.skillInp} onChange={(e) => onChangeHandle(e, 'skillInp')} name="" id="" className='p-2 mt-1 w-full border-1 rounded-md' cols={10} rows={3}></textarea>
        </div>
        <div className='w-full mb-4'>
            <label htmlFor="resumeUpload" className='p-2 bg-blue-800 text-white rounded-lg cursor-pointer'>Resume Upload</label>
            <input onChange={handleInputImage} type="file" id="resumeUpload" className='hidden' />
            {
                data.resume && <div className='my-2'>{data.resume}</div>
            }
        </div>

        <div className='bg-blue-950 text-white w-fit py-1 px-3 cursor-pointer rounded-2xl' onClick={handleOnSave} >Save</div>
    </div>
  )
}

export default AboutModal