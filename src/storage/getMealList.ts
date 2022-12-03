import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealData } from "../@types/mealData";

export async function getMealList() {
  const storageString = await AsyncStorage.getItem("mealList");

  if (storageString !== null) {
    const storageMealList: MealData[] = JSON.parse(storageString);

    console.log(storageMealList, 'AMAMA')
    return storageMealList;
  } else {
    return [] as MealData[];
  }
}
