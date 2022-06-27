import React from 'react';
import {Flex, IconButton,View} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "@@/components/Themed";
import {useNavigation} from "@react-navigation/native";


const _Header = () => {
    const navigation = useNavigation();
    return (
       <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
           <Flex direction={"row"} alignItems={"center"}>
               <Ionicons name="location-outline" size={20} color="black" />
               <Text>万达广场1 &gt;</Text>
           </Flex>

           <IconButton onPress={()=>{
               navigation.navigate("Notification")
           }} icon={<Ionicons name="notifications-outline" size={20} color="black" />} borderRadius="full"  />
       </Flex>
    )
}

export default _Header;
