import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    price,
    name,
    image,
    address,
    bathrooms,
    bedrooms,
    description,
    type,
    country,
    surface,
  } = house;
  return (
    <div className="bg-white shadow-1 items-center rounded-lg rounded-tl-[80px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full px-3 text-white">{type}</div>
        <div className=" bg-violet-500 rounded-full text-white px-3 ">
          {country}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] ">{name}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-black-600 mb-4">
        {price} € 
      </div>
    </div>
  );
};

export default House;
