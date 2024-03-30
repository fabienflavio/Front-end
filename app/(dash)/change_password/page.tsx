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
                  <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="   max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
                  <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="active_lien   max-md:p-1 max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
                  <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-md:p-1  max-xl:hidden  text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
                </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
                    
                    <div className="w-5/6 mt-2 max-md:w-full">


                    <div className="Customer_container_reset_password bg-slate-200 flex justify-center items-center">
                <div className="bg-white w-1/2 h-full max-w-lg rounded-xl shadow-lg p-4 max-sm:w-full max-md:h-5/6  max-sm:min-h-full ">
                        <h1 className=" max-sm:text-lg max-md:w-full max-md:text-3xl  text-purple-600 rounded-md m-2 text-4xl text-center font-semibold h-14">Reset Password</h1>
                        <form className=" max-md:w-full max-md:m-0   max-lg:w-full    m-2 h-64">
                            <label className="max-lg:left-10 max-md:left-5 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Old Password :</label>
                            <div className="flex justify-center">
                                <input className=" max-lg:w-full max-md:w-full max-md:m-0   pl-3 text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="email" id="Email" /> 
                            </div> 
                        
                            <br/>
                            <label className="max-lg:left-10 max-md:left-5 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Password :</label>
                            <div className="flex justify-center">
                                <input className=" max-lg:w-full max-md:w-full max-md:m-0   pl-3 text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="email" id="Email" /> 
                            </div> 
                        
                            <br/>
                            <label  className="max-lg:left-10 max-md:left-5  max-md:text-sm   font-black cursor-text relative bottom-1 left-20  text-purple-800 text-base" htmlFor="Password">Retype new Password :</label>
                            <div className="flex justify-center">
                                
                                <input  className="max-lg:w-full max-md:w-full max-md:m-0  pl-3 text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700"  type="password" id="Password" /> 
                            </div>
                    
                            <div className="flex justify-center  m-10 mt-5  max-md:text-sm  max-md:m-5 max-lg:m-5" >
                                <input className=" max-md:px  max-md:text-py   bg-purple-500 hover:bg-pink-600  font-black cursor-pointer border-b-4 border-violet-950 rounded-xl px-10 py-4 text-cyan-50 text-center   " type="submit" value="Change Password" />
                            </div>
                            
                        </form>
                </div>
        </div>
                    </div>

        </div>
   
      </>
    )
  }
  