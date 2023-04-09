import { Link } from 'react-router-dom'
import React from 'react'
import {GiEyeShield} from 'react-icons/gi'
import {RxDashboard} from 'react-icons/rx'
import {BsClipboardData, BsPersonFill} from 'react-icons/bs'


const Sidebar = ({children}) => {
  return (
    <div className='flex'>
        <div className='absolute h-[58%] w-20 p-4 bg-white flex flex-col justify-evenly'>
                <Link to='/'>
                    <div className='bg-red-500 text-white mt-10 p-3 rounded-lg inline-block'>
                        <GiEyeShield size={30}/>
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-300 w-full p-2'></span>
                <Link to='/'>
                    <div className='bg-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer text-white my-4 p-3 rounded-lg inline-block'>
                        <RxDashboard size={30}/>
                    </div>
                </Link>
                <Link to='/Suspects'>
                    <div className='bg-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer text-white my-4 p-3 rounded-lg inline-block'>
                        <BsPersonFill size={30}/>
                    </div>
                </Link>
                <Link to='/Apprehension'>
                    <div className='bg-gray-400 hover:bg-gray-100 hover:text-black cursor-pointer text-white my-4 p-3 rounded-lg inline-block'>
                        <BsClipboardData size={30}/>
                    </div>
                </Link>
        </div>
        <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar