import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TabButton } from "@/components/tab-button";
import { routes } from "@/constants/routes";

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs style={{ flex: 1, paddingTop: insets.top }}>
      <TabSlot />

      <TabList style={[styles.tabList, { paddingBottom: insets.bottom }]}>
        <TabTrigger name="relevant" href={routes.relevant} asChild>
          <TabButton>Relevantes</TabButton>
        </TabTrigger>
        <TabTrigger name="recent" href={routes.recent} asChild>
          <TabButton>Recentes</TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabList: {
    backgroundColor: "#ffffff",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e5e7eb",
  },
});
