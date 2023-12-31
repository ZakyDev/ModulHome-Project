import React from "react";

import { housesData } from "../data";
import { Link, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  // console.log(house);

  return (
    <div className=" container mx-auto min-h-[800px] mb-14 ">
      <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between ">
        <div>
          <h2 className="text-2xl font-semibold"> {house.name} </h2>{" "}
          <h3 className=" text-lg mb-4"> {house.address} </h3>{" "}
        </div>{" "}
        <div className=" mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className=" bg-green-500 text-white px-3 rounded-full">
            {" "}
            {house.type}{" "}
          </div>{" "}
          <div className=" bg-violet-500 text-white px-3 rounded-full">
            {" "}
            {house.country}{" "}
          </div>{" "}
        </div>{" "}
        <div className=" text-3xl font-semibold text-black">
          {house.price} €{" "}
        </div>{" "}
      </div>{" "}
      <div className=" flex flex-col items-start gap-8 lg:flex-row">
        <div className=" max-w-[768px]">
          <div className=" mb-8">
            <img src={house.imageLg} alt="" />
          </div>
          <div className="flex gap-x-6 text-violet-700 mb-6">
            <div className=" flex gap-x-2 items-center">
              <BiBed className=" text-2xl" />
              <div>{house.bedrooms} </div>
            </div>
            <div className=" flex gap-x-2 items-center">
              <BiBath className=" text-2xl" />
              <div>{house.bathrooms} </div>
            </div>
            <div className=" flex gap-x-2 items-center">
              <BiArea className=" text-2xl" />
              <div>{house.surface} </div>
            </div>
          </div>
          <div>{house.description} </div>
        </div>
        <div className=" flex-1 bg-white w-full mb-8 border-gray-300 rounded-lg px-6 py-8">
          <div className=" flex items-center gap-x-4 mb-8">
            <div className=" w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src={house.agent.image} alt="" />
            </div>
            <div>
              <div className=" font-bold text-lg">{house.agent.name} </div>
              <Link className=" text-green-700 text-sm">WhatshApp</Link>
            </div>
          </div>

          <form className="flex flex-col gap-y-2">
            <input
              className=" border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              placeholder="Nom & Prénom"
              type="text"
            />
            <input
              className=" border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              placeholder="Email"
              type="text"
            />
            <input
              className=" border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
              placeholder="Téléphone"
              type="text"
            />
            <textarea
              className=" border border-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 h-36 text-sm text-gray-400"
              defaultValue="Bonjour, je suis intéressé par cette annonce..."
              placeholder="Votre message..."
            ></textarea>

            <div className="flex gap-2">
              <button className=" bg-black hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                Evoyer
              </button>
              <button className=" border border-black hover:bg-violet-800 text-black hover:text-white rounded p-4 text-sm w-full transition">
                Me rappeler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
