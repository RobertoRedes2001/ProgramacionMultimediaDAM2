import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let StringText = "Mucho Texto";
  let content = {ParagraphOne : "Texto 1", ParagraphTwo : "Texto 2", title:"Texto Titulo"};
  function Article(){
    return <View style={styles.container}>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.title}>{content.ParagraphOne}</Text>
        <Text style={styles.title}>{content.ParagraphTwo}</Text>
        <StatusBar style="auto" />
      </View>
  }
  return (
    <Article/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});
