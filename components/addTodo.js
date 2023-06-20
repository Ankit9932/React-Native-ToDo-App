import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { useState } from "react";




export default function AddTodo({ submitHandler}){

    const [text,setText] = useState('');

    const changeHandler = (value) =>{
        setText(value);
    }

    return(
        <View style={styles.AddTodoContainer}>
            <TextInput style={styles.input}
                placeholder="add new task..."
                onChangeText={changeHandler}/>

            <Button onPress={()=>submitHandler(text)} title='ADD' color='black' /> 
        </View>      
    )
}

const styles=StyleSheet.create({
    AddTodoContainer:{
        borderRadius:10,
        padding:10,
        backgroundColor:'#999966',
        borderWidth:2,
        borderRadius:10,
    },
    input:{
        padding:10,
        marginBottom:10,
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        backgroundColor:'white',
    },
});