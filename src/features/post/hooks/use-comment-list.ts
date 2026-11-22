import { useQuery } from "@tanstack/react-query";

import { postService } from "../post-service";
import { PostParams } from "../post-types";

export const useCommentList = (params: PostParams) =>
  useQuery({
    queryKey: ["posts", "comments", params],
    queryFn: () => postService.getComments(params),
  });
