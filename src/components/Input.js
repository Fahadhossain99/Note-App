import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'

export default function Input({placeholder,OnChangeText}) {
  return (
   <TextInput 
   style={styles.input} 
   placeholder={placeholder}
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