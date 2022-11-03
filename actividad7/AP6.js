import { Button, View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [avatar, setAvatar ] = useState('');
  const [nombre, setNombre ] = useState('');
  const [id, setId ] = useState('');
  const [ arrayUsu, setArrayUsu ] = useState([]);
  const [ posicion, setPosicion ] = useState(0);

  const busqueda = () => {

    setAvatar(arrayUsu.items[posicion].avatar_url);
    setNombre(arrayUsu.items[posicion].login);
    setId(arrayUsu.items[posicion].id);
  };

  const getDatos = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/search/users?q=David'
      );
     
      if (response.ok) {
        setArrayUsu(await response.json());
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
      <Button onPress={getDatos} title="Consigue los datos!" />
      <TextInput
        style={{height: 40, backgroundColor:"white"}}
        placeholder="Inserta tu posicion..."
        onChangeText={nuevoTexto => setPosicion(nuevoTexto)}
        defaultValue={posicion}
      />
      <Button onPress={busqueda} title="Pulsame!"></Button>
      
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