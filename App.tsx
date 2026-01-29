import { NavigationContainer } from "@react-navigation/native";
import AppProvider from "./providers/AppProvider";
import { Tabs } from "./navigation/Navigation";
import RootStack from "./rootStack/RootStack";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    </AppProvider>
  );
}
