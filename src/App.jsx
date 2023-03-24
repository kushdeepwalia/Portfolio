// import Aos from 'aos'
// eslint-disable-next-line
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useWindowScroll } from 'react-use';
import About from './components/About/About.component';
import NavBar from './components/common/nav/NavBar.component'
import Contact from './components/Contact/Contact.component';
import Home from './components/Home/Home.component';
import Portfolio from './components/Portfolio/Portfolio.component';
import Resume from './components/Resume/Resume.component';
import Skills from './components/Skills/Skills.component';
import Testimonial from './components/Testimonial/Testimonial.component';

const App = () => {
   const [active, setActive] = useState("Home");
   // eslint-disable-next-line
   const { x, y } = useWindowScroll();
   const ref = {
      homeRef: useRef(null),
      aboutRef: useRef(null),
      skillRef: useRef(null),
      resumeRef: useRef(null),
      portfolioRef: useRef(null),
      testimonialRef: useRef(null),
      contactRef: useRef(null)
   }

   const updateOnClick = (newActive) => {
      setActive(newActive);
      let refPoint;
      switch (newActive) {
         case "Home": refPoint = ref.homeRef
            break;
         case "About": refPoint = ref.aboutRef
            break;
         case "Skills": refPoint = ref.skillRef
            break;
         case "Resume": refPoint = ref.resumeRef
            break;
         case "Portfolio": refPoint = ref.portfolioRef
            break;
         case "Testimonial": refPoint = ref.testimonialRef
            break;
         case "Contact": refPoint = ref.contactRef
            break;
         default:
            break;
      }
      window.scrollTo({ top: refPoint.current.offsetTop, behavior: 'smooth' })
   }

   const updateOnScroll = () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (window.scrollY === height) {
         if (active !== "Contact")
            setActive("Contact");
      }
      else if (ref.testimonialRef.current.offsetTop <= window.scrollY && ref.contactRef.current.offsetTop > window.scrollY) {
         if (active !== "Tesitmonial")
            setActive("Testimonial");
      }
      else if (ref.portfolioRef.current.offsetTop <= window.scrollY && ref.testimonialRef.current.offsetTop > window.scrollY) {
         if (active !== "Portfolio")
            setActive("Portfolio");
      }
      else if (ref.resumeRef.current.offsetTop <= window.scrollY && ref.portfolioRef.current.offsetTop > window.scrollY) {
         if (active !== "Resume")
            setActive("Resume");
      }
      else if (ref.skillRef.current.offsetTop <= window.scrollY && ref.resumeRef.current.offsetTop > window.scrollY) {
         if (active !== "Skills")
            setActive("Skills");
      }
      else if (ref.aboutRef.current.offsetTop <= window.scrollY && ref.skillRef.current.offsetTop > window.scrollY) {
         if (active !== "About")
            setActive("About");
      }
      else if (ref.homeRef.current.offsetTop <= window.scrollY && ref.aboutRef.current.offsetTop > window.scrollY) {
         if (active !== "Home")
            setActive("Home");
      }
   }

   const handleUpdate = (scrolled = Boolean, newActive = '') => {
      if (scrolled) {
         updateOnScroll();
      }
      else {
         updateOnClick(newActive);
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', () => {
         handleUpdate(true)
      })

      return () => window.removeEventListener('scroll')
   })

   return (
      <>
         <NavBar active={active} setActive={handleUpdate} />
         <Home ref={ref.homeRef} />
         <div className='w-full pl-24 pr-4 min-[1300px]:pl-44 min-[1300px]:pr-24 max-[992px]:p-0'>
            <About ref={ref.aboutRef} />
            <Skills ref={ref.skillRef} />
            <Resume ref={ref.resumeRef} />
            <Portfolio ref={ref.portfolioRef} />
            <Testimonial ref={ref.testimonialRef} />
            <Contact ref={ref.contactRef} />
         </div>
      </>
   )
}

export default App
