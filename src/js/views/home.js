import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { SWCharacters } from "../component/SWCharacters";
import { SWPlanets } from "../component/SWPlanets";
import { SWVehicles } from "../component/SWVehicles";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <SWCharacters />
      <SWPlanets />
      <SWVehicles />
    </div>
  );
};
