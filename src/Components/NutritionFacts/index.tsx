import { getValueRounded } from "../../utils/functions";

export type NutritionFact = {
  displayOrder: number;
  nutrient: {
    name: string;
    amount: number;
    unit: string;
  };
  selected: boolean;
  rdi?: {
    amount: number;
    unit: string;
    percentDailyValue?: number;
  };
  children?: NutritionFact[];
};

interface NutritionFactsProps {
  nutrition: NutritionFact[];
  onNutritionClick: (item: NutritionFact) => void;
  selectedNutrient: NutritionFact;
}

const NutritionFacts: React.FC<NutritionFactsProps> = ({
  nutrition,
  onNutritionClick,
}) => {
  return (
    <div>
      <div className="md:w-96 max-w-full px-3 pt-4 pb-6 bg-white shadow  gap-1">
        <div className="text-zinc-700 text-base font-medium leading-normal tracking-tight text-start flex justify-start items-start">
          NUTRITION
        </div>
        <div className="flex-col justify-start items-start gap-4 flex mt-3">
          <div className="border-b border-zinc-100 justify-between items-center w-full flex pb-3.5">
            <div className="text-start text-zinc-500 text-xs font-medium leading-none tracking-wide">
              Nutrients
            </div>
            <div className=" text-zinc-500 text-xs font-medium leading-none tracking-wide">
              <span>% Daily value</span>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-1 flex w-full">
            {nutrition
              .filter((item) => item.selected !== false)
              ?.sort((a, b) => a.displayOrder - b.displayOrder)
              .map((nutrient, index) => {
                return (
                  <div key={index} className="w-full relative">
                    <div
                      className={`justify-between items-center inline-flex w-full`}
                    >
                      <div className="justify-start items-center gap-2 flex">
                        <label
                          className="text-zinc-700 text-[13px] font-semibold leading-tight hover:underline cursor-pointer"
                          onClick={() => onNutritionClick(nutrient)}
                        >
                          {nutrient.nutrient.name}
                        </label>
                        <div className="text-zinc-500 text-[13px] font-normal leading-tight tracking-tight cursor-pointer">
                          {nutrient.nutrient.amount.toFixed(2)} {nutrient.nutrient.unit}
                        </div>
                      </div>
                      <div className="justify-end items-center gap-2 flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                          {nutrient.rdi?.percentDailyValue ? (
                            <p className="font-semibold text-zinc-700 font-700 text-[14px]">
                              {getValueRounded(nutrient.rdi.percentDailyValue)}%
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {nutrient.children?.length ? (
                      <div className="relative ml-auto">
                        {nutrient.children
                          .filter((item) => item.selected !== false)
                          .sort((a, b) => a.displayOrder - b.displayOrder)
                          ?.map((row, index2) => {
                            return (
                              <div
                                key={index2}
                                className={`w-[95] pl-3`}
                              >
                                <hr className={`${index2 !== 0 ? "hidden" : "block"} mt-1`} />
                                <div className={`flex justify-between w-[100%] ml-auto my-1 `}>
                                  <div className="flex items-center relative">
                                    <p
                                      className="prose-bodyMedium text-zinc-500 font-400 text-[14px] cursor-pointer hover:underline"
                                      onClick={() => onNutritionClick(row)}
                                    >
                                      {row.nutrient.name}
                                    </p>
                                    <p className="prose-bodyMedium text-zinc-500 font-400 ml-3 text-[14px]">
                                      {row.nutrient.amount.toFixed(2)} {row.nutrient?.unit}
                                    </p>
                                  </div>
                                  {row.rdi?.percentDailyValue ? (
                                    <p className="font-semibold text-zinc-700 font-700 text-[14px]">
                                      {getValueRounded(row.rdi.percentDailyValue)}%
                                    </p>
                                  ) : null}
                                </div>
                                {nutrient?.children?.length === index2 + 1 ? null : (
                                  <hr className="w-full" />
                                )}
                              </div>
                            );
                          })}
                      </div>
                    ) : null}
                    <hr className="w-full" />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex-col justify-start items-end flex mt-3">
          <div className="flex gap-3 flex-col justify-end">
            <h2 className="text-zinc-500 text-xs font-medium leading-none tracking-wide text-end">
              Source: USDA
            </h2>
            <div className="text-center text-zinc-500 text-xs font-normal leading-none tracking-wide">
              2,000 calories a day is used for general nutrition advice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionFacts;
