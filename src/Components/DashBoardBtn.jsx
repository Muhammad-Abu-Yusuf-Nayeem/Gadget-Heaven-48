import React from 'react';

const DashBoardBtn = () => {
    return (
      <div>
        <div id="Dashboard-btn" className="flex justify-center gap-6 pb-6">
          <button className="btn btn-outline rounded-full text-xl px-16 py-6 border-white text-white">
            Cart
          </button>
          <button className="btn rounded-full font-bold text-xl text-[#8b27dd] px-16 py-6">
            wishlist
          </button>
        </div>
      </div>
    );
};

export default DashBoardBtn;