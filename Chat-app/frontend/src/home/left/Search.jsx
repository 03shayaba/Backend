import React from 'react'
import { IoMdSearch } from "react-icons/io";
const Search = () => {
    return (
        <div className='h-[10vh]'>
        <div className='px-6 py-4 cursor-pointer'>
        <form action="">
            <div className='flex space-x-3'>
                <label className='border-[1px] border-gray-700 rounded-lg flex items-center gap-2 w-[80%] ml-1 mr-1'>
                    <input type="text" className='grow outline-none ml-3' placeholder='Search' />
                    <i classN="fa-light fa-magnifying-glass"></i>

                </label>
                <button>
                    <IoMdSearch className='text-4xl p-2 hover:bg-gray-600 rounded-full duration-300' />
                </button>
                </div>
        </form>
        </div >
        </div>
    )
}

export default Search