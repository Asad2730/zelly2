import React from 'react'
import support1 from '../../assets/images/support-1.png'
import support2 from '../../assets/images/support-2.png'
import support3 from '../../assets/images/support-3.png'
import support4 from '../../assets/images/support-4.png'



export default function Features() {
    return (
        <>
            <div className="flex flex-wrap items-center justify-start py-12 mx-5">
                <div className='md:w-1/4 sm:w-full'>
                    <div className='w-full flex flex-row align-middle justify-center my-2'>
                        <img src={support1} alt=" " className='hover:animate-spin w-15'/>
                        <div className='flex flex-col ml-2'>
                        <b><h2 className='bold'>Free Shipping</h2></b>
                        <h3>Free shipping on all order</h3>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/4'>
                    <div className='w-full flex flex-row align-middle justify-center my-2'>
                        <img src={support2} alt=" " className='hover:animate-spin w-15'/>
                        <div className='flex flex-col ml-2'>
                        <b><h2 className='bold'>Support 24/7</h2></b>
                        <h3>Free support anytime you need</h3>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/4'>
                    <div className='w-full flex flex-row align-middle justify-center my-2'>
                        <img src={support3} alt=" " className='hover:animate-spin w-15'/>
                        <div className='flex flex-col ml-2'>
                        <b><h2 className='bold'>Money Return</h2></b>
                        <h3>Easy Return Policy</h3>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/4'>
                    <div className='w-full flex flex-row align-middle justify-center my-2'>
                        <img src={support4} alt=" " className='hover:animate-spin  w-15'/>
                        <div className='flex flex-col ml-2'>
                        <b><h2 className='bold'>Order Discount</h2></b>
                        <h3>Free shipping on orders above 2500</h3>
                        </div>
                    </div>
                </div>     
            </div>
        </>
    );
}
