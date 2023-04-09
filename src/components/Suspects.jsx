import React from 'react'
import {BsThreeDotsVertical, BsFillPersonFill} from 'react-icons/bs'
import { data } from '../Data/data'
import Sidebar from './Sidebar';

const Suspects = () => {
  return (
		<Sidebar>
			<div className='bg-gray-200'>
				<div className='flex justify-between px-5 pt-4'>
					<h2 className='text-2xl'>Apprehensions</h2>
					<h2 className='text-2xl'>Welcome, Danny</h2>
				</div>
				<div className='p-4'>
					<div className='p-4 border rounded-lg bg-white'>
						<div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
							<span className='font-bold underline'>Name</span>
							<span className='sm:text-left text-right font-bold underline'>
								DOB
							</span>
							<span className='hidden md:grid font-bold underline'>
								Case Submitted
							</span>
							<span className='hidden sm:grid font-bold underline'>Status</span>
						</div>
						<ul>
							{data.map((order, id) => (
								<li
									key={id}
									className='bg-gray-50 hover:bg-gray-200 rounded-lg my-3 p-2 grid md:grid-cols-4 ms:grid-cols-3 grid-cols-4 items-center justify-between cursor-pointer'
								>
									<div className='flex items-center'>
										<div className='bg-red-500 p-3 rounded-lg'>
											<BsFillPersonFill className='text-black' />
										</div>
										<p className='pl-4'>
											{order.name.last + " " + order.name.first}
										</p>
									</div>
									<p className='text-gray-600 sm:text-left text-right'>
										{order.DOB}
									</p>
									<p className='hidden md:flex'>{order.date}</p>
									<div className='sm:flex hidden justify-between items-center'>
										<p>{order.status}</p>
									</div>
									<div className='md:hidden flex'>
										<BsThreeDotsVertical />
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Sidebar>
	);
}

export default Suspects