import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

//components
import LoginInput from '../CustomTextInput';


export default function BottomView()
{
    return(
        <View style={styles.container}>
      <Text style={styles.text1}>
        Welcome to LK's vibe App 😎
        </Text>
      <StatusBar style="auto" />
       <Image
        source={{uri: 'https://cdn.dribbble.com/users/5580330/screenshots/14928081/media/7d4ac1be1b2f4550eeb12986f144906f.jpg?compress=1&resize=400x300'}}
        style={{width: 200, height: 200,marginTop:30,marginBottom:30}} />
        <Text style={styles.text2}>
        LOGIN 
        </Text>
        <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Username :    <LoginInput placeholder =" Enter your Username " placeholderColor="#060b21"/></Text>
        </View>
        <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Password :    <LoginInput placeholder =" Enter your Password " placeholderColor="#060b21"/></Text>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#060b21',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      marginBottom:20,
    },
    text1:{
      color:'#ff0059',
      fontWeight:'bold',
      fontSize:23,
    },
    text2:{
      color:'#09e67f',
      fontWeight:'bold',
      fontSize:20,
      paddingBottom:20,
    },
    loginText:{
      color:'#ff0059',
      fontWeight:'bold',
      fontSize:15,
    }

  });
  