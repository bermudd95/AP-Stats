import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Suspects from "./components/Suspects";
import Apprehension from "./components/Apprehension";



ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<BrowserRouter>
			<Routes>
					<Route path='/'element={<App />} />
					<Route path='Suspects' element={<Suspects />} />
					<Route path='Apprehension' element={<Apprehension />} />
			</Routes>
		</BrowserRouter>
	</>
);
