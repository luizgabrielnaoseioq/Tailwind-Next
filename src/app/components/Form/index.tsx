import { Mail } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";
import * as FileInput from "./FileInput/index";
import { Select } from "./FileInput/Select";

export function Form() {
  return (
    <>
      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 space-x-12">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>
          <div className="grid grid-cols-2 gap-6">
            <InputRoot>
              <InputControl id="firstName" defaultValue="Luiz" />
            </InputRoot>

            <InputRoot>
              <InputControl defaultValue="Gabriel" />
            </InputRoot>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] pt-5 space-x-12">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <div className="grid grid-cols-2 gap-6">
            <InputRoot>
              <InputPrefix>
                <Mail className="w-5 h-5 text-zinc-00" />
              </InputPrefix>
              <InputControl id="email" defaultValue="gabrielon6689@gmail.com" />
            </InputRoot>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pt-5">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile.
            </span>
          </label>
          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid gap-3 grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] pt-5 space-x-12">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700 ">
            Role
          </label>
          <div className="grid grid-cols-2 gap-6">
            <InputRoot>
              <InputControl id="role" defaultValue="CTO" />
            </InputRoot>
          </div>
        </div>

        <div className="grid gap-3 grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] pt-5 space-x-12">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700 "
          >
            Country
          </label>
          <Select/>
        </div>

        <div className="grid gap-3 grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] pt-5 space-x-12">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700 "
          >
            Timezone
          </label>
          <div />
        </div>

        <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pt-5">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>
          <div />
        </div>

        <div className="grid grid-cols-[minmax(7.5rem,17.5rem)_minmax(25rem,1fr)_minmax(0,15rem)] gap-3 pt-5">
          <label
            htmlFor="portifolio"
            className="text-sm font-medium text-zinc-700"
          >
            Portifolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
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
          <div />
        </div>
      </form>
    </>
  );
}
