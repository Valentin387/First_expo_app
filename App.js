import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';

const PlaceholderImage = require('./assets/images/samurai01.png');

export default function App() {

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
      </View>
      
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
  
}

const data = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 80,
    height: 90,
    borderRadius: 18,
  },


  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999'
  },
  author: {
    fontSize: 16,
    color: '#FFF',
  },
});

