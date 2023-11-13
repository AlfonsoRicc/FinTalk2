import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogInSignUp = () => {
  const navigation = useNavigation(); 

  const handleCreateAccountPress = () => {
    navigation.navigate('LetsBegin');
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
      <Text style={styles.textPrimary}>Create an account
      </Text>
      <Text style={styles.subtitle}>Noosk is the place where you can share your knowledge, crafts or skills </Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Choose a password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateAccountPress}>
      <Text style={styles.buttonText}>Create Your Account</Text>
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
    padding: 10,
    margin: 0,
    paddingTop: 50,
  },
  textPrimary: {
    fontSize: 35,
    color: "#171C24",
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#171C24',
    textAlign: 'left',
    paddingTop: 20
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
