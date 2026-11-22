import { apiClient } from "@/shared/api/api-client";

import { ContentDetailResponse, ContentResponse, GetContentParams, GetContentsParams } from "./post-api-types";

const getContents = async (params: GetContentsParams) => {
  const response = await apiClient.get<ContentResponse[]>("/contents", { params });

  return {
    contents: response.data,
    hasNextPage: String(response.headers.link).includes('rel="next"'),
  };
};

const getContent = async (params: GetContentParams) => {
  const response = await apiClient.get<ContentDetailResponse>(`/contents/${params.username}/${params.slug}`);

  return response.data;
};

export const postApi = {
  getContents,
  getContent,
};
