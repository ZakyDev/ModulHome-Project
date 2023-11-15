import React, { useContext, useState } from "react";
import {
  RiHome5Fill,
  RiArrowDownSFill,
  RiArrowUpSLine,
  RiMapPinLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setprice } = useContext(HouseContext);
  const [isopen, setisopen] = useState(false);

  const prices = [
    {
      value: "Tous les prix",
    },
    {
      value: "10.000 - 65.000",
    },
    {
      value: "65.000 - 150.000",
    },
    {
      value: "150.000 - 300.000",
    },
    {
      value: "300.000 - 700.000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setisopen(!isopen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Fill className="dropdown-icon-primary " />
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {" "}
            {price}{" "}
          </div>{" "}
          <div className="text-[13px]"> Fourchette € </div>{" "}
          {isopen ? (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          )}{" "}
        </div>{" "}
      </Menu.Button>{" "}
      <Menu.Items className="dropdown-menu">
        {" "}
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setprice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {price.value}{" "}
            </Menu.Item>
          );
        })}{" "}
      </Menu.Items>{" "}
    </Menu>
  );
};

export default PriceRangeDropdown;
