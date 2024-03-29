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
                  <Link href={"/dashboard"} style={{display:`${dataVisibleMenu}`, width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden  text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl ">  Dashbord</Link>
                  <Link href={"/storage"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}}  className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">  storage</Link>
                  <Link href={"/create_file"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="active_lien  max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
                  <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
                  <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
                  <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
                </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
                    
                    <div className="w-5/6 mt-2">


                      <div className="w-full">
                            <div className="w-full">
                              <form className="w-full flex flex-row justify-between">
                                <div>
                                  <select className="text-xl p-3 rounded-md">
                                    <option>IT</option>
                                    <option>CV</option>
                                    <option>CO</option>
                                    <option>DO</option>
                                    <option>PA</option>
                                  </select>
                                  
                                </div>
                                <div className="flex flex-row">
                                  <input type="text" className="text-xl mb-2 p-3 rounded-md border-4 border-violet-600"/><span className="text-purple-600 hover:text-pink-600 bg-slate-300 hover:bg-slate-400 rounded mb-2 ">

<FaSearch  style={{fontSize:"35px", margin:"10px" ,cursor:"pointer"}}/></span>
                                  
                                </div>
                                <div>
                                  <input className="text-xl p-3 border-4 border-red-800 w-60" type="date" /><span className="mx-5 my-5 rounded-md text-4xl ">to</span>   <input className="text-xl p-3 border-4 border-red-800 w-60" type="date" /><span></span>
                                
                                </div>
                               
                                <button type="submit" className="text-white text-2xl bg-pink-700 hover:bg-pink-600 rounded-md px-5 mx-3 mb-2">Create</button>
                              </form>
                            </div>
                            <table className="w-full bg-white ">
                              <thead >
                                <tr className="bg-purple-700 border-b-4 bg-gradient-to-r from-purple-600 to-pink-600 p-5 rounded-md">
                                  <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">NO</td>
                                  <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Order ID</td>
                                  <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Project name</td>
                                  <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">File delete date</td>
                                  <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">URL</td>
                                  <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">File</td>
                                  <td colSpan={2} className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm"></td>
                                </tr>
                                </thead>
                              <tbody>
                                <tr>
                                  <td className="p-5 max-lg:text-sm  max-lg:p-2">06</td>
                                  <td className="p-5 max-lg:text-sm  max-lg:p-2">433</td>
                                    <td className="p-5 max-lg:text-sm  max-lg:p-2">Web App</td>
                                  <td className="p-5 max-lg:text-sm  max-lg:p-2">02-03-2025</td>
                                  <td className="p-5 max-lg:text-sm  max-lg:p-2">http://onedrive.live.com/edi</td>
                                  <td className="flex flex-row p-5 max-lg:text-sm  max-lg:p-2"> 
                                      <div className="skill-box">
                                          <div className="skill-bar" style={{width :`90%`}}>
                             
                                          </div>
                                        </div>
                                        <p className="mt-2">GP</p>
                                  </td>
                                
                                  <td className="flex flex-row"> 
                                    <FaToggleOff style={{fontSize:"40px",color:"violet"}} />
                                    <MdEditDocument style={{fontSize:"40px",color:"green"}} /> 
                                    <RiDeleteBin5Line style={{fontSize:"40px",color:"red"}} />
                                  </td>
                                </tr>

                            
                                
                              
                              </tbody>
                            </table>
                      </div>
                    </div>

        </div>
      </>
    )
  }
  