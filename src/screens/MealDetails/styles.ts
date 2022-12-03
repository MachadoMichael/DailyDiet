import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  background-color: ${theme.COLORS.GRAY_500};
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  height: 15%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ArrowButtonContainer = styled.View`
  position: absolute;
  left: 2%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
`;

export const Section = styled.View`
  width: 100%;
  height: 85%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
`;

export const Details = styled.View`
  width: 100%;
`;

export const Box = styled.View`
  margin: 14px 28px;
  justify-content: flex-start;
  width: 80%;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Text = styled.Text``;

export const DietBox = styled.View`
  max-width: 137px;
  align-items: center;
  flex-direction: row;
  padding: 14px;
  justify-content: space-between;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const ButtonBox = styled.View`
  height: 24%;
  justify-content: space-evenly;
  align-items: center;

  /* background-color: brown; */
`;
