import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Poll = ({ navigation }) => {
  // Example poll data
  const [pollQuestion, setPollQuestion] = useState('What asset class will be the best performer next quarter?');
  const [pollOptions, setPollOptions] = useState(['Equity', 'Fixed Income', 'Alts', 'Crypto', 'Commodities']);
  const [selectedOption, setSelectedOption] = useState(null);
  const [voteCounts, setVoteCounts] = useState(pollOptions.reduce((acc, option) => {
    acc[option] = 0;
    return acc;
  }, {}));

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setVoteCounts(prevVoteCounts => ({
      ...prevVoteCounts,
      [option]: prevVoteCounts[option] + 1
    }));
  };
  

  const handleContinuePress = async () => {
    if (selectedOption) {
      try {
        // Replace with your actual backend API endpoint
        const endpoint = 'https://your-backend.com/api/poll-results';

        // Prepare the data to be sent
        const pollData = {
          question: pollQuestion,
          selectedOption,
          voteCounts,
        };

        // Send a POST request to the endpoint
        await axios.post(endpoint, pollData);

        // Navigate with the vote counts
        navigation.navigate('ShowResults', { voteCounts });
      } catch (error) {
        // Handle any errors that occur during the request
        console.error("Error submitting poll: ", error);
        Alert.alert('Error', 'An error occurred while submitting your poll. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please select an answer');
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
    <Text style={styles.buttonText}>Show Results</Text>
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