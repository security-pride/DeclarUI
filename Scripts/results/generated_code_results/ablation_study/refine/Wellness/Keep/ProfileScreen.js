import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const ProfileScreen = ({ navigation }) => {

  const [weight, setWeight] = useState(70.0);

  const [exerciseTime, setExerciseTime] = useState(0);



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('AddFriend')}>

          <Icon name="person-add" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

          <Icon name="settings-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>

          <Icon name="scan-outline" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      

      <View style={styles.profileInfo}>

        <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

        <Text style={styles.username}>Boots--2333</Text>

        <View style={styles.statsRow}>

          <Text style={styles.statsText}>关注 1</Text>

          <Text style={styles.statsText}>粉丝 0</Text>

          <Text style={styles.statsText}>加油 1</Text>

        </View>

        <View style={styles.badgeRow}>

          <View style={styles.badge}>

            <Icon name="fitness" size={16} color="#fff" />

            <Text style={styles.badgeText}>3</Text>

          </View>

          <Text style={styles.badgeLabel}>新升级！</Text>

          <View style={styles.badge}>

            <Icon name="trophy" size={16} color="#fff" />

            <Text style={styles.badgeText}>14</Text>

          </View>

          <Text style={styles.badgeLabel}>新挑战</Text>

        </View>

        <Text style={styles.dateText}>2016.07.07</Text>

      </View>



      <View style={styles.dataSection}>

        <TouchableOpacity style={styles.dataBox} onPress={() => navigation.navigate('MyData')}>

          <Text style={styles.dataTitle}>我的数据</Text>

          <Text style={styles.dataValue}>{exerciseTime} 分钟</Text>

          <Text style={styles.dataSubtitle}>本周运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.dataBox} onPress={() => navigation.navigate('WeightData')}>

          <Text style={styles.dataTitle}>体重数据</Text>

          <Text style={styles.dataValue}>{weight.toFixed(1)} 公斤</Text>

          <Text style={styles.dataSubtitle}>近 12 个月</Text>

        </TouchableOpacity>

      </View>



      <TouchableOpacity style={styles.membershipBanner} onPress={() => navigation.navigate('Membership')}>

        <Text style={styles.membershipText}>keep·会员</Text>

        <Text style={styles.membershipPromo}>年卡￥178 加赠四...</Text>

        <Text style={styles.membershipAction}>立即开通 ></Text>

      </TouchableOpacity>



      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyActivities')}>

        <Icon name="pencil-outline" size={24} color="#000" />

        <Text style={styles.menuItemText}>我的动态</Text>

        <Text style={styles.menuItemCount}>1 条动态</Text>

        <Icon name="chevron-forward-outline" size={24} color="#ccc" />

      </TouchableOpacity>



      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FavoritesAndMotivation')}>

        <Icon name="star-outline" size={24} color="#000" />

        <Text style={styles.menuItemText}>收藏与加油</Text>

        <Icon name="chevron-forward-outline" size={24} color="#ccc" />

      </TouchableOpacity>



      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyCourses')}>

        <Icon name="book-outline" size={24} color="#000" />

        <Text style={styles.menuItemText}>我的课程</Text>

        <Icon name="chevron-forward-outline" size={24} color="#ccc" />

      </TouchableOpacity>



      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyEvents')}>

        <Icon name="calendar-outline" size={24} color="#000" />

        <Text style={styles.menuItemText}>我的活动</Text>

        <Icon name="chevron-forward-outline" size={24} color="#ccc" />

      </TouchableOpacity>



      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MyDiet')}>

        <Icon name="restaurant-outline" size={24} color="#000" />

        <Text style={styles.menuItemText}>我的饮食</Text>

        <Icon name="chevron-forward-outline" size={24} color="#ccc" />

      </TouchableOpacity>



      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('OrdersAndWallet')}>

        <Icon name="wallet-outline" size={24} color="#000" />

        <Text style={styles.menuItemText}>订单与钱包</Text>

        <Icon name="chevron-forward-outline" size={24} color="#ccc" />

      </TouchableOpacity>

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

    justifyContent: 'flex-end',

    alignItems: 'center',

    padding: 10,

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

  username: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  statsRow: {

    flexDirection: 'row',

    justifyContent: 'center',

    marginBottom: 10,

  },

  statsText: {

    marginHorizontal: 10,

    color: '#666',

  },

  badgeRow: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  badge: {

    backgroundColor: '#ff9500',

    borderRadius: 12,

    paddingHorizontal: 8,

    paddingVertical: 2,

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 5,

  },

  badgeText: {

    color: '#fff',

    marginLeft: 2,

  },

  badgeLabel: {

    color: '#666',

    marginRight: 10,

  },

  dateText: {

    color: '#999',

  },

  dataSection: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 20,

  },

  dataBox: {

    backgroundColor: '#fff',

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

    color: '#ff9500',

  },

  dataSubtitle: {

    color: '#999',

  },

  membershipBanner: {

    backgroundColor: '#8e44ad',

    borderRadius: 10,

    padding: 15,

    marginHorizontal: 10,

    marginBottom: 20,

  },

  membershipText: {

    color: '#fff',

    fontSize: 18,

    fontWeight: 'bold',

  },

  membershipPromo: {

    color: '#fff',

    fontSize: 14,

  },

  membershipAction: {

    color: '#fff',

    fontSize: 14,

    fontWeight: 'bold',

    alignSelf: 'flex-end',

  },

  menuItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 15,

    paddingHorizontal: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  menuItemText: {

    flex: 1,

    marginLeft: 10,

    fontSize: 16,

  },

  menuItemCount: {

    color: '#999',

    marginRight: 10,

  },

});



export default ProfileScreen;