import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default function TopView()
{
    return(
        <View style={styles.container}>
      <Text style={styles.text1}>
        Welcome to LK vibe App
        </Text>
      <StatusBar style="auto" />
       <Image
        source={{uri: 'https://cdn.dribbble.com/users/5580330/screenshots/14928081/media/7d4ac1be1b2f4550eeb12986f144906f.jpg?compress=1&resize=400x300'}}
        style={{width: 200, height: 200,marginTop:30,marginBottom:30}} />
      <  TextInput placeholder='Input your text here..'/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#400637',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // container2:{
    //   backgroundColor: 'white',
    // },
    text1:{
      color:'#d4350d',
      fontWeight:'bold',
      fontSize:20,
    }
  });
  