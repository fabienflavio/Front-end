export default function lost_password() {
    return (
      <div className="Customer_container_lost_password flex min-h-screen flex-col items-center justify-center bg-slate-200 p-4 ">
        <div className="bg-white w-4/5 h-80 max-w-lg rounded-xl shadow-lg p-4 max-sm:w-full">
            <form >
              
              <h5 className="max-sm:text-sm text-center font-black cursor-text relative bottom-1  text-purple-800 text-base">Verify your Account</h5>
              <br />
                        
              <p className="text-center max-sm:text-xs">We send a text message to ********79 with a code</p>
              <br />
              <hr />
              <br />
                        
              <label className="max-sm:text-sm  left-2 font-black cursor-text relative bottom-1  text-purple-800 text-base" htmlFor="Email">Enter verification code :</label>
                        
              <div className="flex justify-center  max-sm:flex-col">
                <input className="max-sm:text-sm  max-sm:w-full pl-3 mt-2 font-semibold text-white pointer-events-auto rounded-xl h-14 w-3/4 bg-gradient-to-r from-purple-700 to-pink-700" type="email" id="Email" /> 
                <input  value="Continue" className="max-sm:text-sm   m-2 text-white hover:bg-pink-500 bg-purple-500  cursor-pointer px-5 py-4 rounded-md " type="submit" />
              </div>
                        
              <div className="flex justify-end  max-md:mr-5 max-lg:mr-5">
                <a href="" className="max-sm:text-sm  max-md:text-sm   text-purple-500 hover:text-pink-700 hover:underline  " >didn't get the code ?</a>
              </div>
              
            </form>
        </div>
      </div>
    )
  }