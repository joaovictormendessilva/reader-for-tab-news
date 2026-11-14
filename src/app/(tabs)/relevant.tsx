import { View } from "react-native";

import { PostList } from "@/feature/post/components/post-list";
import { Header } from "@/shared/components/header";

const mockPosts = Array.from({ length: 20 }, (_, index) => ({
  authorName: "lvsouzadev",
  id: String(index + 1),
  numberOfComments: 4,
  onPress: () => {},
  publishedAt: new Date(),
  title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas",
}));

export default function Relevant() {
  return (
    <View className="flex-1">
      <Header title="Relevantes" />

      <PostList
        data={mockPosts}
        isFirstLoading={false}
        isRefreshing={false}
        onRefresh={() => {}}
        onLoadNext={() => {}}
        isLoadingNext={false}
      />
    </View>
  );
}
