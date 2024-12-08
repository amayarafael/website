import React, { useState } from 'react'
import Footer from '../../other/components/footer/Footer'
import MobilePortfolio from './MobilePortfolio'
import YouTube from 'react-youtube'
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";

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
                <div className='flex flex-1 flex-row min-h-[100%] w-full'>
                    <div className='flex min-h-full flex-col min-w-[100%] items-center justify-center'>
                        <YouTube
                            videoId={selectedVideo.id}
                            iframeClassName='w-[600px] h-[300px] rounded-xl'
                            onError={() => { }}
                        />

                        <div className='w-full h-12 flex flex-row items-center justify-center space-x-6'>
                            <TbSquareRoundedArrowLeftFilled className='h-7 w-auto hover:cursor-pointer' onClick={decrement} />
                            <span>{selectedIndex + 1} / {videos.length}</span>
                            <TbSquareRoundedArrowRightFilled className='h-7 w-auto hover:cursor-pointer' onClick={increment} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <MobilePortfolio />
        </>
    )
}
