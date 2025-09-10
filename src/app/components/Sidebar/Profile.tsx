"use client";

import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <>
      <div className="flex items-center gap-3">
        <img
          src="https://github.com/luizgabrielnaoseioq.png"
          className="w-10 h-10 rounded-full"
        />

        <div className="truncate flex flex-col">
          <span className="text=sm font-semibold text-zinc-700">
            Luiz Gabriel
          </span>
          <span className="text-sm truncate text-zinc-500">gabraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaielon6689@gmail.com</span>
        </div>
        <button className="ml-auto mb-auto p-2 hover:bg-violet-300 rounded">
          <LogOut className="w-5 h-5 text-zinc-500" />
        </button>
      </div>
    </>
  );
}
