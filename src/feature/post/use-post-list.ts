import { useInfiniteQuery } from "@tanstack/react-query";

import { postService } from "./post-service";
import { PostStrategy } from "./post-types";

export function usePostList(strategy: PostStrategy) {
  const { data, isLoading, isRefetching, refetch, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["posts", strategy],
    queryFn: ({ pageParam }) => postService.getPosts(strategy, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => (lastPage.hasNextPage ? lastPageParam + 1 : undefined),
  });

  function loadNext() {
    if (hasNextPage) fetchNextPage();
  }

  return {
    posts: data?.pages.flatMap((page) => page.posts) ?? [],
    isLoading,
    isRefetching,
    refetch,
    loadNext,
    isFetchingNextPage,
  };
}
