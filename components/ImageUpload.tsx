"use client"
import React, { useRef, useState } from 'react'
import { IKImage, ImageKitProvider, IKUpload} from "imagekitio-next";
import config from '@/lib/config';
import Image from 'next/image';
import { showToast } from './ui/sonner';



const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`,
      {method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors", // Ensure CORS is handled properly
      credentials: "include", // Include credentials if required
    });

    if(!response.ok){
      const errorText = await response.text();

      throw new Error(`Request failed with status ${response.status} : ${errorText}`)
    };

    const data = await response.json();
    const {signature,expire,token} = data;
    return {signature,expire,token};

  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`)
  }
}

const ImageUpload = ({onFileChange}:{onFileChange:(filePath:string)=> void}) => {
  
  const ikUploadRef = useRef(null);

  const[file,setFile] = useState<{filePath:string}| null>(null)

  const onError = (error:any) =>{
    console.log(error);

    showToast("Upload Failed", "Please try again.", "destructive");
  }
  const onSuccess = (res:any) =>{
    setFile(res);
    onFileChange(res.filePath);

    showToast("Image Uploaded Successfully...", `${res.filePath} uploaded successfully!`, "success");

  }


  return (
    <ImageKitProvider 
      publicKey={config.env.imagekit.publicKey as string}
      urlEndpoint={config.env.imagekit.urlEndpoint as string}
      authenticator={authenticator}
    >
      <IKUpload 
      className='hidden' 
      ref={ikUploadRef} 
      onError={onError} 
      onSuccess={onSuccess} 
      fileName='test-upload.png'/>

      <button className='upload-btn' onClick={(e)=>{
        e.preventDefault();

        if(ikUploadRef.current){
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ikUploadRef.current?.click();
        }
      }}>
        <Image src='/icons/upload.svg' alt='upload button' width={20}height={20} className='object-contain'/>
        <p className='text-base text-light-100'>Upload a File</p>
        {file && <p className='upload-filename'>{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  )
}

export default ImageUpload