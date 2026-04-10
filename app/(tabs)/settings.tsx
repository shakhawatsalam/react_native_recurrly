import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const SettingsPage = () => {
  return (
    <SafeAreaView>
      <Text>SettingsPage</Text>
    </SafeAreaView>
  );
};

export default SettingsPage;
