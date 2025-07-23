import React from "react"
import { Link } from "react-router-dom"
import "../styles/Verify.css"

function Verify() {
    return (
        <div className="hero-container bg-gradient-to-br from-blue-500 to-blue-900 h-[100vh] w-full flex flex-col items-center justify-center py-16">
            <p className="text-7xl w-[60%] text-left font-bold bg-gradient-to-b from-neutral-50 to-stone-300 bg-clip-text text-transparent mb-12">
                <Link to="/">OpenCred</Link>
            </p>

            <div className="verify flex justify-between items-center gap-4 w-[60%] border rounded-lg bg-stone-200 h-[64px] px-2 shadow-2xl">
                <input
                    type="text"
                    placeholder="Enter the Certificate Number here..."
                    className="flex-grow h-[48px] px-4 rounded-lg bg-white border outline-none text-sm text-black border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-300"
                />
                <button className="flex-shrink-0 h-[48px] w-[100px] text-white bg-gradient-to-br from-blue-500 to-blue-900 rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-800 transition-colors duration-300">
                    Verify
                </button>
            </div>
            <div className="certificate w-[60%] mt-12 bg-white rounded-lg shadow-2xl flex-col flex-wrap items-center justify-between p-24 hidden">
                    <p className="certificate-header text-black text-5xl py-5 text-center">Certificate of Appreciation</p>
                <div className="cert-info grid grid-cols-2 grid-rows-6 gap-2 w-[40%]">
                    <p className="cert-subheadings bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent font-bold text-lg">Awarded to: </p>
                    <p className="cert-info">Binood</p>
                    <p className="cert-subheadings bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent font-bold text-lg">For: </p>
                    <p className="cert-info">"Gareeb hai Gaddar nahi"</p>
                    <p className="cert-subheadings bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent font-bold text-lg">From: </p>
                    <p className="cert-info">Phulera Panchayat</p>
                    <p className="cert-subheadings bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent font-bold text-lg">On: </p>
                    <p className="cert-info">24th June 2025</p>
                    <p className="cert-subheadings bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent font-bold text-lg">Period: </p>
                    <p className="cert-info">1 Year</p>
                    <p className="cert-subheadings bg-gradient-to-b from-sky-400 to-sky-600 bg-clip-text text-transparent font-bold text-lg">Certificate Number: </p>
                    <p className="cert-info">9211 420 69 420</p>
                </div>
            </div>
        </div>
    )
}

export default Verify
