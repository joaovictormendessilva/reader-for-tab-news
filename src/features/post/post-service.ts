import { postApi } from "./api/post-api";
import { postAdapter } from "./post-adapter";
import { PostParams, GetPostsParams } from "./post-types";

const getPosts = async ({ strategy, page }: GetPostsParams) => {
  const { contents, hasNextPage } = await postApi.getContents({ page, per_page: 20, strategy });

  return {
    posts: contents.map(postAdapter.toPostSummary),
    hasNextPage,
  };
};

const getPost = async (params: PostParams) => {
  const content = await postApi.getContent(params);

  return postAdapter.toPost(content);
};

const getComments = async (params: PostParams) => {
  const children = await postApi.getChildren(params);

  return children.map((child) => postAdapter.toComment(child));
};

export const postService = {
  getPosts,
  getPost,
  getComments,
};
