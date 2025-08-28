"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { H2 } from "../Common/Heading";

export default function SplitScreenForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <div className="">
        <div className="w-full p-6">
          <H2 className="mb-4">Create Group</H2>
          <form className="space-y-4">
            {/* Group Name */}
            <div>
              <label className="block mb-3 font-medium text-base text-white/80">
                Group Name
              </label>
              <input
                type="text"
                name="groupName"
                className="border border-slate-400 rounded-lg w-full py-3 px-4"
                placeholder="Enter group name"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-3 font-medium text-base text-white/80">
                Category Name
              </label>
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full border border-slate-400 rounded-lg py-3 px-4 flex justify-between items-center"
                >
                  <span>{selected || "Select category"}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isOpen && (
                  <ul className="absolute mt-0 w-full bg-white/20 backdrop-blur-2xl rounded-b-2xl overflow-auto h-[180px] no-scroll pt-3">
                    {categories.map((category, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelected(category);
                          setIsOpen(false);
                        }}
                        className="text-black py-2 px-4 cursor-pointer"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Total Amount */}
            <div>
              <label className="block mb-3 font-medium text-base text-white/80">
                Total Amount
              </label>
              <input
                type="number"
                name="amount"
                min="2"
                className="border border-slate-400 rounded-lg w-full py-3 px-4"
                placeholder="Enter total amount spend"
              />
            </div>

            {/* Number of Members */}
            <div>
              <label className="block mb-3 font-medium text-base text-white/80">
                Number of Members
              </label>
              <input
                type="number"
                name="members"
                min="2"
                className="border border-slate-400 rounded-lg w-full py-3 px-4"
                placeholder="Enter number of members"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 bg-neonGreen text-black w-full py-3 px-5 rounded-full font-medium text-lg mb-20"
            >
              Create Group
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

const categories = [
  "Friends",
  "Family",
  "Work",
  "Travel",
  "Health",
  "Meetup",
  "Meeting",
];
