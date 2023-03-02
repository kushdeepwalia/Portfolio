import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { ImLink } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';
import Heading from '../common/heading/Heading.component';
import apiURL from '../../ApiLink'

export const fadeInAnimation = keyframes`
   from{
      transform: scale(0.80);
      transition: 0.5s ease-in-out;
   }
   to{
      transform: scale(1);
      transition: 0.5s ease-in-out;
   }
`

export const Overlay = styled.div`
   animation-name: ${fadeInAnimation};
   animation-duration: 0.5s; 
`

const Portfolio = (_props, ref) => {
   const [data, setData] = useState([]);

   function sortData(a, b) {
      if (a["position"] === b["position"])
         return 0;
      else {
         return a["position"] < b["position"] ? -1 : 1
      }
   }


   const fetchData = useCallback(async () => {
      const response = await (await fetch(apiURL + "/projects/")).json();
      setData(response.projects.sort(sortData));
   }, [])

   function checkURl(url = '') {
      if (url.search('github.com') !== -1) {
         return "Respository"
      }
      else {
         return "Project"
      }
   }

   useEffect(() => {
      fetchData();
   }, [fetchData])

   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Portfolio</Heading>
               <p>I have pursued several projects, self led projects & freelance work to explore & experiment with different technologies.....</p>
            </div>
            <div className='w-full h-max px-5'>
               <div style={{ columns: "3 250px", gap: "15px" }}>
                  {
                     data.map((item, index) => {
                        if (item.visibility === true)
                           return <div key={index} className='mb-4 relative group-one'>
                              <img alt={item.name} src={item.image} className='w-full h-auto' />
                              <Overlay className='w-full hidden group-one-hover:flex absolute justify-center bottom-0 h-full'>
                                 <div className='w-full flex justify-center items-center h-full bg-cardHover'>
                                    <div className='w-5/6 h-4/5 relative'>
                                       <div className='w-full h-full flex-col flex justify-center items-center'>
                                          <h3 className='font-bold'>{item.name}</h3>
                                          <p className='text-center mb-3 text-xs font-semibold text-headingCol px-12'>{item.desc.length > 55 ? item.desc.slice(0, item.desc.slice(0, 55).lastIndexOf(" ")) + "..." : item.desc}</p>
                                          <a href={item.url} target='_blank' className='flex group-two bg-white hover:bg-headingCol px-3 py-2 hover:py-1.5 items-center text-priCol' rel='noreferrer'>
                                             <span className='text-xs group-two-hover:text-white group-two-hover:text-sm font-semibold'>{checkURl(item.url)}</span>
                                             <ImLink className='ml-1 group-two-hover:text-white h-[80%]' />
                                          </a>
                                       </div>
                                       <div className='w-[50px] border-t-2 border-l-2 border-headingCol top-0 left-0 absolute h-[50px]'></div>
                                       <div className='w-[50px] border-b-2 border-r-2 border-headingCol bottom-0 right-0 absolute h-[50px]'></div>
                                    </div>
                                 </div>
                              </Overlay>
                           </div>
                        else return null;
                     })
                  }
               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Portfolio)