'use client'
import React, { useState } from 'react';

const Page = () => {

    const [color, setColor] = useState('black')

    const handleText = ()=>{
        setColor(color === 'black' ? 'blue' : "") //logic: if color is black, so do something.
    }
    return (
        <div>
            <div className='w-[1100px] mx-auto mt-24'>
                <h1 style={{color: color}} className='text-3xl'>I love my country</h1>
                <button onClick={handleText} className='bg-green-600 px-4 py-2 rounded-lg cursor-pointer'>click</button>
            </div>
        </div>
    );
}

export default Page;
