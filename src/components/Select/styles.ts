import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.Pressable<{
  isSelected: boolean;
  baseColor: string;
}>`
  width: 160px;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid
    ${(props) =>
      props.isSelected === true 
        ? props.baseColor
        : ({ theme }) => theme.COLORS.GRAY_600};

  color: ${theme.COLORS.GRAY_100};
  background-color: ${(props) =>
    props.isSelected === true ? props.baseColor : theme.COLORS.GRAY_600};
`;

export const Text = styled.Text`
  padding: 14px;
  font-weight: 600;
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.XSM};
`;
