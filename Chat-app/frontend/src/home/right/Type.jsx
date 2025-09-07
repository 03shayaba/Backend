import React from 'react'
import { IoMdSend } from "react-icons/io";

const Type = () => {
    return (
        <>


        <div className="flex h-8vh items-center space-x-3 w-full p-8 shadow-md rounded-lg ">
            <label className="border-[1px]  border-gray-300 rounded-full flex items-center gap-2 flex-grow p-2  focus-within:border-blue-500 transition-colors hover:bg-white">
                <input
                    type="text"
                    className="grow outline-none text-gray-900  placeholder-gray-700 pl-2 pr-1 bg-b "
                    placeholder="Type here"
                />
                 </label>
           
            <button className="text-3xl text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-full hover:bg-blue-100">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.542 60.542 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.542 60.542 0 0 0 3.478 2.405Z" />
                </svg> */}

                 <button className="w-6 h-6">
                             < IoMdSend />
                        </button>
            </button>
        </div>
            
                       

                    
        </>
    )
}

export default Type