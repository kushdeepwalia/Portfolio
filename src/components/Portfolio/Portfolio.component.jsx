import React, { forwardRef } from 'react'
import Heading from '../common/heading/Heading.component';

const Portfolio = (ref) => {
   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Portfolio</Heading>
               <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5'>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Portfolio)