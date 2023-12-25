import React from 'react';
import Marquee from "react-fast-marquee";

const GetQuote = () => {
    return (
        <div>
            <div className='  flex items-center justify-center'>
                <div className="   max-w-screen-md ">

                    <div className=" items-center text-center  ">
                        <h4 className='font-bold mt-9 text-red-400'>B2B LEAD GENERATION AGENCY</h4>
                        <h2 className=" md:text-6xl font-bold py-9 sm:text-lg 	">Close more deals with ROI-focused lead acquisition</h2>
                        <p className='md:text-xl font-normal sm:text-xs'>Free up your calendar for the appointments we'll schedule using industry-proven expertise and a result-first approach.</p>
                        <div className="">
                            <button className="btn btn-warning mt-8 ">Get A Quote</button>
                        </div>
                    </div>
                </div>


            </div>

            

        </div>


    );
};

export default GetQuote;