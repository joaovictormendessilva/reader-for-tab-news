import { apiClient } from "@/shared/api/api-client";

import {
  ChildResponse,
  ContentDetailResponse,
  ContentResponse,
  GetContentsRequest,
  ContentRequest,
} from "./post-api-types";

const getContents = async (params: GetContentsRequest) => {
  const response = await apiClient.get<ContentResponse[]>("/contents", { params });

  return {
    contents: response.data,
    hasNextPage: String(response.headers.link).includes('rel="next"'),
  };
};

const getContent = async (params: ContentRequest) => {
  const response = await apiClient.get<ContentDetailResponse>(`/contents/${params.username}/${params.slug}`);

  return response.data;
};

const getChildren = async (params: ContentRequest) => {
  const response = await apiClient.get<ChildResponse[]>(`/contents/${params.username}/${params.slug}/children`);

  return response.data;
};

export const postApi = {
  getContents,
  getContent,
  getChildren,
};
