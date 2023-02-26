import React, { forwardRef } from 'react'
import Heading from '../common/heading/Heading.component';
import './Resume.style.css'

const Resume = (_props, ref) => {
   return (
      <section ref={ref} className='h-full w-full pt-16 px-5'>
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Resume</Heading>
               <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5'>
               <div className='w-1/2 pl-3 pr-10'>
                  <div>
                     <h3 className='resume-title'>Summary</h3>
                     <div className='resume-item pb-0' >
                        <h4>Kushdeep Singh</h4>
                        <p className='italic text-justify'>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</p>
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
                        <p className='text-justify'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                     </div>
                     <div className="resume-item pb-0">
                        <h4>Senior High School (10+2)</h4>
                        <h5>2017 - 2018</h5>
                        <p className='italic'>S.S. Mota Singh Sr. Sec. Model School, Delhi, IN</p>
                        <p className='text-justify'>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                     </div>
                  </div>
               </div>
               <div className='w-1/2 pl-3 pr-10'>
                  <div>
                     <h3 className="resume-title">Professional Experience</h3>
                     <div className="resume-item">
                        <h4>IT Assessment Designer Intern</h4>
                        <h5>July 2022 to Jan 2022</h5>
                        <p className="italic">AON Cocubes, IN</p>
                        <ul>
                           <li>Developed responsive components using flex and media-queries in ReactJS and CSS3.</li>
                           <li>Basic knowledge about ReactJS Hooks, and Redux.</li>
                           <li>Implemented Styled Components in ReactJS.</li>
                        </ul>
                     </div>
                     <div className="resume-item">
                        <h4>Web Developer Intern</h4>
                        <h5>May 2021 to Nov 2021</h5>
                        <p className="italic">Plutus Web Solutions, IN</p>
                        <ul>
                           <li>Developed responsive components using flex and media-queries in ReactJS and CSS3.</li>
                           <li>Basic knowledge about ReactJS Hooks, and Redux.</li>
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