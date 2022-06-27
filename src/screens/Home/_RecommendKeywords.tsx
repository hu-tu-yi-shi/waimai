import React from 'react';
import {Flex, IconButton, Input,Button} from "native-base";
import {Ionicons} from "@expo/vector-icons";
import {Text} from "@@/components/Themed";

const _RecommendKeywords = () => {

    return (

            <Flex direction={"row"} justifyContent={"space-evenly"} width={"100%"} my={3}>
                <Text>饺子</Text>
                <Text>米饭</Text>
                <Text>奶茶</Text>
                <Text>小龙虾</Text>
                <Text>蜜雪冰城</Text>

            </Flex>

    )
}

export default _RecommendKeywords;
