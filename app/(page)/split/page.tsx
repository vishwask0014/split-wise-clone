import { H2 } from "@/app/Components/Common/Heading";
import SplitScreenForm from "@/app/Components/Form/SplitScreenForm";
import { Icon } from "@/app/Components/Icons/Icons";
import React from "react";

export default function page() {
  return (
    <>
      <div className="px-2 relative overflow-hidden mobileGlowing">
        <div className="flex justify-between py-3 border-b border-slate-50/10">
          {/* <button type="submit">
            <Icon name="back" color="" />
          </button> */}
          <span />
          <H2 className="text-white">Split Your charges</H2>
          <span />
        </div>

        <div className="bg-neonGreen px-6 pt-8 pb-2 rounded-b-[50px]">
          {/* AI scan */}
          <button className="border border-black mx-auto rounded-full w-16 h-16 flex justify-center items-center">
            <Icon name="aiScan" color={""} />
          </button>

          <span className="block text-black text-center mt-2 font-medium">
            Use AI to Scan Bill
          </span>
        </div>

        {/* form */}
        <div className="">
          <SplitScreenForm />
        </div>
      </div>
    </>
  );
}
