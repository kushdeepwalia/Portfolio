import React from 'react'
import { forwardRef } from 'react';
import Heading from '../common/heading/Heading.component';
import aboutMyPic from "../../images/aboutMyPic.png"
import { BiChevronRight } from 'react-icons/bi';

const About = (_props, ref) => {
   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>About</Heading>
               <p>I’m a CSE B.Tech. graduate & a Tech Enthusiast who explored web development for over 3+ years to comprehend real world problems & alter then into functional solutions.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max max-[880px]:flex-col max-[880px]:items-center'>
               <div className='w-1/3 pr-7 max-[880px]:p-0 max-[880px]:mb-5 max-[880px]:w-full max-[880px]:h-[300px] max-[880px]:flex max-[880px]:justify-center'>
                  <img src={aboutMyPic} alt="kushdeepwalia" className='w-full h-auto max-[880px]:h-full max-[880px]:w-auto' />
               </div>
               <div className='w-2/3 max-[880px]:w-full'>
                  <h3 className='font-bold text-2xl text-headingCol mb-2 max-[880px]:text-center max-[530px]:text-lg max-[420px]:text-base'>MERN Stack Web Developer & Freelancer.</h3>
                  <p className='mb-3 text-justify'>I have pursued several collaborative projects, self led projects & freelance work to explore & experiment with different stack - MERN, LAMP, etc.</p>
                  <div className='w-full flex max-[605px]:justify-center'>
                     <ul className='mb-4 max-[605px]:mb-0 grid grid-cols-2 max-[605px]:grid-cols-1'>
                        <li className='flex items-center mb-4'>
                           <BiChevronRight size={28} className='text-priCol' />
                           <span className='mx-1 font-bold'>Birthday :</span>
                           <span>6 Sept 2000</span>
                        </li>
                        <li className='flex items-center mb-4'>
                           <BiChevronRight size={28} className='text-priCol' />
                           <span className='mx-1 font-bold'>Phone :</span>
                           <a href='tel:+919953607706' rel='noreferrer' style={{ fontFamily: 'inter' }} className='font-light' >+91-9953607706</a>
                        </li>
                        <li className='flex items-center mb-4'>
                           <BiChevronRight size={28} className='text-priCol' />
                           <span className='mx-1 font-bold'>City :</span>
                           <span className=''>New Delhi, Delhi, India</span>
                        </li>
                        <li className='flex items-center mb-4'>
                           <BiChevronRight size={28} className='text-priCol' />
                           <span className='mx-1 font-bold'>Degree :</span>
                           <span className=''>B.Tech - Computer Science</span>
                        </li>
                        <li className='flex items-center mb-4'>
                           <BiChevronRight size={28} className='text-priCol' />
                           <span className='mx-1 font-bold'>Email :</span>
                           <a href='mailto:kushdeepwalia@outlook.com' rel='noreferrer' className=''>kushdeepwalia@outlook.com</a>
                        </li>
                        <li className='flex items-center mb-4'>
                           <BiChevronRight size={28} className='text-priCol' />
                           <span className='mx-1 font-bold'>Freelance :</span>
                           <span className=''>Available</span>
                        </li>
                     </ul>
                  </div>
                  <p className='text-justify'>My other interests are geared towards organizing & managing tech events & connecting to people. I posses an ability to adapt in both self starting & collaborative environment while staying focused on achieving high quality results under strict deadlines.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(About)