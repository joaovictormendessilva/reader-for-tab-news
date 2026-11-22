import { useQuery } from "@tanstack/react-query";

import { postService } from "../post-service";
import { PostParams } from "../post-types";

export const usePost = (params: PostParams) =>
  useQuery({
    queryKey: ["posts", "detail", params],
    queryFn: () => postService.getPost(params),
  });
