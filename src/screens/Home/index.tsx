import { Header } from "../../components/Header";
import { Container, Day, NewMealContainer, Text } from "./styles";

import { SectionList } from "react-native";

import { useEffect, useContext, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { MealsContext } from "../../Context/MealsContext";
import { getMealList } from "../../storage/getMealList";
import { Painel } from "../../components/Painel";
import { Button } from "../../components/Button";
import { SelectedMealContext } from "../../Context/SelectedMealContext";
import { MealData } from "../../@types/mealData";
import { Meal } from "../../components/Meal";

export type DateListType = {
  date: string;
  data: MealData[];
};

export function Home() {
  const { meals, setMeals } = useContext(MealsContext);
  const [dates, setDates] = useState([] as DateListType[]);
  const { setSeletedMeal } = useContext(SelectedMealContext);
  const { navigate } = useNavigation();

  useEffect(() => {
    getMealList().then((response) => {
      if (response !== null) {
        setMeals(response);
      } else {
        console.log(response, "getMealList");
      }
    });
  }, []);

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
        ListHeaderComponent={
          <>
            <Header />
            <Painel showDetails={true} />
            <NewMealContainer>
              <Text>Refeições</Text>
              <Button
                size="BIG"
                text="Nova refeição"
                icon="PLUS"
                style="DARK"
                onPress={() => navigate("newmeal")}
              />
            </NewMealContainer>
          </>
        }
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
