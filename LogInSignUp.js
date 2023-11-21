import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogInSignUp = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setButtonEnabled] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setPassword(text);
    setButtonEnabled(validateEmail(text));
  };

  const handleCreateAccountPress = () => {
    if (isButtonEnabled) {
      console.log('Button Pressed with Valid Email');
    navigation.navigate('LetsBegin');
  };
}

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image 
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        </View>
        <View style={styles.textWrapper}>
      <Text style={styles.textPrimary}>Finance Skills That Have an Impact
      </Text>
      <Text style={styles.subtitle}>Noosk is the place where your knowledge makes a difference </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Choose a password"
        keyboardType='password'
        onChangeText={handleEmailChange}
        />
      <TouchableOpacity style={styles.button} onPress={handleCreateAccountPress}>
      <Text style={styles.buttonText}>Start Your Journey</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.smallButton} onPress={() => { navigation.navigate('Home') }}>
        <Text style={styles.smallButtonText}>Back</Text>
      </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#FFFFFF', 
    alignItems: 'center', 
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
  },
  textPrimary: {
    fontSize: 35,
    color: "#171C24",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#171C24',
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%', 
    borderColor: 'gray', 
    borderRadius: 5, 
  },
  button: {
    marginTop: 20, 
    backgroundColor: '#171C24', 
    padding: 10,
    borderRadius: 5,
    width: '80%', 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#54D7B7', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
  smallButton: {
    marginTop: 10,
    padding: 5,
    width: '80%', 
    alignItems: 'center', 
  },
  smallButtonText: {
    color: '#171C24', 
    fontSize: 14,
  },
});

export default LogInSignUp;
