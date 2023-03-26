
// ---------------- TODO APP--------------------



// architecture
// App.js container
//     header.js

//     content(created view in App.js itself but can be created as a component)
//         addTodo
//         contentList
//            todoItem




//import required component from react native library
import { StyleSheet, Text, View, FlatList } from "react-native";

// importing useState
import React, { useState } from "react";

// importing required components of App from componenets folder
import Header from "./components/header"
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";






// Main App
export default function App() {

  // data for todos
  const [todos, setTodos] = useState([
    { task: "task1", key: 1 },
    { task: "task2", key: 2 },
    { task: "task3", key: 3 }
  ]);


  //onPress function to add items  
  const submitHandler = (task)=>{
    setTodos((prevTodos) => {
      return[
        {task: task, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  // onPress function for todos
  const onPressAction= (key) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    }
  )};

  //for debugging simply use below
    console.log("app executed");

  return (

    // WE CAN EITHER CREATE ALL COMPONENTS/VIEWS/DIVS IN MAIN CONTAINER OR
    // FOR BETTER ARRANGEMENT WE CAN SIMPLY CREATE DIFFERENT FILES FOR EACH COMPONENTS
    // AND IMPORT IT HERE 

    // // MAIN CONTAINER
    <View style={styles.container}>

      {/* header section*/}
      <Header/>

      {/* content section */}
      <View style={styles.content}>
        
        {/* 1.AddTodo */}
        <AddTodo submitHandler={submitHandler}/>

        <View style={styles.contentList}>
          <FlatList
            data={todos}  //get data from todo state
            renderItem={({item}) => (
              // 2.todoItem component
              <TodoItem item={item} onPressAction={onPressAction} />
            )}
          />
        </View>
      </View>
    </View>

    // <Sandbox/>

  );
}






// StyleSheet(CSS) for App
const styles = StyleSheet.create({

  container: {
    flex: 1, 
  },

  content:{
    flex:1,
    padding:30,
    backgroundColor:'#d6d6c2',
    // borderWidth:2,
    // borderColor:'yellow',
    
  },

  contentList:{
    flex:1,
    marginTop:50,
    padding:10,
    backgroundColor:'#999966',
    borderRadius:10
    // borderWidth:2,
    // borderColor:'black'
  }

});
