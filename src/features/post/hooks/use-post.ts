import { useQuery } from "@tanstack/react-query";

import { postService } from "../post-service";
import { GetPostParams } from "../post-types";

export const usePost = (params: GetPostParams) =>
  useQuery({
    queryKey: ["posts", "detail", params],
    queryFn: () => postService.getPost(params),
  });
