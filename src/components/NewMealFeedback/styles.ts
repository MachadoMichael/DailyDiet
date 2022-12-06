import styled, { css } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  position: absolute;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${theme.COLORS.WHITE};
  z-index: 1;
`;

export const Title = styled.Text<{ onDiet: boolean }>`
  color: ${(props) =>
    props.onDiet === true ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const Subtitle = styled.View`
  flex-direction: row;
  margin-top: 14px;
  width: 80%;
`;

export const Text = styled.Text``;

export const Bold = styled.Text`
  font-weight: bold;
  max-width: 100%;
`;

export const ImageView = styled.View`
  margin: 28px;
`;
