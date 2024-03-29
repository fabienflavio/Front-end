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
import {Line,Doughnut,Bar} from  "react-chartjs-2"


import { IoSpeedometerSharp } from "react-icons/io5";
ChartJS.register(CategoryScale);
ChartJS.register(LinearScale);
ChartJS.register(PointElement);
ChartJS.register(LineElement );
ChartJS.register(BarElement);
ChartJS.register(ArcElement, Tooltip, Legend);




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
      data: [ 60,40],
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






  const data2 = {

    datasets: [{
      label: 'My Shop 1 ',
      data: [ 60,40],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgba(185, 185, 185, 0.747)'
      
      ],
      borderColor:["green","yellow"],
      hoverOffset: 5,
      circumference : 180,
      rotation : 270,
      
    }]
  }

const options2 = {
  cutout: '85%', 
  responsive: true,
  maintainAspectRatio: true,
};

/********************************* ********************************** ********************************** ********************************** */
/*






/********************************* ********************************** ********************************** ********************************** * /
*/


const totalData = data1.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
const data_used = data1.datasets[0].data[0]
const data_free = data1.datasets[0].data[1]



    return (
      <>

    
        <div  className=" w-full  m-0 max-md:flex-col  Customer_container_dashbord flex justify-between   max-2xl:justify-start   ">
            
              {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
        
            
            <div style={dataContainer_lien_widhtMenu}  className="max-md:p-2 max-md:m-0 max-md:inline-block w-1/6   max-xl:w-20 max-xl:justify-start  max-2xl:w-96 Customer_lien_admin flex flex-col justify-around p-5 max-2xl:p-4   bg-slate-300 m-2 rounded-lg pb-60">
              <Link className="hidden max-xl:inline-block " href={""} >
                {
                  dataVisibleMenu == ""  ? <IoMenuSharp className="max-md:text-sm" onClick={visibleMenu} style={{
                    fontSize: 40,
                    }} /> :   <ImExit className="max-md:text-sm" style={{
                      fontSize:40,color:"white"
                    }} onClick={ExitMenu} />
                } 
              </Link>
              <Link href={"/dashboard"} style={{display:`${dataVisibleMenu}`, width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1  max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl ">  Dashbord</Link>
              <Link href={"/storage"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}}  className="max-md:p-1    max-xl:hidden  active_lien text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">  storage</Link>
              <Link href={"/create_file"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1    max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
              <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-md:p-1     max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
              <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className=" max-md:p-1     max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
              <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-md:p-1   max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
            </div>

             {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
            <div className="max-md:w-full max-2xl:w-3/6 max-xl:w-4/6  max-md:h-full h-full  max-md:flex-col  w-4/6  ">
              <div className="flex flex-row justify-between">
                <div className="text-purple-700 font-black m-2">Table</div>
                <div className="text-purple-700 font-black m-2">Total : 05</div>
              </div>
               <table className="w-full bg-white ">
                <thead >
                  <tr className="bg-purple-700 border-b-4 bg-gradient-to-r from-purple-600 to-pink-600 p-5 rounded-md">
                    <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Sr.No</td>
                    <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Memory</td>
                    <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Disk</td>
                    <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Usage</td>
                    <td className="p-5 max-lg:p-2 font-semibold text-white max-lg:text-sm">Actions</td>
                  </tr>
                  </thead>
                <tbody>
                  <tr>
                    <td className="p-5 max-lg:text-sm  max-lg:p-2">1</td>
                    <td className="p-5 max-lg:text-sm  max-lg:p-2">2Go/3Go</td>
                    <td className="p-5 max-lg:text-sm  max-lg:p-2">HHD</td>
                    <td className="p-5 max-lg:text-sm  max-lg:p-2">75%</td>
                    <td className="p-5 max-lg:text-sm  max-lg:p-2">
                      
                      

                        <div className="dropdown">
                            <button className="dropbtn"><HiOutlineDotsVertical onClick={treeDot} /> </button>
                            <div className="dropdown-content max-md:p-1 max-md:text-sm ">
                              <a href=""className="w-full inline-block max-md:p-1 max-md:text-sm"> <FaEye className="inline-block" /> View</a> 
                              <a href="" className="w-full inline-block max-md:p-1 max-md:text-sm"> <FaEdit className="inline-block"/> Edit</a> 
                              <a href="" className="w-full inline-block max-md:p-1 max-md:text-sm"> <MdDeleteForever className="inline-block"/> Delete Edit</a>  
                            </div>
                          </div>

                    </td>
                  </tr>

               
                  
                 
                </tbody>
               </table>
            </div>

            <div className="max-md:w-full max-2xl:w-2/6 w-1/6  ">
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

                    <div className="Customer_Doughnut-storage" >
                      <Doughnut  data={data1} options={options1}/>
                      <span className="text-3xl max-lg:hidden text-purple-700 font-black relative bottom-36 left-4 mr-2">
                        {data_used} %
                       </span>
                       {/* <span> {data_free} </span>
                       <span>
                         {totalData} 
                       </span>
                        */}
                    </div>


                    <div className="flex flex-row justify-between w-full">
                      <div className="border-2  text-purple-700 p-3 w-full">
                        <p className="max-lg:text-xs">Total Storage</p>
                        <b  className="">16 Gb</b>
                      </div>
                      <div className="border-2  text-purple-700 p-3 w-full">
                        <p className="max-lg:text-xs">Used Storage</p>
                        <b  className="">8.2 Gb</b>
                      </div>
                    </div>


                    <div className="Customer_Doughnut-storage " >
                      <Doughnut  data={data2} options={options2}/>
                      <span className="text-5xl max-lg:hidden text-purple-700 font-black relative bottom-10 left-24 ">
                          <IoSpeedometerSharp />
                       </span>
                       {/* <span> {data_free} </span>
                       <span>
                         {totalData} 
                       </span>
                        */}
                    </div>
                  
                    <div className="flex flex-row justify-between w-full">
                      <div className="border-2  text-purple-700 p-3 w-full">
                        <p className="max-lg:text-xs">Downloads</p>
                        <b  className="">12,546</b>
                      </div>
                      <div className="border-2  text-purple-700 p-3 w-full">
                        <p className="max-lg:text-xs">Update</p>
                        <b  className="">1,458</b>
                      </div>
                    </div>
            </div>


        </div>
      </>
    )
  }
  