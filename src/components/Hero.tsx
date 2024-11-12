import React from "react"
import Navbar from "./Navbar"

function Hero () {
    return (
        <div id="hero" className='main-h-screen bg-no-repeat bg-[url(/profile-removebg-preview.png)] bg-left lg:bg-[15%] bg-cover ml-70'
        style={{backgroundSize: "35%"}}
        >
            <Navbar />
            <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
                <div className='hidden lg:block'></div>
                <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
                    <div className='ml-80'>
                        <p>I&apos;m</p>
                        <p>Shumaila</p>
                        <p>Sarfaraz</p>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Hero;