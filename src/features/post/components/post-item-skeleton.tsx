import { View } from "react-native";

export function PostItemSkeleton() {
  return (
    <View className="flex-row gap-2 px-4 py-2 animate-pulse">
      <View className="h-3 w-3 rounded bg-border" />

      <View className="flex-1 gap-2">
        <View className="h-3 w-full rounded bg-border" />
        <View className="h-3 w-2/3 rounded bg-border" />

        <View className="flex-row gap-2">
          <View className="h-3 w-20 rounded bg-border" />
          <View className="h-3 w-16 rounded bg-border" />
          <View className="h-3 w-14 rounded bg-border" />
        </View>
      </View>
    </View>
  );
}
