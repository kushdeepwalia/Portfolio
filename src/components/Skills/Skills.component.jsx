import React, { forwardRef } from 'react';
import Heading from '../common/heading/Heading.component';

const Skills = (_props, ref) => {
   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Skills</Heading>
               <p>I have diverse skill set that encompasses several programming languages & technologies. I always strive to stay on cutting edge technology.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5 max-[660px]:p-0'>
               <div className='w-full grid grid-cols-2 gap-x-5 gap-y-0 p-3 max-[660px]:p-0 max-[660px]:grid-cols-1'>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>HTML</span>
                        <span className='float-right'>85%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[85%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>CSS</span>
                        <span className='float-right'>70%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[70%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>JavaScript</span>
                        <span className='float-right'>80%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>PHP</span>
                        <span className='float-right'>75%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[75%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>

                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>Express JS</span>
                        <span className='float-right'>75%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[75%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>React JS</span>
                        <span className='float-right'>80%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>Node JS</span>
                        <span className='float-right'>75%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[75%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='m-0 uppercase block font-semibold text-headingCol'>
                        <span>Next JS</span>
                        <span className='float-right'>50%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[50%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Skills)