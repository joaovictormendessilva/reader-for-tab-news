import { Pressable, Text, View } from "react-native";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export type PostItemProps = {
  id: string;
  position: number;
  numberOfComments: number;
  authorName: string;
  publishedAt: Date;
  onPress: VoidFunction;
  title: string;
};
export function PostItem({ position, numberOfComments, authorName, publishedAt, onPress, title }: PostItemProps) {
  return (
    <Pressable className="flex-row gap-2 px-4 py-2 active:bg-border" onPress={onPress}>
      <Text className="text-base text-text">{position}.</Text>

      <View className="flex-1 gap-1">
        <Text className="text-base text-text">{title}</Text>

        <View className="flex-row gap-2">
          <Text className="text-base text-textMuted">{numberOfComments} comentários</Text>
          <Text className="text-base text-textMuted">{authorName}</Text>
          <Text className="text-base text-textMuted">
            {formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
