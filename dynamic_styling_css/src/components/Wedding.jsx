'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const Wedding = () => {

    const [inputValue, setInputValue] = useState()
    const [money, setMoney] = useState()
    const [showImage, setShowImage] = useState('none');
    const [disableButton, setDisableButton] = useState('')


    const handleInput = (event)=>{
        
        setInputValue(event.target.value)
    }


    console.log(typeof inputValue);

    const handleMoney = ()=>{
        if(isNaN(inputValue)){
            alert('String is not allowed') //Input validation check number or string.
            setInputValue('')
            setDisableButton('not-allowed')
        }
        else if(inputValue >= 500){
           setMoney(inputValue)
           setInputValue('')
           setShowImage((prev)=> prev === 'none'? 'block' : 'none')
        
        }else{
            alert('Pay at least 500 taka!');
            setInputValue('')
        }
      
    }
    return (
        <div className='w-[1100px] mx-auto mt-10'>
            <div className='flex gap-10'>
            <div>
                <h1 className='font-bold'>Pay: 500 Taka For KFC Chicken</h1>
                <input onChange={handleInput} value={inputValue} className='px-4 py-2 rounded-lg border-[1px] border-amber-300' type="text" placeholder='Pay your bill' />
                <button style={{cursor: disableButton}} onClick={handleMoney} className='px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer'>Submit</button>
            </div>
            <h1 className='font-bold'>You have paid: {money}</h1>
            <div>
                <Image style={{display: showImage}} src='/kfc.webp' alt='KFC_Image' width={400} height={300} />
            </div>
            </div>
        </div>
    );
}

export default Wedding;
