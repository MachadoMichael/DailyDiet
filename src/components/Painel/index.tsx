import {
  ArrowForHome,
  ArrowForStatitics,
  Home,
  Statistics,
  PercentText,
  Text,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { useContext } from "react";

import { useNavigation } from "@react-navigation/native";
import { CalculatorContext } from "../../Context/CalculatorContext";

type Props = {
  showDetails: boolean;
};

export function Painel({ showDetails }: Props) {
  const { COLORS } = useTheme();
  const { navigate } = useNavigation();
  const { percentOnDiet } = useContext(CalculatorContext);

  if (showDetails === true) {
    return (
      <Home
        bgColor={percentOnDiet >= 50 ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
        onPress={() => navigate("statistics")}
      >
        <ArrowForStatitics>
          <MaterialCommunityIcons
            name="arrow-top-right"
            size={24}
            color={percentOnDiet >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
          />
        </ArrowForStatitics>

        <PercentText>{percentOnDiet.toFixed(2)}%</PercentText>
        <Text>das refeições dentro da dieta</Text>
      </Home>
    );
  } else {
    return (
      <Statistics
        bgColor={percentOnDiet >= 50 ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}
      >
        <ArrowForHome>
          <AntDesign
            name="arrowleft"
            size={24}
            color={percentOnDiet >= 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK}
            onPress={() => navigate("home")}
          />
        </ArrowForHome>

        <PercentText>{percentOnDiet.toFixed(2)}%</PercentText>
        <Text>das refeições dentro da dieta</Text>
      </Statistics>
    );
  }
}
