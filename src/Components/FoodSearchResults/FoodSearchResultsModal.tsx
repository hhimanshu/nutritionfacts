import { Combobox, Dialog, Transition } from "@headlessui/react";
import { ChevronRightIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BeakerIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Food, FoodSearchResult } from "../../utils/types";
import { FoodSearchTabs } from "../Tabs/FoodSearchTabs";
import { useNavigate } from "react-router-dom";
import { spaceToDashes } from "../../utils/functions";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type FoodSearchProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  searchResults: FoodSearchResult;
  isSearching: boolean;
};
export default function FoodSearch({
  open,
  setOpen,
  query,
  setQuery,
  searchResults,
  isSearching,
}: FoodSearchProps) {
    const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Foods");


  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery("")} appear>
      <Dialog as="div" className="relative  z-[99999]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[99999] w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all z-[99999]">
              <Combobox
                onChange={(result: Food) => {
                   setOpen(false);
                  navigate(`/results/${spaceToDashes(result.name)}`);
                }}
              >
                {({ activeOption }) => (
                  <div className="bg-white w-full mt-2 rounded-lg">
                    <div className="relative">
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Combobox.Input
                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>
                    {searchResults.foods.length > 0 && (
                      <FoodSearchTabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
                    )}
                    {searchResults.foods.length > 0 && selectedTab === "Foods" && !isSearching && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-gray-100 bg-white w-full rounded-lg"
                      >
                        <div
                          className={classNames(
                            "max-h-96 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 w-full",
                            activeOption && "sm:h-80"
                          )}
                        >
                          <div className="-mx-2 text-sm text-gray-700 w-full">
                            {(searchResults.foods.length > 0 ? searchResults.foods : []).map(
                              (food) => (
                                <Combobox.Option
                                  as="div"
                                  key={food.id}
                                  value={food}
                                  className={({ active }) =>
                                    classNames(
                                      "flex select-none rounded-md p-2 cursor-pointer",
                                      active && "bg-gray-100 text-gray-900"
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <span
                                        className="ml-3 flex-auto text-left truncate"
                                        data-testid="food"
                                      >
                                        {food.name}
                                      </span>
                                      {active && (
                                        <ChevronRightIcon
                                          className="ml-3 h-5 w-5 flex-none text-gray-400 hidden"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              )
                            )}
                          </div>
                        </div>
                      </Combobox.Options>
                    )}
                    {searchResults.foodProducts.length > 0 &&
                      selectedTab !== "Foods" &&
                      !isSearching && (
                        <Combobox.Options
                          as="div"
                          static
                          hold
                          className="flex divide-x divide-gray-100 bg-white w-full rounded-lg"
                        >
                          <div
                            className={classNames(
                              "max-h-96 flex-auto scroll-py-4 overflow-y-auto px-6 py-4 w-full",
                              activeOption && "sm:h-80"
                            )}
                          >
                            <div className="-mx-2 text-sm text-gray-700 w-full">
                              {(searchResults.foodProducts.length > 0
                                ? searchResults.foodProducts
                                : []
                              ).map((food) => (
                                <Combobox.Option
                                  as="div"
                                  key={food.id}
                                  value={food}
                                  className={({ active }) =>
                                    classNames(
                                      "flex select-none rounded-md p-2 cursor-pointer",
                                      active && "bg-gray-100 text-gray-900"
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <span
                                        className="ml-3 flex-auto text-left truncate"
                                        data-testid="food"
                                      >
                                        {food.name}
                                      </span>
                                      {active && (
                                        <ChevronRightIcon
                                          className="ml-3 h-5 w-5 flex-none text-gray-400 hidden"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))}
                            </div>
                          </div>
                        </Combobox.Options>
                      )}
                    {isSearching && query.trim().length > 0 ? (
                      <div role="status" className="px-6 py-14 text-center text-sm sm:px-14">
                        <svg
                          aria-hidden="true"
                          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : query.trim().length > 0 && searchResults.foods.length === 0 ? (
                      <div className="px-6 py-14 text-center text-sm sm:px-14">
                        <BeakerIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                        <p className="mt-4 font-semibold text-gray-900">No ingredient found</p>
                        <p className="mt-2 text-gray-500">
                          We couldn’t find anything with that term. Please try again.
                        </p>
                      </div>
                    ) : null}
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
