import React from "react";
import { StyleSheet, View,  Text, TouchableOpacity } from "react-native";


//importing icons
import {MaterialIcons} from '@expo/vector-icons';


export default function TodoItem({item, onPressAction}){
    return(
        <TouchableOpacity onPress={()=>onPressAction(item.key)}>
            <View style={styles.item}>
                
                {/* task name */}
                <Text style={styles.itemList}>{item.task}</Text>

                {/* delete using icons */}
                <MaterialIcons name='delete'size={20} color='#555'/>
            </View>
        </TouchableOpacity>       
    )
}

const styles=StyleSheet.create({
    item:{
        flexDirection:'row',
        backgroundColor:'lightgray',
        padding:10,
        marginTop:20,
        borderColor:'#555',
        borderWidth:2,
        borderRadius:10,
        justifyContent:'space-between',
    },

    itemList:{
        marginLeft:10,
    },

});

//this is only one item but by putting it in FlatList we can 
// create any number of items



