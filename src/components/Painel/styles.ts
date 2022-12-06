import styled from "styled-components/native";

export const Home = styled.Pressable<{ bgColor: string }>`
  border-radius: 6px;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 136px;
  justify-content: center;
  align-items: center;
`;

export const Statistics = styled.View<{ bgColor: string }>`
  border-radius: 6px;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  margin-bottom: 14px;
`;

export const PercentText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
  font-weight: bold;
`;

export const ArrowForStatitics = styled.Text`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ArrowForHome = styled.Text`
  position: absolute;
  left: 10px;
  top: 30px;
`;
