import { useEffect, useRef } from "react"
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import { Chip, IconButton } from "@mui/material";


const UploadWidget = ({ handleImageId = null, handleAddImage = null, portfolioId = null }) => {
  const cloudinaryRef = useRef()
  const widgetRef = useRef()

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dcgu0vi6u',
      uploadPreset: 'gzqr6cgn',
    }, function (err, res) {
      if (res?.info?.public_id)
        if(handleImageId) handleImageId(res.info.public_id)
        else handleAddImage(portfolioId, res.info.public_id)
    })
  }, [])
  return (
    <div style={{display: 'flex', height: '100%'}}>
      <Chip
        sx={{ minWidth: '200px', margin: 'auto' }}
        icon={<AddToPhotosOutlinedIcon />}
        label='הוספת תמונה'
        variant="outlined"
        onClick={() => widgetRef.current.open()}
      >
      </Chip>
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