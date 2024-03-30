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
    
        <div className="max-md:flex-col   Customer_container_dashbord flex justify-between   max-2xl:justify-start   ">
            
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
                  <Link href={"/create_file"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
                  <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className=" active_lien    max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
                  <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
                  <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-md:p-1  max-xl:hidden  text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
                </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
                    
                    <div className="w-5/6 mt-2 max-md:w-full">


                      <div className="w-full">
                            <div className="w-full">
                              <form className=" w-full max-md:inline-block flex flex-row justify-end">
                                
                                    <Link href={"sub_admin/add_sub_admin"}> <button  type="submit" className="max-md:w-60 max-md:mt-5 text-white text-2xl bg-pink-700 hover:bg-pink-600 rounded-md px-5 mx-3 mb-2">ADD</button>
                                    </Link>
                                 </form>
                            </div>
                            <div className="Tableaux ">
                            <h1>Sub Admin</h1>
                            <table className="w-full  bg-white max-md:ml-0 border-2">
                              <thead >
                               
                                <tr className="bg-purple-700 border-b-4 bg-gradient-to-r from-purple-600 to-pink-600 p-5 rounded-md">
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">NO</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Name</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Gmail</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Login Url</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Topic</td>
                                  <td className="p-3 max-lg:p-2 font-semibold text-white max-lg:text-sm">Access</td>
                                  <td className="text-transparent max-lg:p-2 font-semibold text-white max-lg:text-sm">Action</td>
                                  
                                </tr>
                                </thead>
                              <tbody>
                                <tr>
                                  <td className=" border-4 max-lg:text-sm  ">01</td>
                                  <td className=" border-4 max-lg:text-sm  ">Jack</td>
                                  <td className=" border-4 max-lg:text-sm  ">Fabien4240flavio@gmail.com</td>
                                  <td className=" border-4 max-lg:text-sm  ">CV</td>
                                  <td className="border-4 max-lg:text-sm  ">Storage</td>
                                  <td className="   border-2"> 
                                    <div className="flex flex-row max-lg:text-sm">
                                             
                                              <p className="">Dashboard</p>
                                    </div>
                                      
                                  </td>
                                  <td className="text-center flex flex-row">
                                      { OnEnable == true ? <FaToggleOn className="test" onClick={EnableData} style={{fontSize:"40px",color:"blue",display:`inline-block` }} /> : <FaToggleOff className="test" onClick={EnableData} style={{fontSize:"40px",color:"red",display:`inline-block`,transition:"all 0.5s " }} />  }
                                     <span> { OnEnable ? "ON" : "OFF" }  </span> 
                                       <Link className="test" href={"/sub_admin/4"}> <MdEditDocument className="test" onClick={EditData} style={{fontSize:"40px",color:"green",display:"inline-block"} } />  </Link> 
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
  