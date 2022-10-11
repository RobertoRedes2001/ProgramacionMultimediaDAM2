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
        <Triangle
          width={50}
          height={50}
          borderLeftWidth={50}
          borderRightWidth={50}
          borderBottomWidth={100}
          borderBottomColor={"yellow"}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
       <View style={{transform: [{ rotate: "-90deg" }]}}>
        <Triangle
          width={50}
          height={50}
          borderLeftWidth={50}
          borderRightWidth={50}
          borderBottomWidth={100}
          borderBottomColor={"yellow"}
        />
        </View>
        <Square height={100} width={100} backgroundColor={"yellow"} />
       <View style={{transform: [{ rotate: "90deg" }]}}>
        <Triangle
          width={50}
          height={50}
          borderLeftWidth={50}
          borderRightWidth={50}
          borderBottomWidth={100}
          borderBottomColor={"yellow"}
        />
        </View>
      </View>
      <View style={{ flexDirection: "row" , transform: [{ rotate: "-180deg" }]}}>
        <Triangle
          width={50}
          height={50}
          borderLeftWidth={50}
          borderRightWidth={50}
          borderBottomWidth={100}
          borderBottomColor={"yellow"}
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