
import { StyleSheet, Text, View } from 'react-native';
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from './components/figures';
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
        <Square height={100} width={100} backgroundColor={"yellow"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Rectangle height={100} width={200} backgroundColor={"yellow"} />
      </View>
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