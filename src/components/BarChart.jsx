import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
);

const BarChart = () => {
    const [data, setData] = useState({
        datasets: [],
    });

    const [options, setOptions] = useState({})

    useEffect(() => {
        setData({
					labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
					datasets: [
						{
							label: "Sales $",
							data: [32012, 24390, 22311, 34200, 22860, 21971, 19233],
							borderColor: ["black"],
							backgroundColor: ["blue"],
						},
						{
							label: "Recoveries from Apprehensions $",
							data: [1200, 700, 548, 1100, 150, 284, 719],
							borderColor: ["black"],
							backgroundColor: ["green"],
						},
						{
							label: "Returns $",
							data: [929, 1891, 1430, 3120, 1720, 2108, 2831],
							borderColor: ["black"],
							backgroundColor: ["orange"],
						},
						{
							label: "Shoplift loss $",
							data: [310, 239, 732, 801, 526, 731, 438],
							borderColor: ["black"],
							backgroundColor: ["red"],
						},
					],
				});
        setOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Weekly Progress'
                }
            },
            maintainAspectRation: false,
            responsive: true
        })
    }, [])

  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
            <Bar data={data} options={options}/>
        </div>
    </>
  )
}

export default BarChart