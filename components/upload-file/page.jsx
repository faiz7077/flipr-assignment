import React from 'react'
import { useState, useEffect } from "react"
import { Button } from '../ui/button';
import { Toast } from '../ui/toast';
import { toast } from 'sonner';

export default function UploadFile({ onUploadSuccess }) {
    const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setImageUrl(data.url);
      onUploadSuccess(data.url);
      toast.success('Image uploaded successfully');
    } else {
      console.error(data.error);
    }
  };

  return (
    <div>
      <h1 className='p-2'>Upload Image</h1>
      <form onSubmit={handleSubmit} className='flex flex-col p-2'>
        <input type="file" onChange={handleFileChange} required />
        <Button type="submit" className='p-4'>Upload</Button>
      </form>
      {/* {imageUrl && <img src={imageUrl} alt="Uploaded Image" />} */}
    </div>
  );
}
