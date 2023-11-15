import React, { createContext, useState, useEffect } from "react";
import { housesData } from "../data";
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, sethouses] = useState(housesData);
  const [country, setcountry] = useState("Tous les lieux");
  const [countries, setcountries] = useState([]);
  const [property, setproperty] = useState("Tous");
  const [properties, setproperties] = useState([]);
  const [price, setprice] = useState("Tous les prix");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const allcountries = houses.map((houses) => {
      return houses.country;
    });

    //remove duplicates
    const uniquecountries = ["Tous les lieux", ...new Set(allcountries)];
    //console.log(uniquecountries);

    setcountries(uniquecountries);
  }, []);

  useEffect(() => {
    const allproperty = houses.map((houses) => {
      return houses.type;
    });

    //remove duplicates
    const uniqueproperty = ["Tous", ...new Set(allproperty)];
    //console.log(uniquecountries);

    setproperties(uniqueproperty);
  }, []);

  const handleClick = () => {
    // console.log(country, property, price);

    setloading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("Tous");
    };

    const minprice = parseInt(price.split(" ")[0]);

    const maxprice = parseInt(price.split(" ")[2]);

    const newHouse = housesData.filter((house) => {
      const houseprice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        houseprice >= minprice &&
        houseprice <= maxprice
      ) {
        return house;
      }
      //if All value are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      //if Country value are default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      //if Property value are default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }
      //if Price value are default

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (houseprice >= minprice && houseprice <= maxprice) {
          return house;
        }
      }
      if (!isDefault(property) && !isDefault(country) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (isDefault(property) && !isDefault(country) && !isDefault(price)) {
        if (houseprice >= minprice && houseprice <= maxprice) {
          return house.country === country;
        }
      }

      if (!isDefault(property) && isDefault(country) && !isDefault(price)) {
        if (houseprice >= minprice && houseprice <= maxprice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouse.length < 1 ? sethouses([]) : sethouses(newHouse),
        setloading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setcountry,
        countries,
        property,
        setproperty,
        properties,
        price,
        setprice,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}{" "}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
