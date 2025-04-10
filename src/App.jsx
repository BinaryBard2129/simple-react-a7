

import './App.css'
import Auctions from './Components/Auctions/Auctions'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'




function App() {
  

  return (
    <>
      
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='bg-blue-100 '>
      <div className='Main-Container flex '>
        <div className='left-container w-[70%]'> 
           <Auctions></Auctions>  
        </div>
        <div className='right-container w-[30%]'> 
        
        </div>
      </div>
      </div>
    </>
  )
}

export default App
