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
    displayOrder: 12,
    nutrient: {
      name: "Cobalamin",
      amount: 10,
      unit: "g",
    },
    selected: true,
  },
];
export 
const faqs = [
  {
    title: "What it is",
    description:
      "The words “table salt” and “sodium” are often used interchangeably, but they do not mean the same thing. Table salt (also known by its chemical name, sodium chloride) is a crystal-like compound that is abundant in nature. Sodium is a mineral and one of the chemical elements found in table salt.",
  },
  {
    title: "Where It Is found",
    description:
      "Over 70% of dietary sodium comes from eating packaged and prepared foods, whereas only a small portion (about 11%) comes from table salt added to food when cooking and eating. According to the Centers for Disease Control and Prevention, about 40% of the sodium consumed by Americans comes from the following foods, many of which are commercially processed or prepared:",
    extraInformation: [
      { name: "Deli meat sandwiches" },
      { name: "Pizza" },
      { name: "Burritos and tacos" },
      { name: "Soups" },
      { name: "Burritos and tacos" },
      { name: "Savory snacks (e.g., chips, crackers, popcorn)" },
      { name: "Poultry" },
      { name: "Pasta mixed dishes" },
      { name: "Burgers" },
      { name: "Egg dishes and omelets" },
    ],
  },
  {
    title: "What It Does",
    extraInformation: [
      {
        name: "Sodium is an essential nutrient that the human body needs in relatively small amounts (provided that substantial sweating does not occur).",
      },
      {
        name: "Sodium is important for many body processes, such as fluid balance, muscle contraction, and nervous system function.",
      },
      {
        name: "As a food ingredient, sodium is used in multiple ways, including curing meat, baking, as a thickening agent, as a flavor enhancer, as a preservative, and to retain moisture.",
      },
    ],
  },
  {
    title: "Health Facts",
    extraInformation: [
      {
        name: "Most Americans exceed the recommended limits for sodium in the diet. On average, Americans eat about 3,400 milligrams (mg) of sodium per day.",
      },
      {
        name: "Diets higher in sodium are associated with an increased risk of developing high blood pressure (also known as hypertension), a condition in which blood pressure remains elevated over time. High blood pressure makes the heart work harder, and the high force of the blood flow can harm arteries and organs, such as the heart, brain, kidneys, and eyes. Uncontrolled high blood pressure can raise the risk of heart attacks, heart failure, stroke, kidney disease, and blindness.",
      },
      {
        name: "The Dietary Guidelines for Americans recommend that adults limit sodium intake to less than 2,300 mg per day—that’s equal to about 1 teaspoon of table salt! For children under age 14, recommended limits are even lower.",
      },
      {
        name: "The U.S. Food and Drug Administration is working with the food industry to make reasonable reductions in sodium across a wide variety of foods so Americans have an easier time consuming less sodium if they want to.",
      },
    ],
  },
  {
    title: "Actions Steps For Reducing Sodium in Your Diet",
    description:
      "Use the Nutrition Facts label as a tool for reducing consumption of sodium. The Nutrition Facts label on food and beverage packages shows the amount in milligrams (mg) and the % Daily Value (%DV) of sodium per serving of the food.",
    label: "The Daily Value for sodium is less than 2,300 mg per day.",
    extraInformation: [
      {
        name: "Look for light, low sodium, reduced sodium, or no-salt-added versions of packaged foods.",
      },
      {
        name: "Prepare your own food when possible and limit packaged sauces and flavored products (such as rice and pasta mixes and instant noodles).",
      },
      {
        name: "Flavor foods with herbs and spices and no-salt seasoning blends instead of adding table salt to foods when cooking, baking, and eating.",
      },
      {
        name: "Select lean meats, poultry, and seafood, rather than processed varieties. Also, check the package on fresh meats and poultry to see if salt water or saline has been added.",
      },
      {
        name: "Buy fresh, frozen (no sauce or seasoning), low sodium, or no-salt-added canned vegetables.",
      },
      {
        name: "Rinse sodium-containing canned foods, such as beans, tuna, and vegetables before eating.",
      },
      {
        name: "Try light or reduced sodium condiments, add oil and vinegar to salads rather than bottled dressings, and use only a small amount of seasoning from flavoring packets instead of the entire packet.",
      },
      {
        name: "Choose low sodium or no-salt-added nuts, seeds, and snack foods (such as chips and pretzels)—or choose carrots or celery sticks as snacks instead.",
      },
      {
        name: "Consume smaller portions of foods and beverages that are higher in sodium or consume them less often.",
      },
      {
        name: "When eating out, ask that your meal be prepared without table salt and request that sauces and salad dressings be served “on the side,” then use less of them. You can also ask if nutrition information is available and then choose options that are lower in sodium.",
      },
    ],
  },
];