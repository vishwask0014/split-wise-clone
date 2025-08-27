"use client";

import { H2 } from "@/app/Components/Common/Heading";
import { Icon, MonthIcon } from "@/app/Components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ShadowcnChart from "@/app/Components/ChartRadialStacked/ShadcnChart";

export default function Page() {
  return (
    <>
      <div className="px-2 relative overflow-hidden mobileGlowing">
        <div className="flex justify-between py-3 border-b border-slate-50/10">
          <button type="submit">
            <Icon name="back" color="" />
          </button>
          <H2 className="text-white">Statistic</H2>
          <span />
        </div>

        {/* card1 */}
        <div className="bg-neonGreen px-2 pt-4 pb-2 rounded-b-[50px]">
          <div>
            <p className="text-black font-light">Total spend</p>
            <h4 className="text-black font-semibold mt-1 text-3xl">$4244.72</h4>
          </div>

          <div className="flex justify-evenly bg-darkBlue py-3 rounded-full mt-6 items-center">
            <div className="">
              <span className="text-white/50 capitalize font-regular text-sm">
                Total Parties
              </span>
              <h6 className="text-white text-2xl mt-1">9 </h6>
            </div>

            <div className="border-r border-white h-10 mx-4 " />

            <div className="">
              <span className="text-white/50 capitalize font-regular text-sm">
                savings
              </span>
              <h6 className="text-white text-2xl mt-1">$280</h6>
            </div>
          </div>
        </div>
      </div>

      {/* expense with different circle spend diagram */}
      <div></div>

      {/* lates month exp */}
      <ShadowcnChart />

      {/* montly exp */}
      <div className="mt-6 px-2 w-screen mb-24">
        <H2 className="px-4">Monthly Expenses</H2>

        <Swiper
          className="mt-4"
          centeredSlides={false}
          slidesPerView={1.6}
          spaceBetween={16}
        >
          {montlyExp.map((i, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="rounded-xl px-4 py-3 h-full w-full relative overflow-hidden shadow-md"
                  style={{ backgroundColor: i.cardColor }}
                >
                  {/* optional glowing background effect */}
                  <div className="circularEffect-cardBG" />

                  <div className="flex items-center gap-2 relative z-10">
                    <MonthIcon name={i.month} />
                    <h6 className="text-black font-medium text-base capitalize">
                      {i.month}
                    </h6>
                  </div>

                  <h4 className="text-2xl font-extrabold text-black mt-4 relative z-10">
                    ${i.net.toLocaleString()}
                  </h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
const montlyExp = [
  { month: "March", net: 204, cardColor: "#FFD700" },
  { month: "April", net: 224, cardColor: "#FF7F50" },
  { month: "May", net: 3809, cardColor: "#40E0D0" },
  { month: "June", net: 882, cardColor: "#2cea50" },
  { month: "July", net: 9029, cardColor: "#FF69B4" },
  { month: "August", net: 28, cardColor: "#1E90FF" },
];
