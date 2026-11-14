import { View, Text } from "react-native";

type HeaderProps = { title: string };

export function Header({ title }: HeaderProps) {
  return (
    <View className="items-center py-4">
      <Text className="text-text font-family-bold text-base">{title}</Text>
    </View>
  );
}
