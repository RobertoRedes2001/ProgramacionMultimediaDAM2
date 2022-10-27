import { useState } from 'react';
import { Alert, Text, TextInput, View, StyleSheet, Button } from 'react-native';
export default function App() {
  const [text, setText] = useState("");
  const [posicion, setPosicion] = useState("");
  const [arrayAny, setArrayAny ] = useState([]); 
  const [content, setContent ] = useState();

  function handleOnPress(){
    if(text==""){
      alert("NO HAY NADA");
    }
    else if(parseInt(text)){
      alert("HAY NUMEROS");
      let newArray = [...arrayAny];
      newArray.push(text);
      setArrayAny(newArray);
    }
    else {
      alert("HAY ALGO");
      let newArray = [...arrayAny];
      newArray.push(text);
      setArrayAny(newArray);
    }
  }

  function handleOnPressPos(){
    
    if(parseInt(posicion)<arrayAny.length){
      setContent(arrayAny[posicion]);
    }else{
      alert("No hay informacion de eventos.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{height: 40, width: 200, borderWidth: 1}}
        placeholder="Inserta tu texto..."
        onChangeText={newText => setText(newText)}
        defaultValue={""}
      />
      <Button onPress={handleOnPress} title="Pulsame!"></Button>

      <TextInput
        style={{height: 40, width: 200, borderWidth: 1}}
        placeholder="Inserta la posicion..."
        onChangeText={newText => setPosicion(newText)}
        defaultValue={""}
      />
      <Text>{content}</Text>
      <Button onPress={handleOnPressPos} title="Pulsame!"></Button>
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