"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="text-zinc-500 cursor-pointer flex flex-1 flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 shadow-sm group hover:bg-violet-[#fcfaff]"
    >
      <div className="rounded-full border-[6px] border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="text-zinc-600 w-5-h-5 group-hover:to-violet-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">
            Click to upload{" "}
          </span>
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
