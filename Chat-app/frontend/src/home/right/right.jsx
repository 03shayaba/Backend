import React from 'react'
import Chatuser from './Chatuser'
import Message from './Message'
import Type from './Type'

const right = () => {
    return (
        <>
            <div className=' bg-slate-950 text-white w-[70%]'>


                <Chatuser></Chatuser>
                <div   className='my-1 flex-ankit overflow-y-auto' style={{maxHeight:"calc(84vh - 13vh)"}}>
                <Message></Message>
                </div>
                <Type></Type>
            </div>
        </>
    )
}

export default right