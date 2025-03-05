'use client'
import React, { useState } from 'react';
const About = () => {

    const [disableButton, setDisableButton] = useState(false) // Disable button state

    //Logic: I have to declare two state to show Coupon, first I have collect the code by input field and store it in a state then when I click on a button the button call a function and in the function I call another state to set in Input filed value then from this state I just show it. Why did'nt I show the value from the first state? because If I would show from the first state that would not be user friendly because when user types this time it would dynamically show with typing. But I wanted when button is clicked. and I did almost same things for disable button. Happy coding.

    const [inputValue, setInputValue] = useState('') // Input state
    const [showCoupon, setShowCoupon] = useState('') //ShowCoupon Sate.

    const [background, setBackground] = useState(0)
    const colors = ['white','purple','orange', 'green', 'gray', 'yellow'];

    const handleButton = ()=>{
        if(inputValue === 'BsgkC'){
            setShowCoupon(inputValue)
            setDisableButton(true)
            setInputValue('') 
        }else{
            alert('Invalid Coupon!');
            setInputValue('')
        }
        
    }

    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
       
    }

    const handleBackground = ()=>{
        setBackground((prev)=> (prev +1)% colors.length)
    }


    return (
        <div style={{backgroundColor: colors[background]}} className='w-[1100px] mx-auto '>
             <div className='mt-20'>
                <h1>Your Coupon Code: BsgkC</h1>
                <h1 className='text-center font-black'>Received Coupon:{showCoupon}</h1>
                <input onChange={handleInputChange} value={inputValue} className='border-[1px] border-pink-700 px-4 py-2 rounded-lg' type="text" placeholder='Write the coupon code' />
                <button disabled={disableButton} className={`${disableButton? 'cursor-not-allowed':'cursor-pointer'} bg-purple-400 rounded-lg px-4 py-2 `} onClick={handleButton} >
                Submit
                </button>
                <div className='mt-12'>
                <button onClick={handleBackground} className='bg-red-900 text-white rounded-lg px-4 py-2 cursor-pointer'>Change BG</button>
                </div>
            </div>

            <div className='mt-10'>
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
