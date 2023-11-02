export type Portion = {
  amount: number;
  gramWeight: number;
  measureUnit: string;
  id?: string;
};

export interface FoodSearchResult {
  foods: { id: string; name: string; portions?: Portion[] }[];
  foodProducts: { id: string; name: string; portions?: Portion[] }[];
}

export interface Food {
  id: string;
  name: string;
  portions?: Portion[];
}