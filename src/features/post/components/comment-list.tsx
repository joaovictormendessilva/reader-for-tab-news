import { Text } from "react-native";

import { MarkdownReader } from "@/shared/components/markdown-reader";

import { Comment } from "../post-types";
import { ThreadItem } from "./thread-item";

type CommentListProps = {
  comments: Comment[];
};

export function CommentList({ comments }: CommentListProps) {
  return comments.map((comment) => (
    <ThreadItem key={comment.id} content={comment.isDeleted ? undefined : comment}>
      {comment.isDeleted ? (
        <Text className="font-family-regular text-sm text-textMuted italic">Comentário excluído</Text>
      ) : (
        <MarkdownReader content={comment.body} />
      )}

      <CommentList comments={comment.comments} />
    </ThreadItem>
  ));
}
