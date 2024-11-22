import React from 'react'
import denturesImg from '../../img/FullTeethSet.jpg'

export default function MobileAbout() {
    return (
        <div className='flex sm:hidden flex-col h-[88vh] overflow-y-scroll scrollbar-none'>
            <div className='w-full flex flex-col flex-grow-0'>
                <img src={denturesImg} class='object-cover h-auto w-full' />
            </div>
            <div class="flex w-full flex-grow flex-col justify-center items-center">
                <h1 class='text-lg font-bold'>Our Mission</h1>
                <span class='px-6 overflow-hidden'>Our mission is to enhance smiles and improve oral health by crafting precision dental restorations that blend seamlessly with natural teeth, ensuring both functionality and aesthetics.</span>
            </div>
        </div>
    )
}
