"use client";
import {createContext, useState} from "react";

const SelectedPlanContext = createContext({
  selectedPlan: "Small",
  plan_id: 2,
  usd_price: 10,
  setSelectedPlan: (name) => {},
  setPlanId: (id) => {},
  setUsdPrice: (price) => {},  
});

export function SelectedPlanContextProvider(props) {
  const [selectedPlan, setSelectedPlan] = useState("Small");
  const [plan_id, setPlanId] = useState(2);
  const [usd_price, setUsdPrice] = useState(10);

  function setSelectedPlanHandler(name, id, price) {
    setSelectedPlan(name);
    setPlanId(id);
    setUsdPrice(price);
  }

  const context = {
    selectedPlan: selectedPlan,
    plan_id: plan_id,
    usd_price: usd_price,
    setSelectedPlan: setSelectedPlanHandler
  };

  return (
    <SelectedPlanContext.Provider value={context}>
      {props.children}
    </SelectedPlanContext.Provider>
  );
}

export default SelectedPlanContext;
