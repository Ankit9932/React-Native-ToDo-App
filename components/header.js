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
        height:100,
        backgroundColor:'#999966',
        display:'flex',
        justifyContent:'center',
        alignItems:'center', 
        // borderWidth:5,
        // borderColor:'green',  
    },
    title:{
        
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        // borderWidth:2,
        // borderColor:'green'
    }
});

