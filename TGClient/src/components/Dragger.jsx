import React, { useCallback, useState, useContext } from "react";
import { useDropzone, onDrop } from "react-dropzone";
import axios from "../context/axios";
import { Image } from "cloudinary-react";
import "../styles/Dragger.css";
import { AuthContext } from "../context/authContext";



export default function Home() {

  const { userData } = useContext(AuthContext)
  
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fData, setFData] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [showButton, setshowButton] = useState(false);
  const url = `https://api.cloudinary.com/v1_1/dpdytq2cb/upload`;

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);

    acceptedFiles.forEach(async (acceptedFiles) => {
      const formData = new FormData();
      formData.append("file", acceptedFiles);
      formData.append("upload_preset", "ypf3kip2");
      setFData(formData);
      setshowButton(true);
      // setUploadedFiles(() => [formData])
    });
  }, []);



  const handleSubmit = async () => {
    // setConfirm(true);

    const response = await fetch(url, {
      method: "post",
      body: fData,
    });

    const data = await response.json();
    console.log(data.url);
    console.log(response);
    setUploadedFiles(() => [data]);

    const userMedical = await axios.get(`/temp/tempData?aadharNumber=${userData?.aadharNumber}`)
    console.log("user medialc data",userMedical.data[0])
    
    let finaldata = userMedical?.data[0]
    finaldata.imgUrl = data.url
    console.log("final Data : ",finaldata)

    const res = await axios.post('/upload/uploadIpfs', finaldata)
    console.log(res)

  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });
  // {`${styles.dropzone} ${isDragActive ? styles.active : null}`}
  return (
    <>
            <i class="ri-upload-cloud-fill"></i>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        Drop Your NFTS Here
      </div>
      <div>
        <div>
          {showButton ? (
            <button style={{
              outline: "none",
              padding: "5px 22px",
              background: "transparent",
              border: "1px solid #00337C",
              fontSize: "1.3rem",
              color: "#fff",
              borderRadius: "5px",
              transition: "0.3s",
              background: "#2684ff"}}
              onClick={() => {
                handleSubmit();
              }}
            >
              Confirm
            </button>
          ) : (
            ""
          )}
        </div>
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file.public_id}>
              <Image
                cloudName="dpdytq2cb"
                publicId={file.public_id}
                width="300"
                crop="scale"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// const Basic = (props) => {
//     const onDrop = useCallback((acceptedFiles) => {
//         acceptedFiles.forEach((file) => {
//           const reader = new FileReader()

//           reader.onabort = () => console.log('file reading was aborted')
//           reader.onerror = () => console.log('file reading has failed')
//           reader.onload = () => {
//           // Do whatever you want with the file contents
//             const binaryStr = reader.result
//             console.log(binaryStr)
//             console.log("file",file)
//           }
//           reader.readAsArrayBuffer(file)
//         })

//       }, [])
//     const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
//     accept: {
//     'image/png': ['.png']},maxFiles:1
//   });

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   // const handleSubmit = async (files) => {
//   //   files.preventDefault();
//   //   const data = new FormData()
//   //   // data.append("file",files[0])
//   //   data.append("upload_preset","ypf3kip2")
//   //   console.log(files[0])
//   //   // Axios.post("https://api.cloudinary.com/v1_1/dpdytq2cb/image/upload",data).then((res)=>{
//   //   //     console.log(res);
//   //   // })
//   // }

//   return (

//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//       {/* <button onClick={handleSubmit}>Upload to Cloudinary</button> */}
//     </section>

//   );
// }

// export default Basic
