import {
  Container,
  Text,
  Label,
  Details,
  Number,
  SmallDetails,
  Statistic,
  Scoreboard,
} from "./styles";

import { Painel } from "../../components/Painel";
import { useContext } from "react";
import { CalculatorContext } from "../../Context/CalculatorContext";

export function Statistics() {
  const { amountOfMeals, onDietMeals, offDietMeals, bestSequence } =
    useContext(CalculatorContext);
  return (
    <Container>
      <Painel showDetails={false} />

      <Statistic>
        <Label>Estatísticas gerais</Label>
        <Details>
          <Number>{bestSequence}</Number>
          <Text>Melhor sequência de pratos dentro da dieta</Text>
        </Details>
        <Details>
          <Number>{amountOfMeals}</Number>
          <Text>Refeições registradas</Text>
        </Details>
        <SmallDetails>
          <Scoreboard onDiet={true}>
            <Number>{onDietMeals}</Number>
            <Text>refeições dentro da dieta</Text>
          </Scoreboard>
          <Scoreboard onDiet={false}>
            <Number>{offDietMeals}</Number>
            <Text>refeições fora da dieta</Text>
          </Scoreboard>
        </SmallDetails>
      </Statistic>
    </Container>
  );
}
