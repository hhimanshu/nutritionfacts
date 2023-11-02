import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import NutritionFacts, { NutritionFact } from "../Components/NutritionFacts";
import { nutritionFacts } from "../utils/data";
import { FoodSearchResult } from "../utils/types";
import FoodSearch from "../Components/FoodSearchResults/FoodSearchResultsModal";
import { SEARCH_MIN_CHARACTERS } from "../utils/env";

function SearchResults() {
  const [selectedNutrient, setSelectedNutrient] = useState<NutritionFact>(nutritionFacts[5]);
  const onNutritionClick = (nutrient: NutritionFact) => {
    setSelectedNutrient(nutrient);
  };
  const [isSearching, setIsSearching] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<FoodSearchResult[]>([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const fetchSearchFood = async (search: string, skip: number, limit: number) => {
    setIsSearching(true);
    try {
      const response = await axios.request({
        method: "POST",
        data: {
          name: search,
          skip,
          limit,
        },
        url: `/api/search`,
      });
      if (!response.status) {
        throw new Error("Network response was not ok");
      }
      const data = await response.data;
      setIsSearching(false);
      return data;
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    if (query.length < SEARCH_MIN_CHARACTERS) {
      return;
    }
    if (inputRef.current?.value) {
      setOpenSearch(true);
    }
    const fetchSearchResults = async () => {
      const results = (
        await fetchSearchFood(inputRef.current?.value ? inputRef.current?.value : query, 0, 10)
      ).data as FoodSearchResult[];
      setSearchResults(results);
    };
    fetchSearchResults().then(() => console.log("done"));
  }, [query, inputRef.current?.value]);

  return (
    <div>
      <div className="w-[60%] mx-auto mt-6">
        <div className="shadow w-1/2">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div
            className="relative text-gray-400 focus-within:text-gray-600"
            onClick={() => setOpenSearch(true)}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="yourInputFieldId"
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search"
              type="search"
              name="search"
              readOnly
              ref={inputRef}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[auto] flex justify-center items-center">
        <div className="min-h-[750px] bg-[#c7eafb] p-5 rounded-[20px] m-0 flex justify-center items-start gap-10 w-[60%] mt-6">
          <NutritionFacts
            nutrition={nutritionFacts}
            onNutritionClick={onNutritionClick}
            selectedNutrient={selectedNutrient}
          />
        </div>
      </div>
      <FoodSearch
        open={openSearch}
        setOpen={setOpenSearch}
        query={query}
        setQuery={setQuery}
        searchResults={searchResults}
        isSearching={isSearching}
      />
    </div>
  );
}

export default SearchResults;
