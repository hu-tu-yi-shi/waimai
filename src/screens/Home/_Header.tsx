import React from 'react';
import {Flex, IconButton} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "@@/components/Themed";

const _Header = () => {

    return (
        <Flex direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Flex direction={"row"} alignItems={"center"}>
                <Ionicons name="location-outline" size={20} color="black" />
                <Text>万达广场 &gt;</Text>
            </Flex>

            <IconButton icon={<Ionicons name="notifications-outline" size={20} color="black" />} borderRadius="full"  />
        </Flex>
    )
}

export default _Header;
