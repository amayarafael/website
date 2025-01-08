import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import Config from '../../constants/Config.json';
import MobileSendForm from './MobileSendForm';
import Footer from '../../other/components/footer/Footer';

export default function SendForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = () => {
        emailjs.send(Config.emailJS.SERVICE_ID, Config.emailJS.TEMPLATE_ID, {
            firstName, lastName, phone, email, service
        }, { publicKey: Config.emailJS.PUBLIC_KEY }).then(() => {
            console.log('Request Submitted');
            setFormSubmitted(true);
        }, (error) => {
            console.log('Request Submission Failed', error);
        })
    }

    return (
        <>

            <div class="hidden sm:flex w-full h-[88vh] flex-col items-center justify-center overflow-y-scroll scrollbar-none">
                {
                    (!formSubmitted) ?
                        <div className='flex w-full h-[100%] flex-col'>
                            <div className='flex w-full min-h-[100%] items-center justify-center'>
                                <div class="flex flex-1 flex-col h-[100%] justify-start text-start space-y-4 pt-[5%]">
                                    <h1 class="font-bold text-4xl ml-[5%]">Send us a case</h1>
                                    <span class="w-[75%] ml-[5%]">Fill out and Submit this form and we will reach out to you as soon as possible about working on your case.</span>
                                </div>
                                <div class="flex flex-1 flex-col h-[75%] rounded-3xl mx-4 bg-primary">
                                    <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                                        <input type="text" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='First name' onChange={(e) => { setFirstName(e.target.value) }} />
                                        <input type="text" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Last name' onChange={(e) => { setlastName(e.target.value) }} />
                                    </div>
                                    <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                                        <input type="tel" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Phone number' onChange={(e) => { setPhone(e.target.value) }} />
                                        <input type="email" class="input bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div class="flex flex-1 flex-row w-full items-center justify-evenly space-x-4">
                                        <select class={`select bg-white rounded-md h-10 w-40 xl:w-60 indent-4 focus:outline-none focus:border-0 ${!service ? 'text-gray-400' : 'text-black'}`} onChange={(e) => { setService(e.target.value) }}>
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
                                    <div class="flex flex-1 flex-row w-full items-center justify-center space-x-2">
                                        <button class="w-32 xl:w-60 rounded-lg bg-green-600 text-white px-4 h-10 xl:h-14" onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                            <Footer />
                        </div>
                        :
                        <div className='flex w-full h-[100%] flex-grow flex-col'>
                            <div className='flex flex-col w-full min-h-[100%] items-center justify-center'>
                                <div className='flex w-[50%] h-[75%] flex-col bg-primary min-h-[50%] rounded-xl items-center justify-center p-6'>
                                    <span>Thank you for submitting your information, we will reach out to you very soon!</span>
                                </div>
                            </div>

                            <Footer />
                        </div>
                }

            </div>
            <MobileSendForm
                handleSubmit={handleSubmit}
                firstName={firstName} setFirstName={setFirstName}
                lastName={lastName} setlastName={setlastName}
                phone={phone} setPhone={setPhone}
                email={email} setEmail={setEmail}
                service={service} setService={setService}
                formSubmitted={formSubmitted}
            />
        </>
    )
}
