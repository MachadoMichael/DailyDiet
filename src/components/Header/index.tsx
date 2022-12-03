import { Container, Text, Logo, CircleContainer } from "./styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export function Header() {
  return (
    <Container>
      <Logo>
        <MaterialCommunityIcons
          name="silverware-fork-knife"
          size={32}
          color="black"
        />
        <Text>Daily Diet</Text>
      </Logo>

      <CircleContainer>
        <AntDesign name="user" size={24} color="black" />
      </CircleContainer>
    </Container>
  );
}
