
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default function LoginInput(props){
    return(
        <>
            <TextInput placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} style={ {borderWidth: 1, padding:'2%', borderRadius:8,marginLeft:10,borderColor:'white',
          color:'#09e67f'}} placeholderTextColor={'#65148f'} />
        </>
    )
    }