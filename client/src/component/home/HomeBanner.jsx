import React, { useEffect, useState } from 'react'
import '../../style/homeStyle/homebanner.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactImg from '../../Images/slider-1.jpg'
import VueImg from '../../Images/slider-2.jpg'
import AngularImg from '../../Images/slider-3.jpg'
import {CCarousel, CCarouselItem, CImage, } from '@coreui/react'

const HomeBanner = () => {
  const [homebanner,setHomeBanner]=useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-homepage-banner", {
          method: "GET",
          headers: {
            Authorization: `Bearer `,
          },
        });
        const data = await response.json();
        setHomeBanner(data.image)
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="banner_cantainer">
         <div className="binner_img">
            <div className='binner'>

            </div>
         </div>
      </div>
    </div>
  )
}

export default HomeBanner
