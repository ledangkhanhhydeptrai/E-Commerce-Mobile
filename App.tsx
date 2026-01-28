import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{ headerShown: false }} // ✅ boolean
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
