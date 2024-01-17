import { useEffect, useRef } from "react"
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';


const UploadWidget = ({ handleImageId }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dcgu0vi6u',
      uploadPreset: 'gzqr6cgn',
    }, function (err, res) {
      if (res?.info?.public_id)
        handleImageId(res.info.public_id)
    })
  }, [])
  return (
    <div style={{
      cursor: 'pointer',
      display: 'inline-block',
      padding: '5px'
    }} onClick={() => widgetRef.current.open()}>
      הוספת תמונה
      <AddToPhotosOutlinedIcon />
    </div>
  )
}

export default UploadWidget


/*import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function UploadWidget() {
  const [file, setFile] = useState();

  const handleUpload = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); 
    
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,
        formData
      );

      console.log(res.data);
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
      />

      <Button onClick={handleUpload}>Upload</Button>
    </div>
  )  
}

export default UploadWidget;*/