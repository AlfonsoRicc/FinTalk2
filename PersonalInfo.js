import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const PersonalInfo = () => {
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 4;
    
const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState(null);
    const [link, setLink] = useState(''); 

  const handleContinuePress = () => {navigation.navigate('Verification')};

  const deleteImage = () => {
    setImage(null); 
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  console.log(result);
      if (result && result.assets[0] && result.assets[0].uri) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking media: ", error);
    }
  };


return (
  <ScrollView style={styles.scrollView}>
<View style={styles.container}>
<View style={styles.topBar}>
  <Image 
    source={require('./assets/Fintalk.png')}
    style={styles.logo}
  /> 
</View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 4</Text>

      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>Share Some Info About Yourself</Text>
  </View>

  <View style={styles.imagePlaceholder}>
        {image && <Image source={{ uri: image }} style={styles.uploadedImage} />}
        {!image && (
          <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
            <Icon name='camera' color={'#333333'} size={48} />
          </TouchableOpacity>
        )}
      </View>
      {image && (
        <TouchableOpacity onPress={deleteImage} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Delete Image</Text>
        </TouchableOpacity>
      )}

      <TextInput 
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      placeholderTextColor='#171C24'
      />
      <TextInput 
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        placeholderTextColor='#171C24'
      />
      <TextInput
        style={styles.inputLarge}
        value={bio}
        onChangeText={setBio}
        placeholder="Share a significant work experience (optional)"
        multiline={true}
        placeholderTextColor='#171C24'
      />
      <TextInput
        style={styles.inputLink}
        value={link}
        onChangeText={setLink}
        placeholder="Link to your favorite author (optional)"
        placeholderTextColor='#171C24'
      />
      <View>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
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
      alignItems: 'center', 
    },
    logo: {
      width: 100, 
      height: 50, 
      resizeMode: 'contain', 
    },
    textWrapper: {
      width: "80%",
    },
    placeholder: {
      color: "#FFFFFF",
    },
    textPrimary: {
      fontSize: 20,
      color: "#FFFFFF",
      fontWeight: 'bold',
      textAlign: 'center',
    },
    imagePlaceholder: {
      width: 200, // Set a fixed width
      height: 200, // Set a fixed height
      backgroundColor: '#E0E0E0', // A light grey color
      justifyContent: 'center', // Center the content vertically
      alignItems: 'center', // Center the content horizontally
      borderRadius: 10, // Rounded corners
      marginVertical: 20, // Some vertical margin
    },
    uploadText: {
      color: '#171C24', // Dark text color
      textAlign: 'center',
    },
    uploadedImage: {
      width: "100%", 
      height: "100%", 
      borderRadius: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 4,
        width: '70%',
        borderRadius: 5,
    },
    inputLink: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '70%',
      borderRadius: 5,
    },
    inputLarge: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginVertical: 50,
        marginHorizontal: 4,
        width: '70%',
        height: 150,
        borderRadius: 5,
    },
    step1: {
      fontSize: 12,
      color: '#FFFFFF',
      textAlign: 'center',
      margin: 20,
    },
    item: {
      backgroundColor: '#8FA3C8',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '35%',
      borderRadius: 5,
    },
    itemSelected: {
      backgroundColor: '#000',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    itemText: {
      fontSize: 10,
    },
    itemRemoveText: {
      fontSize: 18,
      color: 'red',
    },
    deleteButton: {
      backgroundColor: '#DD0000', // Example: red background
      padding: 5,
      borderRadius: 5,
      margin: 10,
      alignItems: 'center',
      width: "30%",
    },
    deleteButtonText: {
      color: 'white', 
      fontSize: 16,
    },
    button: {
      marginTop: 100, 
      backgroundColor: '#8FA3C8', 
      padding: 10,
      borderRadius: 5,
      width: 350, 
      alignItems: 'center',
      bottom: 50, 
      alignSelf: 'center',  
    },
    buttonText: {
      color: '#171C24', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
  })

export default PersonalInfo;