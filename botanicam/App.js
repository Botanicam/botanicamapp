import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text} >Welcome to Botanicam</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030401',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: "#f4f8ec",
  },
});
