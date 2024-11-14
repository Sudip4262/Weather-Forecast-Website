import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import HomePage from "./components/HomePage";
import WeatherPage from "./components/WeatherPage";


export default function () {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<HomePage/>} ></Route>
          <Route exact path = '/WeatherPage' element={<WeatherPage/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}