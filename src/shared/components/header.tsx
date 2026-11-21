import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Pressable, Share, Text, View } from "react-native";

import { DarkTheme } from "../theme/dark-theme";

type ShareButtonProps = { url: string; title: string; message: string };

type HeaderProps = { title: string; showBackButton?: boolean; shareButton?: ShareButtonProps };

export function Header({ title, showBackButton = false, shareButton }: HeaderProps) {
  const router = useRouter();

  const handleBack = () => router.back();

  const handleShare = () => {
    if (!shareButton) return;

    Share.share({
      url: shareButton.url,
      title: shareButton.title,
      message: shareButton.message,
    });
  };

  return (
    <View className="py-4 px-4">
      <View className="flex-row items-center">
        <View className="flex-1 flex-row justify-start gap-2">
          {showBackButton && <HeaderPressableButton icon="arrow-back" onPress={handleBack} color="muted" />}
        </View>

        <View className="flex-3">
          <Text numberOfLines={1} className="text-text font-family-bold text-base text-center">
            {title}
          </Text>
        </View>

        <View className="flex-1 flex-row justify-end gap-2">
          {shareButton && <HeaderPressableButton icon="share" onPress={handleShare} color="high-light" />}
        </View>
      </View>
    </View>
  );
}

type HeaderPressableButtonColors = "muted" | "high-light";

type HeaderPressableButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: VoidFunction;
  color: HeaderPressableButtonColors;
};

function HeaderPressableButton({ icon, onPress, color }: HeaderPressableButtonProps) {
  const btnColor = color === "muted" ? DarkTheme.colors.textMuted : DarkTheme.colors.textHighlight;

  return (
    <Pressable onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={btnColor} />
    </Pressable>
  );
}
