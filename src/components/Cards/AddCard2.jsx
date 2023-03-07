import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddCard() {

    const navigation = useNavigate();
    return (
        <>
            <div class="p-4 md:w-1/3 " onClick={() => {
                localStorage.setItem('Id', 'id')
                navigation('/addshop')
            }}>
                <div class="h-56 border-2 border-gray-200 bg-gray-100 border-opacity-60 rounded-xl overflow-hidden flex justify-center items-center">
                    <div className="w-full h-16 rounded-t-xl px-8 ">
                        <center>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className='text-black'>Add New</h3>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}
