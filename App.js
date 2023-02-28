import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, StyleSheet, View, Image, Button } from 'react-native';
import React, { useState } from 'react';


const PlaceholderImage = require('./assets/images/samurai01.png');

export default function App() {

  const [numRows,setNumRows]=useState(4);
  const [numCols,setNumCols]=useState(4);
  const [matrix,setMatrix]=useState(Array(numRows).fill(Array(numCols).fill(0)));

  // Fill the matrix with random numbers
  const randomize_matrix = () => {
    const newMatrix=[...matrix];
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        newMatrix[i][j] = Math.floor(Math.random() * 10); // Generate a random number between 0 and 99
      }
    }
    setMatrix(newMatrix)
  }

  const renderItem = ({ item }) => (
    <View style={styles.cell}>
      <Text style={styles.number}>
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
      <View style={styles.menu01}>

        <View>
          <Text>a</Text>
        </View>

        <View>
          <Text>b</Text>
        </View>

        <View>
          <Button
              onPress={randomize_matrix}
              title="New"
              /*color="#841584"*/
              accessibilityLabel="Create new instance of game"
          />
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
  
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
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
    width: 280,
    height: 700,
    borderRadius: 15,
    alignContent: 'center'
  },

  cell: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 10,
    width: 70,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },

  number: {
    fontSize: 40,
    /*fontWeight: 'bold',*/
    color: '#000',
  },

  menu01: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 1,
    elevation: 1,
    backgroundColor: '#e0ffff',
  },
});

