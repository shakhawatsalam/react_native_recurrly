import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const InsightsPage = () => {
  return (
    <SafeAreaView>
      <Text>InsightsPage</Text>
    </SafeAreaView>
  );
};

export default InsightsPage;
