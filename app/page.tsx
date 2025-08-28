"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "./Components/Icons/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

{
  /* home page is this */
}
export default function Page() {
  return (
    <div className="relative px-2 overflow-hidden mobileGlowing h-screen">
      <div className="bg-[var(--neonGreen)] px-4 py-3 rounded-b-4xl">
        <div className="flex flex-col py-3 gap-6">
          <div className="flex justify-between items-center">
            <div className="flex items-baseline gap-1">
              <span className="text-black text-3xl italic leading-0 font-thin">
                Welcome
              </span>
              <h4 className="text-black text-3xl m-0 p-0 font-regular">
                Alexa,
              </h4>
            </div>

            <div className="w-10 h-10 rounded-full overflow-hidden relative bg-white">
              <Image src={"/assests/user.jpg"} alt="user-name" fill />
            </div>
          </div>

          <div className="flex gap-6 items-center justify-center">
            <button className="border border-black rounded-full w-16 h-16 flex justify-center items-center">
              <Icon name="QR" color={"red"} />
            </button>

            {/* AI scan */}
            <button className="border border-black rounded-full w-16 h-16 flex justify-center items-center">
              <Icon name="aiScan" color={""} />
            </button>

            {/* notification */}
            <button className="border border-black rounded-full w-16 h-16 flex justify-center items-center">
              <Icon name="bell" color="red" />
            </button>
          </div>
        </div>

        {/* cart UI is here */}
        <div className=""></div>
      </div>

      {/* payment status */}
      <div className="mt-6 relative z-20 px-4">
        <div className="flex justify-between items-baseline">
          <h2 className="text-white font-semibold text-2xl">Payments</h2>

          {/* total spend */}
          {/* <div className="flex justify-between items-center mt-2">
            <div className="text-sm">
              <span className="font-regular text-white/60 me-1">
                Total spend
              </span>
              <span className="font-semibold">$140</span>
            </div>
          </div> */}
        </div>

        {/* vertical carousel of transcation status */}
        <div className="mt-4 h-[calc(100vh_-_280px)]">
          <Swiper
            direction="vertical"
            slidesPerView={6}
            spaceBetween={4}
            freeMode={false}
            loop={false}
            mousewheel={true}
            modules={[Mousewheel]}
            className="h-full"
            navigation={false}
          >
            {paymentCarousel.map((i, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <div className="bg-white/10 backdrop-blur-2xl py-3 px-3 rounded-full flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image src={"/assests/user.jpg"} alt={i.name} fill />
                      </div>
                      <div>
                        <h4 className="text-white text-lg font-[500] truncate text-nowrap w-[140px] max-w-full">
                          {i.name}
                        </h4>
                        <div className="flex gap-1 mt-[2px]">
                          <p
                            className={`text-sm font-bold ${
                              i.status === "Paid"
                                ? `text-green-400`
                                : "text-red-500"
                            }`}
                          >
                            {i.percentage}%
                          </p>
                          <span className="text-sm text-white/50">
                            {i.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h6
                      className={`me-4 font-bold text-xl ${
                        i.status === "Paid" ? `text-green-600` : "text-red-600"
                      }`}
                    >
                      ${i.amount}
                    </h6>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

const paymentCarousel = [
  {
    id: 1,
    name: "Ben S Williamson",
    project: "Trip to Goa",
    status: "Paid",
    percentage: 30,
    amount: 100.0,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    project: "Trip to Goa",
    status: "Paid",
    percentage: 24,
    amount: 60.0,
  },
  {
    id: 3,
    name: "Guy Hawkins",
    project: "Trip to Goa",
    status: "Unpaid",
    percentage: 22,
    amount: 40.0,
  },
  {
    id: 4,
    name: "Courtney Henry",
    project: "Office Party",
    status: "Paid",
    percentage: 45,
    amount: 120.0,
  },
  {
    id: 5,
    name: "Ralph Edwards",
    project: "Office Party",
    status: "Unpaid",
    percentage: 15,
    amount: 20.0,
  },
  {
    id: 6,
    name: "Theresa Webb",
    project: "Movie Night",
    status: "Paid",
    percentage: 60,
    amount: 75.0,
  },
  {
    id: 7,
    name: "Devon Lane",
    project: "Movie Night",
    status: "Unpaid",
    percentage: 10,
    amount: 15.0,
  },
  {
    id: 8,
    name: "Arlene McCoy",
    project: "Beach House",
    status: "Paid",
    percentage: 55,
    amount: 95.0,
  },
  {
    id: 9,
    name: "Jacob Jones",
    project: "Beach House",
    status: "Unpaid",
    percentage: 5,
    amount: 10.0,
  },
  {
    id: 10,
    name: "Kristin Watson",
    project: "Road Trip",
    status: "Paid",
    percentage: 40,
    amount: 110.0,
  },
  {
    id: 11,
    name: "Eleanor Pena",
    project: "Road Trip",
    status: "Unpaid",
    percentage: 18,
    amount: 25.0,
  },
  {
    id: 12,
    name: "Cameron Williamson",
    project: "Startup Fund",
    status: "Paid",
    percentage: 70,
    amount: 150.0,
  },
  {
    id: 13,
    name: "Wade Warren",
    project: "Startup Fund",
    status: "Unpaid",
    percentage: 12,
    amount: 50.0,
  },
  {
    id: 14,
    name: "Floyd Miles",
    project: "Music Festival",
    status: "Paid",
    percentage: 35,
    amount: 80.0,
  },
  {
    id: 15,
    name: "Esther Howard",
    project: "Music Festival",
    status: "Unpaid",
    percentage: 20,
    amount: 30.0,
  },
  {
    id: 16,
    name: "Jerome Bell",
    project: "Wedding Gift",
    status: "Paid",
    percentage: 48,
    amount: 90.0,
  },
  {
    id: 17,
    name: "Kathryn Murphy",
    project: "Wedding Gift",
    status: "Unpaid",
    percentage: 8,
    amount: 12.0,
  },
  {
    id: 18,
    name: "Darlene Robertson",
    project: "Team Lunch",
    status: "Paid",
    percentage: 52,
    amount: 70.0,
  },
  {
    id: 19,
    name: "Annette Black",
    project: "Team Lunch",
    status: "Unpaid",
    percentage: 14,
    amount: 22.0,
  },
  {
    id: 20,
    name: "Jane Cooper",
    project: "Team Lunch",
    status: "Paid",
    percentage: 36,
    amount: 65.0,
  },
];
