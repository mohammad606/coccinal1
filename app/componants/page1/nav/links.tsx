import Link from "next/link";


const Links =()=>{


    return (
        <>
            <div className='border-b-2 border-sky-400 hover:pb-3 ease-in-out duration-500'>
                <Link href='/' className=''>Home</Link>
            </div>
            <div className='hover:border-b-2 border-sky-400 hover:pb-2 ease-in-out duration-300'>
                <Link href='/' className=''>About Us</Link>
            </div>
            <div className='hover:border-b-2 border-sky-400 hover:pb-2 ease-in-out duration-300'>
                <Link href='/' className=''>Pages</Link>
            </div>
            <div className='hover:border-b-2 border-sky-400 hover:pb-2 ease-in-out duration-300'>
                <Link href='/' className=''>Shop</Link>
            </div>
            <div className='hover:border-b-2 border-sky-400 hover:pb-2 ease-in-out duration-300'>
                <Link href='/' className=''>Blog</Link>

            </div>
            <div className='hover:border-b-2 border-sky-400 hover:pb-2 ease-in-out duration-300'>
                <Link href='/' >Contact Us</Link>
            </div>
        </>
    )
}

export default Links