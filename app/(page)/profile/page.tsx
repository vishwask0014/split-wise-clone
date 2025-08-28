"use client";

import React from "react";
import { H2 } from "@/app/Components/Common/Heading";

export default function ProfilePage() {
  return (
    <div className="px-2 relative overflow-hidden mobileGlowing min-h-screen">
      {/* Header */}
      <div className="flex justify-between py-3 border-b border-slate-50/10">
        <span />
        <H2 className="text-white">Profile</H2>
        <span />
      </div>

      {/* Form */}
      <div className="w-full p-6">
        <form className="space-y-5">
          {/* Full Name (Disabled) */}
          <div>
            <label className="block mb-2 font-medium text-base text-white/80">
              Full Name
            </label>
            <input
              type="text"
              value="John Doe"
              disabled
              className="border border-slate-400 rounded-lg w-full py-3 px-4 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Phone Number (Disabled) */}
          <div>
            <label className="block mb-2 font-medium text-base text-white/80">
              Phone Number
            </label>
            <input
              type="text"
              value="+91 9876543210"
              disabled
              className="border border-slate-400 rounded-lg w-full py-3 px-4 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-2 font-medium text-base text-white/80">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="border border-slate-400 rounded-lg w-full py-3 px-4"
            />
          </div>

          {/* Home Address */}
          <div>
            <label className="block mb-2 font-medium text-base text-white/80">
              Home Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your home address"
              className="border border-slate-400 rounded-lg w-full py-3 px-4"
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-2 font-medium text-base text-white/80">
              State
            </label>
            <input
              type="text"
              name="state"
              placeholder="Enter your state"
              className="border border-slate-400 rounded-lg w-full py-3 px-4"
            />
          </div>

          {/* Alternative Phone */}
          <div>
            <label className="block mb-2 font-medium text-base text-white/80">
              Alternative Phone Number
            </label>
            <input
              type="tel"
              name="altPhone"
              placeholder="Enter alternative phone number"
              className="border border-slate-400 rounded-lg w-full py-3 px-4"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="mt-6 bg-neonGreen text-black w-full py-3 px-5 rounded-full font-medium text-lg mb-20"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
