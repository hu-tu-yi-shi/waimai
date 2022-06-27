import React from 'react';
import {Flex,Text, IconButton, Input, Button, Box, FlatList, HStack, View} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";


interface IPros {
    item: {
        icon:string,
        text:string
    }
}
const _IconButton = ({item}:IPros)=>{
    return <Box>
        <Ionicons name="location-outline" size={20} color="black" />
        <Text>{item.text}</Text>
    </Box>
}



const BTNS = [
    {icon:"",text:"美食1"},
    {icon:"",text:"美食2"},
    {icon:"",text:"美食3"},
    {icon:"",text:"美食4"},
    {icon:"",text:"美食5"},
    {icon:"",text:"美食6"},
    {icon:"",text:"美食7"},
    {icon:"",text:"美食8"},
    {icon:"",text:"美食9"},
    {icon:"",text:"美食10"},
    {icon:"",text:"美食11"},
    {icon:"",text:"美食12"},
    {icon:"",text:"美食13"},
    {icon:"",text:"美食14"},
    {icon:"",text:"美食15"},
]
const _NavGrid = () => {

    return (
          <Box style={styles.container}>

              {BTNS.map(item=>{
                  return <Box style={styles.item} ><_IconButton item={item}/></Box>
              })}

          </Box>



    )
}

export default _NavGrid;

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'flex-start'
    },
    item:{
        width:'25%'
    }

});
