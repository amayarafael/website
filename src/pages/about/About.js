import React, { Component } from 'react';
import denturesImg from '../../img/FullTeethSet.jpg'
import Card from '../../other/components/card/Card';
import { FaTooth } from "react-icons/fa";
import Footer from '../../other/components/footer/Footer';

export default class Home extends Component {
  render() {
    return (
      <div class="w-full h-[88vh] flex flex-col items-start justify-between overflow-y-scroll scrollbar-none">
        <div class='w-full flex flex-col flex-1 justify-center items-center'>
          <div class="w-full h-[25%] content-center mb-10">
            <h1 class='pt-2 text-lg font-bold'>Our Mission</h1>
            <span>Our mission is to enhance smiles and improve oral health by crafting precision dental restorations that blend seamlessly with natural teeth, ensuring both functionality and aesthetics.</span>
          </div>
          <div class="w-[75%] h-[50%] shadow-md rounded-xl bg-primary">
            <img src={denturesImg} class='object-contain h-[100%] w-auto rounded-l-xl' />
          </div>
        </div>
        <div class='w-full flex flex-1 flex-col mb-10'>
          <div class="w-full h-64 flex flex-row justify-evenly items-center mt-10 mb-10">
            <Card title={"Comprehensive Services"} body={
              (
                <ul class={`text-start pl-[25px]`}>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2' /> Crown and bridge fabrication</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2' /> Dental implant restorations</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2' /> Removable prosthetics (dentures and partials)</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2' /> Orthodontic appliances</li>
                  <li class='flex flex-row items-center justify-start mb-2'><FaTooth class='mr-2' /> Occlusal guards and sleep apnea devices</li>
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
        <Footer/>
      </div>
    )
  }
}
