import { NutritionFact } from "../Components/NutritionFacts";

export type Portion = {
  amount: number;
  gramWeight: number;
  measureUnit: string;
  id?: string;
};

export interface FoodSearchResult {
  id: string;
  name: string;
  nutrition: NutritionFact[];
}
