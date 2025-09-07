import React from 'react'
import Left from './home/left/left.jsx';
import Right from './home/right/right.jsx';
import Logout from './home/left1/Logout.jsx';
import Signup from './components/Signup.jsx';
const App = () => {
  return (
    <>
      <div className='flex h-screen'>
        <Logout></Logout>
        <Left></Left>
        <Right></Right>
     </div>

     {/* <Signup /> */}
    </>
  )
}

export default App