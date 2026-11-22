import { useRouter } from "expo-router";
import { View } from "react-native";

import { PostList } from "@/features/post/components/post-list";
import { usePostList } from "@/features/post/hooks/use-post-list";
import { Header } from "@/shared/components/header";
import { postReaderHref } from "@/shared/constants/routes";

export default function Recent() {
  const router = useRouter();

  const { data, isLoading, isRefetching, refetch, fetchNextPage, hasNextPage, isFetchingNextPage } = usePostList({
    strategy: "new",
  });

  return (
    <View className="flex-1">
      <Header title="Recentes" />

      <PostList
        data={data}
        onPressPost={(post) => router.push(postReaderHref({ username: post.authorName, slug: post.slug }))}
        isFirstLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        onLoadNext={fetchNextPage}
        hasNextPage={hasNextPage}
        isLoadingNext={isFetchingNextPage}
      />
    </View>
  );
}
