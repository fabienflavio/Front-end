'use client'
import React, { useState } from "react"
import Link from "next/link"
import { GrDashboard } from "react-icons/gr";
import { IoMenuSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";

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
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'violet',
        tension: 0.1,
      },
    ],
  };


  const data1 = {
   
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
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


  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'category',
        labels: data.labels,
      },
    },
  };

  const totalData = data1.datasets[0].data.reduce((acc, curr) => acc + curr, 0);


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
              <Link href={"/dashboard"} style={{display:`${dataVisibleMenu}`, width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden active_lien text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl ">  Dashbord</Link>
              <Link href={"/storage"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}}  className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">  storage</Link>
              <Link href={"/create_file"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
              <Link href={"/sub_admin"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
              <Link href={"/change_password"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`,marginBottom: `${dataMarginMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
              <Link href={"/"} style={{display:`${dataVisibleMenu}`,width:`${dataWidhtMenu}`}} className="max-xl:hidden text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
            </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    

            <div className="max-md:w-full h-full  max-md:flex-col  max-2xl:w-full Customer_container_2  rounded-lg  ">
                  
                     {/* ---------------------------------------------- */}
                    {/* {/* ---------------------------------------------- */}  
                    {/* ---------------------------------------------- */}
    
                  
                  <div className="max-md:w-full max-2xl:w-5/6    flex flex-row justify-between bg-white p relative p-2 bottom-3">
                      <h1 className="max-lg:text-sm text-2xl text-purple-700 font-semibold">Storage</h1>
                        <select className=" p-2 rounded-md bg-purple-700 text-white">
                          <option value="" selected>Monthly</option>
                          <option value="">Weekly</option>
                          <option value="">Yearly</option>
                        </select>
                  </div>

                     {/* ---------------------------------------------- */}
                    {/* {/* ---------------------------------------------- */}  
                    {/* ---------------------------------------------- */}
          

                  <div className="max-md:w-full  Customer_Line_Chart max-2xl:w-4/5 ">
                    <Line data={data} options={options} />
                  </div>

                     {/* ---------------------------------------------- */}
                    {/* {/* ---------------------------------------------- */}  
                    {/* ---------------------------------------------- */}
    

                  <br /><br />
                  
                  <div className="max-md:w-full flex flex-row justify-between ">
                    <h1 className="text-purple-700 text-xl max-lg:text-sm">File Distribution by Type </h1>
                  </div>
                  <br />
                  <hr />
            
                      
               
                  <div className="max-md:w-5/6 skill-box-File flex flex-row justify-start  max-xl:w-96 max-lg:w-60">
                          <div className="skill-bar-color bg-purple-700 border-2" style={{width :`20%`}}>
                             <p> Video Files : 289 GB</p>
                          </div>
                        
                          <div className="skill-bar-color bg-red-600 border-2" style={{width :`30%`}}>
                             <p>Images</p>  
                          </div>
                          <div className="skill-bar-color bg-green-300 border-2" style={{width :`2%`}}>
                             <p>Zip Files</p>  
                          </div>
                          <div className="skill-bar-color bg-yellow-400 border-2" style={{width :`3%`}}>
                              <p>Audio Files</p>  
                          </div>
                          <div className="skill-bar-color bg-blue-600 border-2" style={{width :`25%`}}>
                               <p>PDFs</p>
                          </div>
                          <div className="skill-bar-color bg-green-700 border-2" style={{width :`4%`}}>
                             <p> Screadsheets</p>
                          </div>
                          <div className="skill-bar-color bg-pink-700 border-2" style={{width :`10%`}}>
                             <p>Text Files</p> 
                          </div>
                          <div className="skill-bar-color bg-gray-700 border-2" style={{width :`6%`}}>
                             <p> Everythings</p> 
                          </div>
                  </div>

                  <br />
                  <br />

                  <div className="max-md:w-screen  w-5/6 max-xl:flex max-xl:flex-row">
                    <div className=" flex flex-row justify-between mx-5 max-2xl:w-full  max-xl:justify-start max-xl:flex-col ">
                      <div className=" pb-2">
                            <p className="max-xl:text-xs ">Video Files</p>
                            <b className="text-violet-700 text-xs">289 GB</b>
                      </div>
                      <div className=" pb-2">
                            <p className="max-xl:text-xs ">Images</p>
                            <b className="text-violet-700 text-xs">102 GB</b>
                      
                      </div>
                      <div className=" pb-2">
                            <p className="max-xl:text-xs ">Zip Files</p>
                            <b className="text-violet-700 text-xs">102 GB</b>
                      
                      </div>
                      <div className=" pb-2">
                          <p className="max-xl:text-xs ">Audio Files</p>
                            <b className="text-violet-700 text-xs">102 GB</b>
                      
                      </div>
                   
                    </div >


                    <div className=" flex flex-row justify-between mx-5  max-2xl:w-full max-xl:justify-start max-xl:flex-col ">
                    <div className=" pb-2">
                            <p className="max-xl:text-xs "> PDFs </p>
                            <b className="text-violet-700 text-xs">102 GB</b>
                      
                      </div>
                      <div className=" pb-2">
                            <p className="max-xl:text-xs ">Spreadsheets</p>
                            <b className="text-violet-700 text-xs">102 GB</b>
                      
                      </div>
                      <div className=" pb-2">
                            <p className="max-xl:text-xs ">Text Files</p>
                            <b className="text-violet-700 text-xs">102 GB</b>
                      
                      </div>
                      <div className=" pb-2">
                            <p className="max-xl:text-xs">Everythings else</p>
                            <b className="text-violet-700 text-xs"> 102 GB</b>
                      
                      </div>
                      
                    </div>
                  </div>

            </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    

            
            <div className=" max-md:mt-60  max-xl:inline-block flex flex-col w-2/6 max-2xl:w-full rounded-lg p-2  ">
              <div className="max-xl:text-xs ">
                <div className="flex flex-row justify-between ">
                    <h1 className="max-lg:text-sm text-purple-700 text-xl">Data Age</h1>
                    <a href="" className="text-pink-700 hover:text-violet-700 hover:underline ">Dowload Data</a>
                </div>
                <br />
                <hr />
                <div>
                    <div className="Customer_Doughnut " style={{height: "200px"}}>
                      <Doughnut  data={data1} options={options1}/>
                        <span className="Total_Value">
                          {totalData} Go
                        </span>
                    </div>
                </div>


                 <div className="flex flex-row justify-between ">
             
                    <ul className="p-2 leading-10">
                      <li className=""> Less than 1 month :</li>
                      <li className="">1 to 3 months</li>
                      <li className=""> 3 months to 1 year  :</li>
                      <li className=""> Older than 1 yearnth :</li>    
                    </ul>
              
                    <ul className="p-2 leading-10 ">
                       <li className=""> <span>120 Go</span> </li>
                      <li className="">  <span>10 Go</span> </li>
                      <li className="">  <span>60 Go</span> </li>
                      <li className="">  <span>90 Go</span> </li>    
                   
                    </ul>
                    
                    <ul className="p-2 leading-10">
                      <li className=""> <span>10%</span> </li>
                      <li className="">  <span>40%</span> </li>
                      <li className="">  <span>60%</span> </li>
                      <li className="">  <span>90%</span> </li>    
                   
                       
                    </ul> 
               
                </div>

                 {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
              </div>
              <div className="  mt-5">
                <div className="flex flex-row justify-between ">
                    <h1 className="max-lg:text-sm text-purple-700 text-xl">File Distribution by Size </h1>
                    <a href="" className="max-lg:text-sm text-pink-700 hover:text-violet-700 hover:underline ">Dowload Data</a>
                </div>

                <br />
                <hr />

                <div className="flex flex-row justify-between ">
             
                    <ul className="p-2 leading-10">
                      <li > <span className="max-xl:text-xs">  Less than 1 month :</span> </li>
                      <li className=""> <span className="max-xl:text-xs"> 1 to 3 months</span></li>
                      <li className=""> <span className="max-xl:text-xs">3 months to 1 year  :</span> </li>
                      <li className=""> <span className="max-xl:text-xs">Older than 1 yearnth :</span> </li>    
                      <li className=""> <span className="max-xl:text-xs"> 1Go :</span> &rsaquo;</li>    
                    </ul>
              
                    <ul className="p-2 leading-10 max-lg:absolute max-lg:right-10">
                        <li className=""> <span className="max-xl:text-xs ">120 Go</span> </li>
                      <li className="">  <span className="max-xl:text-xs">10 Go</span> </li>
                      <li className="">  <span className="max-xl:text-xs">60 Go</span> </li>
                      <li className="">  <span className="max-xl:text-xs">90 Go</span> </li>    
                      <li className="">  <span  className="max-xl:text-xs">90 Go</span> </li>    
                    
                    </ul>
                    
                    <ul className="p-2">
                        <div className="skill-box">
                          <div className="skill-bar" style={{width :`90%`}}>
                             
                          </div>

                        </div>
                        
                        <div className="skill-box">
                          <div className="skill-bar" style={{width :`70%`}}>
                             
                          </div>

                        </div>
                        <div className="skill-box">
                          <div className="skill-bar" style={{width :`60%`}}>
                             
                          </div>

                        </div>
                        <div className="skill-box">
                          <div className="skill-bar" style={{width :`40%`}}>
                             
                          </div>

                        </div>
                        <div className="skill-box">
                          <div className="skill-bar" style={{width :`20%`}}>
                             
                          </div>

                        </div>
    
                        
                    </ul> 
                
                </div>

              </div>
            </div>


        </div>
      </>
    )
  }
  