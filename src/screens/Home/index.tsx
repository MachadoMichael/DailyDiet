import { Header } from "../../components/Header";
import { Container, NewMealContainer, Text } from "./styles";

import { MealList } from "../../components/MealList";

import { useState, useEffect, useContext } from "react";

import { useNavigation } from "@react-navigation/native";
import { MealsContext } from "../../Context/MealsContext";
import { getMealList } from "../../storage/getMealList";
import { Painel } from "../../components/Painel";
import { Button } from "../../components/Button";

export function Home() {
  const { setMeals } = useContext(MealsContext);
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

  return (
    <Container disableScrollViewPanResponder>
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
      <MealList />
    </Container>
  );
}
