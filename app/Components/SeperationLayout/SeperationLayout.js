"use client";

import Image from "next/image";
import { useState } from "react";
import BottomNav from "../BottomNav/BottomNav";

const SeperationLayout = ({ children }) => {
  return (
    <>
      <div id="mobileScreen">
        <div className="">{children}</div>
        <BottomNav />
      </div>

      <div id="desktopScreen">
        <DesktopScreen />
      </div>
    </>
  );
};

export default SeperationLayout;

const DesktopScreen = () => {
  const [openModal, setopenModal] = useState(false);

  const handleModal = () => {
    setopenModal(!openModal);
    console.log("btn is clicked");
  };

  return (
    <>
      <div className="bg-[var(--darkBlue)] h-screen w-full relative glowingBGHero overflow-hidden ">
        <div className="container mx-auto grid grid-cols-2 items-center h-full px-6">
          {/* left section UI */}
          <div className="">
            <h1 className="text-6xl font-[500] text-white leading-[1.2]">
              Keep <span className="font-[900]">friendships</span>, <br />
              <span className="font-thin italic">ditch</span> money fights
            </h1>
            <h2 className="text-white font-extralight text-4xl mt-6 max-w-[620px]">
              Splitting bills made simple, fair, and stress-free.
            </h2>

            <button
              onClick={handleModal}
              className="cursor-pointer primaryBtn mt-12"
            >
              Scan to Continue
            </button>
          </div>

          {/* right section UI */}
          <div className="relative  h-[590px] w-auto">
            <Image
              fill
              quality={100}
              src="/assests/27305588_145.jpg"
              alt="handling money"
            />
          </div>
        </div>

        <ScanModal btnClick={openModal} closeBtn={handleModal} />
      </div>
    </>
  );
};

const ScanModal = ({ btnClick, closeBtn }) => {
  console.log(btnClick, "btnclick");

  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-full h-full flex justify-center items-center transition-all  duration-[.35s] ease-in ${
        btnClick === false
          ? "opacity-0 invisible after:z-0"
          : "after:z-40 opacity-100 visible"
      } || after:bg-black/80 after:w-full after:h-full  after:absolute after:top-0 after:right-0`}
    >
      <div>
        <div className="bg-white p-8 rounded-2xl w-fit mx-auto flex justify-center items-center relative z-50">
          <button
            onClick={closeBtn}
            className="bg-black/20 rounded-full w-8 h-8 flex justify-center items-center absolute right-6  top-6"
          >
            X
          </button>
          {/* <Image src={""} alt="scanner" width={200} height={200} /> */}
          <h2 className="text-slate-500 fw-semibold text-center mt-4">
            Scan to Continue
          </h2>
        </div>
      </div>
    </div>
  );
};
