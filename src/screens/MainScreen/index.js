import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

import BottomView from '../../components/BottomView';
import TopView from '../../components/TopView';

export default function MainScreen(){
    return(
        <>
            {/* <TopView /> */}
            <BottomView />
        </>
    )
}