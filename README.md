# waimai

在线预览： https://waimai-sable.vercel.app/


# 目标

美团外卖


# 技术栈（初步决定）
 
[react][1]    
[typescript][2]     
[react-native][3]   
[NativeBase][5]   (尽可能用rn原生组件）   
[recoil][4]  状态管理     
 
 
[1]: https://reactjs.org/
[2]: https://www.typescriptlang.org/
[3]: https://reactnative.dev/
[4]: https://recoiljs.org/
[5]: https://nativebase.io/
 




# 开工时间

初步预计 6月1日后

# 贡献说明

新开一个分支，写好代码后，提pr，不要直接修改 main 分支

不要炫技，使用花里胡哨的语法；尽可能代码写的浅显易懂，这便于后期维护

尽可能写注释

# 目录结构
```
/src    # 源码
    /api    # mock api
    /components
    /constans
    /hooks  
    /navigation      
    /screens
        /others # 其他非顶级页面都放这里
        /HomeScreen.tsx 首页
        /VipScreen.tsx 会员
        /OrderScreen.tsx 订单
        /MyScreen.tsx 我的

    /store  # 状态
    
```


