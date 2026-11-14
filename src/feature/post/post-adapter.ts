import { ContentResponse } from "./api/post-api-types";
import { Post } from "./post-types";

function toPost(content: ContentResponse): Post {
  return {
    id: content.id,
    slug: content.slug,
    title: content.title,
    authorName: content.owner_username,
    numberOfComments: content.children_deep_count,
    publishedAt: new Date(content.published_at),
  };
}

export const postAdapter = {
  toPost,
};
