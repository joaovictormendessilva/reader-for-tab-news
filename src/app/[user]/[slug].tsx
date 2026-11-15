import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Reader() {
  const params = useLocalSearchParams();

  console.log(params);

  return (
    <View>
      <Text className="text-text">Reader</Text>
    </View>
  );
}
