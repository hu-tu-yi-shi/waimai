import React from 'react';
import {Flex, IconButton, Input,Button,Icon} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "@@/components/Themed";

const _SearchInput = () => {

    return (
            <Flex width={"100%"} marginTop={2}>
            <Input type={"text"} placeholder={"蛋炒饭"}
                   w="100%"
                   InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
                   InputRightElement={
                        <Button size="xs" rounded="none"   h="full"
                                onPress={()=>console.log("1111")}
                        >搜索</Button>
                   }
            />
            </Flex>

    )
}

export default _SearchInput;
