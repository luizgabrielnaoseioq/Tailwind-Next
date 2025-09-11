"use client"

import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} className='h-5 w-5 mb-1 text-zinc-500 group-hover:text-violet-300'  />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 placeholder-zinc-600 group-hover:placeholder-violet-300"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm group"
      {...props}
    />
  )
}
