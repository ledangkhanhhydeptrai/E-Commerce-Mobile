import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./navigation/Navigation";
import AppProvider from "./providers/AppProvider";

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AppProvider>
  );
}
