import { Button, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [cat, setCat ] = useState('');
  const [cat2, setCat2 ] = useState('');
  const getDatos = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?size=full'
      );

      const response2 = await fetch(
        'https://api.thecatapi.com/v1/images/search?size=full'
      );

      if (response.ok&&response2.ok) {
        const dats = await response.json();
        const dats2 = await response.json();
        console.log(dats);
        setCat(dats[0].url);
        setCat2(dats2[0].url);
        console.log(cat);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width:250, height:250}}
        source={{
          uri: cat
        }}
      />
      <Image
        style={{width:250, height:250}}
        source={{
          uri: cat2
        }}
      />
      <Button onPress={getDatos} title="Pulsame!" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});