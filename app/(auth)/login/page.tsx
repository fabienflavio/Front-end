import Link from "next/link";


export default function login() {
    return (
      <div className="Customer_big_container bg-slate-200 flex items-center justify-center p-10 max-sm:p-0">
           <div className="
           Customer_container
           bg-white 
           w-1/2 
           rounded-xl 
           shadow-lg 
           p-4
            border-indigo-500 
           max-w-lg
           max-md:h-5/6  
           max-sm:w-full
           max-sm:m-5  ...">
            <h1 className="Customer_h1 max-sm:text-x2 max-md:w-full max-md:text-3xl  text-purple-600 rounded-md m-2 text-4xl text-center font-semibold h-14">Admin Login</h1>
            <form className="Customer_form max-md:w-full max-md:m-0  max-lg:w-full h-64">
                <label className="Customer_label max-lg:left-2 max-md:left-2 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Email :</label>
                    <div className="flex justify-center">
                        <input className=" max-lg:w-full max-md:w-full max-md:m-0    text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="email" id="Email" /> 
                    </div> 
            
                    <br />

                <label  className="Customer_label max-lg:left-2 max-md:left-2  max-md:text-sm   font-black cursor-text relative bottom-1 left-20  text-purple-800 text-base" htmlFor="Password">Password :</label>
                    <div className="flex justify-center">
                        <input  className="max-lg:w-full max-md:w-full max-md:m-0   text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700"  type="password" id="Password" /> 
                    </div>

                <div className="flex justify-end mr-20 max-md:mr-5 max-lg:mr-5">
                    <Link href={"/lost_password"} className=" max-md:text-sm   text-purple-500 hover:text-pink-700 hover:underline  " >Lost password ?</Link>
                </div>
                <div className="flex justify-center  m-10 mt-10  max-md:text-sm  max-md:m-5 max-lg:m-5" >
                    <input value="Login" className=" max-md:px  max-md:text-py   bg-purple-500 hover:bg-pink-600  font-black cursor-pointer border-b-4 border-violet-950 rounded-xl px-10 py-4 text-cyan-50 text-center   " type="submit" />
                </div>
            
        </form>
    </div>
      </div>
    );
  }
  