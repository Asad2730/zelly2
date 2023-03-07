import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ id, name, price, title, img, onClick }) {

    let nav = useNavigate();


    return (
        <>
            <div class="p-4 md:w-1/3 sm:w-full">
                <div class="h-56 border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden">
                    <div className="w-full h-16 bg-gray-100 rounded-t-xl px-8 py-5 border-gray-300 border">
                        <div className='flex flex-row justify-between'>
                            <h3>{title}</h3>
                            <section className='flex flex-row'>
                                <div
                                    onClick={() => {
                                        localStorage.setItem('Id', id)
                                        localStorage.setItem('pid', id)
                                        nav('/addproduct')
                                    }}
                                    className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                </div>

                                <div
                                    onClick={() => onClick(id)}
                                    className=''>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='flex flex-row justify-around'>
                        <div class="p-6">
                            <img src={`http://localhost:2000/uploads/${img}`} alt=' ' className='rounded-xl' />
                        </div>
                        <div class="p-6">
                            <h2 class="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">{name}</h2>

                            <div class="flex items-center flex-wrap justify-between">
                                <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href=" ">${price}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
