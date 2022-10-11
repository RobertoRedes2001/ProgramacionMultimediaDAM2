
import { StyleSheet, Text, View } from 'react-native';
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from './components/figures';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Rectangle height={100} width={200} backgroundColor={"lightgreen"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Square height={100} width={100} backgroundColor={"yellow"} />
        <Square height={100} width={100} backgroundColor={"lightgreen"} />
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