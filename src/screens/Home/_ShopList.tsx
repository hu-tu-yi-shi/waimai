import React from 'react';
import {Flex, IconButton, Input,Button,Icon, Box, View, Image,FlatList} from "native-base";
import {Ionicons} from "@expo/vector-icons";



const _ShopTabs =()=>{
    return <Flex direction={"row"}>
        <Button>天天神券</Button>
        <Button>新商家</Button>
        <Button>会员商家</Button>
        <Button>店铺高分</Button>
    </Flex>
}


const _ShopItem =({item}: { item:number })=>{
    return <Box  >


        <Flex direction={"row"}>
            <Box>
                <Image source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="Alternate Text" size="xl" />

            </Box>
            <Flex>
                <Box>xxxx 饺子馆</Box>
                <Box>4.9分  月售19999 人均￥20</Box>
                <Box>起送￥12  配送约￥0.5</Box>
                <Box>吃过的店  近30天浏览过</Box>
                <Box>7天无门槛红包  天天神券 6折起</Box>
            </Flex>


        </Flex>

    </Box>
}

const data = Array.from(Array(10).keys())
const _ShopList = () => {

    return (
            <Flex width={"100%"}  >
                <_ShopTabs />



                <FlatList  data={data} renderItem={({item})=>{
                    return <_ShopItem key={item} item={item}/>
                }}/>
            </Flex>

    )
}

export default _ShopList;
