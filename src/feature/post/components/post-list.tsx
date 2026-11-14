import { FlatList } from "react-native";
import { PostItem, PostItemProps } from "./post-item";

type PostListProps = {
  data: Omit<PostItemProps, "position">[];
};

export function PostList({ data }: PostListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <PostItem
          id={item.id}
          authorName={item.authorName}
          numberOfComments={item.numberOfComments}
          onPress={item.onPress}
          position={index + 1}
          publishedAt={item.publishedAt}
          title={item.title}
        />
      )}
    />
  );
}
