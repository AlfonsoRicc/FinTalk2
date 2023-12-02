import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';
import axios from 'axios';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';

const FieldsOfExpertise = () => {
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 1;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [ { id: 'macro', name: 'Macro' },
  { id: 'financial_analysis', name: 'Financial Analysis' },
  { id: 'tech', name: 'Tech'  },
  { id: 'crypto', name: 'Crypto' }, 
  { id: 'EM', name: 'EM' }, 
  { id: 'commodities', name: 'Commodities' }, 
  { id: 'fixed_income', name: 'Fixed Income' }, 
  { id: 'risk', name: 'Risk Management' },
  { id: 'corporate_finance', name: 'Corporate Finance'},
  { id: 'alternatives', name: 'Alts' },
  { id: 'derivatives', name: 'Derivatives' },
  { id: 'insurance', name: 'Insurance' },
  { id: 'sustainable', name: 'Sustainable Investing' },
  { id: 'venture', name: 'Venture Capital'},
  { id: 'real_estate', name: 'Real Estate' },
  { id: 'foreign_exchange', name: 'Foreign Exchange'}
  ];

  const handleContinuePress = async () => {
    if (selectedCategories.length > 0) {
      try {
        // Replace with your actual API endpoint
        const response = await axios.post('https://yourbackend.com/api/user/expertise', {
          categories: selectedCategories.map(category => category.id)
        });
      navigation.navigate('WorkHistory');
    } catch (error) {
    console.error('Error saving expertise:', error);
    alert('Failed to save expertise.');
}
  } else {
    alert('Please select at least one field of expertise.');
  }
};


  const handleSelectCategory = (category) => {
    if (selectedCategories.includes(category)) { 
      setSelectedCategories(selectedCategories.filter(c => c.id !== category.id));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleRemoveCategory = (category) => {
    setSelectedCategories(selectedCategories.filter(c => c.id !== category.id));
  };


  const renderItem = ({ item }) => {
    const isSelected = selectedCategories.some(c => c.id === item.id);
    return (
      <TouchableOpacity
        style={isSelected ? styles.itemSelected : styles.item}
        onPress={() => handleSelectCategory(item)}>
        <Text style={styles.itemText}>{item.name}</Text>
        {isSelected && (
          <TouchableOpacity onPress={() => handleRemoveCategory(item)}>
            <Text style={styles.itemRemoveText}>X</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };


return (
<View style={styles.container} keyboardDismissMode='on-drag' contentContainerStyle={styles.contentContainer}>
<View style={styles.topBar}>
  <Image 
    source={require('./assets/logo.png')}
    style={styles.logo}
  /> 
</View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 1</Text>
      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>What do you focus on? </Text>
          <Text style={styles.subtitle}>Choose up to three topics where you believe you can be helpful to the community</Text>
  </View>
    <TextInput
      style={styles.searchBar}
      placeholder="Search field"
      onChangeText={setSearchTerm}
      value={searchTerm}
      />
      <FlatList
       data={categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3} 
      style={styles.list}
    />
      <TouchableOpacity style={[styles.button, selectedCategories.length === 0 && styles.buttonDisabled]} onPress={handleContinuePress} disabled={selectedCategories.length === 0}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
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
    textPrimary: {
      fontSize: 20,
      color: "#FFFFFF",
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: 'center',
      margin: 20,
    },
    searchBar: {
      height: 40,
      width: '90%',
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FFF',
      borderRadius: 5, 
    },    
    step1: {
      fontSize: 12,
      color: '#FFFFFF',
      textAlign: 'center',
      margin: 20,
    },
    Flatlist: {
      width: '100%',
    },
    item: {
      backgroundColor: '#8FA3C8',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '30%',
      borderRadius: 5,
    },
    itemSelected: {
      backgroundColor: '#54D7B7',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 4,
      width: '35%',
      borderRadius: 5,
    },
    itemText: {
      fontSize: 10,
    },
    itemRemoveText: {
      fontSize: 14,
      color: '#171C24',
      textAlign: 'right',
    },
    button: {
      marginTop: 20, 
      backgroundColor: '#8FA3C8', 
      padding: 10,
      borderRadius: 5,
      width: '80%', 
      alignItems: 'center',
      position: 'absolute', 
      bottom: 50, 
      alignSelf: 'center',  
    },
    buttonDisabled: {
      backgroundColor: '#FFFFFF', // Disabled button color
      borderColor: 'grey',
      borderWidth: 1
    },
    buttonText: {
      color: '#171C24', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
  })

export default FieldsOfExpertise;