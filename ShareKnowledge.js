import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ProgressBar from './ProgressBar';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

const ShareKnowledge = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('');
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 5;

  const postTypes = [
    { key: 'analysis', text: 'Analysis' },
    { key: 'trends', text: 'Latest Trends' },
    { key: 'facts', text: 'Facts and Figures' },
    { key: 'tips', text: 'Tips and Tricks' },
    { key: 'suggestions', text: 'Articles and Books Suggestions'}
  ];

  const handlePostTypeSelection = (type) => {
    setPostType(type);
  };

  const handleSubmit = () => {
    console.log({ title, content, postType });
    navigation.navigate('ThankYou');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Image 
      source={require('./assets/logo.png')}
      style={styles.logo}
      /> 
      </View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 5</Text>
     <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>Share Your Daily Knowledge Tidbit</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleInput}
          onChangeText={setTitle}
          value={title}
          placeholder="Give it a title..."
          clearButtonMode='Always'
        />
        <TextInput
          style={styles.contentInput}
          onChangeText={setContent}
          value={content}
          placeholder="Write down your thoughts..."
          multiline={true}
          maxLength={480}
          clearButtonMode='Always'
          />
      </View>
      <View style={styles.postTypeContainer}>
        {postTypes.map((type) => (
          <TouchableOpacity
            key={type.key}
            style={[
              styles.postTypeButton,
              postType === type.key && styles.postTypeButtonSelected,
            ]}
            onPress={() => handlePostTypeSelection(type.key)}
          >
            <Text style={styles.postTypeText}>{type.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8FA3C8',
  },
  topBar: {
    width: '100%', 
    paddingVertical: 10, 
    backgroundColor: '#8FA3C8', 
    alignItems: 'center', 
  },
  logo: {
    width: 100, 
    height: 50, 
    resizeMode: 'contain', 
  },
  textPrimary: {
    fontSize: 20,
    color: "#171C24",
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  step1: {
    fontSize: 12,
    color: '#171C24',
    textAlign: 'center',
    margin: 20,
  },
  inputContainer: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 10,
  },
  titleInput: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  postTypeContainer: {
    marginVertical: 20,
  },
  postTypeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#171C24',
    marginBottom: 10,
  },
  postTypeButtonSelected: {
    backgroundColor: '#54D7B7',
    borderColor: '#171C24',
  },
  postTypeText: {
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#171C24',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ShareKnowledge;