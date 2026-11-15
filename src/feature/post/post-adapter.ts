import { ContentDetailResponse, ContentResponse } from "./api/post-api-types";
import { Post, PostSummary } from "./post-types";

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

export const postAdapter = {
  toPostSummary,
  toPost,
};
