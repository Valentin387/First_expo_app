//Libraries
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, StyleSheet, View, Image, Button, Pressable} from 'react-native';
import React, { useState } from 'react';

//the image of the Samurai
const PlaceholderImage = require('./assets/images/samurai01.png');

//The main gateway of the application
export default function App() {

  //I need to remember the value of how many rows and cols I need
  const [numRows,setNumRows]=useState(4);
  const [numCols,setNumCols]=useState(4);
  //Note: matrix is an array, setMatrix is the method for updating that array
  //matrix is the game matrix
  const [matrix,setMatrix]=useState(Array(numRows).fill(Array(numCols).fill(0)));
  //the digists selected by the user
  const [selectedItems,setSelectedItems]=useState([]);
  //the Sum of the selection
  const [sumDigits, setSumDigits]=useState(0);

  // Fill the matrix with random numbers
  const randomize_matrix = () => {
    //the easiest way is to create antoher matrix
    let newMatrix=[];
    for (let i = 0; i < numRows; i++) {
      const row = []
      for (let j = 0; j < numCols; j++) {
        row[j] = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
      }
      newMatrix.push(row)
    }
    //and here we replace the old matrix with the new one
    setMatrix(newMatrix)
    reset_count();
  }

  //function that resets the user selection
  const reset_count = () => {
    let newSelectedItems=[];
    setSelectedItems(newSelectedItems);
    setSumDigits(0);
  }

  //This function renders each cell of the matrix, one by one
  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => handlePressIn(item)}
      style={styles.cell}
      >
      <Text style={styles.number}>
        { item }
      </Text>
    </Pressable>
  );

  //this functions adds an element to the list of selected items
  const handlePressIn = (item) => {
    setSelectedItems([...selectedItems, item]);
    setSumDigits(sumDigits+item);
  };

  //these are the functions to manage the user input
  const increaseCols = () =>{
    if (numCols < 4){
      setNumCols(numCols+1);
    }
  };

  const decreaseCols = () =>{
    if (numCols > 0){
      setNumCols(numCols-1);
    }
  };

  const increaseRows = () =>{
    if (numRows < 4){
      setNumRows(numRows+1);
    }
  };

  const decreaseRows = () =>{
    if (numRows > 0){
      setNumRows(numRows-1);
    } 
  };

  //this is the return, here we render the whole game/page
  //after this point, you simply follow the hierarchy of tags for rendering
  //for rendering the matrix, we use 2 FlatList's
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

      <View style={styles.container02}>
        <Text style={styles.number02}>{selectedItems.join('+')}</Text>
        <Text style={styles.number02}> = {sumDigits}</Text>
      </View>


      <View style={styles.container02}>

        
        <View style={styles.counter}>
          <Text>Rows</Text>
          <Button
              onPress={increaseRows}
              title="UP"
              accessibilityLabel="Increase Rows"
            />
          <Text>{numRows}</Text>
          <Button
              onPress={decreaseRows}
              title="Down"
              accessibilityLabel="Decrease cols"
            />
        </View>

        <View style={styles.counter}>
        <Text>Columns</Text>
          <Button
              onPress={increaseCols}
              title="UP"
              accessibilityLabel="Increase cols"
            />
          <Text>{numCols}</Text>
          <Button
              onPress={decreaseCols}
              title="Down"
              accessibilityLabel="Decrease cols"
            />
        </View>
        
        <View style={styles.counter}>
          <Button
              onPress={randomize_matrix}
              title="New"
              accessibilityLabel="Create new instance of game"
          />
          
          <Button
              onPress={reset_count}
              title="Clear selection"
              accessibilityLabel="Reset user selection"
          />
          
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
  
}

//this is equivalent to a .css file, we define styles for whatever we need
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

  counter: {
    flex:1,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: 50,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },

  number: {
    fontSize: 40,
    /*fontWeight: 'bold',*/
    color: '#000',
  },

  number02: {
    fontSize: 18,
    /*fontWeight: 'bold',*/
    color: '#000',
  },

  container02: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
});

