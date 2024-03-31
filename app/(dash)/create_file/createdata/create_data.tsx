"use client"

import { useState } from "react";
import { PiArrowCircleUpDuotone } from "react-icons/pi";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { RxCopy } from "react-icons/rx";


export default function Create() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event : any) => {
      const newFiles = Array.from(event.target.files);
      setSelectedFiles([...selectedFiles, ...newFiles]); 
    };
  
    const handleDeleteFile = (index : any) => {
      const updatedFiles = [...selectedFiles];
      updatedFiles.splice(index, 1); 
      setSelectedFiles(updatedFiles);
    };
  
    const handleSubmit = (event :any) => {
      event.preventDefault();  
      setSelectedFiles([]);
    };

    const [extensionFile,setExtensionFile]  = useState("")
  
  
    const renderFileList = () => (
        selectedFiles.map(( f, i) => {
            const b = f.name.split(".")
            const c = b[1]
            return (
                <div key={i} className=" w-16 inline-block">
                    <p className='Files inline-block'>   {c}  </p>
                    <button className="text-red-700 h-6 bg-white text-xl relative left-14 bottom-14" onClick={() => handleDeleteFile(i)}>x</button>
                </div>
            )
        } )



    //   selectedFiles.map((file, index) => (
    //     <div key={index}>
    //     <p className='Contener_menu'>   {a}  </p>
    //       <button onClick={() => handleDeleteFile(index)}>x</button>
    //     </div>
    //   ))
    );


    return (
      <div className="Customer_big_container bg-slate-200 flex items-center justify-center p-10 max-sm:p-0  ">
           <div className="
            overflow-auto  max-h-6/6  min-h-6/6
           Customer_container
           bg-white 
           w-full
           h-full 
           rounded-xl 
           shadow-lg 
           p-4
            border-indigo-500 
           max-w-lg
           max-md:h-5/6  
           max-sm:w-full
           max-sm:m-5  ...">
            <form className="  Customer_form max-md:w-full max-md:m-0  max-lg:w-full h-64 w-full my-5">
                <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Order ID :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="text" id="Email" /> 
                    </div> 
            
                    <br />
                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Project Name :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="text" id="Email" /> 
                    </div> 
                    <br />

                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Select File :</label>
                    <div className="overflow-auto  max-h-16 ml-16 mb-2 max-md:ml-1 max-lg:ml-1 flex flex-between w-3/4 rounded-md" onSubmit={handleSubmit}>
                        <div className="hover:cursor-pointer w-20 sticky left-20 h-16">
                            <FaFileCirclePlus className="test" style={{fontSize:"60px", color:"purple",}}/>
                        </div>
                        <input name="select file" className="cursor-pointer z-10 custom-file-input mr-2 w-14h-full p-1 rounded-md justify-between text-2xl" type="file"  multiple onChange={handleFileChange} />
                    
                        <span className="text-sm border-2">{renderFileList()}</span>
                        <button className="end p-2" type="submit"><PiArrowCircleUpDuotone style={{color:"blue",fontSize:"30px"}}/></button>
                    </div>
                    <br /> 
                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">File Delete Data :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="data" id="Email" /> 
                    </div>
                    <br /> 
                <label  className="Customer_label max-lg:left-2 max-md:left-2  max-md:text-sm   font-black cursor-text relative bottom-1 left-20  text-purple-800 text-base" htmlFor="Password">Url :</label>
                    <div className="flex justify-center">
                         <input  className="max-lg:w-full max-md:w-full max-md:m-0   text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700"  type="password" id="Password" />
                         
                   
                    </div>
                    <span><RxCopy className="test" style={{color:"white",fontSize:"30px",transform:"translateX(380px) translateY(-40px)", borderRadius:"5px"}}/></span> 
                        <span>< FaLink  className="test" style={{color:"purple",fontSize:"30px",transform:"translateX(425px) translateY(-70px)", borderRadius:"5px"}}/></span>
              
                <div className="flex justify-center  max-md:text-sm  max-md:m-5 max-lg:m-5" >
                    <input value="Login" className=" max-md:px  max-md:text-py   bg-purple-500 hover:bg-pink-600  font-black cursor-pointer border-b-4 border-violet-950 rounded-xl px-10 py-4 text-cyan-50 text-center   " type="submit" />
                </div>
            
            </form>
         </div>
      </div>
    );
  }
  