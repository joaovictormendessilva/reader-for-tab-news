import { StyleSheet, Text, View } from "react-native";

import { fonts } from "@/constants/fonts";

export default function Recent() {
  return (
    <View style={styles.container}>
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
