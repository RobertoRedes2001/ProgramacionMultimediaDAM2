import { Button, View, StyleSheet, Image, Text } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [avatar, setAvatar ] = useState('');
  const [nombre, setNombre ] = useState('');
  const [id, setId ] = useState('');
  const getDatos = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/search/users?q=David'
      );
     
      if (response.ok) {
        const dats = await response.json();
        console.log(dats);
        setAvatar(dats.items[0].avatar_url);
        setNombre(dats.items[0].login);
        setId(dats.items[0].id);
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
      <Text>{nombre}</Text>
      <Text>{id}</Text>
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