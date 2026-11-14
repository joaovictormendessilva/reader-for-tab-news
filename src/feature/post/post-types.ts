export type PostStrategy = "relevant" | "new" | "old";

export type Post = {
  id: string;
  slug: string;
  title: string;
  authorName: string;
  numberOfComments: number;
  publishedAt: Date;
};
