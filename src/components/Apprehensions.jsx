import React from "react";
import { data } from "../Data/data";
import { GiHandcuffs } from "react-icons/gi";

const Apprehensions = () => {
	return (
		<div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
			<h1>Apprehensions</h1>
			<ul>
				{data.map((order, id) => (
					<li
						key={id}
						className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
					>
						<div className='bg-red-500 rounded-lg p-3'>
							<GiHandcuffs className='text-black' />
						</div>
						<div className='pl-4'>
							<p className='text-gray-800 font-bold'>${order.total}</p>
							<p className='text-gray-400 text-sm'>{order.name.last}</p>
							<p className='lg:flex md:hidden text-sm'>{order.date}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Apprehensions;
