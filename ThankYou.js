import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ThankYou = () => {
  const navigation = useNavigation();

  const handlePollPress = () => {
    navigation.navigate('Poll');
  };

  const handleProfilePress = () => {
    navigation.navigate('PersonalInfo');
  };

  const handleExitPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
    <View style={styles.topBar}>
    <Image 
     source={require('./assets/Fintalk.png')}
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
        <Text style={styles.buttonText}>Yes, Go to Poll</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button2} 
        onPress={handleProfilePress}
      >
        <Text style={styles.buttonText}>No, Skip to Create Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button2} 
        onPress={handleExitPress}
      >
        <Text style={styles.buttonText}>No, Share anonymously and Exit</Text>
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
    marginBottom: 50,
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
  button2: {
    backgroundColor: '#171C24', 
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ThankYou;
