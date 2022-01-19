import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

import LoginView from '../../components/LoginView';


export default function MainScreen(){
    return(
        <>
            <LoginView />
        </>
    )
}