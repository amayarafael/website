import React, { Component, useState } from 'react';

export default function Header() {
    const [ page, setPage ] = useState('About');

    return (
        <div class="w-full h-[12vh] border-b-[2px] border-slate-400 flex flex-row justify-between fixed top-0">
            <div class="flex flex-1 items-center justify-start">
                <h1 class="pl-10 text-lg font-bold">Rafael Amaya</h1>
            </div>
            <div class="flex flex-1 items-center justify-end">
                {
                    ['About', 'Portfolio', 'Services'].map(section => {
                        return (
                            <a onClick={() => { setPage(section) }} class={`transition-all text-base pl-5 pr-5 hover:cursor-pointer ${page === section ? 'bg-gray-300 rounded-lg' : ' '}`}>{section}</a>
                        );
                    })
                }
                <div class="h-[50%] border-l-2 border-solid border-slate-400 pl-2 pr-2 ml-4"></div>
                <button class="transition-all h-10 pl-5 pr-5 mr-10 rounded-xl text-center justify-center bg-green-300 hover:bg-green-600">Send a Case</button>
            </div>
        </div>
    )
}
