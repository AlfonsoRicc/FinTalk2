import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Poll = ({ navigation }) => {
  // Example poll data
  const [pollQuestion, setPollQuestion] = useState('What asset class will be the best performer next quarter?');
  const [pollOptions, setPollOptions] = useState(['Equity', 'Fixed Income', 'Alts', 'Crypto', 'Commodities']);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    // Submit the response to your server or handle it locally here
  };

  const handleContinuePress = () => {
    if (selectedOption) {navigation.navigate('PersonalInfo', {
      pollQuestion: pollQuestion,
      selectedOption: selectedOption,
    });
  } else {
    alert('Please select an answer');
  }
};

  return (
    <View style={styles.container}>
          <Image 
     source={require('./assets/Fintalk.png')}
     style={styles.logo}/> 
      <Text style={styles.pollQuestion}>{pollQuestion}</Text>
      {pollOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.pollOption, selectedOption === option && styles.selectedOption]}
          onPress={() => handleOptionPress(option)}
        >
          <Text style={styles.pollOptionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
    <Text style={styles.buttonText}>Create Profile</Text>
    </TouchableOpacity>
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
  logo: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
    marginBottom: 40,
  },
  pollQuestion: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pollOption: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '80%',
  },
  selectedOption: {
    backgroundColor: '#54D7B7',
  },
  pollOptionText: {
    textAlign: 'center',
    color: '#171C24',
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

export default Poll;