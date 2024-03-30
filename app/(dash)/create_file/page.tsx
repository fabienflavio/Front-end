'use client'
import React, { useState } from "react"
import Link from "next/link"
import { GrDashboard } from "react-icons/gr";
import { IoMenuSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdEditDocument } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import { FaToggleOn } from "react-icons/fa6";
import { LuFileSymlink } from "react-icons/lu";




import { Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement, ArcElement, Tooltip, Legend, BarElement   } from 'chart.js'; 

ChartJS.register(CategoryScale);
ChartJS.register(LinearScale);
ChartJS.register(PointElement);
ChartJS.register(LineElement );
ChartJS.register(BarElement);
ChartJS.register(ArcElement, Tooltip, Legend);



import {Line,Doughnut,Bar} from  "react-chartjs-2"
export default function dashboard( ) {
  const [ dataVisibleMenu,setDataVisibleMenu] = useState("");
  const [ dataWidhtMenu,setDataWidthMenu] = useState("");
  const [ dataMarginMenu,setDataMarginMenu] = useState("");
  const [ dataContainer_lien_widhtMenu,setDataContainer_lien_widhtMenu] = useState({});
  const [ styleMenu,setStyleMenu] = useState({})
  const [ styleContainerMenu,setContainerStyleMenu] = useState({})
  const router = useRouter();
  const [visiblePopup,setDataVisiblePopup] = useState("hidden");
  const [ OnEnable,setOnEnable] = useState(true)
  const [visibleON,setDataVisibleON] = useState("none");
  
  function visibleMenu(){
    setDataVisibleMenu("inline-block")
    setDataWidthMenu("200px");
    setDataMarginMenu('20px');

    

    setDataContainer_lien_widhtMenu({
      width:"250px",
      position:"absolute",
      left: 0,
      top:0 ,
      zIndex:2

    })
    setStyleMenu(   {
      position:"absolute",
      left: 0,
      top: 0
    })
    setContainerStyleMenu(   {
      display : "inline-block"
    })
  }

  function ExitMenu(){
    setDataVisibleMenu("")
    setDataWidthMenu("");
    setDataMarginMenu('');

    

    setDataContainer_lien_widhtMenu({
     
    })
    setStyleMenu(   {
   
    })
    setContainerStyleMenu(   {
      
    })
  }



  function EnableData(){
    setOnEnable(!OnEnable)
  }
  function EditData(){

  }
  function DeleteData(){
      setDataVisiblePopup("flex")
  }

    return (
      <>
      {/* -------------------------- -------------------- */}
      {/* {/* --------------------------  -------------------- */}  
      {/* ---------------------------------------------- */}
    
        <div  className="max-md:flex-col   Customer_container_dashbord flex justify-between   max-2xl:justify-start   ">
            
              {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
        
                
                <div style={dataContainer_lien_widhtMenu}  className="max-md:p-2 max-md:m-0 max-md:inline-block  max-xl:w-20 max-xl:justify-start  max-2xl:w-96 Customer_lien_admin flex flex-col justify-around p-5 w-1/6 max-2xl:p-4   bg-slate-300 m-2 rounded-lg pb-60">
                  <Link className="hidden max-xl:inline-block " href={""} >
                    {
                      dataVisibleMenu == ""  ? <IoMenuSharp className="max-md:text-sm" onClick={visibleMenu} style={{
                        fontSize: 40,
                        }} /> :   <ImExit className="max-md:text-sm" style={{
                          fontSize:40,color:"white"
                        }} onClick={ExitMenu} />
                    } 
                  </Link>
                  <Link href={"/dashboard"} style={{display:`${dataVisibleMenu}`, width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1 max-xl:hidden  text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl ">  Dashbord</Link>
                  <Link href={"/storage"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}}  className="max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">  storage</Link>
                  <Link href={"/create_file"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1 active_lien  max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
                  <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
                  <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
                  <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-md:p-1  max-xl:hidden  text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
                </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
                    
                    <div className="w-5/6 mt-2 max-md:w-full">


                      <div className="w-full">
                            <div className="w-full">
                              <form className=" w-full max-md:inline-block flex flex-row justify-between">
                                <div>
                                  <select className="max-md:w-full text-md max-md:text-sm p-3  rounded-md">
                                    <option value="IT">IT</option>
                                    <option value="CV">CV</option>
                                    <option value="CO">CO</option>
                                    <option value="DO">DO</option>
                                    <option value="PA">PA</option>
                                  </select>
                                  
                                </div>
                                <div className="h-12 flex flex-row  max-md:w-full">
                                  <input type="text" className="max-md:w-full max-md:h-10 max-xl:mb-0 max-xl:h-5 max-lg:p-0 text-md max-md:text-sm mb-2 p-2 rounded-md border-4 border-violet-600"/>
                                  <br />
                                  <br />
                                  <span className="text-purple-600 hover:text-pink-600 bg-slate-300 hover:bg-slate-400 rounded mb-2 "><FaSearch  style={{fontSize:"25px", margin:"10px" ,cursor:"pointer"}}/></span>
                                  
                                </div>
                                <div className="max-md:w-full ">
                                  <input className="max-md:w-full text-md max-md:text-sm border-4 p-1 border-red-800 w-40" type="date" />
                                  <br />
                                  <span>To</span>
                                  <br />
                                  <input className= "max-md:w-full text-md max-md:text-sm p-1 border-4 border-red-800 w-40" type="date" />
                                </div>
                               <Link href={"create_file/createdata"}> <button  type="submit" className="max-md:w-60 max-md:mt-5 text-white text-2xl bg-pink-700 hover:bg-pink-600 rounded-md px-5 mx-3 mb-2">Create</button>
                            </Link>
                                 </form>
                            </div>
                            <div className="Tableaux ">
                            <table className="w-full  bg-white max-md:ml-0 border-2">
                              <thead >
                                <tr className="bg-purple-700 border-b-4 bg-gradient-to-r from-purple-600 to-pink-600 p-5 rounded-md">
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">NO</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Order ID</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Project name</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">File delete date</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">URL</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">File</td>
                                  <td className="text-transparent max-lg:p-2 font-semibold text-white max-lg:text-sm">Action Delete Modification Active</td>
                                  
                                </tr>
                                </thead>
                              <tbody>
                                <tr>
                                  <td className=" border-4 max-lg:text-sm  ">06</td>
                                  <td className=" border-4 max-lg:text-sm  ">433</td>
                                  <td className=" border-4 max-lg:text-sm  ">Web App</td>
                                  <td className=" border-4 max-lg:text-sm  ">02-03-2025</td>
                                  <td className="border-4 max-lg:text-sm  "> {OnEnable ? "" : "http://onedrive.live.com/edi" } {OnEnable ? "" : <LuFileSymlink style={{color:"purple",fontSize:"20px"}}/>}    </td>
                                  <td className="   border-2"> 
                                    <div className="flex flex-row max-lg:text-sm">
                                              <div className="skill-box" >
                                                <div className="skill-bar" style={{width :`90%`}}>
                                  
                                                </div>
                                              </div>
                                              <p className="border-2 mt-2 w-8">GP</p>
                                    </div>
                                      
                                  </td>
                                  <td className="text-center flex flex-row">
                                      { OnEnable == true ? <FaToggleOn className="test" onClick={EnableData} style={{fontSize:"40px",color:"blue",display:`inline-block` }} /> : <FaToggleOff className="test" onClick={EnableData} style={{fontSize:"40px",color:"red",display:`inline-block`,transition:"all 0.5s " }} />  }
                                     <span> { OnEnable ? "ON" : "OFF" }  </span> 
                                       <Link className="test" href={"/create_file/4"}> <MdEditDocument className="test" onClick={EditData} style={{fontSize:"40px",color:"green",display:"inline-block"} } />  </Link> 
                                        <RiDeleteBin5Line className="test" onClick={DeleteData} style={{fontSize:"40px",color:"red",display:"inline-block"}} />
                                  </td>
                                 
                                  
                                </tr>

                            
                                
                              
                              </tbody>
                            </table>
                            </div>
                            
                      </div>
                    </div>

        </div>
        <div className={`${visiblePopup} flex justify-center items-center backdrop-blur-sm absolute left-0 top-0 Modale bg-transparent w-full h-full`}>
              <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600  p-5">
                    <p className="text-white">Are You SURE you want To Delete Instruction</p>
                    <br />
                    <div className="flex justify-center ">
                      <button onClick={ () => {setDataVisiblePopup("hidden")}} className="mr-5 rounded-md p-3 border-2 bg-purple-700 text-white  hover:bg-purple-600  border-purple-700 ">Yes</button>  <button  onClick={ () => {setDataVisiblePopup("hidden")}}  className="text-white hover:bg-pink-500 rounded-md p-3 border-2 border-purple-700">No</button>
              
                    </div>
              </div>
        </div>
      </>
    )
  }
  