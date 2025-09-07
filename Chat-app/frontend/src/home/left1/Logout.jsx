import React from 'react'
import { MdOutlineLogout } from "react-icons/md";;
const Logout = () => {
  return (
    <>
    <div className=" bg-slate-950 text-white w-[4%] flex flex-col justify-end">
    <div className='p-3 align-bottom'>
            <form action="">
                <div className='flex space-x-3'>
                    
                    <button>
                        <MdOutlineLogout  className='text-4xl p-2 hover:bg-gray-600 rounded-lg duration-300' />
                    </button>
                    </div>
            </form>
            </div >

    </div>
    </>
  )
}

export default Logout