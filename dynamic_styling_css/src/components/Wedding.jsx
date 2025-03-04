'use client'
import React, { useState } from 'react';

const Wedding = () => {

    const [inputValue, setInputValue] = useState('')
    const [money, setMoney] = useState()
    const handleInput = (event)=>{
        setInputValue(event.target.value)
    }

    const handleMoney = ()=>{
        if(inputValue >= 500){
           setMoney(inputValue)
        }else{
            alert('Pay at least 500 taka!');
            setInputValue('')
        }
      
    }
    return (
        <div className='w-[1100px] mx-auto mt-10'>
            <div>
                <h1 className='font-bold'>Pay: 500 Taka</h1>
                <h1 className='font-bold'>You have paid: {money}</h1>
                <input onChange={handleInput} value={inputValue} className='px-4 py-2 rounded-lg border-[1px] border-amber-300' type="text" placeholder='Pay your bill' />
                <button onClick={handleMoney} className='px-4 py-2 rounded-lg bg-green-600 text-white cursor-pointer'>Submit</button>
            </div>
        </div>
    );
}

export default Wedding;
