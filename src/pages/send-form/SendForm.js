import React from 'react'

export default function SendForm() {
    return (
        <div class="w-[75%] h-[88vh] flex flex-row items-center justify-center overflow-y-scroll scrollbar-none">
            <div class="flex flex-1 flex-col h-[75%] justify-start text-start">
                <h1 class="font-bold text-4xl">Send us a case</h1>
                <span></span>
            </div>
            <div class="flex flex-1 flex-col h-[75%] rounded-3xl bg-primary">
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <input type="text" class="input bg-white rounded-md h-10 w-40 indent-4 focus:outline-none focus:border-0" placeholder='First name' />
                    <input type="text" class="input bg-white rounded-md h-10 w-40 indent-4 focus:outline-none focus:border-0" placeholder='Last name' />
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <input type="tel" class="input bg-white rounded-md h-10 w-40 indent-4 focus:outline-none focus:border-0" placeholder='Phone number' />
                    <select class="select select-bordered bg-white rounded-md h-10 w-40 indent-4 focus:outline-none text-gray-400">
                        <option disabled selected>Service</option>
                    </select>
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-center space-x-2">
                    <button class="w-32 rounded-lg bg-tertiary px-4 h-10">Submit</button>
                </div>
            </div>
        </div>
    )
}
