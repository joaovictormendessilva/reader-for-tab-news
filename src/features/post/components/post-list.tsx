import { FlatList } from "react-native";

import { Repeat } from "@/shared/components/repeat";

import { PostSummary } from "../post-types";
import { PostItem } from "./post-item";
import { PostItemSkeleton } from "./post-item-skeleton";

type PostListProps = {
  data: PostSummary[] | undefined;
  onPressPost: (post: PostSummary) => void;

  isFirstLoading: boolean;

  onRefresh: VoidFunction;
  isRefreshing: boolean;

  onLoadNext: VoidFunction;
  hasNextPage: boolean;
  isLoadingNext: boolean;
};

export function PostList({
  data,
  onPressPost,
  isFirstLoading,
  onRefresh,
  isRefreshing,
  onLoadNext,
  hasNextPage,
  isLoadingNext,
}: PostListProps) {
  const handleEndReached = () => {
    if (!hasNextPage || isFirstLoading || isLoadingNext || isRefreshing) return;

    onLoadNext();
  };

  return (
    <FlatList
      data={data}
      onRefresh={onRefresh}
      refreshing={isRefreshing}
      onEndReached={handleEndReached}
      onEndReachedThreshold={2.5}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <PostItem post={item} position={index + 1} onPress={() => onPressPost(item)} />
      )}
      ListFooterComponent={
        isFirstLoading || isLoadingNext ? (
          <Repeat count={isFirstLoading ? 10 : 3}>{(index) => <PostItemSkeleton key={index} />}</Repeat>
        ) : undefined
      }
    />
  );
}
