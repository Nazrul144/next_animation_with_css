'use client'
import React, { useState } from 'react';

const Page = () => {

    const [color, setColor] = useState('black') //Text color
    const [textSize, setTextSize] = useState(30)

    const [increment, setIncrement] = useState(0) //Increment State
    const [decrement, setDecrement] = useState(0) //Decrement State

    const [incrementDecrement, setIncrementDecrement] = useState(0) //Increment and Decrement together.

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
    
    const handleIncrementButton =()=>{
        setIncrementDecrement(incrementDecrement + 1);
    }

    const handleDecrementButton = ()=>{
        setIncrementDecrement((prev)=> prev > 0 ? prev -1 : prev) // logic: If zero is not greater than zero so set the previous value. If greater subtract 1 from prev
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
            <div className='w-[1100px] mx-auto mt-8'>
                <div className='flex gap-12'>
                    <h3 className='bg-red-300 rounded-lg px-4 py-2 mb-2 text-xl ml-8 font-extrabold'>{incrementDecrement}</h3>
                </div>
               <button onClick={handleIncrementButton} className=' text-2xl font-extrabold cursor-pointer bg-cyan-500 px-4 py-2 rounded-lg ml-2'>+</button>
               <button onClick={handleDecrementButton} className=' text-2xl font-extrabold cursor-pointer bg-purple-500 px-5 py-2 rounded-lg ml-2'>-</button>
            </div>
        </div>
    );
}

export default Page;
