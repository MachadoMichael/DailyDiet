import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealData } from "../@types/mealData";

export async function setMealList(mealList: MealData[]) {
  try {
    const stringfyData = JSON.stringify(mealList);
    await AsyncStorage.setItem("mealList", stringfyData);
  } catch (error) {
    console.log(error);
  }
}
