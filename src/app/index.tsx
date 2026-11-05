import { StyleSheet, Text, View } from 'react-native';

import { fonts } from '@/constants/fonts';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reader for TabNews</Text>
      <Text style={styles.text}>Open up src/app/index.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 24,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});
