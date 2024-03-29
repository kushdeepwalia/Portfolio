import React, { forwardRef } from 'react'
import Heading from '../common/heading/Heading.component';
import './Resume.style.css'

const Resume = (_props, ref) => {
   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Resume</Heading>
               <p>I am an enthusiastic applicant who is excited to contribute my skills & expertise to the success of organization & with opportunity of growth.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5 max-[660px]:flex-col'>
               <div className='w-1/2 pl-3 pr-10 max-[660px]:p-0 max-[660px]:w-full'>
                  <div>
                     <h3 className='resume-title'>Summary</h3>
                     <div className='resume-item pb-0' >
                        <h4>Kushdeep Singh</h4>
                        <p className='italic text-justify'>I’m a CSE B.Tech. graduate & a Tech Enthusiast who explored web development for over 3+ years to comprehend real world problems & alter then into functional solutions.</p>
                        <ul>
                           <li>New Delhi, Delhi, India</li>
                           <li><a href='tel:+919953607706' style={{ fontFamily: 'inter' }} className='font-light' rel='noreferrer' target='_blank'>+91-9953607706</a></li>
                           <li><a href='mailto:admin@kushdeepwalia.in' rel='noreferrer' target='_blank'>admin@kushdeepwalia.in</a></li>
                        </ul>
                     </div>
                  </div>
                  <div>
                     <h3 className="resume-title">Education</h3>
                     <div className="resume-item">
                        <h4>Bachelors of Technology</h4>
                        <h5>2018 - 2022</h5>
                        <p className='italic'>Guru Tegh Bahadur Institute of Technology, Delhi, IN</p>
                        <p className='text-justify'>Scored 8.1 CGPA. Served as Management Lead of GDSC GTBIT Society for tenure 2020-21 under which I’ve organized 10+ events. Facilitated Google Cloud Program (GCP) in 2021.</p>
                     </div>
                     <div className="resume-item pb-0">
                        <h4>Senior Secondary (10+2)</h4>
                        <h5>2017 - 2018</h5>
                        <p className='italic'>S.S. Mota Singh Sr. Sec. Model School, Delhi, IN</p>
                        <p className='text-justify'>Scored 85% in Non Medical Stream</p>
                     </div>
                  </div>
               </div>
               <div className='w-1/2 pl-3 pr-10  max-[660px]:p-0 max-[660px]:w-full'>
                  <div>
                     <h3 className="resume-title">Professional Experience</h3>
                     <div className="resume-item">
                        <h4>IT Assessment Designer Intern</h4>
                        <h5>July 2022 to Jan 2023</h5>
                        <p className="italic">AON Cocubes, IN</p>
                        <ul>
                           <li>Completed 10+ clients deliveries of creating assessments for IT branch.</li>
                           <li>Analysed Question banks based on quality & difficulty of question.</li>
                        </ul>
                     </div>
                     <div className="resume-item">
                        <h4>Web Developer Intern</h4>
                        <h5>May 2021 to Nov 2021</h5>
                        <p className="italic">Plutus Web Solutions, IN</p>
                        <ul>
                           <li>Developed responsive components using flex and media-queries in ReactJS and CSS3.</li>
                           <li>Implemented Styled Components in ReactJS.</li>
                        </ul>
                     </div>
                     <div className="resume-item pb-0">
                        <h4>Web Developer Trainee</h4>
                        <h5>June 2020 to July 2020</h5>
                        <p className="italic">Techexplica, IN</p>
                        <ul>
                           <li>Gained knowledge about HTML5, CSS3, JavaScript, PHP, and MySQL.</li>
                           <li>Developed a non-responsive project “Expense Manager” under my Mentor, Mr. Sanjay Upadhay.</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Resume)