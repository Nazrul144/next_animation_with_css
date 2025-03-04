'use client'
import React, { useState } from 'react';
const About = () => {

    const [disableButton, setDisableButton] = useState('')

    const handleButton = ()=>{
        setDisableButton('not-allowed')
    }

    return (
        <div className='w-[1100px] mx-auto '>
             <div className='mt-20'>
                <h1>Your Coupon Code: BsgkC</h1>
                <h1 className='text-center font-black'>Received Coupon:</h1>
                <input className='border-[1px] border-pink-700 px-4 py-2 rounded-lg' type="text" placeholder='Write the coupon code' />
                <button style={{cursor: disableButton}} onClick={handleButton} className='bg-purple-400 rounded-lg px-4 py-2  cursor-pointer'>
                Submit
                </button>
            </div>

            <div className='mt-10 border-2 border-amber-600'>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem vel quod! Vero recusandae consequatur dolorum, officiis vel maiores eos earum, ad suscipit consectetur assumenda harum voluptatem. Consectetur, deserunt expedita.</p> <br />
            </div>
           
        </div>
    );
}

export default About;
