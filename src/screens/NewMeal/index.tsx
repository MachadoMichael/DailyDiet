import { Input } from "../../components/Input";
import {
  Container,
  Form,
  CommentInput,
  Label,
  SmallInputs,
  SmallButtons,
  Header,
  Title,
  Section,
} from "./styles";
import { useState, useContext } from "react";
import { Button } from "../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Select } from "../../components/Select";
import { useTheme } from "styled-components/native";

import { MealsContext } from "../../Context/MealsContext";
import { CalculatorContext } from "../../Context/CalculatorContext";
import { setMealList } from "../../storage/setMealList";

export function NewMeal() {
  const [focus, setFocus] = useState(false);
  const [onDiet, setOnDiet] = useState(true);

  const [foodName, setFoodName] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const { navigate } = useNavigation();

  const { meals, setMeals } = useContext(MealsContext);
  const { setCurrentSequence } = useContext(CalculatorContext);

  const { COLORS } = useTheme();

  function clearFields() {
    setFoodName("");
    setComment("");
    setDate("");
    setHour("");
    setOnDiet(true);
  }

  function mealValidation() {
    const fields = [foodName, comment, date, hour];

    fields.includes("") === true
      ? alert("Por favor preencha todos os campos")
      : !date.includes("/")
      ? alert("Por favor verifique a formatação da data")
      : !hour.includes(":")
      ? alert("Por favor verifique a formatação do horário")
      : createNewMeal();
  }

  function createNewMeal() {
    const newMeal = {
      name: foodName,
      comment: comment,
      onDiet: onDiet,
      date: date,
      hour: hour,
      id: foodName + date + hour,
    };

    const newMealsList = [...meals];
    newMealsList.push(newMeal);
    setMeals(newMealsList);
    setMealList(newMealsList);

    dietSequenceValidation(onDiet);

    alert("Refeição adcicionada com sucesso.");
    navigate("home");
    clearFields();
  }

  function dietSequenceValidation(onDiet: boolean) {
    if (onDiet === true) {
      setCurrentSequence((prevState) => prevState + 1);
    } else {
      setCurrentSequence(0);
    }
  }

  return (
    <Container>
      <Header>
        <FontAwesome5
          name="arrow-left"
          size={24}
          color="black"
          onPress={() => navigate("home")}
        />
        <Title>Nova refeição</Title>
      </Header>
      <Section>
        <Form>
          <Input
            placeholder="Banana"
            value={foodName}
            setValue={setFoodName}
            label="Refeição"
            size="BIG"
          />
          <Label>Descrição</Label>
          <CommentInput
            placeholder="duas bananas com canela"
            value={comment}
            onChangeText={setComment}
            multiline={true}
            focus={focus}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />

          <SmallInputs>
            <Input
              value={date}
              setValue={setDate}
              label="Data"
              size="SMALL"
              placeholder="01/01/01"
            />
            <Input
              value={hour}
              setValue={setHour}
              label="Hora"
              size="SMALL"
              placeholder="12:20"
            />
          </SmallInputs>

          <Label>Está dentro da dieta?</Label>
          <SmallButtons>
            <Select
              state={onDiet}
              baseColor={COLORS.GREEN_LIGHT}
              text="Sim"
              action={() => setOnDiet(true)}
            />
            <Select
              state={onDiet}
              baseColor={COLORS.RED_LIGHT}
              text="Não"
              action={() => setOnDiet(false)}
            />
          </SmallButtons>
        </Form>
        <Button
          size="BIG"
          style="DARK"
          text="Cadastrar refeição"
          onPress={mealValidation}
        />
      </Section>
    </Container>
  );
}
