import React from 'react';

const Banner = () => {
    return (
        <div className='w-full'>
            <div className='h-[90vh] w py-40 px-12 bg-cover bg-center ' style={{
    backgroundImage: "url('https://i.ibb.co.com/qYw13SmJ/Banner-min.jpg')",
  }}>
                <div className='gap-3'>
                <h1 className='text-5xl text-white'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='text-3xl text-white font-light mt-1.5'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='btn text-2xl p-7 rounded-4xl mt-3 transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-lg'>Explore Auctions</button> 
                </div>  
            </div>
        </div>
    );
};

export default Banner;