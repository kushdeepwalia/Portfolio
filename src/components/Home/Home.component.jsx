import React, { forwardRef } from 'react'
import HeroBg from "../../images/hero-bg.jpg"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { IoLogoGithub } from "react-icons/io"
import { TfiLinkedin } from "react-icons/tfi"
import { FaFacebookF } from "react-icons/fa"
import TypewriterComponent from 'typewriter-effect'

const Home = (ref) => {
   return (
      <section className='w-full h-screen bg-cover' ref={ref} style={{ backgroundImage: `url(${HeroBg})`, backgroundPosition: 'top right' }}>
         <div className='w-full h-screen bg-white/50 pl-48'>
            <div className='w-full h-full p-5 flex flex-col justify-center'>
               <h2 className='text-7xl mb-4 text-headingCol'>Kushdeep Walia</h2>
               <h5 className='mb-10 text-3xl pl-1 font-semibold flex'>I'm&nbsp;<TypewriterComponent
                  onInit={(typewriter) => {
                     typewriter.typeString('Full Stack Web Developer')
                        .pauseFor(1000)
                        .deleteAll()
                        .pauseFor(500)
                        .typeString('Programmer')
                        .pauseFor(1000)
                        .deleteAll()
                        .pauseFor(500)
                        .typeString('Open Source Contributor')
                        .start();
                  }}
                  options={{
                     autoStart: true,
                     loop: true,
                     wrapperClassName: 'text-priCol',
                     cursorClassName: 'text-priCol'
                  }}
               />
               </h5>
               <div className='flex items-center justify-between w-1/4'>
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