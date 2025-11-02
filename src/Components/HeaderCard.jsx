import React from 'react';

const HeaderCard = ({ headerTitle="Add title from HeaderCard.jsx" }) => {
  return (
    <div>
      <div className="flex">
        <div className=" bg-[#9538E2] w-full mx-6 rounded-b-2xl mb-1">
          <div className="hero-content text-center flex flex-col mx-auto relative">
            <div className="w-7/10 ">
              <h1 className="text-4xl font-bold  mx-auto text-white pt-6">
                {headerTitle}
              </h1>
              <p className="py-6 text-gray-300 text-sm w-7/10 mx-auto">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;