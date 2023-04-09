import React from 'react'
import { data } from '../Data/data'
import { GiHandcuffs } from 'react-icons/gi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Sidebar from './Sidebar'

const Apprehension = () => {
  return (
		<Sidebar>
			<div className='bg-gray-200'>
				<div className='flex justify-between px-5 pt-4'>
					<h2 className='text-2xl'>Apprehensions</h2>
					<h2 className='text-2xl'>Welcome, Danny</h2>
				</div>
				<div className='p-4'>
					<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
						<div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer w-[100%]'>
							<span className=' font-bold underline'>Order</span>
							<span className='sm:text-left text-right font-bold underline'>
								Status
							</span>
							<span className='hidden md:grid font-bold underline'>
								Last Order
							</span>
							<span className='hidden sm:grid font-bold underline'>Method</span>
						</div>
						<ul>
							{data.map((order, id) => (
								<li
									key={id}
									className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between cursor-pointer'
								>
									<div className='flex'>
										<div className='bg-red-500 p-3 rounded-lg'>
											<GiHandcuffs className='text-black' />
										</div>
										<div className='pl-4'>
											<p className='text-green-600 font-bold'>
												${order.total.toLocaleString()}
											</p>
											<p className='text-gray-800 text-sm'>{order.name.last}</p>
										</div>
									</div>
									<p className='text-gray-600 sm:text-left text-right'>
										<span
											className={
												order.status == "Approved"
													? "bg-green-200 p-2 rounded-lg"
													: order.status == "Awaiting Approval"
													? "bg-yellow-300 p-2 rounded-lg"
													: "bg-red-600 p-2 rounded-lg text-black"
											}
										>
											{order.status}
										</span>
									</p>
									<p className='hidden md:flex'>{order.date}</p>
									<div className='sm:flex hidden justify-between items-center'>
										<p>{order.method}</p>
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

export default Apprehension