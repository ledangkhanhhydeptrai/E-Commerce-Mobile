import React from "react";
import ECommerceMobile from "../screens/home/Home";
import { TabParamList } from "../rootStackParamList/TabParamList";

export type TabScreenConfig<T extends keyof TabParamList> = {
  name: T;
  component: React.ComponentType<any>; // tạm giữ
  label: string;
  icon: string;
};

export const tabScreens: readonly TabScreenConfig<"Home">[] = [
  {
    name: "Home",
    component: ECommerceMobile,
    label: "Trang chủ",
    icon: "🏠"
  }
];
