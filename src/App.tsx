import { useState } from "react";
import Details from "./Components/Details";
import NutritionFacts, { NutritionFact } from "./Components/NutritionFacts";
import { nutritionFacts } from "./utils/data";

function App() {
  const [selectedNutrient, setSelectedNutrient] = useState<NutritionFact>(nutritionFacts[0]);

  const onNutritionClick = (nutrient: NutritionFact) => {
    setSelectedNutrient(nutrient);
  };

  console.log(selectedNutrient);

  return (
    <div className="h-[auto] flex justify-center items-center">
      <div className="min-h-[750px] bg-[#c7eafb] p-5 rounded-[20px] m-0 grid grid-cols-[repeat(auto-fit_,minmax(400px,_1fr))] items-start gap-10 w-[60%] mt-12">
        <div className="h-auto">
          <Details selectedNutrient={selectedNutrient} />
        </div>
        <div className="flex justify-end">
          <NutritionFacts
            nutrition={nutritionFacts}
            onNutritionClick={onNutritionClick}
            selectedNutrient={selectedNutrient}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
