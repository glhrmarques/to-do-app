import React, {useState} from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ItemList from './components/ItemList';
import AddTodo from './components/AddTodo';


export default function App() {
  
  const [todos, setTodos] = useState([
    { text:'Something 001', number: '1'},
    { text:'Something 002', number: '2'},
  
  ]);


//Delete task
const pressHandler = (number) => {
  setTodos((delTodos) => {
    return delTodos.filter(todos => todos.number != number);
  });
}

//Add task
const submitHandler = (text) => {
  setTodos((delTodos) => {
    return [
      { text: text, number: Math.random().toString() },
      ...delTodos
    ]
  })
}



  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#3d3d3d'}} />
      <StatusBar barStyle='light-content'/>
      <SafeAreaView style={{flex:1}}>
      
        {/*Header*/}
        <Header pageName={'Page Name'} />
        <View style={styles.pageContent}>
        <AddTodo submitHandler={submitHandler}/>
          <View style={styles.listWrapper}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ItemList item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
        </View>

      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  listWrapper: {
  }

})