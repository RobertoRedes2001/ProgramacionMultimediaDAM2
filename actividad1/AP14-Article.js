import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';


function Article(){
  let content = {ParagraphOne : "En esta imagen se ve al Gran Mono", ParagraphTwo : "naciendo tras ser parido", title:"Gran Mono Baby"};
  return (<View style={styles.container}>
      <Text style={styles.title}>{content.title}</Text>
      <Image
        style={styles.stretch}
        source={require('../assets/icon.png')}
      />
      <Text style={styles.title}>{content.ParagraphOne}</Text>
      <Text style={styles.title}>{content.ParagraphTwo}</Text>
      <StatusBar style="auto" />
    </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 12,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    stretch: {
      width: 200,
      height: 200,
      resizeMode: 'stretch',
    }
});

//export default Article;