import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Text, View } from "react-native";

import { MarkdownReader } from "@/shared/components/markdown-reader";

import { Comment } from "../post-types";

type CommentListProps = {
  comments: Comment[];
};

export function CommentList({ comments }: CommentListProps) {
  return comments.map((comment) => (
    <View key={comment.id} className="overflow-hidden flex-1 flex-row gap-2">
      <View className="flex-col items-center gap-2">
        <Text className="font-family-regular text-base text-textMuted">{comment.commentDeepCount}</Text>
        <View className="h-full border-r-[0.25] border-textMuted" />
      </View>

      <View className="flex-1 gap-2">
        <View className="flex-row items-center gap-2">
          <Text className="font-family-regular text-sm text-textHighlight bg-blue-950 w-fit rounded-sm px-1 py-0.5">
            {comment.ownerUsername}
          </Text>
          <Text className="font-family-regular text-sm text-textMuted">
            {formatDistanceToNow(comment.publishedAt, { locale: ptBR, addSuffix: true })}
          </Text>
        </View>

        <View className="flex-col gap-2">
          <MarkdownReader content={comment.body} />

          <CommentList comments={comment.comments} />
        </View>
      </View>
    </View>
  ));
}
