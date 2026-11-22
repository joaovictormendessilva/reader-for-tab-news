import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { usePost } from "@/features/post/hooks/use-post";
import { Header } from "@/shared/components/header";
import { MarkdownReader } from "@/shared/components/markdown-reader";
import { tabNewsUrl } from "@/shared/constants/tab-news-url";

export default function Reader() {
  const params = useLocalSearchParams();

  const { data, isLoading } = usePost({ username: String(params.user), slug: String(params.slug) });

  const title = isLoading ? "Carregando..." : (data?.title ?? "");
  const postUrl = `${tabNewsUrl}/${params.user}/${params.slug}`;

  return (
    <View className="flex-1">
      <Header title={title} showBackButton shareButton={{ title, message: `Leia em: ${postUrl}`, url: postUrl }} />

      {isLoading && (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={36} />
        </View>
      )}

      {data && (
        <ScrollView className="flex-1" contentContainerClassName="px-4 pb-8 gap-2">
          <View className="overflow-hidden flex-1 flex-row gap-2">
            <View className="flex-col items-center gap-2">
              <Text className="font-family-regular text-base text-textMuted">{data.numberOfComments}</Text>
              <View className="h-full border-r-[0.25] border-textMuted" />
            </View>

            <View className="flex-1">
              <View className="flex-row items-center gap-2">
                <Text className="font-family-regular text-sm text-textHighlight bg-blue-950 w-fit rounded-sm px-1 py-0.5">
                  {data.authorName}
                </Text>
                <Text className="font-family-regular text-sm text-textMuted">
                  {Math.ceil(data.body.split(/\s+/).length / 200)} min de leitura
                </Text>
                <Text className="font-family-regular text-sm text-textMuted">
                  {formatDistanceToNow(data.publishedAt, { locale: ptBR, addSuffix: true })}
                </Text>
              </View>

              <View className="flex-col gap-2">
                <Text className="text-text text-lg font-family-bold">{title}</Text>
                <View className="w-full border-b-[0.25] border-textMuted" />
                <MarkdownReader content={data.body} />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}
