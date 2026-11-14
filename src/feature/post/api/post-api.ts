import { apiClient } from "@/shared/api/api-client";

import { ContentResponse, GetContentsParams } from "./post-api-types";

async function getContents(params: GetContentsParams) {
  const response = await apiClient.get<ContentResponse[]>("/contents", { params });

  return {
    contents: response.data,
    hasNextPage: String(response.headers.link).includes('rel="next"'),
  };
}

export const postApi = {
  getContents,
};
