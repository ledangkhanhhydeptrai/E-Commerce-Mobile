import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "./CustomTabBar";
import { tabScreens } from "../rootStack/tabScreens";
import { TabParamList } from "../rootStackParamList/TabParamList";
import ECommerceMobile from "../screens/home/Home";
import PhoneDetail from "../screens/detail/phoneDetail";
const Tab = createBottomTabNavigator<TabParamList>();

export const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={ECommerceMobile} />
      <Tab.Screen
        name="Detail"
        component={PhoneDetail}
        options={{
          tabBarStyle: { display: "none" }
        }} // ❗ Ẩn tab
      />
    </Tab.Navigator>
  );
};
