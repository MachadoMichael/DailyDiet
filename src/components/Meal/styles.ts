import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 327px;
  height: 48px;
  border: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  align-content: center;
  justify-content: start;
  flex-direction: row;
  padding: 14px 0;
  box-sizing: border-box;
  margin-bottom: 8px;
`;

export const Time = styled.View`
  padding: 0 14px;
`;

export const Text = styled.Text``;

export const MealContainer = styled.View`
  width: 65%;
  padding: 0 14px;
  border: 1px solid transparent;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Signal = styled.View`
  padding: 0 14px;
`;
