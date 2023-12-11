import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from './Button';
import { WebView } from 'react-native-webview';

const Home = () => {
  const navigation = useNavigation(); { 
  };


return (
  <ScrollView style={styles.scrollViewStyle}>
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image 
          source={require('./assets/Fintalk.png')}
          style={styles.logo}
        />
        </View>
      <View style={styles.textWrapper}>
      <Text style={styles.textPrimary}>FinTalk is a place where finance experts can get together,
      </Text>
      <Text style={styles.textSecondary}>Finally</Text>
      <Text style={styles.subtitle}>We built a place where financial professionals can have fun </Text>
      </View>
      <WebView
        source={{ uri: 'https://youtu.be/mcsAO9AYc0c?si=R6k7JfMfxQyez8B2' }}
        style={styles.video}
        resizeMode="contain"
        shouldPlay={true}
        isLooping={true}
      />
      <CustomButton title="Share Your Knowledge" onPress={() => navigation.navigate('FieldsOfExpertise')}/>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('LetsBegin')}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Log in</Text>
          </Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')}>
        <Text style={styles.termsText}>
          By continuing you agree to our <Text style={styles.termsLink}>Terms and Conditions.</Text> <Text style={styles.privacyLink}>Privacy Policy</Text>
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171C24',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#171C24', 
    alignItems: 'center', 
  },
  logo: {
    width: 400, 
    height: 200, 
    resizeMode: 'contain', 
  },
  textWrapper: {
    padding: 10,
    margin: 20,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: 250,
    height: 200,  
    marginBottom: 50,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#647189',
    marginHorizontal: 5, 
    marginLeft: 25,
    marginRight: 25,
  },
  textPrimary: {
    fontSize: 35,
    color: "#FFFFFF",
    fontWeight: '500',
    textAlign: 'center',
  },
  textSecondary: {
    fontSize: 35,
    color: "#54D7B7", 
    fontWeight: '500',
    textAlign: 'center',
  },
  textTertiary: {
    fontSize: 16,
    color: '#647189',
  },
  subtitle: {
    fontSize: 16,
    color: '#647189',
    textAlign: 'center',
    paddingTop: 40
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%', 
    marginTop: 15,
  },
  appleButtonImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    padding: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  googleButtonImage: {
    width: 180,
    height: 50,
    resizeMode: 'contain',
    padding: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#647189',
    alignItems: 'left',
    padding: 20, 
    paddingLeft: 30,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  loginLink: {
    color: '#54D7B7', 
    fontWeight: 'bold',
  },
  termsText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 10, 
    textAlign: 'left', 
  },
  termsLink: {
    color: '#54D7B7', 
    fontWeight: 'bold',
  },
  privacyLink: {
    color: '#54D7B7', 
    fontWeight: 'bold',
  },
});


export default Home;