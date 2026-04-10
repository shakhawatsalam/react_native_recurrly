import { Link } from "expo-router";
import { Text, View } from "react-native";

const SingIn = () => {
  return (
    <View className="p-5">
      <Text>SingIn</Text>
      <Link href={"/(tabs)"}>HELLO</Link>
    </View>
  );
};

export default SingIn;
