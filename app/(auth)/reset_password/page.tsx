

export default function reset_password() {
    return (
      <div className="Customer_container_reset_password flex flex-col items-center justify-center bg-slate-200">
                <div className="bg-white w-1/2 h-96 max-w-lg rounded-xl shadow-lg p-4 max-sm:w-full max-md:h-5/6  max-sm:min-h-full">
                        <h1 className=" max-sm:text-lg max-md:w-full max-md:text-3xl  text-purple-600 rounded-md m-2 text-4xl text-center font-semibold h-14">Reset Password</h1>
                        <form className=" max-md:w-full max-md:m-0   max-lg:w-full    m-2 h-64">
                            <label className="max-lg:left-10 max-md:left-5 max-md:text-sm    font-black cursor-text relative bottom-1 left-20 text-purple-800 text-base" htmlFor="Email">Password :</label>
                            <div className="flex justify-center">
                                <input className=" max-lg:w-full max-md:w-full max-md:m-0   pl-3 text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="email" id="Email" /> 
                            </div> 
                        
                            <br/>
                            <label  className="max-lg:left-10 max-md:left-5  max-md:text-sm   font-black cursor-text relative bottom-1 left-20  text-purple-800 text-base" htmlFor="Password">Confirm Password :</label>
                            <div className="flex justify-center">
                                
                                <input  className="max-lg:w-full max-md:w-full max-md:m-0  pl-3 text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700"  type="password" id="Password" /> 
                            </div>
                    
                            <div className="flex justify-center  m-10 mt-5  max-md:text-sm  max-md:m-5 max-lg:m-5" >
                                <input className=" max-md:px  max-md:text-py   bg-purple-500 hover:bg-pink-600  font-black cursor-pointer border-b-4 border-violet-950 rounded-xl px-10 py-4 text-cyan-50 text-center   " type="submit" value="Reset Password" />
                            </div>
                            
                        </form>
                </div>
        </div>
    );
  }
  