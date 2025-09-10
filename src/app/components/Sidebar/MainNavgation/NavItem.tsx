"use client";

import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <>
      <nav className="space-y-0.5">
        <a
          href=""
          className="group flex items-center gap-3 rounded py-2 px-3 hover:bg-violet-50"
        >
          <Icon className="w-5 h-5 text-zinc-400" />
          <span className="font-medium text-zinc-700 group-hover:text-violet-500">
            {title}
          </span>
          <ChevronDown className="ml-auto w-5 h-5 text-zinc-400 group-hover:text-violet-500" />
        </a>
      </nav>
    </>
  );
}
