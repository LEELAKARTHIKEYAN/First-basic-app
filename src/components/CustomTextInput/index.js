
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default function LoginInput(props){
    return(
        <>
            <TextInput placeholder={props.placeholder} secureTextEntry={props.secureTextEntry} style={{ backgroundColor:props.placeholderColor}} />
        </>
    )
}