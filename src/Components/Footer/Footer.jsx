import React from 'react';

const Footer = () => {
    return (
        <div className='h-[230px] w-full' >
            <div className='flex flex-col justify-center items-center text-center mt-18 gap-3.5'>
            <h1 className='text-xl'><span className='text-blue-600'>Auction</span><span className='text-yellow-500 font-bold ml-1'>Gallery</span></h1> 
            <div className='flex gap-2'>
                <h3>Bid.</h3>
                <h3>Win.</h3>
                <h3>Own.</h3>
            </div>
            <div className='flex gap-2.5'> 
                <h3>Home</h3>
                <h3>Auction</h3>
                <h3>Categories</h3>
                <h3>How to work</h3>
            </div>
            <p>© 2025 AuctionHub. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer; 