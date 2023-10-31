import { NutritionFact } from "../Components/NutritionFacts";

export const nutritionFacts: NutritionFact[] = [
  {
    displayOrder: 0,
    nutrient: {
      name: "Total Fat",
      amount: 56,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 37,
      unit: "%",
      percentDailyValue: undefined,
    },
    children: [
      {
        displayOrder: 0,
        nutrient: {
          name: "Cholesterol",
          amount: 29,
          unit: "mg",
        },
        selected: true,
        rdi: {
          amount: 37,
          unit: "%",
          percentDailyValue: undefined,
        },
      },
    ],
  },
  {
    displayOrder: 1,
    nutrient: {
      name: "Saturated fat",
      amount: 7,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 37,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 2,
    nutrient: {
      name: "Sodium",
      amount: 11,
      unit: "mg",
    },
    selected: true,
    rdi: {
      amount: 7,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 3,
    nutrient: {
      name: "Potassium",
      amount: 468,
      unit: "mg",
    },
    selected: true,
    rdi: {
      amount: 3,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 4,
    nutrient: {
      name: "Total Carbohydrate",
      amount: 23,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 27,
      unit: "%",
      percentDailyValue: undefined,
    },
    children: [
      {
        displayOrder: 0,
        nutrient: {
          name: "Dietary fiber",
          amount: 56,
          unit: "g",
        },
        selected: true,
        rdi: {
          amount: 37,
          unit: "%",
          percentDailyValue: undefined,
        },
      },
      {
        displayOrder: 1,
        nutrient: {
          name: "Sugar",
          amount: 0.3,
          unit: "g",
        },
        selected: true,
        rdi: {
          amount: 37,
          unit: "%",
          percentDailyValue: undefined,
        },
      },
    ],
  },
  {
    displayOrder: 5,
    nutrient: {
      name: "Protein",
      amount: 18,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 14,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 6,
    nutrient: {
      name: "Vitamin C",
      amount: 56,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 12,
      unit: "",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 7,
    nutrient: {
      name: "Iron",
      amount: 45,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 81,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 8,
    nutrient: {
      name: "Vitamin D",
      amount: 8,
      unit: "g",
    },
    selected: true,
    rdi: {
      amount: 40,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 9,
    nutrient: {
      name: "Magnesium",
      amount: 9,
      unit: "mg",
    },
    selected: true,
    rdi: {
      amount: 87,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 10,
    nutrient: {
      name: "Calcium",
      amount: 4,
      unit: "mg",
    },
    selected: true,
    rdi: {
      amount: 97,
      unit: "%",
      percentDailyValue: undefined,
    },
  },
  {
    displayOrder: 11,
    nutrient: {
      name: "Vitamin D",
      amount: 1,
      unit: "g",
    },
    selected: true,
  },
  {
    displayOrder: 12,
    nutrient: {
      name: "Cobalamin",
      amount: 10,
      unit: "g",
    },
    selected: true,
  },
];
