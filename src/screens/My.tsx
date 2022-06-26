import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {version} from "../../package.json";

export default function My() {
  return (
    <View style={styles.container}>
        <Text>
      头像 昵称 设置icon  消息中心icon
      充会员ad
      我的资产
      我的收藏
      我的钱包
      我的功能
      我的服务
      更多推荐
        </Text>

      <Text style={styles.title}>我的</Text>
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
