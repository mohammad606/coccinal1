import Nav from "@/app/componants/page1/nav/nav";
import CorcerPhoto from "@/app/componants/page1/courcel/corcerPhoto";
import LinContact from "@/app/componants/page1/linContact/linContact";
import Document from "@/app/componants/page1/doc/document";
import ItemsImag from "@/app/componants/page1/image/itemsImag";
import Brands from "@/app/componants/page1/brands/brands";
import AboutUs from "@/app/componants/page1/aboutUs/aboutUs";


export default function Home() {
  return (
      <div className='container mx-auto vsm:px-2 msm:px-4  lg:px-10 xl:px-20 2xl:px-32'>
         <Nav/>
          <CorcerPhoto/>
          <LinContact/>
          <div className='w-full h-max mt-4 flex flex-row smm:flex-col msm:my-8'>
              <ItemsImag/>
              <Document/>
          </div>
          <Brands/>
          <AboutUs/>
      </div>
  )
}
