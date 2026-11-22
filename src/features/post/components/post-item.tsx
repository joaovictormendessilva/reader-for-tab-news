import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Pressable, Text, View } from "react-native";

import { PostSummary } from "../post-types";

type PostItemProps = {
  post: PostSummary;
  position: number;
  onPress: VoidFunction;
};

export function PostItem({ post, position, onPress }: PostItemProps) {
  return (
    <Pressable className="flex-row gap-2 px-4 py-2 active:bg-border" onPress={onPress}>
      <Text className="text-base text-text">{position}.</Text>

      <View className="flex-1 gap-1">
        <Text className="text-base text-text">{post.title}</Text>

        <View className="flex-row gap-2">
          <Text className="text-base text-textMuted">{post.numberOfComments} comentários</Text>
          <Text className="text-base text-textMuted">{post.authorName}</Text>
          <Text className="text-base text-textMuted">
            {formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true })}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
