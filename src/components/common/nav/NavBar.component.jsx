import React from 'react'
import { HiHomeModern, HiOutlineHomeModern } from "react-icons/hi2"
import { HiLightBulb, HiOutlineLightBulb, HiOutlineDocument, HiDocumentText } from "react-icons/hi"
import { IoPersonOutline, IoPerson } from "react-icons/io5"
import { RiBookReadLine, RiBookReadFill, RiContactsBookLine, RiContactsBookFill } from "react-icons/ri"
import { MdCommentBank, MdOutlineCommentBank } from "react-icons/md"

const NavBar = ({ active, setActive }) => {
   const navItems = [
      {
         state: "Home",
         activeIcon: HiHomeModern,
         inActiveIcon: HiOutlineHomeModern
      },
      {
         state: "About",
         activeIcon: IoPerson,
         inActiveIcon: IoPersonOutline
      },
      {
         state: "Skills",
         activeIcon: HiLightBulb,
         inActiveIcon: HiOutlineLightBulb
      },
      {
         state: "Resume",
         activeIcon: HiDocumentText,
         inActiveIcon: HiOutlineDocument
      },
      {
         state: "Portfolio",
         activeIcon: RiBookReadFill,
         inActiveIcon: RiBookReadLine
      },
      {
         state: "Testimonial",
         activeIcon: MdCommentBank,
         inActiveIcon: MdOutlineCommentBank
      },
      {
         state: "Contact",
         activeIcon: RiContactsBookFill,
         inActiveIcon: RiContactsBookLine
      },

   ]

   return (
      <header className='flex flex-col justify-center fixed top-0 left-0 bottom-0 z-[9997] transition-all p-4 overflow-y-auto'>
         <nav>
            <ul className='flex flex-col py-3'>
               {
                  navItems.flatMap((item, index) => {
                     if (active === item.state) {
                        return <li key={index} className='mb-3 group flex cursor-pointer'>
                           <span className='flex p-4 items-center group rounded-full bg-priCol'>
                              <item.activeIcon size={24} className='text-white' />
                              <span className='ml-2 hidden font-semibold text-white text-lg group-hover:block'>{item.state}</span>
                           </span>
                        </li>
                     }
                     else {
                        return <li key={index} className='mb-3 group flex cursor-pointer'>
                           <span className='flex p-4 items-center rounded-full group-hover:bg-priCol group-hover:text-white bg-backGrey' onClick={() => setActive(false, item.state)}>
                              <item.inActiveIcon size={24} className='group-hover:bg-priCol group-hover:text-white' />
                              <span className='ml-2 hidden font-semibold text-white text-lg group-hover:block'>{item.state}</span>
                           </span>
                        </li>
                     }
                  })
               }
            </ul>
         </nav>
      </header>
   )
}

export default NavBar