import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';

const PlaceholderImage = require('./assets/images/samurai01.png');

export default function App() {

  const numRows=4;
  const numCols=4;
  const [matrix,setMatrix]=useState(Array(numRows).fill(Array(numCols).fill(6)));

  const renderItem = ({ item }) => (
    <View style={styles.cell}>
      <Text style={styles.author}>
        { item }
      </Text>
    </View>
  );



  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      
      <View style={styles.TableContainer}>
        <FlatList
          data={matrix}
          keyExtractor={(item,index)=> index.toString()}
          renderItem={({ item }) => (
            <FlatList
              data={item}
              keyExtractor={(cell, index)=>index.toString()}
              horizontal={true}
              renderItem={renderItem}
            />
          )}
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
    flexDirection: 'column',
    backgroundColor: '#f0f8ff',
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

  TableContainer: {
    flex: 3,
    width: 200,
    height: 400,
    borderRadius: 18,
    alignContent: 'center'
  },

  cell: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
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
    color: '#000',
  },
});

