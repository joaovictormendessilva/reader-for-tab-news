import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabButton } from "@/shared/components/tab-button";
import { routes } from "@/shared/constants/routes";
import { DarkTheme } from "@/shared/theme/dark-theme";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs style={{ flex: 1 }}>
      <TabSlot />

      <TabList
        style={{
          backgroundColor: DarkTheme.colors.paper,
          paddingBottom: insets.bottom + 8,
          justifyContent: "space-around",
          padding: 8,
        }}
      >
        <TabTrigger name="relevant" href={routes.relevant} asChild>
          <TabButton icon="newspaper" label="Relevantes" />
        </TabTrigger>

        <TabTrigger name="recent" href={routes.recent} asChild>
          <TabButton icon="new-releases" label="Recentes" />
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}
