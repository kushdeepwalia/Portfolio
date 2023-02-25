import React from 'react'
import "./Heading.style.css"

const Heading = ({ children }) => {
   return (
      <h2 className='heading'>{children}</h2>
   )
}

export default Heading