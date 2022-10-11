import { StyleSheet, Text, View } from "react-native";
import {
  Square,
  Rectangle,
  Triangle,
  Circle,
  QuarterCircle,
} from "./components/figures";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
      </View>
       <View style={{ flexDirection: "row" }}>
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
        <Circle 
          width={100}
          height={100}
          backgroundColor={"blue"}
        />
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
        <Circle 
          width={100}
          height={100}
          backgroundColor={"red"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
