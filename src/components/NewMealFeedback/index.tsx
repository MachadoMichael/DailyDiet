import { Bold, Container, ImageView, Subtitle, Text, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";
import OnDietSvg from "../Svg/onDient";
import OffDietSvg from "../Svg/offDiet";
import { Button } from "../Button";

type Props = {
  feedbackIsPositive: boolean;
  setFeedbackIsPositive: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NewMealFeedback({
  setFeedbackIsPositive,
  feedbackIsPositive,
}: Props) {
  const { navigate } = useNavigation();

  return (
    <Container>
      {feedbackIsPositive === true ? (
        <>
          <Title onDiet={feedbackIsPositive}>Continue assim!</Title>
          <Subtitle>
            <Text>Você continua </Text>
            <Bold>dentro da dieta.</Bold>
            <Text> Muito bem!</Text>
          </Subtitle>

          <ImageView>
            <OnDietSvg />
          </ImageView>
        </>
      ) : (
        <>
          <Title onDiet={feedbackIsPositive}>Que pena!</Title>

          <Subtitle>
            <Text>Você </Text>
            <Bold>saiu da dieta</Bold>
            <Text> dessa vez, mas continue</Text>
          </Subtitle>

          <Text> se esforçando e não desista</Text>

          <ImageView>
            <OffDietSvg />
          </ImageView>
        </>
      )}

      <Button
        size="SMALL"
        style="DARK"
        text="Ir para a página inicial"
        onPress={() => {
          navigate("home");
          setFeedbackIsPositive(false);
        }}
      />
    </Container>
  );
}
