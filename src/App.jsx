

import './App.css'
import Auctions from './Components/Auctions/Auctions'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import { CiHeart } from "react-icons/ci";




function App() {
  

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-blue-100 '>
      <div className='Main-Container flex'>
        <div className='left-container w-[70%]'> 
           <Auctions></Auctions>  
        </div>
        <div className='right-container w-[30%] mt-32 mr-10'> 
        <div className="bg-white rounded-xl shadow-md p-6 w-80  text-center flex flex-col justify-between h-60">
      <div>
        <div className="flex items-center justify-center gap-2 text-blue-900 font-semibold text-lg mb-4">
        <CiHeart />
          <span>Favorite Items</span>
        </div>

        <h2 className="font-semibold text-black text-base">No favorites yet</h2>
        <p className="text-gray-500 text-sm mt-1">
          Click the heart icon on any item<br />to add it to your favorites
        </p>
      </div>

      <div className="border-t pt-4 mt-4 flex justify-between text-sm font-medium">
        <span>Total bids Amount</span>
        <span className="font-semibold text-black">$0000</span> 
      </div>
    </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
