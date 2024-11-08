import React, { Component } from 'react';
import denturesImg from '../../img/FullTeethSet.jpg'
import Card from '../../other/components/card/Card';
import { FaTooth } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div class="w-full h-[88vh] flex flex-col items-start justify-between overflow-y-scroll scrollbar-none">
        <div class='w-full flex flex-col flex-1 justify-center items-center'>
          <div class="w-[75%] h-[50%] shadow-md rounded-xl bg-primary">
            <img src={denturesImg} class='object-contain h-[100%] w-auto rounded-l-xl' />
          </div>
          <div class="w-full h-[25%] content-center mt-10">
            <h1 class='pt-4 text-lg font-bold'>Our Mission</h1>
            <span>Our mission is to enhance smiles and improve oral health by crafting precision dental restorations that blend seamlessly with natural teeth, ensuring both functionality and aesthetics.</span>
          </div>
          {/* <div class='h-[100%] w-[100%] bg-slate-300'>
            <h1 class='pt-4 text-lg font-bold'>About My Dental Technology Expertise</h1>
            <span>I pride myself on being at the forefront of dental technology, providing top-quality dental prosthetics and appliances to dentists and their patients since [year established].</span>
            
            <h1 class='pt-4 text-lg font-bold'>Expert Craftsmanship</h1>
            <span>Our team of highly skilled dental technicians brings together years of experience and a passion for dental artistry. Each member is certified and continuously trained in the latest dental technology advancements.</span>
            
            
            
            
            Environmental Responsibility
            We are committed to sustainable practices, using eco-friendly materials and processes whenever possible to reduce our environmental impact.
            At [Dental Lab Name], we're not just crafting dental prosthetics; we're creating confident smiles and contributing to better oral health outcomes. Partner with us to experience the difference that precision, passion, and advanced technology can make in dental care.
          </div> */}
        </div>
        <div class='w-full flex flex-1 flex-col'>
          <div class="w-full h-64 flex flex-row justify-evenly items-center mt-10 mb-10">
            <Card title={"Comprehensive Services"} body={
              (
                <ul class={`text-start pl-[25px]`}>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2'/> Crown and bridge fabrication</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2'/> Dental implant restorations</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2'/> Removable prosthetics (dentures and partials)</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2'/> Orthodontic appliances</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2'/> Occlusal guards and sleep apnea devices</li>
                </ul>
              )
            } />
            <Card title={"Quality Assurance"} body={
              (
                <span>Every product that leaves our lab undergoes rigorous quality control checks to ensure it meets our exacting standards and exceeds industry regulations.</span>
              )
            } />
          </div>
          <div class="w-full h-64 flex flex-row justify-evenly items-center mt-10 mb-10">
            <Card title={"Personalized Approach"} body={
              (
                <span>We work closely with dentists to understand each patient's unique needs, ensuring every restoration is tailored for optimal fit, function, and aesthetics.</span>
              )
            } />
            <Card title={"Commitment to Excellence"} body={
              (
                <span>Our dedication to excellence has earned us a reputation as a trusted partner among dental professionals. We continuously strive to improve our techniques and embrace innovations that benefit both dentists and patients.</span>
              )
            } />
          </div>

        </div>
      </div>
    )
  }
}
