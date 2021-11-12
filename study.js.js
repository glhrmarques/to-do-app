import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, safeAreaView, Image } from 'react-native';
import Task from './Components/task';

export default function App() {
  return (

     <View style={styles.container}>
        <View style={styles.first}>
          <Text style={styles.title}>Task's List</Text>
          {/*Task*/}
          <View> 
            <Task text={'This is the first task'}/>
            <Task text={'This is the second task'}/>
            <Task text={'This is the third task'}/>
          </View>
        </View>
        <View style={styles.second}>
          <Text style={styles.textSub}>created by Glhrmarques</Text>
          <Text style={styles.textMain}>Je suis cool </Text>
        </View>
        
     </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingTop: 48,
    margin: 16,
    fontWeight: 'bold',
    fontSize: 32,
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',

  },

  first: {
    backgroundColor: '#A6A6A6',
    flex: 1,
    paddingVertical: 16.
  },

  second: {
        backgroundColor: '#262626',
        flex: 1,
        justifyContent: 'center',
  },

  textMain: {
    margin: 16,
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fafafa',

  },

  textSub: {
    marginHorizontal: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fafafa',
    opacity: 0.3,

  },
});

