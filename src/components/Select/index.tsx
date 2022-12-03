import { useEffect, useState } from "react";
import { Container, Text } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

type Props = {
  text: string;
  state: boolean;
  baseColor: string;
  action: () => void;
};

export function Select({ text, state, action, baseColor }: Props) {
  const { COLORS } = useTheme();
  const [isSelected, setIsSelected] = useState(state);

  useEffect(() => {
    selectValidation();
  }, [state, text]);
  
  function selectValidation() {
    if (text === "Sim" && state === true) setIsSelected(true);
    else if (text === "Sim" && state === false) setIsSelected(false);
    else if (text === "Não" && state === false) setIsSelected(true);
    else if (text === "Não" && state === true) setIsSelected(false);
  }

  return (
    <Container isSelected={isSelected} baseColor={baseColor} onPress={action}>
      <Entypo
        name="controller-record"
        size={18}
        color={text === "Sim" ? COLORS.GREEN_DARK : COLORS.RED_DARK}
      />
      <Text>{text}</Text>
    </Container>
  );
}
