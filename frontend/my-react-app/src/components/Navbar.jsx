import React from 'react';
import { FaUniversity } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    const navItems = [
        {id:1, text:"Bank Comparison", url:"/bank-comparison"},
        {id:2, text:"Budgeting Tools", url:"/budgeting-tools"},
        {id:3, text:"Currency Calculator", url:"/currency-calculator"},
    ];
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(){
        setIsOpen(!isOpen);
    }
  return (
   <header className="bg-white w-[100%] h-[100px] flex  items-center  shrink-0 justify-between relative">
        <div >
        <div className="flex items-center gap-2">
        <FaUniversity  className="text-[#2563EB] w-[32px] h-[32px] ml-6"/>
        <h2 className="text-xl font-bold xl:mr-80">cashTip</h2>
        <nav className="hidden xl:block"><ul className="flex justify-between items-center gap-20 text-[#4B5563]">{navItems.map(item=>(<li key={item.id}><Link to={item.url} className=" hover:border-b-2 hover:border-b-[#2563EB]">{item.text}</Link></li>))}</ul></nav>
        <div className="hidden xl:visible xl:flex xl:items-center xl:justify-between xl:gap-6 xl:ml-64">
            <button to="/signIn" className="text-[#4B5563] hover:border-b-2 hover:border-b-[#2563EB]">Sign In</button>
            <button to="/register" className="px-4 py-2 bg-[#2563EB] text-white rounded hover:opacity-90">Register</button>
        </div>
        </div>
        </div>
        <button className="block xl:hidden"><RxHamburgerMenu className="text-[#2563EB] w-[32px] h-[32px] mr-3"onClick={()=>handleClick()}/></button>
        {isOpen && <ul className="flex flex-col gap-8 absolute top-20 right-0 bg-white rounded-[12px] px-8 py-6">{navItems.map(item=>(<li key={item.id}><Link to={item.url} className="  text-[#4B5563] ">{item.text}</Link></li>))}
        <button to="/signIn" className=" text-[#4B5563] ">Sign In</button>
        <button to="/register" className=" text-[#4B5563]">Register</button>
        </ul>}
       
   </header>
  )
}

export default Navbar