import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let StringText = "Mucho Texto";
  let content = {ParagraphOne : "Texto 1", ParagraphTwo : "Texto 2"};
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Sample Text</Text>
      <Text>{StringText}</Text>
      <Text>{content.ParagraphOne}</Text>
      <Text>{content.ParagraphTwo}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
