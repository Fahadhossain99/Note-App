import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function RadioInput({label}) {
  return (
    <View>
      <View  style={styles.container}>
        <View style={styles.outerCircle } >
          <View style={ styles.innerCircle  }/>
        </View>
        <Text style={{ marginLeft: 10, fontWeight: "bold" }}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
             flexDirection: "row",
             alignItems: "center",
             marginBottom: 15,
  },
  outerCircle:{
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#ccc",
            justifyContent: "center",
            alignItems: "center",
  },
  innerCircle:{
              height: 10,
              width: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#ccc",
              
  },
});