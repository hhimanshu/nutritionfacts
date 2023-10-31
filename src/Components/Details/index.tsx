import { faqs } from "../../utils/data";
import Accordion from "../Accordion/Accordion";
import { NutritionFact } from "../NutritionFacts";

interface DetailsProps {
  selectedNutrient: NutritionFact | null;
}

const Details: React.FC<DetailsProps> = ({ selectedNutrient }) => {
  return (
    <div className="w-full">
      <h2 className="text-[#8e52a0] text-[40px] leading-[40px] font-['Museo'] mb-[30px]">
        <span>{selectedNutrient?.nutrient.name}</span>
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
