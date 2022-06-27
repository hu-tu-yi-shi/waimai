import React from 'react';
import {Box, Button, Flex, IconButton, View} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "@@/components/Themed";
import {useNavigation} from "@react-navigation/native";


const _Header = () => {
    const navigation = useNavigation();
    return (
       <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
           <Button onPress={()=>{
               navigation.navigate("SelectLocation")
           }} variant="unstyled" leftIcon={ <Ionicons name="location-outline" size={20} color="black" />}>
              万达广场1 &gt;
           </Button>

           <IconButton onPress={()=>{
               navigation.navigate("Notification")
           }} icon={<Ionicons name="notifications-outline" size={20} color="black" />} borderRadius="full"  />
       </Flex>
    )
}

export default _Header;
