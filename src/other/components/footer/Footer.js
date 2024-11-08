import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Footer() {
    return (
        <div class="w-full min-h-52 border-t-[1px] flex flex-1 flex-row justify-between bg-primary">
            <div class="w-[50%] h-full content-center">
                <div class="flex w-full h-full">
                    <ul class="flex flex-1 flex-col justify-center items-start space-y-2 p-10">
                        <li class="flex flex-row items-center justify-start"><MdOutlineEmail class="mr-2" size={15}/>Email@email.com</li>
                        <li class="flex flex-row items-center justify-start"><FaPhoneAlt class="mr-2" size={15}/>(786) 862-8440</li>
                        <li class="flex flex-row items-center justify-start"><CiLocationOn class="mr-2" size={15}/>Pembroke Pines, Fl</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
