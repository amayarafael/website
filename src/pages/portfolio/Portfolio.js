import React, { useState } from 'react'
import Footer from '../../other/components/footer/Footer'
import MobilePortfolio from './MobilePortfolio'
import YouTube from 'react-youtube'
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";
import P1 from "../../img/portfolio-1.jpg";
import P2 from "../../img/portfolio-2.jpg";
import P3 from "../../img/portfolio-3.jpg";
import P4 from "../../img/portfolio-4.jpg";
import P5 from "../../img/portfolio-5.jpg";
import P6 from "../../img/portfolio-6.jpg";

export default function Portfolio() {

    const videos = [
        {
            id: "GpEYugK77YE",
            title: "Denture Display & Packaging",
        },
        {
            id: "GFmGBR05F7E",
            title: ""
        },
        {
            id: "15x_lx6IVr0"
        },
        {
            id: "z9DkE7gfnaw"
        },
        {
            id: "EKyQZ0CdYB4"
        },
        {
            id: "XEcXKHIQ9v8"
        },
        {
            id: "kxPa1PBf4Tk"
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedVideo, setSelectedVideo] = useState(videos[selectedIndex]);
    const [selectedPage, setSelectedPage] = useState('Videos');

    var increment = () => {
        var max = videos.length;

        var index = selectedIndex + 1;
        if (index < max) {
            setSelectedIndex(index);
            setSelectedVideo(videos[index]);
        }
    }

    var decrement = () => {
        var min = 0;

        var index = selectedIndex - 1;
        if (index >= 0) {
            setSelectedIndex(index);
            setSelectedVideo(videos[index]);
        }
    }

    return (
        <>
            <div class="hidden sm:flex w-full h-[88vh] flex-col items-start justify-between overflow-y-scroll scrollbar-none">
                <div className='flex flex-1 flex-row min-h-full w-full'>
                    <div className='min-h-full w-full flex-col items-center justify-center overflow-scroll'>
                        <div className='w-full flex justify-center items-center'>
                            <div className='flex w-[700px] flex-row min-h-12 mb-6 mt-6 border-b-[1px] border-primary border-solid'>
                                {
                                    ['Videos', 'Images', 'Testimonials'].map((category, index) => {
                                        return (
                                            <div className={
                                                `flex-1 content-center hover:cursor-pointer ${(category === selectedPage) ? 'bg-primary' : ''} ${(index == 1) ? 'border-x-[1px] border-primary border-solid' : ''}
                                    
                                    `}
                                                onClick={() => setSelectedPage(category)}>
                                                <span>{category}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-center'>
                            {
                                (selectedPage === 'Videos') ?
                                    <>
                                        <YouTube
                                            videoId={selectedVideo.id}
                                            iframeClassName='sm:w-[600px] sm:h-[300px] rounded-xl'
                                            onError={() => { }}
                                        />

                                        <div className='w-full h-12 flex flex-row items-center justify-center space-x-6'>
                                            <TbSquareRoundedArrowLeftFilled className='h-7 w-auto hover:cursor-pointer' onClick={decrement} />
                                            <span>{selectedIndex + 1} / {videos.length}</span>
                                            <TbSquareRoundedArrowRightFilled className='h-7 w-auto hover:cursor-pointer' onClick={increment} />
                                        </div>
                                    </> : (selectedPage === 'Images') ?
                                        <>
                                            {
                                                [[P1, P2], [P3, P4], [P5, P6]].map(sourceImgArr => {
                                                    return (
                                                        <div className='w-[75%] h-auto flex flex-row items-center justify-around my-6'>
                                                            <img src={sourceImgArr[0]} className='object-cover w-[300px] h-auto rounded-xl' />
                                                            <img src={sourceImgArr[1]} className='object-cover w-[300px] h-auto rounded-xl' />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </> : (selectedPage === 'Testimonials') ?
                                            <>
                                                <div className='flex h-[300px] flex-col flex-grow items-center justify-center'>
                                                    <span>Coming Soon!</span>
                                                </div>
                                            </> : <></>
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <MobilePortfolio />
        </>
    )
}
