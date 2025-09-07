import React from 'react'

const Users = () => {
  return (
    
         <div className="flex flex-col divide-y divide-gray-700">

            {/* User 1 */}
            <div className="flex space-x-4 px-8 py-4 hover:bg-gray-700 duration-300 cursor-pointer">
                <div className="relative inline-block">
                    <img
                        src="https://i.pravatar.cc/150?img=3"
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-2 border-white"
                    />
                    <span className="absolute top-0 right-0 block w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="font-semibold">Faizan</h1>
                    <span className="text-gray-400">faizan@gmail.com</span>
                </div>
            </div>



        </div>
    
  )
}

export default Users;