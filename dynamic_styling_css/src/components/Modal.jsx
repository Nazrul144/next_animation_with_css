'use client'
import React, { useState } from 'react';

const Modal = () => {

    const [showModal, setShowModal] = useState('none')


    const handleModal = ()=>{
        setShowModal((prev)=> prev === 'none' ? 'block' : 'none')
    }

    const handleClose = ()=>{
        setShowModal('none')
    }

    return (
        <div className='w-[1100px] mx-auto mt-4'>
            <h1 className='text-center font-bold text-pink-400 text-xl'>Show the modal</h1>
            <div className='flex justify-between items-center'>
                <div>
                    <button onClick={handleModal} className='px-4 py-2 rounded-lg bg-cyan-400 cursor-pointer'>Show Modal</button>
                </div>
                <div>
                   <div style={{ display:showModal}} className='w-96 h-56 bg-amber-600 rounded-lg'>
                    <p className='p-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium adipisci quibusdam nulla tempora mollitia, a sequi fuga sapiente quasi ad est commodi, ducimus consequuntur excepturi omnis ullam non porro.
                    </p>
                    <button onClick={handleClose} className='px-4 py-2 rounded-lg bg-red-800 ml-4 text-white cursor-pointer'>Close</button>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
