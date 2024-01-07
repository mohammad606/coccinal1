


const Document = ()=>{

    return(
        <div className='w-2/3 smm:w-full h-full flex flex-col justify-evenly'>

            <div className='border-l-[15px] border-sky-500 mt-2 ml-2'>
                 <h2 className='ml-4 text-2xl'>The Essence Of Health & Vitality In One Place</h2>
            </div>
            <div className='ml-2 my-4'>
                <section className='ml-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem deleniti, dolores, earum eos facere hic illum incidunt iusto molestiae
                    necessitatibus nostrum officia quasi quod sequi ullam ut, voluptatem voluptatibus?
                </section>
            </div>
            <div className='ml-2 flex flex-row justify-around lg:my-8 xl:my-12'>
                <div className='text-center ' ><p className='font-bold'>30K</p><p>Happy Clients</p></div>
                <div className='text-center'><p className='font-bold'>3500+</p><p>Clients satisfied</p></div>
                <div className='text-center'><p className='font-bold'>15o</p><p>Awards</p></div>
            </div>
            <div className='ml-10 mt-2'>

                    <div className='group  w-32 h-10 flex flex-row justify-center bg-sky-500 p-1 rounded-lg hover:border-2  border-sky-500 cursor-pointer'>
                        <p className='w-2/3 text-black text-[13px] text-center mt-1 group-hover:hidden ease-in-out duration-200'>About Us</p>
                        <div className='w-1/3 bg-white rounded-lg flex justify-center items-center group-hover:w-full ease-in-out duration-300'>
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </div>
                    </div>

            </div>


        </div>
    )
}

export default Document






















