import {
  Container,
  Details,
  Header,
  Title,
  SubTitle,
  Text,
  Box,
  DietBox,
  ButtonBox,
  Section,
  ArrowButtonContainer,
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { SelectedMealContext } from "../../Context/SelectedMealContext";

import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { deleteMeal } from "../../storage/deleteMeal";
import { MealsContext } from "../../Context/MealsContext";

import { setMealList } from "../../storage/setMealList";

export function MealDetails() {
  const { navigate } = useNavigation();
  const { selectedMeal } = useContext(SelectedMealContext);
  const { setMeals } = useContext(MealsContext);
  const { COLORS } = useTheme();

  function removeMeal() {
    deleteMeal(selectedMeal.id).then((response) => {
      if (response !== undefined) {
        setMeals(response);
        setMealList(response);
      } else {
        console.log("deleteMealError");
      }
    });
    navigate("home");
  }

  return (
    <Container>
      <Header>
        <ArrowButtonContainer>
          <FontAwesome5
            name="arrow-left"
            size={24}
            color="black"
            onPress={() => navigate("home")}
          />
        </ArrowButtonContainer>
        <Title>Refeição</Title>
      </Header>
      <Section>
        <Details>
          <Box>
            <SubTitle>{selectedMeal.name}</SubTitle>
            <Text>{selectedMeal.comment}</Text>
          </Box>

          <Box>
            <SubTitle>Data e hora</SubTitle>
            <Text>
              {selectedMeal.date} às {selectedMeal.hour}
            </Text>
          </Box>
          <Box>
            {selectedMeal.onDiet === true ? (
              <DietBox>
                <FontAwesome name="circle" size={14} color={COLORS.GREEN_MID} />
                <Text>dentro da dieta</Text>
              </DietBox>
            ) : (
              <DietBox>
                <FontAwesome name="circle" size={14} color={COLORS.RED_MID} />
                <Text>fora da dieta</Text>
              </DietBox>
            )}
          </Box>
        </Details>

        <ButtonBox>
          <Button
            size="BIG"
            style="DARK"
            icon="PENCIL"
            text="Editar refeição"
            onPress={() => navigate("updatemeal")}
          />
          <Button
            size="BIG"
            style="LIGHT"
            icon="TRASH"
            text="Excluir refeição"
            onPress={removeMeal}
          />
        </ButtonBox>
      </Section>
    </Container>
  );
}
