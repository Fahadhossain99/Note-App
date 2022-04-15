import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/input';
import RadioInput from '../components/radio-input';
import Button from '../components/button';
import { firebase } from '../config';  
import { ActivityIndicator } from 'react-native';

const OPTIONS=["Male","Female","Others"]

export default function Signup() {
  const [gender,setGender]=React.useState(null)
  const [email,setEmail]=React.useState('')
  const [password,setPassword]=React.useState('')
  const [name,setName]=React.useState('')
  const [age,setAge]=React.useState('')
  const [loading,setLoading]=React.useState(false)


  // const signup = () => {
 
  //   setLoading(true)

    
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email,password)
  //     .then((response) => {
  //       console.log("RESPONSE --",response)
  //       setLoading(false)

  //     }).catch((error) => {
  //       setLoading(false)
  //       console.log('error',error)
  //     }
  //     )
    
  // }
  
  return (
    <SafeAreaView>
      <View style={{ margin: 25 }}>
        <Input placeholder="Email" OnChangeText={(text) => setEmail(text)} />
        <Input placeholder="Password" OnChangeText={(text) => setPassword(text)} secureTextEntry={true}  />
        <Input placeholder="Full Name" OnChangeText={(text) => setName(text)} />
        <Input placeholder="Age" OnChangeText={(text) => setAge(text)} />

        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 15 }}>Select Your Gender</Text>
          {OPTIONS.map((option, index) => (
            <RadioInput
              key={index}
              label={option}
              value={gender}
              setValue={setGender}
            />
          ))}
        </View>
        {/* {loading ? 
        <ActivityIndicator/>
        : */}
        <Button
          title={"Submit"}
          customStyles={{ marginTop: 25, alignSelf: "center" }}
          // onPress={signup}
        />
        {/* } */}
        
      </View>
    </SafeAreaView>
  );
}