import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalsCourse, setGoalCourse] = useState([]);

  function goalInputHandle(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandle() {
    setGoalCourse((oldListCourse) => [
      ...oldListCourse, enteredGoalText
    ]);
    console.log(enteredGoalText);
  }


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="My Goal" onChangeText={goalInputHandle} />
        <Button title="Tap Me" onPress={addGoalHandle} />
      </View>
      <View style={styles.contentContainer}>
        {goalsCourse.map((goal, key) => <Text key={key}>{goal}</Text>)}
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }, 
  contentContainer: {
    flex: 10,
  }
});
