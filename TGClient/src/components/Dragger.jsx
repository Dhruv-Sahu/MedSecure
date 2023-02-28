import React, { useCallback, useState } from "react";
import { useDropzone, onDrop } from "react-dropzone";
import Axios from "axios";
import { Image } from "cloudinary-react";
import "../styles/Dragger.css";

export default function Home() {
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
    console.log(data);
    console.log(response);
    setUploadedFiles(() => [data]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });
  // {`${styles.dropzone} ${isDragActive ? styles.active : null}`}
  return (
    <>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        Drop Zone
      </div>
      <div>
        <div>
          {showButton ? (
            <button
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
