import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const SubscriptionsPage = () => {
  return (
    <SafeAreaView>
      <Text>SubscriptionsPage</Text>
    </SafeAreaView>
  );
};

export default SubscriptionsPage;
