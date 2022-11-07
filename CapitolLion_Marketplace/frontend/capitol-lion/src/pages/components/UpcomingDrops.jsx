import React from "react";
import '../../../src/App.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import FotoOne from '../../Assets/photo1.jpg'
import FotoTwo from '../../Assets/photo2.jpg'
import FotoThree from '../../Assets/photo3.jpg'
import FotoFour from '../../Assets/photo4.jpg'
import FotoFive from '../../Assets/photo5.jpg'



const UpcomingDrops = () => {

    return (
        <div>
            
                    <div id="indicators-carousel" className="relative" data-carousel="slide">

                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src={FotoOne} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />1
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={FotoTwo} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />2
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={FotoThree} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />3
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={FotoFour} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />4
                            </div>

                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src={FotoFive} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />5
                            </div>
                        </div>

                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>

                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                    <img src={FotoTwo} alt="pics" />
            
        </div>
    )
}
export default UpcomingDrops;