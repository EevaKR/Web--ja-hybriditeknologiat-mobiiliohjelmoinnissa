import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [rate1, setLowerRate] = useState('')
  const [rate, setUpperRate] = useState('')
  const [age, setAge] = useState(0)

  function calculate(){
    const result = (220 - age) * 0.65
    setLowerRate(result)
    const result2 = (220 - age) * 0.85 
    setUpperRate(result2)
  } 


  return (
    <View style={styles.container}>

      <Text style={styles.field}>Write your age</Text>
      <TextInput keyboardType ='decimal-pad' 
      value={age} 
      onChangeText = {text => setAge(text)}
      />
      <Text style={styles.field}>Age {age}
      </Text>
      <Text style={styles.field}>Lower rate {rate1} 
      </Text>
      <Text style={styles.field}> Upper rate {rate}
      </Text>
      <Button onPress = {calculate} title = "Calculate"> </Button>
      <StatusBar style="auto" />
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
  field: {
    marginBottom: 8,
    marginTop: 8,
  }
});
