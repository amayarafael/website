import React, { Component, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";

export default function Header({ setSelectedPage }) {
    const [ page, setPage ] = useState('About');

    return (
        <div class="w-full h-[12vh] border-b-[1px] border-slate-400 flex flex-row justify-between shadow-md">
            <div class="flex flex-1 items-center justify-start">
                <h1 class="pl-10 text-lg font-bold">Rafael Amaya - Dental Tech</h1>
            </div>
            <div class="flex flex-1 items-center justify-end">
                {
                    ['About', 'Portfolio', 'Services'].map(section => {
                        return (
                            <a onClick={() => { 
                                setPage(section);
                                setSelectedPage(section);
                            }} class={`transition-all text-base pl-5 pr-5 h-8 content-center hover:cursor-pointer rounded-lg ${page === section ? 'bg-primary' : ' '}`}>{section}</a>
                        );
                    })
                }
                <a class="flex flex-row h-10 shadow-md justify-evenly items-center border-gray-300 border-[1px] rounded-lg hover:cursor-pointer" href='tel:7868628440'>
                    <FaPhoneAlt class="ml-2 mr-2" size={15}/>
                    <span class="ml-2 mr-2 text-sm text-nowrap">(786) 862-8440</span>
                </a>
                <div class="h-[50%] border-l-2 border-solid border-slate-400 pl-2 pr-2 ml-4"></div>
                <button class="transition-all h-10 pl-5 pr-5 mr-10 text-nowrap rounded-xl text-center justify-center bg-tertiary hover:bg-tertiary-hover">Send a Case</button>
            </div>
        </div>
    )
}
