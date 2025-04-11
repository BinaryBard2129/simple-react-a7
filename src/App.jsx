

import './App.css'
import Footer from './Components/Footer/Footer'
import Auctions from './Components/Auctions/Auctions'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { CiHeart } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react'


function App() {
  
   const [products , setProducts] = useState([])
   

   const handleProduct = (item) => {
    const newProduct = [...products , item]
    setProducts(newProduct) 
    
   }
  
  const handleRemoveButton = (id) => {
    setProducts(prevProducts => prevProducts.filter((prod) => prod.id !== id))
  }

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-blue-100 h-[60vw]'>
      <div className='Main-Container flex'>
        <div className='left-container w-[70%]'> 
          <Auctions handleProduct={handleProduct} handleRemoveButton={handleRemoveButton}></Auctions>  
        </div>
        <div className='right-container w-[30%] mt-32 mr-10'> 
        <div className="bg-white rounded-xl shadow-md p-6 w-80 text-center flex flex-col justify-between h-auto"> 
      <div>
        <div className="flex items-center justify-center gap-2 text-blue-900 font-semibold text-lg mb-4">
        <CiHeart />
          <span>Favorite Items</span>
        </div>
      <div className='space-y-2'> 
        {
          products.map((prod)=> 
            <div className="bg-white p-2 rounded-2xl shadow-md flex items-center gap-4  w-full max-w-md">
          <img
            className="w-16 h-16 rounded object-cover"
            src={prod.image}
            alt={prod.name}
          />
        
          <div className="flex flex-col flex-grow gap-1">
            <div className="flex justify-between items-start">
              <h2 className="text-base font-semibold text-gray-800">{prod.name}</h2>
              <button className="text-gray-400 hover:text-red-500 transition">
                <RxCross2 onClick={()=>handleRemoveButton(prod.id)} size={18} /> 
              </button>
            </div>
        
            <div className="text-sm text-gray-600 flex justify-between">
              <p className="font-medium"> {prod.bid}</p>
              <p className="text-xs text-gray-400">Bids: 12</p> 
            </div>
          </div>
        </div>
          )
        }
        </div>
      </div> 

      <div className="border-t pt-4 mt-4 flex justify-between text-sm font-medium">
        <span>Total bids Amount</span>
        <span className="font-semibold text-black">$0000</span> 
      </div>
    </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
