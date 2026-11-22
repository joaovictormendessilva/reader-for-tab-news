export type PostStrategy = "relevant" | "new" | "old";

export type PostSummary = {
  id: string;
  slug: string;
  title: string;
  authorName: string;
  numberOfComments: number;
  publishedAt: string;
};

export type Post = PostSummary & {
  body: string;
};

export type GetPostsParams = {
  strategy: PostStrategy;
  page: number;
};

export type GetPostParams = {
  username: string;
  slug: string;
};
