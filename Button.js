import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress, navigateTo }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('Button pressed!');
      navigation.navigate('LetsBegin');
    }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: '#54D7B7',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#171C24',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;