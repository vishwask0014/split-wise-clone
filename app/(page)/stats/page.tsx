import { H2 } from "@/app/Components/Common/Heading";
import { Icon } from "@/app/Components/Icons/Icons";

export default function Page() {
  return (
    <>
      <div className="px-2">
        <div className="flex justify-between py-3 border-b border-slate-50/10">
          <button type="submit">
            <Icon name="back" color="" />
          </button>
          <H2>Statistic</H2>
          <span />
        </div>

        {/* tab menu */}
        <div className="">
            <div className="w-fit">
                
            </div>
        </div>
      </div>
    </>
  );
}
