import React, { useState } from 'react'

export const QrCode = () => {


    const [img, setImg] = useState("");
    const [loading,setLoading] = useState(false);
    const [qrData,setQrData]  = useState("")
    const [qrSize,setQrSize] = useState ("");
  
  
  
  async function generateQr() {
    setLoading(true)
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`
      setImg(url)
  
    }catch(error){
      console.error("Error Generating Qr Code",error)
  
    }finally{
      setLoading(false)
  
    }
  }
  
  function downloadQr() {
    fetch (img).then((response)=>response.blob()).then((blob)=>{
      const link = document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download = "QrCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
    }).catch((error) => {
      console.error("Enter Downloading Qr Code ",error);
    });
    
  }

  function downloadQr() {
    fetch (img).then((response)=>response.blob()).then((blob)=>{
      const link = document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download = "QrCode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
    }).catch((error) => {
      console.error("Enter Downloading Qr Code ",error);
    });
    
  }



  return (
   <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
     {loading && <p>Please Wait.....</p>}
      {img && <img src={img} alt="" />}
      <div>
        <label htmlFor="dataInput" className='input-label'>Data for Qr Code:</label>
        <input type="text" value={qrData} id='dataInput' placeholder='Enter Data for Qr Code' onChange={(e) =>setQrData (e.target.value)}/>

        <label htmlFor="sizeInput" className='input-label'>Image Size (e.g., 150)</label>
        <input type="text"  value={qrSize} id='sizeInput' placeholder='Enter Image Size' onChange={(e) => setQrSize (e.target.value)} />

        <button className='generate-button' disabled={loading} onClick={generateQr} >Generate Qr Code</button>
        <button className='download-buttton' onClick={downloadQr}>Download Qr Code</button>

      </div>
    </div>
  )
}
