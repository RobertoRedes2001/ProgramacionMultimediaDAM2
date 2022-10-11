
import { Text, View } from 'react-native';
import { useState } from 'react';
import { Center, Box, Heading, VStack, NativeBaseProvider, Button } from "native-base";



export default function App() {

  let [num, setNum] = useState(0);


  function handleOnPress1(){
      setNum(1);
     
  }

  function handleOnPress2(){
      setNum(2);
      
  }

  function handleOnPress3(){
      setNum(3);
      
  }

  function handleOnPress4(){
      setNum(4);
  }

  function handleOnPress5(){
      setNum(5);
  }

  function handleOnPress6(){
      setNum(6);
  }
   function handleOnPress7(){
      setNum(7);
  }

  function handleOnPress8(){
      setNum(8);
  }

  function handleOnPress9(){
      setNum(9);
  }

  function handleOnPress0(){
      setNum(0);
  }

  function handleOnPress(){
      
  }
  return (

    <NativeBaseProvider>
      <Center w="80%">
        <Box safeArea p="2" w="90%" maxW="290" py="5">
          <Heading size="lg" color="coolGray.800" _dark={{ color: "warmGray.50" }} fontSize="48" fontWeight="semibold">Calculadora</Heading>

          <VStack space={2} mt="5">
            <View style={{ flexDirection: "row", marginBottom: -20, height: 70, width: 335, borderRadius: 4, borderWidth: 1 }}>
              <Text style={{ fontSize: 50, textAlign: "right", flex: 1 }}></Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="5" colorScheme="gray"> 1/X </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="5" colorScheme="gray"> ! </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="5" colorScheme="gray"> √ </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="5" colorScheme="gray"> / </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress7} size="20" mt="-1" colorScheme="blue"> 7 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress8} size="20" mt="-1" colorScheme="blue"> 8 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress9} size="20" mt="-1" colorScheme="blue"> 9 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="-1" colorScheme="gray"> x </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress4} size="20" mt="-1" colorScheme="blue"> 4 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress5} size="20" mt="-1" colorScheme="blue"> 5 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress6} size="20" mt="-1" colorScheme="blue"> 6 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="-1" colorScheme="gray"> - </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress1} size="20" mt="-1" colorScheme="blue"> 1 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress2} size="20" mt="-1" colorScheme="blue"> 2 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress3} size="20" mt="-1" colorScheme="blue"> 3 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="-1" colorScheme="gray"> + </Button>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress0} size="20" mt="-1" colorScheme="gray"> C </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress0} size="20" mt="-1" colorScheme="blue"> 0 </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="-1" colorScheme="gray"> , </Button>
              </View>
              <View style={{ padding: 2 }}>
                <Button onPress={handleOnPress} size="20" mt="-1" colorScheme="gray"> = </Button>
              </View>
            </View>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  )
};