import { StyleSheet, } from 'react-native';
import {useLayoutEffect , useState} from 'react'
import { SafeAreaView ,useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {version} from '../../../package.json'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList} from "@@/types";

 import { Button,Text,View } from "native-base";
 import { IconButton, Icon, Box, Center, NativeBaseProvider,ScrollView } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { Flex, Spacer } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import _Header from "@@/screens/Home/_Header";
import _SearchInput from "@@/screens/Home/_SearchInput";
import _RecommendKeywords from "@@/screens/Home/_RecommendKeywords";
import _NavGrid from "@@/screens/Home/_NavGrid";
import _ShopList from "@@/screens/Home/_ShopList";
type IProps = NativeStackScreenProps<RootTabParamList, 'Home'>;


export   function Home() {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
            header:()=>{
                return <View style={{marginTop:top}}><_Header /></View>
            }
        });
    }, [navigation]);


  return (
    <View style={styles.container}  >

        <_SearchInput />
        <_RecommendKeywords />
        <_NavGrid />
        {/*<_ShopList />*/}

        <Text>



      列表
        tabs
        列表
        </Text>


       <Text style={styles.title}>当前版本{version}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
