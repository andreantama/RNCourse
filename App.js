import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput placeholder="My Goal" />
        <Button title="Tap Me" />
      </View>
      <View style={styles.content}>
        <Text>List of My Goal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, 
  content: {
    flex: 3
  }
});
