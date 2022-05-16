import React from "react";

import type { HeaderProps } from "layout/components/header";

export interface MainProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
  title: string;
}
