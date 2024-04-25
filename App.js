import { StatusBar } from 'expo-status-bar'
import { Button, View, Text, TouchableOpacity } from 'react-native'
import TopArea from './src/components/TopArea'
import styles from './src/constants/style'
import portugese from './src/constants/i18n/pt'
import * as React from 'react';


export default function App() {
  return(
    <View style={styles.container}>
      <TopArea></TopArea>
      <View style={styles.topArea} />
      <View style={styles.content}>
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.text}>
          Want to know and explain all things about the planets in the Milky Way galaxy?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};