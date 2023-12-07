import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ShowResults = ({ route }) => {
  const navigation = useNavigation();  
  const voteCounts = route.params?.voteCounts || {};

const handleContinuePress = () => {
  navigation.navigate('PersonalInfo')
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Poll Results</Text>
      {Object.entries(voteCounts).map(([option, count], index) => (
        <Text key={index} style={styles.result}>
          {option}: {count} votes
        </Text>
      ))}
          <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
    <Text style={styles.buttonText}>Create Profile</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#8FA3C8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginVertical: 5,
  },
  button: {
    marginTop: 20, 
    backgroundColor: '#171C24', 
    padding: 10,
    borderRadius: 5,
    width: '80%', 
    alignItems: 'center',
    position: 'absolute', 
    bottom: 50, 
    alignSelf: 'center',  
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

export default ShowResults;