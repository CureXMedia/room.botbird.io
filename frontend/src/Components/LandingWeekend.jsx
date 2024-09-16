// Landing page for free weekend classes

import { Alert } from '@material-tailwind/react'
import React from 'react'
/*
"IMG-20240916-WA0027.jpg",  "IMG-20240916-WA0032.jpg",  "IMG-20240916-WA0037.jpg",  "IMG-20240916-WA0042.jpg",
"IMG-20240916-WA0028.jpg",  "IMG-20240916-WA0033.jpg",  "IMG-20240916-WA0038.jpg",  "IMG-20240916-WA0043.jpg",
"IMG-20240916-WA0029.jpg",  "IMG-20240916-WA0034.jpg",  "IMG-20240916-WA0039.jpg",  "IMG-20240916-WA0044.jpg",
"IMG-20240916-WA0030.jpg",  "IMG-20240916-WA0035.jpg",  "IMG-20240916-WA0040.jpg",  "IMG-20240916-WA0045.jpg",
"IMG-20240916-WA0031.jpg",  "IMG-20240916-WA0036.jpg",  "IMG-20240916-WA0041.jpg",
*/

const images1 = [
"IMG-20240916-WA0032.jpg",
"IMG-20240916-WA0035.jpg",
"IMG-20240916-WA0037.jpg",
"IMG-20240916-WA0036.jpg",
]
const images2 = [
"IMG-20240916-WA0027.jpg",
"IMG-20240916-WA0031.jpg",
"IMG-20240916-WA0029.jpg",
// "IMG-20240916-WA0030.jpg",
// "IMG-20240916-WA0028.jpg",
// "IMG-20240916-WA0034.jpg",
// "IMG-20240916-WA0033.jpg",
"IMG-20240916-WA0042.jpg",
]
const images3 = [
"IMG-20240916-WA0038.jpg",
"IMG-20240916-WA0043.jpg",
// "IMG-20240916-WA0039.jpg",
// "IMG-20240916-WA0044.jpg",
// "IMG-20240916-WA0040.jpg",
"IMG-20240916-WA0041.jpg",
"IMG-20240916-WA0045.jpg",
]
export default function LandingWeekend() {
    return (<>
        <div className='container px-4 md:px-0 mx-auto mt-10 md:my-5'>
            <div className='flex items-center justify-evenly'>
                <div>
                    <h1 className='font-bold text-3xl text-center md:w-max max-w-xl md:max-w-none mx-3'>Master Data Structures and Algorithms (DSA) <br /> FREE Weekend Classes for College Students</h1>
                    <p className='text-center max-w-xl mx-auto mt-5'>Unlock your potential in Data Structures and Algorithms with our FREE weekend classes, designed specifically for college students. These classes are perfect for those looking to ace coding interviews or build a solid foundation in DSA using JAVA</p>
                </div>
                <img  className='hidden xl:block w-[200px] h-max border-2'/>
            </div>
            <div className='mt-10 text-center mx-auto max-w-4xl'>
                <p>Join an interactive, hands-on workshop at our Nandanvan, Nagpur center, where we use proprietary software to help you practice and master key concepts. Classes are conducted by Sanket Sapate, a VNIT graduate and scholarship awardee.</p>
                <Alert className='mt-10 font-bold md:w-max mx-auto' variant='ghost'>Limited Seats  Only 8 per session! Register now to secure your spot.</Alert>
            </div>
            <div className='mt-10'>
                {
                    images1.map((image, index) => {
                        return (
                            <img key={index} src={`/${image}`} className='border-2 mx-auto mt-5' />
                        )
                    })
                }
            </div>
            <div className='mt-10'>
                <h2 className='text-center text-3xl font-bold'>Other courses that we offer</h2>
                {
                    images2.map((image, index) => {
                        return (
                            <img key={index} src={`/${image}`} className='border-2 mx-auto mt-5' />
                        )
                    })
                }
            </div>
            <div className='mt-10 '>
                <h2 className='text-center text-3xl font-bold'>Know more about Coding Room</h2>
                {
                    images3.map((image, index) => {
                        return (
                            <img key={index} src={`/${image}`} className='border-2 mx-auto mt-5' />
                        )
                    })
                }
            </div>
        </div>
        <a href='tel:9673343022' className='fixed bottom-0 bg-black w-full p-4 text-center text-[#ff7648] text-2xl font-bold'>
            Call Now To Register
        </a>
    </>
    )
}