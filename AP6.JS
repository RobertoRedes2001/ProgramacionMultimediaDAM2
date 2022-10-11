import { StyleSheet, Text, View } from 'react-native';
import {
  Square,
  Rectangle,
  Triangle,
  Circle,
  QuarterCircle,
} from './components/figures';
export default function App() {
  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '360deg' }] }}>
          <QuarterCircle
            size={150}
            width={150}
            height={150}
            borderTopLeftRadius={150}
            backgroundColor={'red'}
          />
        </View>
        <View style={{ transform: [{ rotate: '90deg' }] }}>
          <QuarterCircle
            size={150}
            width={150}
            height={150}
            borderTopLeftRadius={150}
            backgroundColor={'yellow'}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '-90deg' }] }}>
          <QuarterCircle
            size={150}
            width={150}
            height={150}
            borderTopLeftRadius={150}
            backgroundColor={'yellow'}
          />
        </View>
        <View style={{ transform: [{ rotate: '180deg' }] }}>
          <QuarterCircle
            size={150}
            width={150}
            height={150}
            borderTopLeftRadius={150}
            backgroundColor={'red'}
          />
        </View>
      </View>
    <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '360deg' }] }}>
          <QuarterCircle
            size={100}
            width={100}
            height={100}
            borderTopLeftRadius={100}
            backgroundColor={'red'}
          />
        </View>
        <View style={{ transform: [{ rotate: '90deg' }] }}>
          <QuarterCircle
            size={100}
            width={100}
            height={100}
            borderTopLeftRadius={100}
            backgroundColor={'yellow'}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '-90deg' }] }}>
          <QuarterCircle
            size={100}
            width={100}
            height={100}
            borderTopLeftRadius={100}
            backgroundColor={'yellow'}
          />
        </View>
        <View style={{ transform: [{ rotate: '180deg' }] }}>
          <QuarterCircle
            size={100}
            width={100}
            height={100}
            borderTopLeftRadius={100}
            backgroundColor={'red'}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '360deg' }] }}>
          <QuarterCircle
            size={50}
            width={50}
            height={50}
            borderTopLeftRadius={50}
            backgroundColor={'red'}
          />
        </View>
        <View style={{ transform: [{ rotate: '90deg' }] }}>
          <QuarterCircle
            size={50}
            width={50}
            height={50}
            borderTopLeftRadius={50}
            backgroundColor={'yellow'}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '-90deg' }] }}>
          <QuarterCircle
            size={50}
            width={50}
            height={50}
            borderTopLeftRadius={50}
            backgroundColor={'yellow'}
          />
        </View>
        <View style={{ transform: [{ rotate: '180deg' }] }}>
          <QuarterCircle
            size={50}
            width={50}
            height={50}
            borderTopLeftRadius={50}
            backgroundColor={'red'}
          />
        </View>
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