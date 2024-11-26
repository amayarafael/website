import React, { useState } from 'react'
import { IoMdMenu as MenuIcon } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbDental } from "react-icons/tb";

export default function MobileMenu({ setSelectedPage }) {
    const [showMenu, setShowMenu] = useState(false);


    return (
        <div className='sm:hidden flex flex-1 flex-row justify-end items-center'>
            {/* Menu Button */}
            <div className='flex flex-grow items-center justify-center'>
                <TbDental className='w-[10%] max-w-10 h-auto ml-2' />
            </div>
            <MenuIcon className='w-[7%] max-w-10 h-auto mr-2 hover:cursor-pointer' onClick={() => {
                setShowMenu(!showMenu);
            }} />

            {/* Slide-out Menu */}
            <div className={`fixed top-0 right-0 flex flex-col items-center justify-center transition-all duration-500 h-[100lvh] overflow-hidden bg-white w-full ${showMenu ? 'left-0' : '-left-full'}`}>
                <div className='w-full h-[10%] flex flex-row justify-end items-center flex-grow-0'>
                    <MdClose className='w-[7%] h-auto hover:cursor-pointer mr-2 mt-2' onClick={() => {
                        setShowMenu(!showMenu);
                    }} />
                </div>
                <div className='w-full flex flex-grow flex-col justify-center items-center gap-14'>
                    <div className='w-full flex flex-row items-center justify-center'>
                        <TbDental className='w-[15%] h-auto' />
                    </div>
                    {
                        ['About', 'Portfolio', 'Services'].map(page => {
                            return (
                                <a className='text-2xl hover:cursor-pointer' onClick={() => {
                                    setSelectedPage(page);
                                    setShowMenu(!showMenu)
                                }}>
                                    {page}
                                </a>
                            )
                        })
                    }
                    <button onClick={() => {
                        setSelectedPage('Send-Form');
                        setShowMenu(!showMenu)
                    }} class="transition-all h-10 pl-5 pr-5 text-nowrap rounded-xl text-center justify-center text-white bg-green-600 hover:bg-green-700">Send a Case</button>
                    <div className='w-full flex flex-row gap-4 items-center justify-center'>
                        <AiOutlineYoutube className='w-[10%] h-auto hover:cursor-pointer' />
                        <AiOutlineYoutube className='w-[10%] h-auto hover:cursor-pointer' />
                        <AiOutlineYoutube className='w-[10%] h-auto hover:cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}
