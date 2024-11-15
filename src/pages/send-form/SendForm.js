import React from 'react'

export default function SendForm() {
    return (
        <div class="w-[75%] h-[88vh] flex flex-row items-center justify-center overflow-y-scroll scrollbar-none">
            <div class="flex flex-1 flex-col h-[75%] justify-start text-start space-y-4">
                <h1 class="font-bold text-4xl">Send us a case</h1>
                <span class="w-[75%]">Fill out and Submit this form and we will reach out to you as soon as possible about working on your case.</span>
            </div>
            <div class="flex flex-1 flex-col h-[75%] rounded-3xl bg-primary">
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <input type="text" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='First name' />
                    <input type="text" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Last name' />
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <input type="tel" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Phone number' />
                    <input type="email" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Email' />
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <select class="select bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0 text-gray-400">
                        <option class="bg-white" disabled selected>Service</option>
                        <option class="bg-white hover:bg-primary text-black" >Service 1</option>
                        <option class="bg-white hover:bg-primary text-black" >Service 2</option>
                    </select>
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-center space-x-2">
                    <button class="w-32 xl:w-60 rounded-lg bg-tertiary px-4 h-10 xl:h-14">Submit</button>
                </div>
            </div>
        </div>
    )
}
