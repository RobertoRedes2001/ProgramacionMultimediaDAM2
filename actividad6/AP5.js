import { useState } from 'react';
import { Alert, Text, TextInput, View, StyleSheet, Button } from 'react-native';
export default function App() {
  const [nombre, setNombre] = useState('');
  const [dni, setDNI] = useState('');
  const [arrayObj, setArrayObj] = useState([]);

  function comprobarNif(dni) {
      var numero
      var letr
      var letra
      var expresion_regular_dni
    
      expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
    
      if(expresion_regular_dni.test (dni) == true){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
          alert('Dni erroneo, la letra del NIF no se corresponde');
          return false;
        }else{
          return true;
        }
      }else{
        alert('Dni erroneo, formato no válido');
        return false
      }
  }
  
  function handleOnPress() {
    if(comprobarNif(dni)){
      let arrayPersona = [...arrayObj];
      let persona = { nom: nombre, nif: dni };
      arrayPersona.push(persona);
      setArrayObj(arrayPersona);
    }
    
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, width: 200, borderWidth: 1 }}
        placeholder="Inserta nombre..."
        onChangeText={(newText) => setNombre(newText)}
        defaultValue={''}
      />

      <TextInput
        style={{ height: 40, width: 200, borderWidth: 1 }}
        placeholder="Inserta DNI..."
        onChangeText={(newText) => setDNI(newText)}
        defaultValue={''}
      />

      <Button onPress={handleOnPress} title="Pulsame!"></Button>
      {arrayObj.map((value)=>
        <Text>
        {value.nom+"/"+value.nif}
        </Text>
      )}
      
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
