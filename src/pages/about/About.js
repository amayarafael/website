import React, { Component } from 'react';
import denturesImg from '../../img/FullTeethSet.jpg'
import Card from '../../other/components/card/Card';
import { FaTooth, FaCircleNodes } from "react-icons/fa";
import { FaCheck, FaFingerprint, FaTrophy } from "react-icons/fa";
import Footer from '../../other/components/footer/Footer';
import MobileAbout from './MobileAbout';

export default function Home({ setSelectedPage }) {
  return (
    <>
      <div class="hidden sm:flex w-full h-[88vh] flex-col items-start justify-between overflow-y-scroll scrollbar-none">
        <div class='w-full flex flex-col justify-center items-center'>
          <div class="w-[75%] h-[50%] shadow-md rounded-xl bg-primary flex flex-row">
            <img src={denturesImg} class='object-contain h-[100%] w-auto rounded-l-xl' />
            <div class="flex flex-grow flex-col justify-center">
              <h1 class='pt-2 text-lg font-bold'>Our Mission</h1>
              <span class='px-6'>Our mission is to enhance smiles and improve oral health by crafting precision dental restorations that blend seamlessly with natural teeth, ensuring both functionality and aesthetics.</span>
            </div>
          </div>
        </div>
        <div class='w-full flex flex-1 flex-col mb-[100px]'>
          <div class="w-full h-64 flex flex-row justify-evenly items-center mt-10 mb-10">
            <div className='flex flex-col w-[30%] max-w-[400px] h-[100%] items-center justify-center shadow-md rounded-xl bg-primary'>
              <FaCheck className='w-[50px] h-auto' />
              <h1 className='text-lg py-2 font-bold'>Quality Assurance</h1>
              <span className='text-sm px-6'>Every product that leaves our lab undergoes rigorous quality control checks to ensure it meets our exacting standards and exceeds industry regulations.</span>
            </div>
            <div className='flex flex-col w-[30%] max-w-[400px] h-[100%] items-center justify-center shadow-md rounded-xl bg-primary'>
              <FaFingerprint className='w-[50px] h-auto' />
              <h1 className='text-lg py-2 font-bold'>Personalized Approach</h1>
              <span className='text-sm px-6'>We work closely with dentists to understand each patient's unique needs, ensuring every restoration is tailored for optimal fit, function, and aesthetics.</span>
            </div>
            <div className='flex flex-col w-[30%] max-w-[400px] h-[100%] items-center justify-center shadow-md rounded-xl bg-primary'>
              <FaTrophy className='w-[50px] h-auto' />
              <h1 className='text-lg py-2 font-bold'>Commitment to Excellence</h1>
              <span className='text-sm px-6'>Our dedication to excellence has earned us a reputation as a trusted partner among dental professionals. We continuously strive to improve our techniques and embrace innovations that benefit both dentists and patients.</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <MobileAbout setSelectedPage={setSelectedPage} />
    </>
  )
}