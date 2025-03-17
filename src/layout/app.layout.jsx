import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'



const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen lg:px-10 lg:py-5 py-2 px-5'>
        <Header />
      <Outlet />
      </main>
       <div  className="p-10  text-center bg-gray-800 mt-10">Made By 💗 Rehan , Adnan & khwaja</div>
    </div>
  )
}

export default AppLayout