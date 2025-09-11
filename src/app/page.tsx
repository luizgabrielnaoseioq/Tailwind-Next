"use client";
import * as Tabs from "@radix-ui/themes";
import { SettingsTabs } from "./components/SettingsTabs";

export default function Home() {
  return (
    <>
      <h1 className="font-sm text-3xl">Settings</h1>
      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex w-full flex-col gap-5">
          <div>
            <label htmlFor="firstName" className="text-sm font-medium">Name</label>
          </div>
        </form>
      </div>
    </>
  );
}
