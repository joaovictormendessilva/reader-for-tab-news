import { postApi } from "./api/post-api";
import { postAdapter } from "./post-adapter";
import { PostStrategy } from "./post-types";

async function getPosts(strategy: PostStrategy, page: number) {
  const { contents, hasNextPage } = await postApi.getContents({ page, per_page: 20, strategy });

  return {
    posts: contents.map(postAdapter.toPost),
    hasNextPage,
  };
}

export const postService = {
  getPosts,
};
