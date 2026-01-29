import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../rootStackParamList/RootStackParamList";

import ECommerceMobile from "./home/Home";
import { StackScreenConfig } from "../rootStack/stackScreen";


export const screens = [
  {
    name: "Home",
    component: ECommerceMobile,
    
  }
] as const satisfies readonly [StackScreenConfig<"Home">];
