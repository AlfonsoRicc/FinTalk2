import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Poll = () => {
  // Example poll data
  const [pollQuestion, setPollQuestion] = useState('What is your favorite asset class for the next quarter?');
  const [pollOptions, setPollOptions] = useState(['Equity', 'Fixed Income', 'Alts', 'Crypto']);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    // Submit the response to your server or handle it locally here
  };

  return (
    <View style={styles.container}>
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
});

export default Poll;