'use client'

import Link from "next/link"
import React from "react"


export default function dashboard( ) {


    return (
      <>
        <div className="Customer_container_dashbord flex justify-between">
            <div className="Customer_lien_admin flex flex-col justify-around p-5 w-1/6 bg-slate-300 m-2 rounded-lg pb-60">
              <Link href={"/dashboard"} className=" text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl "> Dashbord</Link>
              <Link href={"/storage"} className=" text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">storage</Link>
              <Link href={"/create_file"} className="text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Create File</Link>
              <Link href={"/sub_admin"} className="active_lien text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Sub Admin</Link>
              <Link href={"/change_password"} className="text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Change password</Link>
              <Link href={"/"} className="text-white p-5 text-base text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">Logout</Link>
            </div>
            <div className="w-3/6 bg-slate-200 m-4 rounded-lg">
           
            </div>
            <div className="w-2/6 bg-slate-100 m-4 rounded-lg"></div>
        </div>
      </>
    )
  }
  