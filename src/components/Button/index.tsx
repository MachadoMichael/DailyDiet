import { Container, Text } from "./styles";
import { useTheme } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

type Props = {
  text: string;
  style: string;
  size: string;
  icon?: string;
  onPress?: () => void;
};

export function Button({ text, icon, style, size = "BIG", onPress }: Props) {
  const { COLORS } = useTheme();
  return (
    <Container size={size} style={style} onPress={onPress}>
      {icon === "PLUS" ? (
        <AntDesign
          name="plus"
          size={18}
          color={style === "DARK" ? COLORS.WHITE : COLORS.GRAY_100}
        />
      ) : (
        false
      )}

      {icon === "TRASH" ? (
        <Ionicons
          name="trash-outline"
          size={18}
          color={style === "DARK" ? COLORS.WHITE : COLORS.GRAY_100}
        />
      ) : (
        false
      )}

      {icon === "PENCIL" ? (
        <MaterialCommunityIcons
          name="lead-pencil"
          size={18}
          color={style === "DARK" ? COLORS.WHITE : COLORS.GRAY_100}
        />
      ) : (
        false
      )}

      <Text color={style}>{text}</Text>
    </Container>
  );
}
