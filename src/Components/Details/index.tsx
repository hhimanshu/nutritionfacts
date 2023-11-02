import { faqs } from "../../utils/data";
import Accordion from "../Accordion/Accordion";
import { NutritionFact } from "../NutritionFacts";

interface DetailsProps {
  selectedNutrient: NutritionFact | null;
}

const Details: React.FC<DetailsProps> = ({ selectedNutrient }) => {
  console.log(selectedNutrient);
  return (
    <div className="w-full relative">
      <h2 className="text-[#8e52a0] text-[40px] leading-[40px] font-['Museo'] mb-[30px] relative h-full">
        <span>{selectedNutrient?.nutrient.name}</span>
        <span
          className={`bg-red-500 w-[5px] h-[25px] absolute left-[40%] top-[20%] flex items-center translate-x-[50%]
    after:content-[''] after:absolute after:w-[305px] after:h-[5px] after:bg-red-500 after:block after:top-[30%] 
    before:content-[''] before:absolute before:w-[5px] before:bg-red-500 before:block before:top-[40%] before:left-[6000%] ${
      selectedNutrient?.nutrient?.name && selectedNutrient.nutrient.name.length <= 15
        ? "before:h-[inherit] after:w-[218px_!important] before:left-[4250%_!important] left-[60%]"
        : "before:h-[240px] after:w-[130px_!important] before:left-[2490%_!important] left-[80%]"
    }
    ${selectedNutrient?.nutrient?.name === "Cobalamin" && "before:h-[503px_!important]"} 
    ${selectedNutrient?.nutrient?.name === "Calcium" && "before:h-[478px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Magnesium" && "before:h-[448px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Vitamin D" && "before:h-[418px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Iron" && "before:h-[390px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Vitamin C" && "before:h-[360px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Protein" && "before:h-[330px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Potassium" && "before:h-[210px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Sodium" && "before:h-[185px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Saturated fat" && "before:h-[155px_!important]"}
    ${selectedNutrient?.nutrient?.name === "Total Fat" && "before:h-[95px_!important]"}
    `}
        ></span>
      </h2>
      <div className="bg-white rounded-[20px] p-[20px]">
        <div className="border-[1px] border-[#8e52a0] py-[1em] px-[0.5em] rounded-[10px] text-center mb-[1.5rem]">
          <div className="text-[#8e52a0]">
            {selectedNutrient?.nutrient.name} is a nutrient to get less of.
          </div>
        </div>
        <div>
          <p className="mb-[10px]">
            Diets higher in sodium are associated with an increased risk of developing high blood
            pressure, which can raise the risk of heart attacks, heart failure, stroke, kidney
            disease, and blindness.
          </p>
        </div>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default Details;
