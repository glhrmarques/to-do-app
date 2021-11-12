import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { Header } from './components/Header';

export default function App() {  
  return ( 


    <>
      <SafeAreaView style={{flex:0, backgroundColor: '#3d3d3d'}}>
        <StatusBar barStyle='light-content' />
      </SafeAreaView>
      <View style={styles.contentWrapper}>
        <Header />
        <View style={{flex:1,}}>
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create ({
  contentWrapper: {
    backgroundColor: '#fafafa',
    flex: 1,
  },
});

