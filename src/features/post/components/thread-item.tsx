import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ReactNode } from "react";
import { Text, View } from "react-native";

import { PostSummary } from "../post-types";

type ThreadItemProps = {
  content?: Pick<PostSummary, "tabcoins" | "authorName" | "publishedAt">;
  info?: string;
  children: ReactNode;
};

export function ThreadItem({ content, info, children }: ThreadItemProps) {
  return (
    <View className="overflow-hidden flex-1 flex-row gap-2">
      <View className="flex-col items-center gap-2">
        {content && <Text className="font-family-regular text-base text-textMuted">{content.tabcoins}</Text>}
        <View className="h-full border-r-[0.25] border-textMuted" />
      </View>

      <View className="flex-1 gap-2">
        {content && (
          <View className="flex-row items-center gap-2">
            <Text className="font-family-regular text-sm text-textHighlight bg-blue-950 w-fit rounded-sm px-1 py-0.5">
              {content.authorName}
            </Text>
            {info && <Text className="font-family-regular text-sm text-textMuted">{info}</Text>}
            <Text className="font-family-regular text-sm text-textMuted">
              {formatDistanceToNow(content.publishedAt, { locale: ptBR, addSuffix: true })}
            </Text>
          </View>
        )}

        {children}
      </View>
    </View>
  );
}
