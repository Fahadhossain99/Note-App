import { View, Text,Image,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input';
import Button from '../components/Button';



export default function Login() {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../../assets/login_image.png")}
          style={{ alignSelf: "center" }}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
          Never Forget Your Password
        </Text>
      </View>
      <View style={{ margin: 35 }}>

       <Input
         placeholder="Email"
       />
       <Input
         placeholder="Password"
       />

      <Button title={"Log in"} customStyles={{marginTop:25,alignSelf:'center'}}/>
  
      </View>
      <View>
        <Text style={{textAlign:'center'}}>
            Dont Have an Account?<Text style={{color:'blue'}}>Sign Up</Text>
        </Text>
      </View>


    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  input:{
   borderBottomWidth:1,
   borderBottomColor:'#ccc',
   padding:10,
   marginBottom:16,
   
   
  }
})