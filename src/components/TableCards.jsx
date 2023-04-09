import React from 'react'

const TableCards = () => {
  return (
    <div className='grid lg:grid-cols-3 lg:flex lg:flex-row gap-4 p-4'>
        <div className='lg:col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>
                    $1,231
                </p>
                <p className='text-gray-700'>
                    Inventory Results
                </p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>
                    -21%
                </span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>
                    $11,291.21
                </p>
                <p className='text-gray-700'>
                    Returns
                </p>
            </div>
            <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-red-700 text-lg'>
                    +18%
                </span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>
                    31
                </p>
                <p className='text-gray-700'>
                    Apprehensions
                </p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>
                    +11%
                </span>
            </p>
        </div>
    </div>
  )
}

export default TableCards