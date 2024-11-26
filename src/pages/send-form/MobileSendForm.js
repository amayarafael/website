import React from 'react'
import MobileFooter from '../../other/components/footer/MobileFooter'

export default function MobileSendForm({
    handleSubmit,
    firstName, setFirstName,
    lastName, setlastName,
    phone, setPhone,
    email, setEmail,
    service, setService
}) {

    return (
        <div className='flex sm:hidden flex-col h-[88vh] w-full overflow-y-scroll scrollbar-none'>
            <div className='flex flex-col w-full min-h-full p-4'>
                <div className='flex flex-1 flex-col bg-primary min-h-[75%] w-full rounded-xl'>
                    <div class="flex flex-1 flex-col justify-start text-start space-y-2 rounded-t-xl pl-4 pt-2">
                        <h1 class="font-bold text-2xl">Send us a case</h1>
                        <span class="w-full text-sm">Fill out and Submit this form and we will reach out to you as soon as possible about working on your case.</span>
                    </div>
                    <div class="flex flex-[2] flex-row w-full items-center justify-evenly ">
                        <input type="text" class="input bg-white rounded-md h-10 w-[75%] indent-2 focus:outline-none focus:border-0" placeholder='First name' onChange={(e) => { setFirstName(e.target.value) }} />
                    </div>
                    <div class="flex flex-[2] flex-row w-full items-center justify-evenly ">
                        <input type="text" class="input bg-white rounded-md h-10 w-[75%] indent-2 focus:outline-none focus:border-0" placeholder='Last name' onChange={(e) => { setlastName(e.target.value) }} />
                    </div>
                    <div class="flex flex-[2] flex-row w-full items-center justify-evenly">
                        <input type="tel" class="input bg-white rounded-md h-10 w-[75%] indent-2 focus:outline-none focus:border-0" placeholder='Phone' onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                    <div class="flex flex-[2] flex-row w-full items-center justify-evenly">
                        <input type="email" class="input bg-white rounded-md h-10 w-[75%] indent-2 focus:outline-none focus:border-0" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div class="flex flex-[2] flex-row w-full items-center justify-evenly">
                        <select class={`select bg-white rounded-md h-10 w-[75%] indent-2 text-base focus:outline-none focus:border-0 ${!service ? 'text-gray-400' : 'text-black'}`} onChange={(e) => { setService(e.target.value) }}>
                            <option class="bg-white" disabled selected>Service</option>
                            <option class="bg-white hover:bg-primary text-black" >Service 1</option>
                            <option class="bg-white hover:bg-primary text-black" >Service 2</option>
                        </select>
                    </div>
                    <div class="flex flex-[2] flex-row w-full items-center justify-evenly">
                        <button class="w-32 xl:w-60 rounded-lg bg-green-600 text-white px-4 h-10 xl:h-14" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
            <MobileFooter />
        </div>
    )
}
