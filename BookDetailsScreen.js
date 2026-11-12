import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function BookDetailsScreen({ route, navigation }) {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.bookCover}>
        <Text style={styles.bookEmoji}>📚</Text>
      </View>

      <Text style={styles.title}>{book.title}</Text>

      <Text style={styles.author}>
        Written by {book.author}
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Genre</Text>
        <Text style={styles.value}>{book.genre}</Text>

        <Text style={styles.label}>Price</Text>
        <Text style={styles.value}>{book.price}</Text>
      </View>

      <Text style={styles.descriptionTitle}>
        About the Book
      </Text>

      <Text style={styles.description}>
        {book.description}
      </Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          ← Back to Books
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E7',
    padding: 25,
    alignItems: 'center',
  },

  bookCover: {
    width: 130,
    height: 170,
    backgroundColor: '#6B3E26',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
  },

  bookEmoji: {
    fontSize: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3F2A1D',
    textAlign: 'center',
  },

  author: {
    fontSize: 16,
    color: '#6B625B',
    marginTop: 7,
    marginBottom: 20,
  },

  infoBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    color: '#8B8179',
    marginTop: 5,
  },

  value: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#6B3E26',
    marginBottom: 8,
  },

  descriptionTitle: {
    alignSelf: 'flex-start',
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3F2A1D',
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 23,
    color: '#5C5149',
    textAlign: 'left',
    marginBottom: 25,
  },

  backButton: {
    backgroundColor: '#6B3E26',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});