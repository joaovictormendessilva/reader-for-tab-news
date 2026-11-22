import { ChildResponse, ContentDetailResponse, ContentResponse } from "./api/post-api-types";
import { Comment, Post, PostSummary } from "./post-types";

const toPostSummary = (content: ContentResponse): PostSummary => ({
  id: content.id,
  slug: content.slug,
  title: content.title,
  authorName: content.owner_username,
  numberOfComments: content.children_deep_count,
  publishedAt: content.published_at,
});

const toPost = (content: ContentDetailResponse): Post => ({
  ...toPostSummary(content),
  body: content.body,
});

const toComment = (child: ChildResponse): Comment => ({
  id: child.id,
  body: child.body,
  publishedAt: child.published_at,
  ownerUsername: child.owner_username,
  comments: child.children?.length && child.children?.length > 0 ? child.children.map((c) => toComment(c)) : [],
  commentDeepCount: child.children_deep_count,
});

export const postAdapter = {
  toPostSummary,
  toPost,
  toComment,
};
