"use client";

import * as Tabs from "@radix-ui/react-tabs";

export function OptionTabs() {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger value="tab1">Swimming</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Bathing</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Surfing</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
