import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './ProgressBar';

const WorkHistory = () => {
  const navigation = useNavigation(); 
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']; 
  const currentStep = 2;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'mergers_acquisitions', name: 'Mergers and Acquisitions' },
    { id: 'cryptocurrency_blockchain', name: 'Cryptocurrency and Blockchain' },
    { id: 'financial_modeling_valuation', name: 'Financial Modeling and Valuation' },
    { id: 'quantitative_analysis', name: 'Quantitative Analysis' },
    { id: 'credit_risk_management', name: 'Credit Risk Management' },
    { id: 'financial_regulation_compliance', name: 'Financial Regulation and Compliance' },
    { id: 'behavioral_economics_finance', name: 'Behavioral Economics in Finance' },
    { id: 'interest_rate_markets', name: 'Interest Rate Markets and Strategies' },
    { id: 'portfolio_management_diversification', name: 'Portfolio Management and Diversification' },
    { id: 'financial_planning_wealth_management', name: 'Financial Planning and Wealth Management' },
    { id: 'derivative_pricing_hedging', name: 'Derivative Pricing and Hedging Strategies' },
    { id: 'fintech_innovations', name: 'Fintech Innovations' },
    { id: 'esg_investing', name: 'Environmental, Social, and Governance (ESG) Investing' },
    { id: 'market_microstructure', name: 'Market Microstructure' },
    { id: 'global_macroeconomics', name: 'Global Macroeconomics and its Financial Implications' }
  ];

  const handleContinuePress = () => {navigation.navigate('ShareKnowledge')};


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
<View style={styles.container}>
<View style={styles.topBar}>
  <Image 
    source={require('./assets/Fintalk.png')}
    style={styles.logo}
  /> 
</View>
    <ProgressBar steps={steps} currentStep={currentStep} />
     <Text style={styles.step1}>STEP 2</Text>
      <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>Let's dig a little deeper </Text>
          <Text style={styles.subtitle}>Choose the microtopics you are most proficient and passionate about </Text>
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
      <TouchableOpacity style={styles.smallButton} onPress={() => { navigation.navigate('ShareKnowledge') }}>
        <Text style={styles.smallButtonText}>Skip</Text>
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
      width: '30%',
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
      bottom: 60, 
      alignSelf: 'center',  
    },
    buttonText: {
      color: '#171C24', 
      fontSize: 16, 
      fontWeight: 'bold',
    },
    smallButton: {
      marginTop: 10,
      padding: 5,
      width: '80%', 
      alignItems: 'center', 
      bottom: 20, 
    },
    smallButtonText: {
      color: '#54D7B7', 
      fontSize: 14,
      fontWeight: 'bold'
    },
  })


export default WorkHistory;