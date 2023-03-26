import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>TO-DOs APP</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        paddingTop:50,
        backgroundColor:'coral',
        // borderWidth:5,
        // borderColor:'green',    
    },
    title:{
        textAlign:"center",
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        justifyContent:'center',
        // borderWidth:2,
        // borderColor:'green'
    }
});

