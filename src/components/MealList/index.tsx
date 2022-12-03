import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { MealData } from "../../@types/mealData";

import { MealsContext } from "../../Context/MealsContext";
import { SelectedMealContext } from "../../Context/SelectedMealContext";

import { Meal } from "../Meal";
import { Container, Day } from "./styles";

export type DateListType = {
  date: string;
  data: MealData[];
};

export function MealList() {
  const { meals } = useContext(MealsContext);
  const [dates, setDates] = useState([] as DateListType[]);
  const { setSeletedMeal } = useContext(SelectedMealContext);
  const { navigate } = useNavigation();

  useEffect(() => {
    const datesCopy = [] as DateListType[];
    const datesArray: string[] = [];

    meals.map((meal) => setDayOfMeal(meal));

    function setDayOfMeal(meal: MealData) {
      datesCopy.map((element) => {
        datesArray.push(element.date);
      });

      const index = datesArray.indexOf(meal.date);
      addMeal(datesCopy, index, meal);
    }

    function addMeal(datesCopy: DateListType[], index: number, meal: MealData) {
      index !== -1
        ? datesCopy[index].data.push(meal)
        : datesCopy.push({ date: meal.date, data: [meal] });
    }
    setDates(datesCopy);
  }, [meals]);

  function selectingMeal(meal: MealData) {
    setSeletedMeal(meal);
    navigate("mealdetails");
  }

  return (
    <Container>
      <SectionList
        // scrollEnabled={false}
        sections={dates}
        renderItem={({ item }) => (
          <Meal
            meal={item}
            onTheDiet={item.onDiet}
            key={item.id}
            action={() => selectingMeal(item)}
          />
        )}
        renderSectionHeader={({ section: { date } }) => <Day>{date}</Day>}
      />
    </Container>
  );
}
