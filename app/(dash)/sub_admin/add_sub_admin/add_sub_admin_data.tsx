"use client"

import React ,{ useState,ChangeEvent,FormEvent } from "react";


 const login : React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event : ChangeEvent<HTMLInputElement>) => {
      const newFiles = Array.from(event.target.files || [] );
      setSelectedFiles((prevFiles) =>  [...selectedFiles, ...newFiles]); 
    };
  
    const handleDeleteFile = (index : any) => {
      const updatedFiles = [...selectedFiles];
      updatedFiles.splice(index, 1); 
      setSelectedFiles(updatedFiles);
    };
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
                <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Name :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="text" id="Email" /> 
                    </div> 
            
                    <br />
                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Gmail :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="text" id="Email" /> 
                    </div> 
                    <br />
                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Login :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="text" id="Email" /> 
                    </div> 
                    <br />
                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Password :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="text" id="Email" /> 
                    </div> 
                   <br />
                   <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Topic :</label>

                    <div className="flex justify-center">
                        <select className="p-3 w-3/4 rounded-md bg-purple-700 text-white">
                            <option value="IT">IT</option>
                            <option value="CV">CV</option>
                            <option value="CO">CO</option>
                            <option value="DO">DO</option>
                            <option value="PA">PA</option>
                        </select>
                    </div>
                    <br />
                    <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Access :</label>
                    
                    <div className="flex justify-center">
                        <select className="p-3 w-3/4 rounded-md bg-purple-700 text-white">
                            <option value="Dashboard">Dashboard</option>
                            <option value="Storage">Storage</option>
                            <option value="Create_file"> Create File</option>
                            <option value="Sub_admin">Sub Admin</option>
                        </select>
                    </div>
                    <br />

                    

                <div className="flex justify-center  max-md:text-sm  max-md:m-5 max-lg:m-5" >
                    <input value="Create" className=" max-md:px  max-md:text-py   bg-purple-500 hover:bg-pink-600  font-black cursor-pointer border-b-4 border-violet-950 rounded-xl px-10 py-4 text-cyan-50 text-center   " type="submit" />
                </div>
            
            </form>
         </div>
      </div>
    );
  }
  export default login;