import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Verify from "./pages/Verify.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </>
  )
}

export default App
