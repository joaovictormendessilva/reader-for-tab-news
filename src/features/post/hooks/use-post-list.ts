import { useInfiniteQuery } from "@tanstack/react-query";

import { postService } from "../post-service";
import { GetPostsParams } from "../post-types";

export const usePostList = (params: Omit<GetPostsParams, "page">) =>
  useInfiniteQuery({
    queryKey: ["posts", "list", params],
    queryFn: ({ pageParam }) => postService.getPosts({ ...params, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => (lastPage.hasNextPage ? lastPageParam + 1 : undefined),
    select: (data) => {
      const mergedPosts = data.pages.flatMap((page) => page.posts);

      const uniquePosts = [...new Map(mergedPosts.map((post) => [post.id, post])).values()];

      return uniquePosts;
    },
  });
