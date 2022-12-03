import { createContext, useEffect, useState } from "react";
import { MealData } from "../@types/mealData";

type MealsContextType = {
  meals: MealData[];
  setMeals: React.Dispatch<React.SetStateAction<MealData[]>>;
};

export const MealsContext = createContext({} as MealsContextType);

export function MealsProvider(props: any) {
  const [meals, setMeals] = useState<MealData[]>([]);

  return (
    <MealsContext.Provider value={{ meals, setMeals }}>
      {props.children}
    </MealsContext.Provider>
  );
}
