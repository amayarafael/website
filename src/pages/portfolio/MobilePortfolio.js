import React, { useState } from 'react'
import MobileFooter from '../../other/components/footer/MobileFooter'
import YouTube from 'react-youtube'
import { TbSquareRoundedArrowLeftFilled, TbSquareRoundedArrowRightFilled } from "react-icons/tb";


export default function MobilePortfolio() {
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
        <div className='flex sm:hidden flex-col h-[88vh] w-full overflow-y-scroll scrollbar-none'>
            <div className='flex min-h-full flex-col w-full items-center justify-center'>
                <YouTube
                    videoId={selectedVideo.id}
                    iframeClassName='w-full h-[300px] pt-4'
                    onError={() => {}}
                />
                <div className='w-full h-12 flex flex-row items-center justify-evenly'>
                    <TbSquareRoundedArrowLeftFilled className='h-7 w-auto hover:cursor-pointer' onClick={decrement}/>
                    {selectedIndex + 1} / {videos.length}
                    <TbSquareRoundedArrowRightFilled className='h-7 w-auto hover:cursor-pointer' onClick={increment}/>
                </div>
                {/* <div className='w-full h-6 flex flex-row items-center justify-evenly'>
                    <span className='font-semibold'>{selectedVideo.title}</span>
                </div> */}
            </div>
            <MobileFooter />
        </div>
    )
}
