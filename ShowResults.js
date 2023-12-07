import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext } from 'react';

const ShowResults = ({ route, navigation }) => {
 const { pollQuestion, selectedOption } = route.params;
 };

 const pollResults = ({ pollQuestion, pollOptions }) => {
  const pollResults = [
    { option: 'Equity', votes: 150 },
    { option: 'Fixed Income', votes: 200 },
    { option: 'Alts', votes: 100 },
    { option: 'Crypto', votes: 50 }
  ];

  const totalVotes = pollResults.reduce((acc, option) => acc + option.votes, 0);

  const handleContinuePress = () => {
    const navigation = useNavigation();
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
              <View style={styles.topBar}>
          <Image 
            source={require('./assets/logo.png')}
            style={styles.logo}
          /> 
        </View>
      <View style={styles.textWrapper}>
      <Text style={styles.textPrimary}>Results</Text>
      </View>
      <Text style={styles.pollQuestion}>{pollQuestion}</Text>
      {pollResults.map((result, index) => (
        <View key={index} style={styles.pollResult}>
          <Text style={styles.optionText}>{result.option}</Text>
          <Text style={styles.votesText}>{result.votes} votes ({((result.votes / totalVotes) * 100).toFixed(1)}%)</Text>
        </View>
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
    backgroundColor: '#171C24',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    alignItems: 'center',
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#171C24', 
    alignItems: 'left', 
    marginLeft: 40,
    alignItems: 'flex-center',
  },
  logo: {
    width: 100, 
    height: 50, 
    resizeMode: 'contain', 
  },
  textWrapper: {
    width: '100%',
    padding: 20,
    marginTop: 30,
    marginBottom: 15,
    color: '#FFF',
  },
  pollQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pollResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  textPrimary: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionText: {
    fontSize: 16,
    color: "#171C24",
    fontWeight: 'bold',
  },
  votesText: {
    fontSize: 16,
    color: "#171C24", 
    fontWeight: 'normal',
  },
  pollResult: {
    backgroundColor: '#FFFFFF', // Light background for the box
    padding: 15, // Inner space in the box
    borderRadius: 10, // Rounded corners
    marginVertical: 5, // Space between boxes
    width: '80%', // Width of the box
    shadowColor: '#000', // Shadow for depth (optional)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow effect
    alignItems: 'center', // Center items horizontally
  },
  button: {
    marginTop: 20, 
    backgroundColor: '#54D7B7', 
    padding: 10,
    borderRadius: 5,
    width: '80%', 
    alignItems: 'center',
    position: 'absolute', 
    bottom: 50, 
    alignSelf: 'center',  
  },
  buttonText: {
    color: '#171C24', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

export default ShowResults;