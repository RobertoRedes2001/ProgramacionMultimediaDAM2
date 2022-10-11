
import { StyleSheet, Text, View } from 'react-native';
import { Square, Rectangle, Triangle, Circle, QuarterCircle } from './components/figures';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Square height={100} width={100} backgroundColor={"blue"} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Square height={200} width={200} backgroundColor={"yellow"} />
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