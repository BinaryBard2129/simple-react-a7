import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
const Auction = ({auctions , handleProduct , handleCountButton }) => {
  const [disabledButtons, setDisabledButtons] = useState({});

  const showToast = (message) => {
    const toastContainer = document.getElementById('custom-toast-container');


    const toast = document.createElement('div');
    toast.className = 'alert alert-success shadow-lg mb-2';
    toast.innerHTML = `<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const handleClick = (item) => {
    handleProduct(item);
    handleCountButton(item.bid);
    showToast('Item added to your favourite list');

    setDisabledButtons((prev) => ({
      ...prev,
      [item.name]: true,
    }));
  };

    return (
        <div>
          <div className="toast toast-end z-50 fixed top-5 right-5" id="custom-toast-container"></div>
         <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 shadow-md">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid now</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((item, index) => (
            <tr key={index}>
              
              <td>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16">
                    <img
                      src={item.image}
                      alt={item.name} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                  </div>
                </div>
              </td>

              
              <td className="font-medium text-base">{item.bid}</td>

              
              <td>{item.timeLeft}</td>

              
              <td>
                <button onClick={()=>{handleProduct(item); handleCountButton(item.bid); handleClick(item)}} disabled={disabledButtons[item.name]} className={`text-lg transition-all duration-200 ${
                      disabledButtons[item.name]
                        ? 'text-red-700 cursor-not-allowed opacity-50'
                        : 'text-red-500 hover:text-red-600'
                    }`} title={disabledButtons[item.name] ? 'Already added' : 'Add to favourite'}>
                  <FaRegHeart /> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default Auction;