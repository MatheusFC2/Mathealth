import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from "./src/components/Title/"
import Main from "./src/components/Main/"

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,

  },
});
