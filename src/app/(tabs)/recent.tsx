import { View } from "react-native";

import { PostList } from "@/feature/post/components/post-list";
import { usePostList } from "@/feature/post/use-post-list";
import { Header } from "@/shared/components/header";

export default function Recent() {
  const { posts, isLoading, isRefetching, refetch, loadNext, isFetchingNextPage } = usePostList("new");

  return (
    <View className="flex-1">
      <Header title="Recentes" />

      <PostList
        data={posts}
        onPressPost={() => {}}
        isFirstLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        onLoadNext={loadNext}
        isLoadingNext={isFetchingNextPage}
      />
    </View>
  );
}
