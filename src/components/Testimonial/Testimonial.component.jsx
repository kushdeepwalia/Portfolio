import React, { forwardRef, useEffect, useState } from 'react'
import Heading from '../common/heading/Heading.component';
import aastha from "../../images/aastha.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.style.css'
import { FaQuoteLeft } from 'react-icons/fa'
import styled from 'styled-components';

export const ImageContainer = styled.div`
   margin-bottom: 10px;
   height: 100px;
   width: 100px;
   background-image: url(${props => props.image});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   border-radius: 100%;
`

const Testimonial = (_props, ref) => {
   const [data, setData] = useState([]);

   function returnItems() {
      if (window.innerWidth < 1150)
         return 2
      else if (window.innerWidth < 550) {
         return 1
      }
      else return 3
   }

   async function fetchData() {
      const url = 'http://localhost:5000/api/v1/testimonials/';
      const response = await (await fetch(url)).json();
      setData(response.testimonials);
   }

   useEffect(() => {
      fetchData();
   }, [])

   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Testimonial</Heading>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max pl-10'>
               <OwlCarousel
                  loop
                  slideBy={1}
                  margin={0}
                  className='owl-theme'
                  autoplay={true}
                  autoplaySpeed={true}
                  autoplayTimeout={2000}
                  autoplayHoverPause
                  dots={false}
                  items={returnItems()}
               >
                  {
                     data.map((item, index) => {
                        console.log(item)
                        return <div className='container' key={index}>
                           <div className="upperContainer">
                              <div className="invertedCommaContainer">
                                 <FaQuoteLeft size={26} className='invertedComma' />
                              </div>
                              <div className="upperSubContainer">
                                 <ImageContainer image={item.image} />
                                 <div className='namePostContainer'>
                                    <h2 className='name'>{item.authorName}</h2>
                                 </div>
                              </div>
                           </div>
                           <div className='lowerContainer'>
                              {item.message.length > 330 ? item.message.slice(0, 330) : item.message} {/* 330 characters only */}
                           </div>
                        </div>
                     })
                  }
               </OwlCarousel>
            </div>
         </div>
      </section >
   )
}

export default forwardRef(Testimonial)