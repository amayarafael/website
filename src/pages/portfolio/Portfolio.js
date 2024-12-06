import React from 'react'
import Footer from '../../other/components/footer/Footer'
import MobilePortfolio from './MobilePortfolio'

export default function Portfolio() {
    return (
        <>
            <div class="hidden sm:flex w-full h-[88vh] flex-col items-start justify-between overflow-y-scroll scrollbar-none">

                <Footer />
            </div>
            <MobilePortfolio/>
        </>
    )
}
