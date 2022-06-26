import { StyleSheet, } from 'react-native';
import {useLayoutEffect , useState} from 'react'
import EditScreenInfo from '@@/components/EditScreenInfo';
import { Text, View } from '@@/components/Themed';
import {version} from '../../package.json'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList} from "@@/types";

import { NativeBaseProvider, Box } from "native-base";
import { Button } from "native-base";



type IProps = NativeStackScreenProps<RootTabParamList, 'Home'>;


export default function Home({navigation}:IProps) {
    const [count, setCount] = useState(0);


    useLayoutEffect(() => {
        navigation.setOptions({
            // header:()=>{
            //     return <View>
            //         <Text>万达广场</Text>
            //         <Text>Icon</Text>
            //     </View>
            // }
            headerLeft:()=>(<Text>万达广场</Text>),
            title:"",
            headerRight: () => (
                <Text>Icon</Text>
            ),
        });
    }, [navigation]);


  return (
    <View style={styles.container}>
        <Text>count:{count}</Text>
        <Text>
       地址选择  消息中心icon
      搜索框
      热搜关键词
      banner
      分类icons
      列表
        tabs
        列表
        </Text>

        <NativeBaseProvider>
            <Button onPress={() => console.log("hello world")}>Click Me</Button>
            <Box>Hello world</Box>
        </NativeBaseProvider>
        <Text style={styles.title}>首页</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
      <Text style={styles.title}>当前版本{version}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
