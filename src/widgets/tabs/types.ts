import React from "react";

export interface Tabs {
  children: React.ReactNode;
  title: string;
}

export interface TabsProps {
  tabs: Array<Tabs>;
  index?: number;
}
