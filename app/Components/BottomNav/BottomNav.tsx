"use client";

import React, { useEffect, useState } from "react";
import { BottomNavIcon } from "../Icons/Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BottomNav() {
  const [currentPath, setCurrentPath] = useState("");
  const route = usePathname();
  useEffect(() => {
    setCurrentPath(route);
  });

  return (
    <>
      <div className="fixed w-full bottom-4 px-4 z-50">
        <div className="flex justify-around bg-white/20 backdrop-blur-3xl rounded-full p-1 transition-all duration-500 ease-in-out">
          {menu.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <Link
                  href={i.slug}
                  className={`w-fit flex items-center gap-1 py-3 transition-all duration-500 ease-in-out ${
                    currentPath === i.slug ? "" : ""
                  }`}
                >
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      currentPath === i.slug
                        ? "w-auto opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  >
                    <BottomNavIcon
                      name={i.icon}
                      color={"var(--neonGreen)"}
                      size="min-w-8"
                    />
                  </div>
                  <p
                    className={`${
                      currentPath === i.slug
                        ? "text-[var(--neonGreen)]"
                        : "text-white/70"
                    } text-sm transition-all duration-500 ease-in-out`}
                  >
                    {i.label}
                  </p>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

const menu = [
  {
    label: "Home",
    slug: "/",
    id: 1,
    icon: "home",
  },
  {
    label: "History",
    slug: "/history",
    id: 2,
    icon: "history",
  },
  {
    label: "Report",
    slug: "/report",
    id: 4,
    icon: "report",
  },

  {
    label: "Profile",
    slug: "/profile",
    id: 4,
    icon: "profile",
  },
];
