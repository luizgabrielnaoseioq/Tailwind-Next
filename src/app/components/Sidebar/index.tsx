import { Search } from "lucide-react";
import { Logo } from "./Logo";
import { MainNavgation } from "./MainNavgation";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="mx-1 flex w-full items-center rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <input
          className=" flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

      <MainNavgation />
      <div className="mt-auto"><h1>tudo em baixo</h1></div>
    </aside>
  );
}
