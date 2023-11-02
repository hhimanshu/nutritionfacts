import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SearchResults from "../Components/FoodSearchResults/FoodSearchResult";
import { FoodSearchResult } from "../utils/types";
import { SEARCH_MIN_CHARACTERS } from "../utils/env";

const Home = () => {
  const [isSearching, setIsSearching] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<FoodSearchResult>({
    foodProducts: [],
    foods: [],
  } as FoodSearchResult);
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
      ).data as FoodSearchResult;
      setSearchResults(results);
    };
    fetchSearchResults().then(() => console.log("done"));
  }, [query, inputRef.current?.value]);
  return (
    <div className="bg-slate-50 h-screen justify-center flex items-center">
      <div className="w-1/3 relative -mt-[20rem]">
        <div className="flex justify-center items-center">
          <img src="/logo.svg" className="w-[200px] h-[200px]" />
        </div>
        <div className="w-full shadow">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative text-gray-400 focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="yourInputFieldId"
              className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search"
              type="search"
              name="search"
              ref={inputRef}
              onChange={(event) => setQuery(event.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
                ⌘K
              </kbd>
            </div>
          </div>
          <div className="relative z-[999]">
            <SearchResults
              setOpen={setOpenSearch}
              query={query}
              searchResults={searchResults}
              isSearching={isSearching}
              openSearch={openSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
