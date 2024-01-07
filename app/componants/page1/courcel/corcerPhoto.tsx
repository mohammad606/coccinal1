

const CorcerPhoto = ()=>{


    return (
        <div className='relative w-full h-[365px] mt-2 flex flex-row justify-center'>
            <div className='absolute w-full h-full rounded-2xl'>
                <img
                    className='rounded-3xl w-full h-full shadow-2xl shadow-gray-500'
                    src='https://dc715.4shared.com/img/OLkNGad9ge/s24/18ce5626c90/1__1_?async&rand=0.2266638519351738'
                    alt='loding ...'/>
            </div>
            <div className='w-1/12 !z-20 flex justify-center items-center'>
                <ul>
                    <li className='w-3 h-3 bg-white rounded-full my-3 cursor-pointer hover:border-2 border-sky-500'></li>
                    <li className='w-3 h-3 bg-white rounded-full border-2 border-sky-500 p-2 my-3 cursor-pointer'></li>
                    <li className='w-3 h-3 bg-white rounded-full my-3 cursor-pointer hover:border-2 border-sky-500'></li>
                </ul>
            </div>
            <div className='w-10/12 h-full !z-20 text-white flex flex-col justify-center'>
               <div className='mb-28'>
                   <h1 className='text-2xl'>Keep Your Body</h1>
                   <h1 className='text-2xl '>And Skin Shiny</h1>
               </div>
                <div>
                    <div className='group w-32 h-10 flex flex-row justify-center bg-white p-1 rounded-lg hover:border-2  border-sky-500 cursor-pointer'>
                        <p className='w-2/3 text-black text-[13px] text-center mt-1 group-hover:hidden ease-in-out duration-200'>show more</p>
                        <div className='w-1/3 bg-sky-500 rounded-lg flex justify-center items-center group-hover:w-full ease-in-out duration-300'>
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/12 h-full'>

            </div>
        </div>
    )
}

export default CorcerPhoto