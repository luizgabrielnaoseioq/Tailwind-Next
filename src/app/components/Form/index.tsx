import { CloudUpload, Mail, UploadCloud, User } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input";

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
          <div className="flex items-start gap-5">
            <div className="bg-violet-50 w-16 h-16 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-violet-500" />
            </div>

            <label
              htmlFor="filePhoto"
              className="text-zinc-500 cursor-pointer flex flex-1 flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 shadow-sm group hover:bg-violet-[#fcfaff]"
            >
              <div className="rounded-full border-[6px] border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
                <UploadCloud className="text-zinc-600 w-5-h-5 group-hover:to-violet-600" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm">
                  <span className="font-semibold text-violet-700">
                    Click to upload
                  </span>
                  or drag and drop
                </span>
                <span className="text-xs">
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </span>
              </div>
            </label>
            <input type="file" className="sr-only" id="filePhoto" />
          </div>
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
          <div />
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
          <div />
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
