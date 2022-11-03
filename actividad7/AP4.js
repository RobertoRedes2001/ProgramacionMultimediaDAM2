import { Button, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [avatar, setAvatar ] = useState('');
  const getDatos = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/search/users?q=Java'
      );
     
      if (response.ok) {
        const dats = await response.json();
        console.log(dats);
        setAvatar(dats.items[0].avatar_url);
        console.log(avatar);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: avatar
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
  image: {
    width:250,
    height:250,
  }
});