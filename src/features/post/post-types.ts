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

export type PostParams = {
  username: string;
  slug: string;
};

export type Comment = {
  id: string;
  body: string;
  publishedAt: string;
  ownerUsername: string;
  comments: Comment[];
  commentDeepCount: number;
};
