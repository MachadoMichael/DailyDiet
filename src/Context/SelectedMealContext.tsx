import { createContext, useState } from "react";
import { MealData } from "../@types/mealData";

type SelectedMealContextType = {
  selectedMeal: MealData;
  setSeletedMeal: React.Dispatch<React.SetStateAction<MealData>>;
};

export const SelectedMealContext = createContext({} as SelectedMealContextType);

export function SelectedMealProvider(props: any) {
  const [selectedMeal, setSeletedMeal] = useState<MealData>({} as MealData);

  return (
    <SelectedMealContext.Provider value={{ selectedMeal, setSeletedMeal }}>
      {props.children}
    </SelectedMealContext.Provider>
  );
}
