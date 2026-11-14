import { StyleSheet, Text, View } from "react-native";

import { Header } from "@/shared/components/header";
import { fonts } from "@/shared/constants/fonts";

export default function Recent() {
  return (
    <View style={styles.container}>
      <Header title="Recentes" />

      <Text style={styles.title}>Recentes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: fonts.bold,
    fontSize: 24,
  },
});
