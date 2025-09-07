import React from 'react'

const Chatuser = () => {
    return (
        <>
            <div className='pl-5 pt-2 pb-3 h-[11vh] flex space-x-4 bg-gray-900 hover:bg-gray-600'>
            <div className=''>
                <div className="relative inline-block">
                    <img
                        src="https://i.pravatar.cc/150?img=3"
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-2 border-white"
                    />
                    <span className="absolute top-0 right-0 block w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
            </div>
                <div className='ml-3 p-2'>
                    <h1 className='text-xl' >Faizan</h1>
                    <span className='text-sm'>Online</span>

                </div>
            </div>

        </>
    )
}

export default Chatuser