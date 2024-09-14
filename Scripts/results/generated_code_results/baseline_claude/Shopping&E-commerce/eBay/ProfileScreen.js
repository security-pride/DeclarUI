import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const menuItems = [

    { id: 1, title: '追踪列表', subtitle: '密切关注追踪物品', icon: 'heart-outline' },

    { id: 2, title: '已保存', subtitle: '搜索、卖家、动态消息', icon: 'heart-outline' },

    { id: 3, title: '再次购买', subtitle: '购买已购买过的物品', icon: 'reload' },

    { id: 4, title: '购买记录', subtitle: '您的订购历史记录', icon: 'gift' },

    { id: 5, title: '出价和议价', subtitle: '进行中的拍卖和卖家议价', icon: 'gavel' },

    { id: 6, title: '最近浏览', subtitle: '您最近浏览的物品', icon: 'time' },

    { id: 7, title: '我的尺码', subtitle: '查看您保存的偏好设置', icon: 'shoe-print' },

  ];



  const quickAccessItems = [

    { id: 1, title: '出售记录', icon: 'tag' },

  ];



  const renderMenuItem = (item) => (

    <TouchableOpacity key={item.id} style={styles.menuItem}>

      <View style={styles.menuItemIcon}>

        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

      </View>

      <View style={styles.menuItemContent}>

        <Text style={styles.menuItemTitle}>{item.title}</Text>

        <Text style={styles.menuItemSubtitle}>{item.subtitle}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.userInfo}>

          <View style={styles.avatar}>

            <Text style={styles.avatarText}>M</Text>

          </View>

          <View style={styles.userDetails}>

            <Text style={styles.username}>mu_447895</Text>

            <Text style={styles.joinDate}>注册时间 2021</Text>

          </View>

        </View>

        <View style={styles.headerIcons}>

          <TouchableOpacity onPress={() => navigation.navigate('Messages')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

            <View style={styles.badge}>

              <Text style={styles.badgeText}>5</Text>

            </View>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.sectionTitle}>购物</Text>

        {menuItems.map(renderMenuItem)}



        <Text style={styles.sectionTitle}>快捷方式</Text>

        {quickAccessItems.map(renderMenuItem)}

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>主页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>我的 eBay</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>搜索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Notifications')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>通知</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Sell')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>出售物品</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f8f8f8',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#fff',

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#ffc0cb',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,

  },

  avatarText: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#fff',

  },

  userDetails: {

    justifyContent: 'center',

  },

  username: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  joinDate: {

    fontSize: 14,

    color: '#888',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 16,

  },

  badge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  badgeText: {

    color: '#fff',

    fontSize: 12,

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginVertical: 16,

    marginLeft: 16,

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 12,

    paddingHorizontal: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  menuItemIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 16,

  },

  icon: {

    width: 24,

    height: 24,

  },

  menuItemContent: {

    flex: 1,

  },

  menuItemTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  menuItemSubtitle: {

    fontSize: 14,

    color: '#888',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: '#fff',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabText: {

    fontSize: 12,

    marginTop: 4,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#3665f3',

  },

  activeTabText: {

    color: '#3665f3',

  },

});



export default ProfileScreen;