"use client";

import React, { useState } from "react";
import { H2 } from "@/app/Components/Common/Heading";

export default function page() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="px-2 relative overflow-hidden mobileGlowing min-h-screen">
      {/* Header */}
      <div className="flex justify-between py-3 border-b border-slate-50/10">
        <span />
        <H2 className="text-white">Settings</H2>
        <span />
      </div>

      {/* Settings Form */}
      <div className="w-full p-6">
        <form className="space-y-6">
          {/* Notifications */}
          <div className="flex items-center justify-between border-b border-slate-50/10 pb-4">
            <label className="font-medium text-base text-white/80">
              Notifications
            </label>
            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                notifications ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  notifications ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between border-b border-slate-50/10 pb-4">
            <label className="font-medium text-base text-white/80">
              Dark Mode
            </label>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                darkMode ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Privacy */}
          <div className="flex items-center justify-between border-b border-slate-50/10 pb-4">
            <label className="font-medium text-base text-white/80">
              Private Account
            </label>
            <button
              type="button"
              onClick={() => setPrivacy(!privacy)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                privacy ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                  privacy ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="mt-6 bg-neonGreen text-black w-full py-3 px-5 rounded-full font-medium text-lg"
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
