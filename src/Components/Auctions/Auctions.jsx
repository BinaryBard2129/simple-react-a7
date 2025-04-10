import React, { useEffect, useState } from 'react';
import Auction from '../Auction/Auction';

const Auctions = () => {
    
    const [auctions , setAuction] = useState([])

    useEffect(()=>{
        fetch('item.json').then(res=>res.json()).then(data=>setAuction(data))
    },[]) 
    console.log(auctions) 
    return (
        <div>
            <div className='mt-13 ml-37'>
            <h1 className='text-2xl font-bold'>Active Auctions</h1>
            <p className='font-light'>Discover and bid on extraordinary items</p> 
            </div>
            <div className='flex justify-center items-center mt-5'>
                <Auction auctions={auctions}></Auction> 
            </div>
        </div>
    );
};

export default Auctions;