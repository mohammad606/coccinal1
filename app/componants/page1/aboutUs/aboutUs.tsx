


const AboutUs = ()=>{

    return (
        <div className='mt-4 mb-2 w-full h-[150px] bg-sky-500 rounded-2xl flex flex-row justify-between items-center p-8'>
            <div className='w-1/6 h-full'>
                <img className='rounded-2xl w-full h-full cursor-pointer' src='https://dc723.4shared.com/img/J5CEIQGDjq/s24/18ce5ffb630/logo2?async&rand=0.4866479628334248' alt='Looding ... '/>
            </div>
            <div className='w-3/6 flex flex-row justify-evenly text-white  msm:text-sm vsm:text-xs'>
                <div>
                    <p className='cursor-pointer hover:text-black'>Home</p>
                    <p className='cursor-pointer my-2 hover:text-black'>About Us</p>
                    <p className='cursor-pointer hover:text-black'>Content</p>
                </div>
                <div>
                    <p className='cursor-pointer hover:text-black'>Pages</p>
                    <p className='cursor-pointer my-2 hover:text-black'>Category</p>
                    <p className='cursor-pointer hover:text-black' >Contact</p>
                </div>
            </div>
            <div className='w-2/6 flex flex-col text-white justify-evenly pl-4  msm:text-sm vsm:text-xs'>
                <div className='flex cursor-pointer'>
                    <img width="20" height="25" src="https://img.icons8.com/ios-filled/50/22C3E6/phone.png" alt="phone"/>
                    <p className='ml-2 text-xs hover:text-black'>+20105854655</p>
                </div>
                <div className='flex cursor-pointer my-2'>
                    <img width="20" height="25" src="https://img.icons8.com/ios-filled/50/22C3E6/circled-envelope.png" alt="circled-envelope"/>
                    <p className='ml-2 text-xs hover:text-black'>coccinal@gmail.com</p>
                </div>
                <div className='flex cursor-pointer'>
                    <img width="20" height="25" src="https://img.icons8.com/ios-filled/50/22C3E6/marker.png" alt="marker"/>
                    <p className='ml-2 text-xs hover:text-black' >Egypt/Jiza/6 Octoper</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs










