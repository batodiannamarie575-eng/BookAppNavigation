import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📚</Text>

      <Text style={styles.title}>Welcome to Book Haven</Text>

      <Text style={styles.subtitle}>
        Discover interesting books and explore your next favorite story.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('BookList')}
      >
        <Text style={styles.buttonText}>Explore Books</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  emoji: {
    fontSize: 70,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B3E26',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: '#5C5149',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#6B3E26',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});