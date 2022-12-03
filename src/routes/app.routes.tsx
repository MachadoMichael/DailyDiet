import { createStackNavigator } from "@react-navigation/stack";
import { Apresentation } from "../screens/Apresentation";
import { Home } from "../screens/Home";
import { MealDetails } from "../screens/MealDetails";
import { NewMeal } from "../screens/NewMeal";
import { Statistics } from "../screens/Statistics";

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Screen name="apresentation" component={Apresentation} /> */}
      <Screen name="home" component={Home} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="mealdetails" component={MealDetails} />
      <Screen name="statistics" component={Statistics} />

    </Navigator>
  );
};
