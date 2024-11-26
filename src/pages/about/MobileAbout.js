import React from 'react'
import denturesImg from '../../img/FullTeethSet.jpg'
import { FaCircleNodes } from "react-icons/fa6";
import { FaCheck, FaFingerprint, FaTrophy } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import MobileFooter from '../../other/components/footer/MobileFooter';

export default function MobileAbout() {
    return (
        <div className='flex sm:hidden flex-col h-[88vh] overflow-y-scroll scrollbar-none'>
            <div className='w-full flex flex-col flex-grow-0'>
                <img src={denturesImg} class='object-cover h-auto w-full' />
            </div>
            <div class="flex w-full flex-grow min-h-[50%] flex-col justify-center items-center ">
                <h1 class='text-lg font-bold'>Our Mission</h1>
                <span class='px-6 overflow-hidden'>Our mission is to enhance smiles and improve oral health by crafting precision dental restorations that blend seamlessly with natural teeth, ensuring both functionality and aesthetics.</span>
            </div>
            <div className='flex flex-grow w-full flex-col '>
                <div className='flex flex-col min-h-[300px] w-full items-center justify-center flex-grow'>
                    <FaCircleNodes className='w-[50px] h-auto' />
                    <h1 className='text-lg py-2 font-bold'>Comprehensive Services</h1>
                    <ul class={`text-start text-sm pl-[25px]`}>
                        <li class='flex flex-row items-center justify-start mb-2'><GoDotFill className='w-6 h-auto pr-2' />Crown and bridge fabrication</li>
                        <li class='flex flex-row items-center justify-start mb-2'><GoDotFill className='w-6 h-auto pr-2' />Dental implant restorations</li>
                        <li class='flex flex-row items-center justify-start mb-2'><GoDotFill className='w-6 h-auto pr-2' />Removable prosthetics (dentures and partials)</li>
                        <li class='flex flex-row items-center justify-start mb-2'><GoDotFill className='w-6 h-auto pr-2' />Orthodontic appliances</li>
                        <li class='flex flex-row items-center justify-start mb-2'><GoDotFill className='w-6 h-auto pr-2' />Occlusal guards and sleep apnea devices</li>
                    </ul>
                </div>
                <div className='flex flex-col min-h-[300px] w-full items-center justify-center flex-grow'>
                    <FaCheck className='w-[50px] h-auto' />
                    <h1 className='text-lg py-2 font-bold'>Quality Assurance</h1>
                    <span className='text-sm'>Every product that leaves our lab undergoes rigorous quality control checks to ensure it meets our exacting standards and exceeds industry regulations.</span>
                </div>
                <div className='flex flex-col min-h-[300px] w-full items-center justify-center flex-grow'>
                    <FaFingerprint className='w-[50px] h-auto' />
                    <h1 className='text-lg py-2 font-bold'>Personalized Approach</h1>
                    <span className='text-sm'>We work closely with dentists to understand each patient's unique needs, ensuring every restoration is tailored for optimal fit, function, and aesthetics.</span>
                </div>
                <div className='flex flex-col min-h-[300px] w-full items-center justify-center flex-grow'>
                    <FaTrophy className='w-[50px] h-auto' />
                    <h1 className='text-lg py-2 font-bold'>Commitment to Excellence</h1>
                    <span className='text-sm'>Our dedication to excellence has earned us a reputation as a trusted partner among dental professionals. We continuously strive to improve our techniques and embrace innovations that benefit both dentists and patients.</span>
                </div>
            </div>
            <MobileFooter/>
        </div>
    )
}
