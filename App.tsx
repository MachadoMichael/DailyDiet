import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/routes";
import { MealsProvider } from "./src/Context/MealsContext";
import { CalculatorProvider } from "./src/Context/CalculatorContext";

import { SelectedMealProvider } from "./src/Context/SelectedMealContext";

import theme from "./src/theme";
import { Select } from "./src/components/Select";

export default function App() {
  // const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <MealsProvider>
        <CalculatorProvider>
          <SelectedMealProvider>
            <StatusBar
              barStyle="dark-content"
              backgroundColor="transparent"
              translucent
            />
            <Routes />
            {/* {fontsLoaded ? <Routes /> : <Loading />} */}
          </SelectedMealProvider>
        </CalculatorProvider>
      </MealsProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
