'use client'
import React from "react"
import Link from "next/link"
import { GrDashboard } from "react-icons/gr";

import { Chart as ChartJS, CategoryScale,LinearScale,PointElement,LineElement, ArcElement, Tooltip, Legend, BarElement   } from 'chart.js'; 

ChartJS.register(CategoryScale);
ChartJS.register(LinearScale);
ChartJS.register(PointElement);
ChartJS.register(LineElement );
ChartJS.register(BarElement);
ChartJS.register(ArcElement, Tooltip, Legend);


import {Line,Doughnut,Bar} from  "react-chartjs-2"
export default function dashboard( ) {
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
    
        <div className="Customer_container_dashbord flex justify-between   max-2xl:justify-start   ">
            
              {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    
        
            
            <div className="max-2xl:w-96 Customer_lien_admin flex flex-col justify-around p-5 w-1/6 max-2xl:p-4   bg-slate-300 m-2 rounded-lg pb-60">
            <Link href={"/dashboard"} className="active_lien text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl ">  Dashbord</Link>
              <Link href={"/storage"} className=" text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">  storage</Link>
              <Link href={"/create_file"} className="text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
              <Link href={"/sub_admin"} className=" text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
              <Link href={"/change_password"} className="text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change pass</Link>
              <Link href={"/"} className="text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
            </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    

            <div className="max-2xl:w-full Customer_container_2  rounded-lg h-auto  ">
                  
                     {/* ---------------------------------------------- */}
                    {/* {/* ---------------------------------------------- */}  
                    {/* ---------------------------------------------- */}
    
                  
                  <div className=" max-2xl:w-5/6    flex flex-row justify-between bg-white p relative p-2 bottom-3">
                      <h1 className=" text-2xl text-purple-700 font-semibold">Storage</h1>
                        <select className=" p-2 rounded-md bg-purple-700 text-white">
                          <option value="" selected>Monthly</option>
                          <option value="">Weekly</option>
                          <option value="">Yearly</option>
                        </select>
                  </div>

                     {/* ---------------------------------------------- */}
                    {/* {/* ---------------------------------------------- */}  
                    {/* ---------------------------------------------- */}
          

                  <div className="Customer_Line_Chart h-92 w-full max-2xl:w-4/5 ">
                    <Line data={data} options={options} />
                  </div>

                     {/* ---------------------------------------------- */}
                    {/* {/* ---------------------------------------------- */}  
                    {/* ---------------------------------------------- */}
    

                  <br /><br />
                  
                  <div className="flex flex-row justify-between mt-20 max-2xl:mt-32">
                    <h1 className="text-purple-700 text-xl">File Distribution by Type </h1>
                
                  </div>
                    <br />
                    <hr />
                      
               
                  <div className="skill-box-File flex flex-row justify-start  ">
                          <div className="skill-bar-color bg-purple-700 border-2" style={{width :`40%`}}>
                             Video Files : 289 GB
                          </div>
                        
                          <div className="skill-bar-color bg-red-600 border-2" style={{width :`10%`}}>
                             Images
                          </div>
                          <div className="skill-bar-color bg-green-300 border-2" style={{width :`2%`}}>
                             Zip Files
                          </div>
                          <div className="skill-bar-color bg-yellow-400 border-2" style={{width :`3%`}}>
                             Audio Files
                          </div>
                          <div className="skill-bar-color bg-blue-600 border-2" style={{width :`25%`}}>
                             PDFs
                          </div>
                          <div className="skill-bar-color bg-green-700 border-2" style={{width :`4%`}}>
                             Screadsheets
                          </div>
                          <div className="skill-bar-color bg-pink-700 border-2" style={{width :`10%`}}>
                             Text Files
                          </div>
                          <div className="skill-bar-color bg-gray-700 border-2" style={{width :`6%`}}>
                             Everythings
                          </div>
                  </div>

                  <div className="">
                    <div className=" flex flex-row justify-between mx-5 max-2xl:w-4/6  ">
                      <div >
                            <p>Video Files</p>
                            <b>289 GB</b>
                      </div>
                      <div>
                            <p>Images</p>
                            <b>102 GB</b>
                      
                      </div>
                      <div>
                            <p>Zip Files</p>
                            <b>102 GB</b>
                      
                      </div>
                      <div>
                          <p>Audio Files</p>
                            <b>102 GB</b>
                      
                      </div>
                   
                    </div>
                    <div className=" flex flex-row justify-between mx-5  max-2xl:w-4/6">
                    <div>
                            <p> PDFs </p>
                            <b>102 GB</b>
                      
                      </div>
                      <div>
                            <p>Spreadsheets</p>
                            <b>102 GB</b>
                      
                      </div>
                      <div>
                            <p>Text Files</p>
                            <b>102 GB</b>
                      
                      </div>
                      <div>
                            <p>Everythings else</p>
                            <b>102 GB</b>
                      
                      </div>
                      
                    </div>
                  </div>

            </div>

               {/* ---------------------------------------------- */}
              {/* {/* ---------------------------------------------- */}  
              {/* ---------------------------------------------- */}
    


            <div className="flex flex-col w-2/6 max-2xl:w-full rounded-lg p-2  ">
              <div className=" ">
                <div className="flex flex-row justify-between ">
                    <h1 className="text-purple-700 text-xl">Data Age</h1>
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


                 <div className="flex flex-row justify-between  ">
             
                    <ul className="p-2 leading-10">
                      <li className=""> Less than 1 month :</li>
                      <li className="">1 to 3 months</li>
                      <li className=""> 3 months to 1 year  :</li>
                      <li className=""> Older than 1 yearnth :</li>    
                    </ul>
              
                    <ul className="p-2 leading-10">
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
                    <h1 className="text-purple-700 text-xl">File Distribution by Size </h1>
                    <a href="" className="text-pink-700 hover:text-violet-700 hover:underline ">Dowload Data</a>
                </div>

                <br />
                <hr />

                <div className="flex flex-row justify-between ">
             
                    <ul className="p-2 leading-10">
                      <li className=""> Less than 1 month :</li>
                      <li className="">1 to 3 months</li>
                      <li className=""> 3 months to 1 year  :</li>
                      <li className=""> Older than 1 yearnth :</li>    
                      <li className=""> &rsaquo; 1Go :</li>    
                    </ul>
              
                    <ul className="p-2 leading-10">
                        <li className=""> <span>120 Go</span> </li>
                      <li className="">  <span>10 Go</span> </li>
                      <li className="">  <span>60 Go</span> </li>
                      <li className="">  <span>90 Go</span> </li>    
                      <li className="">  <span>90 Go</span> </li>    
                    
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
  