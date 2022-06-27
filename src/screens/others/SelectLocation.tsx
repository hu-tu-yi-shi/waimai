import React from 'react';
import {Box, Flex, IconButton, View,} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "@@/components/Themed";

export const SelectLocation = () => {

    return (
       <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Box>
                选择收货地址
            </Box>
       </Flex>
    )
}


