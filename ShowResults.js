import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShowResults = () => {



const BuildConnectionsButton= () => {useNavigation.navigate('FindConnections')};


return (
<View style={styles.container}>
<View style={styles.topBar}>
  <Image 
    source={require('./assets/logo.png')}
    style={styles.logo}
  /> 
</View>
</View>
)

}