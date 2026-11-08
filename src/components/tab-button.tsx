import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TabTriggerSlotProps } from "expo-router/ui";
import { ComponentRef, Ref } from "react";
import { Pressable, Text } from "react-native";

import { DarkTheme } from "@/theme/dark-theme";

type TabButtonProps = Omit<TabTriggerSlotProps, "ref"> & {
  ref?: Ref<ComponentRef<typeof Pressable>>;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function TabButton({ isFocused, label, icon, ...props }: TabButtonProps) {
  return (
    <Pressable {...props} style={{ flexDirection: "column", alignItems: "center", gap: 8 }}>
      <MaterialIcons name={icon} size={24} color={isFocused ? DarkTheme.colors.textHighlight : DarkTheme.colors.text} />
      <Text className={isFocused ? "text-highlight" : "text-text"}>{label}</Text>
    </Pressable>
  );
}
