import React, { forwardRef, useState } from 'react'
import Heading from '../common/heading/Heading.component';
import { MdOutlineLocationOn, MdOutlinePhone } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export const Input = styled.input`
   width: 100%;
   height: 100%;
   outline: none;
   border: 1px solid var(--backGrey);
   padding-left: 10px;
   font-size: 18px;
`;

export const Textarea = styled.textarea`
   width: 100%;
   height: 100%;
   outline: none;
   border: 1px solid var(--backGrey);
   padding-left: 10px;
   padding-top: 10px;
   font-size: 18px;
   resize: none;
`;

const Contact = (_props, ref) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   function handleSubmit() {
      if (name === '' || email === '' || subject === '' || message === '') {
         toast('Enter all details before submitting', {
            autoClose: 2000
         })
      }
      else {
         let submitted = true;
         let query = {
            name,
            email,
            subject,
            message
         }
         console.log(query);
         if (submitted) {
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            toast("Submitted! You will be contacted soon!", {
               autoClose: 3000
            })
         }
      }
   }

   return (
      <section ref={ref} className='h-full w-full py-16 px-5'>
         <ToastContainer />
         <div className='h-full w-full px-3'>
            <div className='text-center pb-8'>
               <Heading>Contact</Heading>
            </div>
            <div className='flex flex-wrap justify-between w-full h-max px-5'>
               <div className='w-1/3'>
                  <div className='flex w-max group cursor-context-menu'>
                     <div className='bg-backGrey h-[50px] w-[50px] rounded-full p-2 group-hover:bg-priCol'>
                        <MdOutlineLocationOn className='text-priCol p-0.5 group-hover:text-white w-full h-full' />
                     </div>
                     <div className='ml-3'>
                        <h2 className='text-2xl font-bold text-priCol'>Location:</h2>
                        <span className='text-sm text-headingCol' style={{ fontFamily: 'inter' }}>Virender Nagar, Janakpuri<br /> New Delhi, Delhi, IN</span>
                     </div>
                  </div>
                  <div className='flex w-max group mb-9 mt-6 cursor-context-menu'>
                     <div className='bg-backGrey h-[50px] w-[50px] rounded-full p-2 group-hover:bg-priCol'>
                        <HiOutlineMail className='text-priCol p-0.5 group-hover:text-white w-full h-full' />
                     </div>
                     <div className='ml-3'>
                        <h2 className='text-2xl font-bold text-priCol'>Email:</h2>
                        <span className='text-sm text-headingCol' >
                           <a href="mailto:admin@kushdeepwalia.in" style={{ fontFamily: 'inter' }}>admin@kushdeepwalia.in</a>
                        </span>
                     </div>
                  </div>
                  <div className='flex w-max group cursor-context-menu'>
                     <div className='bg-backGrey h-[50px] w-[50px] rounded-full p-2 group-hover:bg-priCol'>
                        <MdOutlinePhone className='text-priCol p-0.5 group-hover:text-white w-full h-full' />
                     </div>
                     <div className='ml-3'>
                        <h2 className='text-2xl font-bold text-priCol'>Call:</h2>
                        <span className='text-sm text-headingCol' >
                           <a href="tel:+919953607706" style={{ fontFamily: 'inter' }}>+91-9953607706</a>
                        </span>
                     </div>
                  </div>
               </div>
               <div className='w-2/3 flex flex-col items-center'>
                  <div className='h-[55px] mb-5 w-full flex'>
                     <div className='w-1/2 h-full'>
                        <Input type="text" placeholder='Name' className='' name="Name" id="Name" value={name} onChange={(e) => setName(e.target.value)} />
                     </div>
                     <div className='w-1/2 h-full ml-5'>
                        <Input type="text" placeholder='Email' name="Email" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                     </div>
                  </div>
                  <div className='h-[55px] mb-5 w-full'>
                     <Input text='text' placeholder='Subject' name='Subject' id='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                  </div>
                  <div className='h-[150px] mb-5 w-full'>
                     <Textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></Textarea>
                  </div>
                  <div onClick={handleSubmit} className='h-[50px] w-[200px] rounded-3xl flex items-center justify-center font-semibold text-white text-xl cursor-pointer bg-priCol'>
                     Send Message
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default forwardRef(Contact)