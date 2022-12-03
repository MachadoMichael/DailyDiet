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

export const Section = styled.View`
  width: 100%;
  height: 85%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: space-between;
  padding: 14px;
  align-items: center;
  border-radius: 20px;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CommentInput = styled.TextInput<{ focus: boolean }>`
  width: 327px;
  height: 80px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  border: 1px solid
    ${(props) =>
      props.focus === true ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_500};
`;

export const Title = styled.Text`
  width: 327px;
  margin-top: 14px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  padding-left: 80px;
  padding-bottom: 20px;
`;

export const Label = styled.Text`
  width: 327px;
  margin: 14px 0;
`;

export const SmallInputs = styled.View`
  width: 327px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
export const SmallButtons = styled.View`
  width: 327px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
