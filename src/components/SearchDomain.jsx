import React from "react";
import { GoSearch } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";

const SearchDomain = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-10">
      <div className="md:flex items-center">
        <div>
          <h2 className="text-3xl font-bold pb-4">Search new domain</h2>
          <p className="pb-6">
            Supercharge your website hosting with detailed website analytics
            marketing tools.
          </p>
        </div>
        <div className="w-full flex items-center relative">
          <span className="absolute left-2 text-2xl opacity-60">
            <TfiWorld />
          </span>
          <input
            className="w-full rounded-full py-4 block shadow-sm focus:outline-none focus:border-purple-400 focus:ring-purple-500 focus:ring-2 pl-8 md:pl-12"
            placeholder="Search for a domain"
            type="text"
            name="search"
          />
          <span className="absolute right-2 bg-cyan-400 rounded-full p-3 text-white font-bold">
            <GoSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchDomain;
