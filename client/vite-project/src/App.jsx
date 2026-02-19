import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomePage />}></Route>
        <Route path='/admin/login' element={<AdminLoginPage />}></Route>
        <Route path='/api/complaints' element={<SubmitComplaintPage />}></Route>
        <Route path='/api/complaint' element={<AdminComplaintsPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
