import React from 'react';
import { View, Text, StyleSheet, Share } from 'react-native';

const Profile = ({ route }) => {
  // Assuming data is passed via route.params (React Navigation)
  const { name, lastName, bio, sharesCount, pollParticipationCount } = route.params;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out my profile on this app:\n\nName: ${name}\nLast Name: ${lastName}\nBio: ${bio}\nContent Shared: ${sharesCount}\nPolls Participated: ${pollParticipationCount}`,
        // You can also include a URL if you have a link to the profile or content
        // url: 'https://example.com/profile'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>Name: {name}</Text>
      <Text style={styles.profileText}>Last Name: {lastName}</Text>
      <Text style={styles.profileText}>Bio: {bio}</Text>
      <Text style={styles.profileText}>Content Shared: {sharesCount}</Text>
      <Text style={styles.profileText}>Polls Participated: {pollParticipationCount}</Text>
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
      <Text style={styles.shareButtonText}>Share Profile</Text>
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
  },
  profileText: {
    fontSize: 16,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: '#4CAF50', // Example color
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  shareButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Profile;