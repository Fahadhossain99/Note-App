import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/input';
import RadioInput from '../components/radio-input';

export default function Signup() {
  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input placeholder={"Email"} />
        <Input placeholder={"Password"} />
        <Input placeholder={"Full Name"} />
        <Input placeholder={"Age"} />

        <View style={{ marginTop: 20 }}>
          <RadioInput label="Male"/>
          <RadioInput label="Female"/>

          
        </View>
      </View>
    </SafeAreaView>
  );
}