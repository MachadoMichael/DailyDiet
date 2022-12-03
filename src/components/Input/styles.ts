import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View``;
export const TextInput = styled.TextInput<{ focus: boolean; size: string }>`
  width: ${(props) => (props.size === "BIG" ? 327 : 158)}px;
  height: 48px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid
    ${(props) =>
      props.focus === true ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_500};
`;

export const Label = styled.Text`
  padding: 14px 0;
  font-weight: 600;
  color: ${theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.XSM};
`;
