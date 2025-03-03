'use client'
import React, { useState } from 'react';

const Page = () => {

    const [color, setColor] = useState('black') //Text color
    const [textSize, setTextSize] = useState(30)

    const [increment, setIncrement] = useState(0) //Increment State
    const [decrement, setDecrement] = useState(0) //Decrement State

    const [colorIndex, setColorIndex] = useState(0)
    const colors = ['red', 'blue', 'green','orange','black', 'pink', 'gray', 'cyan', 'purple'] //color array

    const handleText = ()=>{
        setColor(color === 'black' ? 'blue' : "") //logic: if color is black, so do something.
        setTextSize(textSize === 30? 48: 30)
    }

    const handleTextColor = ()=>{
        setColorIndex((prevIndex)=> (prevIndex + 1) % colors.length) //When we call setColorIndex this time it pass its previous value and we sum it by 1 and % colors.length check the reminder if it matches then array index will again start from zero.
    }


    const handleIncrement = ()=>{
        setIncrement(increment + 1);
    }

    const handleDecrement = ()=>{
        setDecrement(decrement -1)
    }
    return (
        <div>
            <div className='w-[1100px] mx-auto mt-24'>
                <h1 style={{fontSize: `${textSize}px`, color:color}} className='text-3xl'>I love my country</h1>
                <button onClick={handleText} className='bg-green-600 px-4 py-2 rounded-lg cursor-pointer '>click</button>
            </div>
            <div className='w-[1100px] mx-auto mt-8'>
                <h1 style={{color: colors[colorIndex]}} className='text-3xl'>I love Programming</h1>
                <button onClick={handleTextColor} className='bg-pink-500 px-4 py-2 rounded-lg cursor-pointer text-white'>Change Text Color</button>
            </div>
            <div className='w-[1100px] mx-auto mt-8'>
                <span className='bg-orange-600 text-white px-12 py-2 rounded-lg font-bold '>{increment}</span> <br />
                <button onClick={handleIncrement} className='bg-orange-600 px-4 py-2 rounded-lg cursor-pointer mt-4'>Increment</button> <br /> <br /> <br />
                
                <span className='bg-pink-500 text-white px-12 py-2 rounded-lg font-bold '>{decrement}</span> <br />
                <button onClick={handleDecrement} className='bg-pink-500 px-4 py-2 rounded-lg cursor-pointer mt-4'>Decrement</button>
            </div>
        </div>
    );
}

export default Page;
