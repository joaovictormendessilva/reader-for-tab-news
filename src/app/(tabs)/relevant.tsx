import { StyleSheet, Text, View } from "react-native";

import { fonts } from "@/constants/fonts";

export default function Relevant() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relevantes</Text>
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
