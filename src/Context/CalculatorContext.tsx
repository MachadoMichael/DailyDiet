import { createContext, useEffect, useState, useContext } from "react";
import { MealsContext } from "../Context/MealsContext";

type CalculatorContextType = {
  amountOfMeals: number;
  percentOnDiet: number;
  onDietMeals: number;
  offDietMeals: number;
  currentSequence: number;
  setCurrentSequence: React.Dispatch<React.SetStateAction<number>>;
  bestSequence: number;
  setBestSequence: React.Dispatch<React.SetStateAction<number>>;
};

export const CalculatorContext = createContext({} as CalculatorContextType);

export function CalculatorProvider(props: any) {
  const { meals } = useContext(MealsContext);

  const [onDietMeals, setOnDietMeals] = useState(0);
  const [offDietMeals, setOffDietMeals] = useState(0);
  const [bestSequence, setBestSequence] = useState(0);
  const [currentSequence, setCurrentSequence] = useState(0);

  const [amountOfMeals, setAmoutOfMeals] = useState(0);
  const [percentOnDiet, setPercentOnDiet] = useState(0);

  useEffect(() => {
    separatingMealsByDiet();
    setAmoutOfMeals(meals.length);
  }, [meals]);

  useEffect(() => {
    setPercentOnDiet((onDietMeals * 100) / amountOfMeals);
  }, [amountOfMeals]);

  useEffect(() => {
    bestSequence < currentSequence ? setBestSequence(currentSequence) : false;
  }, [currentSequence]);

  percentOnDiet === Infinity ? setPercentOnDiet(0) : false;
  
  function separatingMealsByDiet() {
    if (meals.length === 0) {
    } else {
      setOnDietMeals(0);
      setOffDietMeals(0);
      meals.map((meal) => {
        if (meal.onDiet === true) {
          setOnDietMeals((prev) => prev + 1);
        } else if (meal.onDiet === false) {
          setOffDietMeals((prev) => prev + 1);
        }
      });
    }
  }

  return (
    <CalculatorContext.Provider
      value={{
        amountOfMeals,
        percentOnDiet,
        onDietMeals,
        offDietMeals,
        currentSequence,
        setCurrentSequence,
        bestSequence,
        setBestSequence,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
}
