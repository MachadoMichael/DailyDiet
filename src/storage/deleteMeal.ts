import { getMealList } from "./getMealList";

export async function deleteMeal(id: string) {
  try {
    const storageMeals = await getMealList();

    const newMealList = storageMeals.filter((meal) => meal.id !== id);

    return newMealList;
  } catch (error) {
    console.log(error);
  }
}
