
import { Text, View } from 'react-native';
import { useState } from 'react';
import { Center, Box, Heading, VStack, NativeBaseProvider, Button } from "native-base";

export default function App() {

  //***********************/
  const [ number, setNumber ]=useState("0");
  const [ operation, setOperation]=useState(0);
  const [ resultado, setResultado]=useState(0);

  //Numeros de la Calculadora
  function pressOne(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+1);
      }else if(number[0]==0){
        setNumber("1");
      }else{
        setNumber(number+1);
      }
    }
  }

  function pressTwo(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+2);
      }else if(number[0]==0){
        setNumber("2");
      }else{
        setNumber(number+2);
      }
    }
  }

  function pressThree(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+3);
      }else if(number[0]==0){
        setNumber("3");
      }else{
        setNumber(number+3);
      }
    }
  }

  function pressFour(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+4);
      }else if(number[0]==0){
        setNumber("4");
      }else{
        setNumber(number+4);
      }
    }
  }

  function pressFive(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+5);
      }else if(number[0]==0){
        setNumber("5");
      }else{
        setNumber(number+5);
      }
    }
  }

  function pressSix(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+6);
      }else if(number[0]==0){
        setNumber("6");
      }else{
        setNumber(number+6);
      }
    }
  }

  function pressSeven(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+7);
      }else if(number[0]==0){
        setNumber("7");
      }else{
        setNumber(number+7);
      }
    }
  }

  function pressEight(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+8);
      }else if(number[0]==0){
        setNumber("8");
      }else{
        setNumber(number+8);
      }
    }
  }

  function pressNine(){
    if(number.length<11){
      if(number[0]==0&&number[1]=="."){
        setNumber(number+9);
      }else if(number[0]==0){
        setNumber("9");
      }else{
        setNumber(number+9);
      }
    }
  }

  function pressZero(){
    if(number.length<11){
      if(number[1]=="."){
        setNumber(number+0);
      }else if(number[0]==0){
        setNumber("0");
      }else{
        setNumber(number+0);
      }
    }
  }

  function pressComa(){
    coma=false;
    for(i=0;i<number.length;i++){
        if(number[i]=="."){
          coma=true;
        }
      }
    if(number.length<9&&coma==false){
      setNumber(number+".");
    }
  }

  function pressC(){
    setNumber("0");
    setNum1(0);
    setNum2(0);
    setOperation(0);
  }

  //Funciones Matematicas
  function operacionFactorial(){
    let fact=1;
    for(i=number;i>=1;i--){
      fact=fact*i;
    }
    setNumber(fact.toString().substring(0,11));
  }

  function operacionRaiz(){
    let raiz=Math.sqrt(number);
    setNumber(raiz.toString().substring(0,11));
  }

  function operacionInversa(){
    let inversa=1/number;
    setNumber(inversa.toString().substring(0,11))
  }

  function operacionSuma(){
    setResultado(parseFloat(number));
    setNumber("0");
    setOperation(1);
  }

  function operacionResta(){
    setResultado(parseFloat(number));
    setNumber("0");
    setOperation(2);
  }

  function operacionMultiplicacion(){
    setResultado(parseFloat(number));
    setNumber("0");
    setOperation(3);
  }

  function operacionDivision(){
    setResultado(parseFloat(number));
    setNumber("0");
    setOperation(4);
  }

  

  function operacionResultado(){
    
    switch(operation){
      case 1:
        let resSum = (resultado+parseFloat(number)).toString().substring(0,11);
        setNumber(resSum);
        break;
      case 2:
        let resRest = (resultado-parseFloat(number)).toString().substring(0,11);
        setNumber(resRest);
        break;
      case 3:
        let resMult = (resultado*parseFloat(number)).toString().substring(0,11);
        setNumber(resMult);
        break;
      case 4:
        let resDiv = (resultado/parseFloat(number)).toString().substring(0,11);
        setNumber(resDiv);
        break;
    }

  }

  //***********************/

  return (

    <NativeBaseProvider>
      <Center w="80%">
        <Box safeArea p="2" w="90%" maxW="290" py="5">
          <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontSize="48" fontWeight="semibold">Calculadora</Heading>

          <VStack space={2} mt="5">
            <View style={{ flexDirection: "row", marginBottom: -20, height: 70, width: 335, borderRadius: 4, borderWidth: 1 }}>
              <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}>{number}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionInversa} size="20" mt="5" colorScheme="gray"> 1/X </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionFactorial} size="20" mt="5" colorScheme="gray"> ! </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionRaiz} size="20" mt="5" colorScheme="gray"> √ </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionDivision} size="20" mt="5" colorScheme="gray"> / </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={pressSeven} size="20" mt="-1" colorScheme="blue"> 7 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressEight} size="20" mt="-1" colorScheme="blue"> 8 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressNine} size="20" mt="-1" colorScheme="blue"> 9 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionMultiplicacion} size="20" mt="-1" colorScheme="gray"> x </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={pressFour} size="20" mt="-1" colorScheme="blue"> 4 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressFive} size="20" mt="-1" colorScheme="blue"> 5 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressSix} size="20" mt="-1" colorScheme="blue"> 6 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionResta} size="20" mt="-1" colorScheme="gray"> - </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={pressOne} size="20" mt="-1" colorScheme="blue"> 1 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressTwo} size="20" mt="-1" colorScheme="blue"> 2 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressThree} size="20" mt="-1" colorScheme="blue"> 3 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionSuma} size="20" mt="-1" colorScheme="gray"> + </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={pressC} size="20" mt="-1" colorScheme="gray"> C </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressZero} size="20" mt="-1" colorScheme="blue"> 0 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={pressComa} size="20" mt="-1" colorScheme="gray"> , </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={operacionResultado} size="20" mt="-1" colorScheme="gray"> = </Button>
              </View>
            </View>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
};
