export type PostStrategy = "relevant" | "new" | "old";

export type PostSummary = {
  id: string;
  slug: string;
  title: string;
  authorName: string;
  numberOfComments: number;
  tabcoins: number;
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

type CommentBase = {
  id: string;
  comments: Comment[];
};

export type PublishedComment = CommentBase & {
  isDeleted: false;
  body: string;
  authorName: string;
  tabcoins: number;
  publishedAt: string;
};

export type DeletedComment = CommentBase & {
  isDeleted: true;
};

export type Comment = PublishedComment | DeletedComment;
