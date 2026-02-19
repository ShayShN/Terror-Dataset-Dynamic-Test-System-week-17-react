import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import LoadData from './LoadData'
import SearchInput from './NavigationSearch'
import { getDataTerrorists } from "./api";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadData />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
