import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYou = () => {
  const navigation = useNavigation();

  const handlePollPress = () => {
    navigation.navigate('Poll');
  };

  return (
    <View style={styles.container}>
    <View style={styles.topBar}>
    <Image 
     source={require('./assets/logo.png')}
     style={styles.logo}/> 
    </View>
      <Text style={styles.thankYouText}>
        Thank you for sharing your knowledge!
      </Text>
      <Text style={styles.invitationText}>
        Would you like to share your forecast in our weekly poll?
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handlePollPress}
      >
        <Text style={styles.buttonText}>Go to Poll</Text>
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
    width: 100, 
    height: 50, 
    resizeMode: 'contain', 
  },
  thankYouText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  invitationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#171C24', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ThankYou;
