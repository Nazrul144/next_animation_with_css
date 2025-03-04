'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Wedding = () => {

    const [inputValue, setInputValue] = useState('')
    const [money, setMoney] = useState()
    const [showImage, setShowImage] = useState('none');
    const [disableButton, setDisableButton] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    const [color, setColor] = useState('white')

    const [convertText, setConvertText] = useState('uppercase')


    const handleInput = (event)=>{
        
        setInputValue(event.target.value)
    }


    console.log(typeof inputValue);

    const handleMoney = ()=>{
        if(isNaN(inputValue)){
            toast.error('String is not allowed!') //Input validation check number or string.
            setInputValue('')
        }
        else if(!inputValue){
            toast.error('Empty field is not allowed!')
        }
        else if(inputValue >= 500){
           setMoney(inputValue)
           setInputValue('')
           setShowImage((prev)=> prev === 'none'? 'block' : 'none')
           setDisableButton(true)
           toast.success('Your order has been successful!')
        
        }else{
            toast.error('Pay at least 500 Taka!')
            setInputValue('')
        }
    }

    const handleBackgroundColor = ()=>{
        setColor((prev)=> prev === 'white' ? 'pink' : 'white')
    }

    const handleText = ()=>{
        setConvertText((prev)=> prev === 'uppercase' ? 'lowercase' : 'uppercase')
    }

    return (
        <div style={{backgroundColor: color}} className='w-[1100px] mx-auto mt-10'>
            <button onClick={handleBackgroundColor} className='bg-amber-900 px-4 py-2 rounded-lg text-white mb-4 cursor-pointer'>Change Background Color</button>
            <div className='flex gap-10'>
            <div>
                <h1 className='font-bold'>Pay: 500 Taka For KFC Chicken</h1>
                <input onChange={handleInput} value={inputValue} className='px-4 py-2 rounded-lg border-2 border-amber-300' type="text" placeholder='Pay your bill' />
                <button disabled={disableButton} onClick={handleMoney} className={`${disableButton ? 'cursor-not-allowed':'cursor-pointer'} px-4 py-2 rounded-lg bg-green-600 text-white `}>Submit</button>
            </div>
            <h1 className='font-bold '>You have paid: {money}</h1>
            <div>
                <Image style={{display: showImage}} src='/kfc.webp' alt='KFC_Image' width={400} height={300} />
            </div>
            </div>
        <div>
            <div className='flex gap-6 items-center'>
                <div><h1 className='font-bold text-xl'>Open Your Lock</h1></div>
                <div><Image src='/lock.jpg' alt='Lock' width={100} height={100}/></div>
            </div>
            <div>
                <input className='border-2 border-r-amber-500 px-4 py-2 rounded-lg' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
                <button className='bg-amber-600 px-4 py-2 rounded-lg text-white'>Send</button>
                <span onClick={()=> setShowPassword(!showPassword)}>
                {
                    showPassword ? <FaEye/> : <FaEyeSlash />
                }
                </span>
            </div>
            <div>
                <h1 className='text-cyan-600 font-extrabold text-xl mt-6'>Toggle Text Button</h1>
                <button style={{textTransform:convertText}} onClick={handleText} className='px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer'>Toggle</button>
            </div>
        </div>
        </div>
    );
}

export default Wedding;
