import React from 'react'

const Messages = () => {
  return (
    <>
    <div className="p-4 space-y-3">
                {/* Right side bubble (chat-end) */}
                <div className="flex justify-start">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs rounded-br-none">
                        Calm down, Faizan.
                    </div>
                </div>

                {/* Left side bubble (chat-start) */}
                <div className="flex justify-end">
                    <div className="bg-gray-300 text-black px-4 py-2 rounded-lg max-w-xs rounded-bl-none">
                        I’m completely calm!
                    </div>
                </div>
            </div>
    </>
  )
}

export default Messages