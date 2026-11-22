import { postApi } from "./api/post-api";
import { postAdapter } from "./post-adapter";
import { GetPostParams, GetPostsParams } from "./post-types";

const getPosts = async ({ strategy, page }: GetPostsParams) => {
  const { contents, hasNextPage } = await postApi.getContents({ page, per_page: 20, strategy });

  return {
    posts: contents.map(postAdapter.toPostSummary),
    hasNextPage,
  };
};

const getPost = async (params: GetPostParams) => {
  const content = await postApi.getContent(params);

  return postAdapter.toPost(content);
};

export const postService = {
  getPosts,
  getPost,
};
