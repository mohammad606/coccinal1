'use client'
import Links from "@/app/componants/page1/nav/links";
import {useState} from "react";


const Nav = ()=>{

    const [show,setShow] = useState(false)

    const handleShow = ()=>{

        return show?setShow(false):setShow(true)
    }

    return (
        <div className='w-full h-[60px] flex flex-row justify-center items-center smm:justify-between'>
            <div className='w-1/6 mr-3'>
                <h1 className='text-sky-600'><img src='https://dc715.4shared.com/img/4paiaql1ku/s24/18ce534fbc0/Screenshot_2024-01-07_203036?async&rand=0.5997926237147382' alt='loding ..'/></h1>
            </div>
            <div className='w-4/6 smm:hidden h-full flex flex-row items-center justify-between'>
                 <Links/>
            </div>
            <div className='w-1/6 flex justify-end'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                     className='cursor-pointer'
                     viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>

                </svg>
                <svg className='hidden smm:block ml-5 cursor-pointer'
                     onClick={handleShow}
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                    <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
                </svg>
                <div className=' absolute ease-in-out duration-200 w-[200px] h-[400px] top-[60px]  bg-white !z-30 rounded-2xl p-4 flex flex-col justify-around shadow-2xl shadow-gray-500 '
                     style={show?{transform:'translate(0px, 0px)'}:{transform:'translate(0px, -500px)'}}>
                    <Links/>
                </div>
            </div>

        </div>
    )
}

export default Nav













