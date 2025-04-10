import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
const Auction = ({auctions}) => {
    return (
        <div>
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
                <button className=" text-red-500 text-lg">
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