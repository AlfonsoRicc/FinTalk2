import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Replace with your actual backend API endpoint to fetch posts
        const endpoint = 'https://your-backend.com/api/posts';
        const response = await axios.get(endpoint);

        if (response.status === 200 && response.data) {
          setPosts(response.data.posts); // Assuming the response has a posts array
        } else {
          alert('Failed to fetch posts.');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        alert('An error occurred while fetching posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <ScrollView style={styles.container}>
      {posts.map((post, index) => (
        <View key={index} style={styles.postContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.content}>{post.content}</Text>
          <Text style={styles.postType}>Type: {post.postType}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  loader: {
    marginTop: 20,
  },
  postContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
  },
  postType: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default Feed;
