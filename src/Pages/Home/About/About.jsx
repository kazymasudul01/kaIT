import React from 'react';
import img1 from '../../../../src/assets/1.jpeg'
import img2 from '../../../../src/assets/2.jpeg'
import img3 from '../../../../src/assets/3.jpeg'
import img4 from '../../../../src/assets/4.jpeg'
import img5 from '../../../../src/assets/5.jpeg'
import img6 from '../../../../src/assets/6.jpeg'




const About = () => {
    return (

        <div className=' grid grid-cols-6 gap-4 max-w-screen-xl mx-auto'>
            {/* <div className=' '>
                <div className='  object-cover object-center mb-4  '>
                      <img src={img1} alt="" />
                </div>
                <div className='  object-cover object-center mb-4  '>
                      <img src={img2} alt="" />
                </div>
                
                    
                   
            </div>
            <div className=' col-span-2 row-span-3 rounded-md'>
                <img src={img3} alt="" />

            </div>
        
            <div className=' '>
                <div className='  object-cover object-center mb-4'>
                      <img src={img4} alt="" />
                </div>
                <div className='  h-full w-full rounded-lg object-cover object-center ' >
                        <img src={img5} alt="" />

                </div>
            </div>
            <div className=' col-span-2  '>
                <img src={img6} alt="" />

            </div> */}

            <div className=' '>
                <div className='  '>
                    <img src={img1} alt="" />
                </div>
                <div className='  '>
                    <img src={img2} alt="" />
                </div>



            </div>
            <div className=' col-span-2 row-span-3 '>
                <img src={img3} alt="" />

            </div>

            <div className=' '>
                <div className='  '>
                    <img src={img4} alt="" />
                </div>
                <div className=' ' >
                    <img src={img5} alt="" />

                </div>
            </div>
            <div className=' col-span-2 row-span-full  '>
                <img src={img6} alt="" />

            </div>


        </div>

    );
};

export default About;