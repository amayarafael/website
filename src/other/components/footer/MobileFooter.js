import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function MobileFooter() {
    return (
        <div class="sm:hidden w-full min-h-48 border-t-[1px] flex flex-1 flex-row justify-between bg-primary">
            <div class="flex-1 h-full content-center">
                <div class="flex w-full h-full content-center">
                    <ul class="flex flex-1 flex-col justify-center items-start space-y-2 ml-4">
                        <li class="flex flex-row items-center justify-start font-bold">Rafael Amaya, Dental Technician</li>
                        <li class="flex flex-row items-center justify-start"><MdOutlineEmail class="mr-2" size={15}/><a href='mailto:Amayaraffael@gmail.com'>Amayaraffael@gmail.com</a></li>
                        <li class="flex flex-row items-center justify-start"><FaPhoneAlt class="mr-2" size={15}/><a href='tel:7868628440'>(786) 862-8440</a></li>
                        <li class="flex flex-row items-center justify-start"><CiLocationOn class="mr-2" size={15}/>Pembroke Pines, Fl</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
