
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Square(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
    />
  );
}

function Rectangle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
    />
  );
}

function Triangle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      backgroundColor={"transparent"}
      borderStyle={"solid"}
      borderLeftWidth={props.borderLeftWidth}
      borderRightWidth={props.borderRightWidth}
      borderBottomWidth={props.borderBottomWidth}
      borderLeftColor={"transparent"}
      borderRightColor={"transparent"}
      borderBottomColor={props.borderBottomColor}
    />
  );
}

function Circle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      borderRadius={props.height / 2}
      backgroundColor={props.backgroundColor}
    />
  );
}

function QuarterCircle(props) {
  return (
    <View
      size={props.size}
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      borderTopLeftRadius={props.borderTopLeftRadius}
      borderTopRightRadius={0}
      borderBottomLeftRadius={0}
      borderBottomRightRadius={0}
      backgroundColor={props.backgroundColor}
    />
  );
}

export {Square, Rectangle, Triangle, Circle, QuarterCircle};