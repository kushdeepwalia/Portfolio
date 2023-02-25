import React, { forwardRef } from 'react';
import Heading from '../common/heading/Heading.component';

const Skills = (_props, ref) => {
   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Skills</Heading>
               <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5'>
               <div className='w-1/2 p-3'>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>HTML</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>CSS</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>JavaScript</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>PHP</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
               </div>
               <div className='w-1/2 p-3'>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>React JS</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>Express JS</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>Node JS</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>
                  <div className='h-16 text-sm'>
                     <h4 className='py-2.5 m-0 uppercase block font-semibold text-headingCol'>
                        <span>Next JS</span>
                        <span className='float-right'>100%</span>
                     </h4>
                     <div className='rounded bg-backGrey'>
                        <div className='h-2.5 w-[80%] rounded transition-opacity bg-priCol'></div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Skills)