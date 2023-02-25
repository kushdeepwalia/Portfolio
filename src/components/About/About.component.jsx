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
               <p>Magnaaaaam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max'>
               <div className='w-1/3 pr-7'>
                  <img src={aboutMyPic} alt="kushdeepwalia" className='w-full h-auto' />
               </div>
               <div className='w-2/3'>
                  <h3 className='font-bold text-2xl text-headingCol mb-2'>MERN Stack Web Developer & Freelancer.</h3>
                  <p className='mb-3 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='flex w-full'>
                     <div className='w-1/2'>
                        <ul className='mb-4'>
                           <li className='flex items-center mb-4'>
                              <BiChevronRight size={28} className='text-priCol' />
                              <span className='mx-1 font-bold'>Birthday :</span>
                              <span>6 Sept 2000</span>
                           </li>
                           <li className='flex items-center mb-4'>
                              <BiChevronRight size={28} className='text-priCol' />
                              <span className='mx-1 font-bold'>Phone :</span>
                              <a href='tel:+919953607706' rel='noreferrer' style={{ fontFamily: 'inter' }} className='font-thin' >+91-9953607706</a>
                           </li>
                           <li className='flex items-center mb-4'>
                              <BiChevronRight size={28} className='text-priCol' />
                              <span className='mx-1 font-bold'>City :</span>
                              <span className=''>New Delhi, Delhi, India</span>
                           </li>
                        </ul>
                     </div>
                     <div className='w-1/2'>
                        <ul className='mb-4'>
                           <li className='flex items-center mb-4'>
                              <BiChevronRight size={28} className='text-priCol' />
                              <span className='mx-1 font-bold'>Degree :</span>
                              <span className=''>Bachelors</span>
                           </li>
                           <li className='flex items-center mb-4'>
                              <BiChevronRight size={28} className='text-priCol' />
                              <span className='mx-1 font-bold'>Email :</span>
                              <a href='mailto:admin@kushdeepwalia.in' rel='noreferrer' className=''>admin@kushdeepwalia.in</a>
                           </li>
                           <li className='flex items-center mb-4'>
                              <BiChevronRight size={28} className='text-priCol' />
                              <span className='mx-1 font-bold'>Freelance :</span>
                              <span className=''>Available</span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <p className='text-justify'> Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(About)