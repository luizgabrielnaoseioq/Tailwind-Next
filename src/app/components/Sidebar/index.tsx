"use client";

import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import * as lucide from "lucide-react";
import { UsedSpaceWidgeth } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Input";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.InputRoot>
        <Input.InputPrefix>
          <lucide.Search className="h-5 w-5 text-zinc-500 group-hover:text-violet-300 " />
        </Input.InputPrefix>
        <Input.Control placeholder="Search" />
      </Input.InputRoot>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={lucide.HomeIcon} />
        <NavItem title="Dashboard" icon={lucide.ChartNoAxesColumn} />
        <NavItem title="Projects" icon={lucide.Layers} />
        <NavItem title="Tasks" icon={lucide.SquareCheckBig} />
        <NavItem title="Reporting" icon={lucide.Flag} />
        <NavItem title="Users" icon={lucide.Users} />
      </nav>

      <UsedSpaceWidgeth />

      <div className="h-px bg-zinc-200 pb-8">
        <Profile />
      </div>
    </aside>
  );
}
