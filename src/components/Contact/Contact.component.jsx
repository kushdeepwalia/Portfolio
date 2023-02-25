import React, { forwardRef } from 'react'
import Heading from '../common/heading/Heading.component';

const Contact = ({ }, ref) => {
   return (
      <section ref={ref} className='h-full w-full py-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Contact</Heading>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5'>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Contact)