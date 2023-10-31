import Details from "./Components/Details";
import NutritionFacts from "./Components/NutritionFacts";
import { nutritionFacts } from "./utils/data";

function App() {
  return (
    <div className="h-[auto] flex justify-center items-center">
      <div className="min-h-[750px] bg-[#c7eafb] p-5 rounded-[20px] m-0 grid grid-cols-[repeat(auto-fit_,minmax(400px,_1fr))] items-start gap-10 w-[60%] mt-12">
        <div className="h-auto">
        <Details/>
        </div>
        <div className="flex justify-end">
          <NutritionFacts nutrition={nutritionFacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
