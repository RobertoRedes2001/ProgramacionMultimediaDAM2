import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Article from './Components/Article'

export default function App() {
  let stringText = "Mucho Texto";
  let arrayArticle = [];


  for(let i=0;i<4;i++){
    arrayArticle.push(<Article/>)
  }
  return (
    <>{arrayArticle}</>
  );
};