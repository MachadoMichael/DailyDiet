import styled, { css } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity<{
  size: string;
  style: string;
}>`
  width: ${(props) => (props.size === "BIG" ? 327 : 160)}px;
  height: 50px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${theme.COLORS.GRAY_200};
  background-color: ${(props) =>
    props.style === "DARK" ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};
`;

export const Text = styled.Text<{ color: string }>`
  padding: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.color === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};
  font-size: ${theme.FONT_SIZE.XSM};
`;
