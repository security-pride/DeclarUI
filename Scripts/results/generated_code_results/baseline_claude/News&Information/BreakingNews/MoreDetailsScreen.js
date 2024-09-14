import React from 'react';

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MoreDetailsScreen = () => {

  const navigation = useNavigation();



  const menuItems = [

    { id: 1, title: '设置', icon: 'settings' },

    { id: 2, title: '同城', icon: 'location' },

    { id: 3, title: '我的话题', icon: 'topic' },

    { id: 4, title: '已收藏的新闻', icon: 'bookmark' },

    { id: 5, title: '消息', icon: 'message' },

    { id: 6, title: '公告', icon: 'announcement' },

    { id: 7, title: '分享应用', icon: 'share' },

    { id: 8, title: '隐私政策', icon: 'privacy' },

    { id: 9, title: '支持我们', icon: 'support' },

    { id: 10, title: '常见问题解答', icon: 'faq' },

    { id: 11, title: '退出应用', icon: 'exit' },

  ];



  const renderMenuItem = (item) => (

    <TouchableOpacity

      key={item.id}

      style={styles.menuItem}

      onPress={() => navigation.navigate(item.title)}

    >

      <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

      <Text style={styles.menuText}>{item.title}</Text>

      <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        {menuItems.map(renderMenuItem)}

      </ScrollView>

      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>新闻</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>话题墙</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>BELOUD</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>提醒</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />

          <Text style={[styles.navText, styles.activeNavText]}>更多</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingVertical: 15,

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 15,

  },

  menuText: {

    flex: 1,

    fontSize: 16,

  },

  arrowIcon: {

    width: 20,

    height: 20,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#EEEEEE',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  navText: {

    fontSize: 12,

  },

  activeNavItem: {

    // Add styles for active nav item if needed

  },

  activeNavIcon: {

    tintColor: 'red', // Assuming the active icon is red

  },

  activeNavText: {

    color: 'red', // Assuming the active text is red

  },

});



export default MoreDetailsScreen;