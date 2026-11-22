import { ChildResponse, ContentDetailResponse, ContentResponse, PublishedChildResponse } from "./api/post-api-types";
import { Comment, Post, PostSummary } from "./post-types";

const toPostSummary = (content: ContentResponse): PostSummary => ({
  id: content.id,
  slug: content.slug,
  title: content.title,
  authorName: content.owner_username,
  numberOfComments: content.children_deep_count,
  tabcoins: content.tabcoins,
  publishedAt: content.published_at,
});

const toPost = (content: ContentDetailResponse): Post => ({
  ...toPostSummary(content),
  body: content.body,
});

const isPublishedChild = (child: ChildResponse): child is PublishedChildResponse => "body" in child;

const toComment = (child: ChildResponse): Comment => {
  if (!isPublishedChild(child)) {
    return {
      id: child.id,
      isDeleted: true,
      comments: child.children?.map(toComment) ?? [],
    };
  }

  return {
    id: child.id,
    isDeleted: false,
    body: child.body,
    authorName: child.owner_username,
    tabcoins: child.tabcoins,
    publishedAt: child.published_at,
    comments: child.children?.map(toComment) ?? [],
  };
};

export const postAdapter = {
  toPostSummary,
  toPost,
  toComment,
};
