"use client";

import * as lucide from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavgation() {
  return (
    <>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={lucide.HomeIcon} />
        <NavItem title="Dashboard" icon={lucide.ChartNoAxesColumn} />
        <NavItem title="Projects" icon={lucide.Layers} />
        <NavItem title="Tasks" icon={lucide.SquareCheckBig} />
        <NavItem title="Reporting" icon={lucide.Flag} />
        <NavItem title="Users" icon={lucide.Users} />
      </nav>
    </>
  );
}
