"use client";
import * as Tabs from "@radix-ui/themes";
import { SettingsTabs } from "./components/SettingsTabs";
import { Header } from "./components/Header";
import { Form } from "./components/Form";

export default function Home() {
  return (
    <>
      <h1 className="font-sm text-3xl">Settings</h1>
      <SettingsTabs />

      <Header />

      <Form />
    </>
  );
}
