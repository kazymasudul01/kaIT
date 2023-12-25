import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueText = () => {
    return (
        <div className='bg-white flex my-9 rounded-md items-center justify-center mx-auto p-4 max-w-screen-md mx-auto'>

                
                    <h4  className='w-40 font-bold '>Client's Result:</h4>
               

                <Marquee>
                    <span>Unlock Success with Our Lead Generation Expertise! 🚀</span>
                    <span>Winning Deals is Our Forte - Elevate Your Business Today! 🏆</span>
                    <span>Proven Results: Countless Deals Sealed, Countless Clients Thrilled! 💼</span>
                    <span>Boost Your Revenue with our Winning Lead Generation Strategies! 💰</span>
                    <span>Trusted by Businesses: We Deliver Results, Not Just Leads! 🌐</span>
                    <span>Maximize Conversions, Minimize Effort - That's Our Promise! ⚙️</span>
                    <span>Your Success Story Begins Here - Let's Win Together! 🌟</span>
                </Marquee>

            </div>
    );
};

export default MarqueText;