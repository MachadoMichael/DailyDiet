import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  margin-bottom: 14px;
`;

export const Statistic = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 85%;
  border-radius: 20px;
  align-items: center;
  padding-top: 24px;
  bottom: 40px;
`;

export const Details = styled.View`
  width: 327px;
  height: 89px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-bottom: 14px;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  font-weight: bold;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  padding-bottom: 14px;
`;

export const SmallDetails = styled.View`
  width: 327px;
  height: 107px;
  border-radius: 8px;
  margin-bottom: 14px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled.Text`
  margin-bottom: 14px;
`;

export const Scoreboard = styled.View<{ onDiet: boolean }>`
  width: 158px;
  height: 107px;

  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${(props) =>
    props.onDiet === true ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
