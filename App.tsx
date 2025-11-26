import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GrowthMapScreen } from "./src/components/GrowthMapScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <GrowthMapScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
