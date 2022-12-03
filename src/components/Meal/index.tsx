import { Container, Text, Time, MealContainer, Signal } from "./styles";

import { useTheme } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import { MealData } from "../../@types/mealData";

type Props = {
  meal: MealData;
  onTheDiet: boolean;
  action: () => void;
};

export function Meal({ meal, onTheDiet, action }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container onPress={action}>
      <Time>
        <Text>{meal.hour}</Text>
      </Time>
      <MealContainer>
        <Text>{meal.name}</Text>
      </MealContainer>
      <Signal>
        <FontAwesome
          name="circle"
          size={18}
          color={onTheDiet === true ? COLORS.GREEN_MID : COLORS.RED_MID}
        />
      </Signal>
    </Container>
  );
}
