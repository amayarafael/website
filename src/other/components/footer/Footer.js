import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
    return (
        <div class="w-full min-h-52 border-t-[1px] flex flex-1 flex-row justify-between bg-primary flex-grow-0">
            <div class="flex-1 h-full content-center">
                <div class="flex w-full h-full content-center">
                    <ul class="flex flex-1 flex-col justify-center items-center space-y-2">
                        <li class="flex flex-row items-center justify-start font-bold">Rafael Amaya, Dental Technician</li>
                        <li class="flex flex-row items-center justify-start"><MdOutlineEmail class="mr-2" size={15}/><a href='mailto:Email@email.com'>Email@email.com</a></li>
                        <li class="flex flex-row items-center justify-start"><FaPhoneAlt class="mr-2" size={15}/><a href='tel:7868628440'>(786) 862-8440</a></li>
                        <li class="flex flex-row items-center justify-start"><CiLocationOn class="mr-2" size={15}/>Pembroke Pines, Fl</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
