import React from 'react';

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const menuItems = [

    { id: '1', title: '我的动态', icon: '✏️', count: '1 条动态' },

    { id: '2', title: '收藏与加油', icon: '⭐' },

    { id: '3', title: '我的课程', icon: '▶️' },

    { id: '4', title: '我的活动', icon: '🏆' },

    { id: '5', title: '我的饮食', icon: '🍽️' },

    { id: '6', title: '订单与钱包', icon: '📁' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

        </TouchableOpacity>

        <View style={styles.headerIcons}>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.profileInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        <View style={styles.nameContainer}>

          <Text style={styles.name}>Boots--2333</Text>

          <TouchableOpacity style={styles.editButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.editIcon} />

          </TouchableOpacity>

        </View>

        <Text style={styles.stats}>关注 1 | 粉丝 0 | 加油 1</Text>

        <View style={styles.badgesContainer}>

          <View style={styles.badge}>

            <Text style={styles.badgeText}>Kg 3</Text>

            <Text style={styles.badgeLabel}>新升级！</Text>

          </View>

          <View style={styles.badge}>

            <Image source={require('../assets/snack-icon.png')} style={styles.badgeIcon} />

            <Text style={styles.badgeText}>14</Text>

            <Text style={styles.badgeLabel}>新挑战</Text>

          </View>

          <View style={styles.badge}>

            <Image source={require('../assets/snack-icon.png')} style={styles.badgeIcon} />

            <Text style={styles.badgeText}>2016.07.07</Text>

          </View>

        </View>

      </View>



      <View style={styles.dataSection}>

        <TouchableOpacity style={styles.dataItem}>

          <Text style={styles.dataTitle}>我的数据</Text>

          <Text style={styles.dataValue}>0 分钟</Text>

          <Text style={styles.dataLabel}>本周运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.dataItem}>

          <Text style={styles.dataTitle}>体重数据</Text>

          <Text style={styles.dataValue}>70.0 公斤</Text>

          <Text style={styles.dataLabel}>近 12 个月</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.membershipCard}>

        <View>

          <Text style={styles.membershipTitle}>keep·会员</Text>

          <TouchableOpacity style={styles.membershipLink}>

            <Text style={styles.membershipLinkText}>告别肚腩计划</Text>

            <Text style={styles.membershipLinkArrow}>›</Text>

          </TouchableOpacity>

          <Text style={styles.membershipDescription}>腰间的肥油叶叶掉</Text>

        </View>

        <TouchableOpacity style={styles.membershipLink}>

          <Text style={styles.membershipLinkText}>年卡￥178 加赠四...</Text>

          <Text style={styles.membershipLinkArrow}>›</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.membershipButton}>

          <Text style={styles.membershipButtonText}>立即开通</Text>

        </TouchableOpacity>

      </TouchableOpacity>



      {menuItems.map((item) => (

        <TouchableOpacity key={item.id} style={styles.menuItem}>

          <View style={styles.menuItemLeft}>

            <Text style={styles.menuItemIcon}>{item.icon}</Text>

            <Text style={styles.menuItemTitle}>{item.title}</Text>

          </View>

          <View style={styles.menuItemRight}>

            {item.count && <Text style={styles.menuItemCount}>{item.count}</Text>}

            <Text style={styles.menuItemArrow}>›</Text>

          </View>

        </TouchableOpacity>

      ))}



      <View style={styles.bottomTabBar}>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>课程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Sports')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Store')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabBarIcon} />

          <Text style={styles.tabBarItemText}>商城</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabBarIcon} />

          <Text style={[styles.tabBarItemText, styles.activeTabBarItem]}>我的</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

  },

  headerIcon: {

    width: 24,

    height: 24,

  },

  headerIcons: {

    flexDirection: 'row',

  },

  profileInfo: {

    alignItems: 'center',

    marginBottom: 20,

  },

  avatar: {

    width: 80,

    height: 80,

    borderRadius: 40,

    marginBottom: 10,

  },

  nameContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  name: {

    fontSize: 20,

    fontWeight: 'bold',

    marginRight: 10,

  },

  editButton: {

    padding: 5,

  },

  editIcon: {

    width: 16,

    height: 16,

  },

  stats: {

    color: '#666',

    marginBottom: 10,

  },

  badgesContainer: {

    flexDirection: 'row',

    justifyContent: 'center',

  },

  badge: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 15,

    paddingVertical: 5,

    paddingHorizontal: 10,

    marginHorizontal: 5,

  },

  badgeIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  badgeText: {

    fontWeight: 'bold',

    marginRight: 5,

  },

  badgeLabel: {

    color: '#666',

    fontSize: 12,

  },

  dataSection: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  dataItem: {

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 10,

    padding: 15,

    width: '45%',

  },

  dataTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  dataValue: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  dataLabel: {

    color: '#666',

    fontSize: 12,

  },

  membershipCard: {

    backgroundColor: '#8a2be2',

    borderRadius: 10,

    padding: 15,

    marginHorizontal: 15,

    marginBottom: 20,

  },

  membershipTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  membershipLink: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  membershipLinkText: {

    color: 'white',

    marginRight: 5,

  },

  membershipLinkArrow: {

    color: 'white',

  },

  membershipDescription: {

    color: 'white',

    marginTop: 5,

  },

  membershipButton: {

    backgroundColor: '#ffd700',

    borderRadius: 20,

    paddingVertical: 8,

    paddingHorizontal: 15,

    alignSelf: 'flex-end',

    marginTop: 10,

  },

  membershipButtonText: {

    color: '#8a2be2',

    fontWeight: 'bold',

  },

  menuItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: 'white',

    paddingVertical: 15,

    paddingHorizontal: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#f0f0f0',

  },

  menuItemLeft: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  menuItemIcon: {

    marginRight: 10,

    fontSize: 18,

  },

  menuItemTitle: {

    fontSize: 16,

  },

  menuItemRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  menuItemCount: {

    color: '#666',

    marginRight: 5,

  },

  menuItemArrow: {

    color: '#666',

    fontSize: 18,

  },

  bottomTabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: 'white',

    borderTopWidth: 1,

    borderTopColor: '#f0f0f0',

  },

  tabBarItem: {

    alignItems: 'center',

  },

  tabBarIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabBarItemText: {

    fontSize: 12,

  },

  activeTabBarItem: {

    color: '#8a2be2',

  },

});



export default ProfileScreen;