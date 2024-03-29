import React, { forwardRef, useEffect, useState } from 'react'
import HeroBg from "../../images/hero-bg.jpg"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { IoLogoGithub } from "react-icons/io"
import { TfiLinkedin } from "react-icons/tfi"
import { FaFacebookF } from "react-icons/fa"
import TypewriterComponent from 'typewriter-effect'
import apiURL from '../../ApiLink'

const Home = (_props, ref) => {
   const [strings, setStrings] = useState([]);

   async function fetchData() {
      const response = await (await fetch(apiURL + "/positions/")).json();
      let str = [];
      console.log(await response.positions);
      await response.positions.forEach((item) => {
         str.push(item.field);
      })
      setStrings(str);
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <section className='w-full h-screen bg-cover' ref={ref} style={{ backgroundImage: `url(${HeroBg})`, backgroundPosition: 'top right' }}>
         <div className='w-full h-screen bg-white/50 pl-48 max-[992px]:pl-20 max-[550px]:pl-10 max-[440px]:pl-5'>
            <div className='w-full h-full p-5 flex flex-col justify-center'>
               <h2 className='text-7xl mb-4 text-headingCol max-[660px]:text-5xl max-[440px]:text-4xl'>Kushdeep Walia</h2>
               <h5 className='mb-10 text-3xl pl-1 font-semibold flex max-[530px]:text-xl'>I'm&nbsp;
                  <TypewriterComponent
                     options={{
                        strings: strings,
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'text-priCol',
                        cursorClassName: 'text-priCol'
                     }}
                  />
               </h5>
               <div className='flex items-center justify-between w-[250px]'>
                  <a href='https://www.instagram.com/kushdeepwalia/' target='_blank' rel="noreferrer">
                     <AiOutlineInstagram size={32} className='text-headingCol hover:text-priCol' />
                  </a>
                  <a href='https://www.github.com/kushdeepwalia/' target='_blank' rel="noreferrer">
                     <IoLogoGithub size={30} className='text-headingCol hover:text-priCol' />
                  </a>
                  <a href='https://www.linkedin.com/in/kushdeepwalia/' target='_blank' rel="noreferrer">
                     <TfiLinkedin size={27} className='text-headingCol hover:text-priCol' />
                  </a>
                  <a href='https://www.twitter.com/kushdeepwalia/' target='_blank' rel="noreferrer">
                     <AiOutlineTwitter size={32} className='text-headingCol hover:text-priCol' />
                  </a>
                  <a href='https://www.facebook.com/kushdeepwalia/' target='_blank' rel="noreferrer">
                     <FaFacebookF size={27} className='text-headingCol hover:text-priCol' />
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Home)