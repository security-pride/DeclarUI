import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const LogisticsScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('物流');



  const tabs = ['物流', '售后', '提醒', '互动', '赞评', '优惠', '其他'];



  const notifications = [

    {

      id: '1',

      title: '查快递',

      subtitle: '暂无快递更新',

    },

    {

      id: '2',

      icon: require('../assets/snack-icon.png'),

      store: 'romoss旗舰店',

      date: '24/07/10',

      status: '即将确认收货',

      company: '申通快递',

      receiveTime: '2024年07月02日 12:27',

      action: '延长收货',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '3',

      icon: require('../assets/snack-icon.png'),

      title: '订单物流消息',

      date: '24/07/06',

      status: '即将自动确认收货',

      address: '关山街道珞瑜路1037号华中科技大学东11舍407',

      action: '查看详情',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '4',

      icon: require('../assets/snack-icon.png'),

      title: '菜鸟',

      date: '24/04/25',

      status: '包裹签收通知',

      company: '韵达快递',

      message: '包裹已被签收，点击查看签收详情>>',

      action: '查看详情',

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderNotificationItem = ({ item }) => (

    <View style={styles.notificationItem}>

      {item.icon && <Image source={item.icon} style={styles.notificationIcon} />}

      <View style={styles.notificationContent}>

        <View style={styles.notificationHeader}>

          <Text style={styles.notificationTitle}>{item.title || item.store}</Text>

          <Text style={styles.notificationDate}>{item.date}</Text>

        </View>

        <Text style={styles.notificationStatus}>{item.status}</Text>

        {item.company && <Text style={styles.notificationInfo}>物流公司 {item.company}</Text>}

        {item.receiveTime && <Text style={styles.notificationInfo}>签收时间 {item.receiveTime}</Text>}

        {item.address && <Text style={styles.notificationInfo}>收货地址 {item.address}</Text>}

        {item.message && <Text style={styles.notificationInfo}>{item.message}</Text>}

        <TouchableOpacity style={styles.actionButton}>

          <Text style={styles.actionButtonText}>{item.action}</Text>

        </TouchableOpacity>

      </View>

      {item.image && <Image source={item.image} style={styles.notificationImage} />}

    </View>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>通知</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>

      </View>

      <View style={styles.tabContainer}>

        <FlatList

          data={tabs}

          horizontal

          showsHorizontalScrollIndicator={false}

          renderItem={({ item }) => (

            <TouchableOpacity

              style={[styles.tab, selectedTab === item && styles.selectedTab]}

              onPress={() => setSelectedTab(item)}

            >

              <Text style={[styles.tabText, selectedTab === item && styles.selectedTabText]}>{item}</Text>

            </TouchableOpacity>

          )}

          keyExtractor={(item) => item}

        />

      </View>

      <FlatList

        data={notifications}

        renderItem={renderNotificationItem}

        keyExtractor={(item) => item.id}

        contentContainerStyle={styles.notificationList}

      />

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1A1A1A',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  tabContainer: {

    borderBottomWidth: 1,

    borderBottomColor: '#333333',

  },

  tab: {

    paddingHorizontal: 16,

    paddingVertical: 12,

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#FF6600',

  },

  tabText: {

    color: '#999999',

    fontSize: 14,

  },

  selectedTabText: {

    color: '#FFFFFF',

    fontWeight: 'bold',

  },

  notificationList: {

    paddingHorizontal: 16,

  },

  notificationItem: {

    flexDirection: 'row',

    backgroundColor: '#2A2A2A',

    borderRadius: 8,

    padding: 12,

    marginBottom: 12,

  },

  notificationIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 12,

  },

  notificationContent: {

    flex: 1,

  },

  notificationHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 4,

  },

  notificationTitle: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  notificationDate: {

    color: '#999999',

    fontSize: 12,

  },

  notificationStatus: {

    color: '#FFFFFF',

    fontSize: 14,

    marginBottom: 4,

  },

  notificationInfo: {

    color: '#999999',

    fontSize: 12,

    marginBottom: 2,

  },

  actionButton: {

    alignSelf: 'flex-start',

    backgroundColor: '#333333',

    borderRadius: 4,

    paddingHorizontal: 8,

    paddingVertical: 4,

    marginTop: 8,

  },

  actionButtonText: {

    color: '#FF6600',

    fontSize: 12,

  },

  notificationImage: {

    width: 60,

    height: 60,

    borderRadius: 4,

    marginLeft: 12,

  },

});



export default LogisticsScreen;