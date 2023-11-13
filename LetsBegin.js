import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LetsBegin = () => {
const handleCreateAccountPress = () => {
        navigation.navigate('LetsBegin');
      };

const handleSharePress = () => {
  setSharePressed(!isSharePressed);
};
const handleLurkPress = () => {
  setLurkPressed(!isLurkPressed);
};
const getSquareStyle = (isPressed) => ({
  backgroundColor: isPressed ? pressedColor : defaultColor,
});

    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Image 
            source={require('./assets/logo.png')}
            style={styles.logo}
          /> 
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textPrimary}>Hello There. </Text>
          <Text style={styles.textPrimary}>Let's Begin! </Text>
        </View>
        <Text style={styles.subtitle}>We built a place where knowledgeable people can have an impact </Text>
        <Text style={styles.joinAs}>WHAT WOULD YOU LIKE TO DO ON NOOSK?</Text>
        <View style={styles.squaresContainer}>
        <View style={styles.optionContainer}>
      </View>
      <View style={styles.square}>
      <TouchableOpacity style={[styles.option, getSquareStyle=(isSharePressed)]}
      onPress={handleSharePress}>
      <View style={styles.iconTextWrapper}>
          <Icon name="share-variant" size={24} color="#54D7B7" />
          </View>
          <Text style={styles.optionText}>Share</Text>
          <Text style={styles.optionSubtext}>Help others with your knowledge </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.square}>
      <TouchableOpacity style={[styles.option, getSquareStyle=(isLurkPressed)]}
      onPress={handleLurkPress}>
      <View style={styles.iconTextWrapper}>
          <Icon name="eye-outline" size={24} color="#54D7B7" />
          </View>
          <Text style={styles.optionText}>Lurk</Text>
          <Text style={styles.optionSubtext}>Learn from the best in the field</Text>
        </TouchableOpacity>
      </View>
    </View>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccountPress}>
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
        paddingTop: 30,
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
        padding: 0,
        margin: 10,
        paddingTop: 50,
        paddingRight: 140,
      },
      textPrimary: {
        fontSize: 35,
        color: "#FFFFFF",
        fontWeight: 'bold',
        textAlign: 'left',
      },
      subtitle: {
        fontSize: 16,
        color: '#647189',
        textAlign: 'left',
        paddingTop: 10,
        margin: 40,
      },
      joinAs: {
        fontSize: 16,
        color: '#647189',
        paddingBottom: 30,
        textAlign: "left",
        paddingRight: 50,
        marginLeft: 40,
      },
      button: {
        marginTop: 20, 
        backgroundColor: '#8FA3C8', 
        padding: 10,
        borderRadius: 5,
        width: '80%', 
        alignItems: 'center',
        position: 'absolute', // Position the button absolutely
        bottom: 50, // Distance from the bottom of the screen
        alignSelf: 'center',  
      },
      buttonText: {
        color: '#171C24', 
        fontSize: 16, 
        fontWeight: 'bold',
      },
      iconTextWrapper: {
        alignItems: 'left', 
        paddingLeft: 10, 
        paddingTop: 5, // This will center the icon and text horizontally
      },
      squaresContainer: {
        flexDirection: 'row',  // Aligns children (squares) in a row
        justifyContent: 'center', // Centers the squares horizontally
        alignItems: 'center', // Vertically centers children
        height: 100, // Adjust as needed
        marginVertical: 20, // Adds vertical space around the container
      },
      square: {
        width: 148,  // Width of the square
        height: 134, // Height of the square, same as width to make it a perfect square
        backgroundColor: '#171C24', // Adjust the color as needed
        marginLeft: 20, // Margin on the left side
        marginRight: 20, // Margin on the right side
        borderRadius: 8, 
        borderWidth: 1,
        borderColor: '#8FA3C8', // Add any additional styling such as borderRadius, borderWidth, etc.
      },
      optionText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
      },
      optionSubtext: {
        fontSize: 16,
        color: '#8FA3C8', 
        fontWeight: 'regular',
        paddingTop: 10,
        paddingLeft: 10,
      }
    });

export default LetsBegin;