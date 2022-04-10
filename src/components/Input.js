import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'

export default function Input({placeholder,onChangeText}) {
  return (
   <TextInput 
   style={styles.input} 
   placeholder={placeholder}
   onChangeText={onChangeText}
   autoCorrect={false}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
    marginBottom: 16,
  },
});