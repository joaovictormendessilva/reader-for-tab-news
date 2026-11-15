import { FlatList } from "react-native";

import { Repeat } from "@/shared/components/repeat";

import { Post } from "../post-types";
import { PostItem } from "./post-item";
import { PostItemSkeleton } from "./post-item-skeleton";

type PostListProps = {
  data: Post[];
  onPressPost: (post: Post) => void;

  isFirstLoading: boolean;

  onRefresh: VoidFunction;
  isRefreshing: boolean;

  onLoadNext: VoidFunction;
  isLoadingNext: boolean;
};

export function PostList({
  data,
  onPressPost,
  isFirstLoading,
  onRefresh,
  isRefreshing,
  onLoadNext,
  isLoadingNext,
}: PostListProps) {
  function handleEndReached() {
    if (isFirstLoading || isLoadingNext || isRefreshing) return;

    onLoadNext();
  }

  return (
    <FlatList
      data={data}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      onEndReached={handleEndReached}
      onEndReachedThreshold={1}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <PostItem
          authorName={item.authorName}
          numberOfComments={item.numberOfComments}
          onPress={() => onPressPost(item)}
          position={index + 1}
          publishedAt={item.publishedAt}
          title={item.title}
        />
      )}
      ListFooterComponent={
        isFirstLoading || isLoadingNext ? (
          <Repeat count={isFirstLoading ? 10 : 3}>{(index) => <PostItemSkeleton key={index} />}</Repeat>
        ) : undefined
      }
    />
  );
}
