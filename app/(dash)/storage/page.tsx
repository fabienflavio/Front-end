'use client'
import React, { useState } from "react"
import Link from "next/link"
import { GrDashboard } from "react-icons/gr";
import { IoMenuSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
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

  function treeDot(){

  }

  const data1 = {
   
    datasets: [{
      label: 'My First Dataset',
      data: [ 50,50],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgba(185, 185, 185, 0.747)'
      
      ],
      hoverOffset: 5,
    }]
  };



const options1 = {
  cutout: '85%', 
  responsive: true,
  maintainAspectRatio: true,

  // Your custom chart options here
};





    return (
      <>
      {/* -------------------------- -------------------- */}
      {/* {/* --------------------------  -------------------- */}  
      {/* ---------------------------------------------- */}
    
        <div  className="max-md:flex-col  Customer_container_dashbord flex justify-between   max-2xl:justify-start   ">
            
              {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
        
            
            <div style={dataContainer_lien_widhtMenu}  className="w-1/6 max-md:p-2 max-md:m-0 max-md:inline-block  max-xl:w-20 max-xl:justify-start  max-2xl:w-96 Customer_lien_admin flex flex-col justify-around p-5 max-2xl:p-4   bg-slate-300 m-2 rounded-lg pb-60">
              <Link className="hidden max-xl:inline-block " href={""} >
                {
                  dataVisibleMenu == ""  ? <IoMenuSharp className="max-md:text-sm" onClick={visibleMenu} style={{
                    fontSize: 40,
                    }} /> :   <ImExit className="max-md:text-sm" style={{
                      fontSize:40,color:"white"
                    }} onClick={ExitMenu} />
                } 
              </Link>
              <Link href={"/dashboard"} style={{display:`${dataVisibleMenu}`, width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl ">  Dashbord</Link>
              <Link href={"/storage"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}}  className="max-xl:hidden  active_lien text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">  storage</Link>
              <Link href={"/create_file"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
              <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
              <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
              <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
            </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
            <div className=" w-4/6  ">
              <div className="flex flex-row justify-between">
                <div className="text-purple-700 font-black m-2">Table</div>
                <div className="text-purple-700 font-black m-2">Total : 05</div>
              </div>
               <table className="w-full bg-white ">
                <thead >
                  <tr className="bg-purple-700 border-b-4 bg-gradient-to-r from-purple-600 to-pink-600 p-5 rounded-md">
                    <td className="p-5 font-semibold text-white">Sr.No</td>
                    <td className="p-5 font-semibold text-white">Memory</td>
                    <td className="p-5 font-semibold text-white">Disk</td>
                    <td className="p-5 font-semibold text-white">Usage</td>
                    <td className="p-5 font-semibold text-white">Actions</td>
                  </tr>
                  </thead>
                <tbody>
                  <tr>
                    <td className="p-5">1</td>
                    <td className="p-5">2Go/3Go</td>
                    <td className="p-5">HHD</td>
                    <td className="p-5">75%</td>
                    <td className="p-5">
                      
                      

                        <div className="dropdown">
                            <button className="dropbtn"><HiOutlineDotsVertical onClick={treeDot} /> </button>
                            <div className="dropdown-content">
                              <a href=""className="w-full inline-block"> <FaEye className="inline-block" /> View</a> 
                              <a href="" className="w-full inline-block"> <FaEdit className="inline-block"/> Edit</a> 
                              <a href="" className="w-full inline-block"> <MdDeleteForever className="inline-block"/> Delete Edit</a>  
                            </div>
                          </div>

                    </td>
                  </tr>
                 
                </tbody>
               </table>
            </div>

            <div className="w-1/6 border-1 bg-gray-300">
            {/* <div className="container">
 
                
                <div className="ui-widgets">
                    <div className="ui-values">85%</div>
                    <div className="ui-labels">Java</div>
                </div>

                <div className="ui-widgets">
                    <div className="ui-values">50%</div>
                    <div className="ui-labels">HTML</div>
                </div>
                </div> */}

                    <div className="Customer_Doughnut-storage " >
                      <Doughnut  data={data1} options={options1}/>
                       
                    </div>
            </div>

        </div>
      </>
    )
  }
  