'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Wedding = () => {

    const [inputValue, setInputValue] = useState('')
    const [money, setMoney] = useState()
    const [showImage, setShowImage] = useState('none');
    const [disableButton, setDisableButton] = useState(false)


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
    return (
        <div className='w-[1100px] mx-auto mt-10'>
            <div className='flex gap-10'>
            <div>
                <h1 className='font-bold'>Pay: 500 Taka For KFC Chicken</h1>
                <input onChange={handleInput} value={inputValue} className='px-4 py-2 rounded-lg border-2 border-amber-300' type="text" placeholder='Pay your bill' />
                <button  onClick={handleMoney} className={`${disableButton ? 'cursor-not-allowed':'cursor-pointer'} px-4 py-2 rounded-lg bg-green-600 text-white `}>Submit</button>
            </div>
            <h1 className='font-bold'>You have paid: {money}</h1>
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
                <h1>Your password is:</h1>
                <input className='border-2 border-r-amber-500 px-4 py-2 rounded-lg' type="password" placeholder='Enter your password' />
                <button className='bg-amber-600 px-4 py-2 rounded-lg text-white'>Send</button>
            </div>
        </div>
        </div>
    );
}

export default Wedding;
