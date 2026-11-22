import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { CommentList } from "@/features/post/components/comment-list";
import { ThreadItem } from "@/features/post/components/thread-item";
import { useCommentList } from "@/features/post/hooks/use-comment-list";
import { usePost } from "@/features/post/hooks/use-post";
import { Header } from "@/shared/components/header";
import { MarkdownReader } from "@/shared/components/markdown-reader";
import { tabNewsUrl } from "@/shared/constants/tab-news-url";

export default function Reader() {
  const params = useLocalSearchParams();

  const postParams = { username: String(params.user), slug: String(params.slug) };

  const { data: postData, isLoading: isPostLoading } = usePost(postParams);
  const { data: commentsData } = useCommentList(postParams);

  const title = isPostLoading ? "Carregando..." : (postData?.title ?? "");
  const postUrl = `${tabNewsUrl}/${params.user}/${params.slug}`;

  return (
    <View className="flex-1">
      <Header title={title} showBackButton shareButton={{ title, message: `Leia em: ${postUrl}`, url: postUrl }} />

      {isPostLoading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={36} />
        </View>
      )}

      {postData && (
        <ScrollView className="flex-1" contentContainerClassName="px-4 pb-8 gap-2">
          <ThreadItem content={postData} info={`${Math.ceil(postData.body.split(/\s+/).length / 200)} min de leitura`}>
            <Text className="text-text text-lg font-family-bold">{title}</Text>
            <View className="w-full border-b-[0.25] border-textMuted" />
            <MarkdownReader content={postData.body} />
          </ThreadItem>

          {!!commentsData?.length && (
            <View className="px-3 py-4 gap-4 bg-paper rounded-lg">
              <Text className="font-family-bold text-text text-lg">Comentários</Text>

              <CommentList comments={commentsData} />
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}
