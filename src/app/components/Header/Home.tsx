import React from 'react'
import NavBarHead from './NavBarHead'
import Header from './Header'

export default function Home() {
  return (
    <div className='w-full h-[1000px] lg:h-[800px] relative'>
      <div className='w-full h-[1000px] lg:h-[800px] bg-[url("/images/11.jpg")] bg-cover bg-no-repeat bg-center'></div>
      <div className=' absolute top-0 w-full h-[1000px] lg:h-[800px] bg-black opacity-50'></div>
      <div className='absolute top-0 w-full h-[1000px] lg:h-[800px]'>
      <NavBarHead/>
      <hr className=''/>
      <Header/>
      </div>
      
      
      </div>
  )
}
