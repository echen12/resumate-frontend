import React, { useState, useRef } from "react";

const ResumeUploader = () => {
    const [ resumePdf, setImage ] = useState("");
    const inputFile = useRef(null);

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            setImage(files[0]);
        }
    };

    console.log("Uploaded file:", resumePdf);
    return (
        <div>
            <input 
                style={{ 
                    // backgroundColor: "black"
                }}
                accept=".pdf"
                ref={inputFile}
                onChange={handleFileUpload}
                type="file"
            />
      </div>
    );
};

export default ResumeUploader;
