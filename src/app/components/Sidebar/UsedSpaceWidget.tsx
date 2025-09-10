import { LifeBuoy, Cog } from "lucide-react";
import { NavItem } from "./NavItem";

export function UsedSpaceWidgeth() {
  return (
    <div className="mt-auto">
      <nav>
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>
        <p className="text-sm/5 text-violet-500">
          Yout time used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100 px-4">
        <div className="h-2 w-4/5 rounded-full bg-violet-600" />
      </div>

      <div className="space-x-3 mt-2 px-4">
        <button
          type="button"
          className="text-violet-500 font-bold hover:text-violet-900"
        >
          Dimiss
        </button>
        <button
          type="button"
          className="text-violet-600 font-bold hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
