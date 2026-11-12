import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const books = [
  {
    id: '1',
    title: 'Taste of Sky',
    author: 'VentreCanard',
    genre: 'Romance',
    price: '₱450',
    description:
      'Behati Azalea Monzanto, a brave flight lieutenant and survivor of Typhoon Yolanda, joins UASA to save lives from disasters. She falls in love with astronaut and space commander Rylandrien Peter Armstrong. Together, they face Earth’s calamities and a devastating asteroid threat that leads to a tragic ending.',
  },
  {
    id: '2',
    title: 'A Journey Beyond',
    author: 'Daniel Carter',
    genre: 'Adventure',
    price: '₱520',
    description:
      'An exciting adventure about friendship, courage, and discovering unknown places.',
  },
  {
    id: '3',
    title: 'Letters to Tomorrow',
    author: 'Sophie Williams',
    genre: 'Romance',
    price: '₱380',
    description:
      'A heartwarming story about dreams, memories, and letters written for the future.',
  },
  {
    id: '4',
    title: 'The Digital World',
    author: 'James Miller',
    genre: 'Technology',
    price: '₱600',
    description:
      'An easy-to-read introduction to how technology continues to change our everyday lives.',
  },
];

export default function BookListScreen({ navigation }) {
  const renderBook = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.bookCard}
        onPress={() =>
          navigation.navigate('BookDetails', {
            book: item,
          })
        }
      >
        <Text style={styles.bookIcon}>📖</Text>

        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>

          <Text style={styles.author}>
            By {item.author}
          </Text>

          <Text style={styles.genre}>
            {item.genre}
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Available Books</Text>

      <Text style={styles.instruction}>
        Tap a book to view its details.
      </Text>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderBook}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F1E7',
    padding: 20,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6B3E26',
  },

  instruction: {
    fontSize: 15,
    color: '#6B625B',
    marginTop: 5,
    marginBottom: 15,
  },

  list: {
    paddingBottom: 20,
  },

  bookCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },

  bookIcon: {
    fontSize: 40,
    marginRight: 15,
  },

  bookInfo: {
    flex: 1,
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F2A1D',
  },

  author: {
    fontSize: 14,
    color: '#6B625B',
    marginTop: 4,
  },

  genre: {
    fontSize: 13,
    color: '#A67C52',
    marginTop: 4,
  },

  arrow: {
    fontSize: 32,
    color: '#6B3E26',
  },
});