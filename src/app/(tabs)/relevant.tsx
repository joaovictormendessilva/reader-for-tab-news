import { View } from "react-native";

import { PostList } from "@/feature/post/components/post-list";
import { Header } from "@/shared/components/header";

export default function Relevant() {
  return (
    <View>
      <Header title="Relevantes" />

      <PostList
        data={[
          {
            authorName: "lvsouzadev",
            id: "1",
            numberOfComments: 4,
            onPress: () => {},
            publishedAt: new Date(),
            title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas",
          },
          {
            authorName: "lvsouzadev",
            id: "2",
            numberOfComments: 4,
            onPress: () => {},
            publishedAt: new Date(),
            title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas",
          },
          {
            authorName: "lvsouzadev",
            id: "3",
            numberOfComments: 4,
            onPress: () => {},
            publishedAt: new Date(),
            title: "Falar em Inglês: Criei um MICRO SAAS com 💵 40,00 REAIS em DUAS semanas",
          },
        ]}
      />
    </View>
  );
}
