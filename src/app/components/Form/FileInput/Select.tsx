import * as Selected from "@radix-ui/react-select";

export interface SelectProps {}

export function Select() {
  return (
    <Selected.Root>
      <Selected.Trigger className="flex h-11 items-center justify-between gap-2 rounded-lg border bg-zinc-300">
        <Selected.Value></Selected.Value>
      </Selected.Trigger>
    </Selected.Root>
  );
}
