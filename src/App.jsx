import React from 'react';
import Header from './components/Header';
import TableCards from './components/TableCards';
import BarChart from './components/BarChart';
import Apprehensions from './components/Apprehensions';
import Sidebar from './components/Sidebar';


function App() {
	return (
		<Sidebar>
			<div className=''>
				<Header />
				<TableCards />
				<div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
					<BarChart />
					<Apprehensions />
				</div>
			</div>
		</Sidebar>
	);
}

export default App
