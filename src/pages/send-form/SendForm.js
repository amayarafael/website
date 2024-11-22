import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Config from '../../constants/Config.json';

export default function SendForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");

    const handleSubmit = () => {
        emailjs.send(Config.emailJS.SERVICE_ID, Config.emailJS.TEMPLATE_ID, {
            firstName, lastName, phone, email, service
        }, { publicKey: Config.emailJS.PUBLIC_KEY }).then(() => {
            console.log('Request Submitted');
        }, (error) => {
            console.log('Request Submission Failed', error);
        })
    }

    return (
        <div class="w-[75%] h-[88vh] flex flex-row items-center justify-center overflow-y-scroll scrollbar-none">
            <div class="flex flex-1 flex-col h-[75%] justify-start text-start space-y-4">
                <h1 class="font-bold text-4xl">Send us a case</h1>
                <span class="w-[75%]">Fill out and Submit this form and we will reach out to you as soon as possible about working on your case.</span>
            </div>
            <div class="flex flex-1 flex-col h-[75%] rounded-3xl bg-primary">
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <input type="text" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='First name' onChange={(e) => { setFirstName(e.target.value) }} />
                    <input type="text" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Last name' onChange={(e) => { setlastName(e.target.value) }}/>
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <input type="tel" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Phone number' onChange={(e) => { setPhone(e.target.value) }}/>
                    <input type="email" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                    <select class={`select bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0 ${ !service ? 'text-gray-400' : 'text-black'}`} onChange={(e) => { setService(e.target.value) }}>
                        <option class="bg-white" disabled selected>Service</option>
                        <option class="bg-white hover:bg-primary text-black" >Service 1</option>
                        <option class="bg-white hover:bg-primary text-black" >Service 2</option>
                    </select>
                </div>
                <div class="flex flex-1 flex-row w-full items-center justify-center space-x-2">
                    <button class="w-32 xl:w-60 rounded-lg bg-green-600 text-white px-4 h-10 xl:h-14" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}
