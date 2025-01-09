import React, { useState } from 'react'
import MobileFooter from '../../other/components/footer/MobileFooter'

export default function MobileSendForm({
    handleSubmit,
    firstName, setFirstName,
    lastName, setlastName,
    phone, setPhone,
    email, setEmail,
    service, setService,
    formSubmitted
}) {
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^(\+\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    return (
        <div className='flex sm:hidden flex-col min-h-[88vh] w-full overflow-y-scroll scrollbar-none'>
            <div className='flex flex-grow flex-col w-full min-h-[1000px] p-4'>
                {
                    (!formSubmitted) ?
                        <div className='flex flex-1 flex-grow flex-col w-full'>
                            <div className='text-start text-sm pb-4'>
                                <span>
                                    We are your trusted online denture repair service that specializes in repairing and restoring flippers, dentures, partials, orthopedic appliances, and relines. Whether your dentures are broken, cracked, or need cleaning and disinfection, we offer quick, reliable repairs to make them like new again. Simply send us your broken parts, and once we receive them, we’ll contact you to discuss the next steps. Don’t wait—get your dentures fixed today!
                                </span>
                            </div>
                            <div className='flex flex-col bg-primary h-[75%] w-full rounded-xl'>
                                <div class="flex flex-1 flex-col justify-start text-start space-y-2 rounded-t-xl pl-4 pr-4 pt-2">
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
                                        {
                                            [
                                                'Cracked Dentures or Missing Teeth',
                                                'New Teeth Insertion',
                                                'Partial Denture Repair',
                                                'Flipper or Temporary Teeth Repairs',
                                                'Mouth Guard',
                                                'Denture Cleaning'
                                            ].map(service => {
                                                return (
                                                    <option class="bg-white hover:bg-primary text-black" >{service}</option>
                                                );
                                            })
                                        }
                                    </select>
                                </div>
                                <div class="flex flex-[2] flex-row w-full items-center justify-evenly">
                                    <button class={`w-32 xl:w-60 rounded-lg bg-green-600 text-white px-4 h-10 xl:h-14 ${!(firstName && lastName && phone && email && service && EMAIL_REGEX.test(email) && PHONE_REGEX.test(phone)) ? 'opacity-50' : ''}`} disabled={!(firstName && lastName && phone && email && service && EMAIL_REGEX.test(email) && PHONE_REGEX.test(phone))} onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex  flex-col bg-primary min-h-[50%] w-full rounded-xl items-center justify-center p-2'>
                            <span>Thank you for submitting your information, we will reach out to you very soon!</span>
                        </div>
                }
            </div>
            <MobileFooter />
        </div>
    )
}
