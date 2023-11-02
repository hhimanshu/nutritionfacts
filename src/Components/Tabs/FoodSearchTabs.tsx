import React from "react";

interface Tab {
  name: string;
  href: string;
  current: boolean;
}

interface ExampleProps {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs: Tab[] = [
  { name: "Foods", href: "#", current: false },
  { name: "Food Products", href: "#", current: false },
];

export const FoodSearchTabs: React.FC<ExampleProps> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="">
      <div className="sm:hidden w-12 pl-12">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-12 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={selectedTab}
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block w-100%">
        <div className="border-b border-gray-200 pl-6 pb-4 p-4">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => setSelectedTab(tab.name)}
                className={classNames(
                  selectedTab ===tab.name
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={selectedTab ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
