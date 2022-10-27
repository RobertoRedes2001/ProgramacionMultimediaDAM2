import { useState } from 'react';
import { Alert, Text, TextInput, View, StyleSheet, Button } from 'react-native';
export default function App() {
  const [text, setText] = useState("");
  const [arrayNum, setArrayNum ] = useState([]); 
  const [arrayAny, setArrayAny ] = useState([]); 

  function handleOnPress(){
    if(text==""){
      alert("NO HAY NADA");
    }
    else if(parseInt(text)){
      alert("HAY NUMEROS");
      let newArray = [...arrayNum];
      newArray.push(text);
      setArrayNum(newArray);
    }
    else {
      alert("HAY ALGO");
      let newArray = [...arrayAny];
      newArray.push(text);
      setArrayAny(newArray);
    }
  }

  let otherAnyArray = arrayAny.map((value,index) => 
    
      <Text>{value}</Text>
            
  );
  let otherNumArray = arrayNum.map((value,index) => 
    
      <Text>{value}</Text>
            
  );

  return (
    <View style={styles.container}>
      <TextInput
      style={{height: 40, width: 200, borderWidth: 1}}
      placeholder="Inserta tu texto..."
      onChangeText={newText => setText(newText)}
      defaultValue={text}
      />
        {otherNumArray}
        {otherAnyArray}
      <Button onPress={handleOnPress} title="Pulsame!"></Button>
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