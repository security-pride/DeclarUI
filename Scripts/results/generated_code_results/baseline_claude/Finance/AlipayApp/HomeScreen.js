import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderTopBar = () => (

    <View style={styles.topBar}>

      <Text style={styles.location}>烟台 ▼</Text>

      <Text style={styles.temperature}>雾 24°C</Text>

      <View style={styles.searchBar}>

        <TextInput

          style={styles.searchInput}

          placeholder="支付宝会员"

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.searchButton}>

          <Text style={styles.searchButtonText}>搜索</Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.addButton}>

        <Text style={styles.addButtonText}>+</Text>

      </TouchableOpacity>

    </View>

  );



  const renderQuickActions = () => (

    <View style={styles.quickActions}>

      {[

        { icon: '[ ]', label: '扫一扫' },

        { icon: '¥', label: '收付款' },

        { icon: '车', label: '出行' },

        { icon: '卡', label: '卡包' },

      ].map((action, index) => (

        <TouchableOpacity key={index} style={styles.quickActionItem}>

          <View style={styles.quickActionIcon}>

            <Text>{action.icon}</Text>

          </View>

          <Text style={styles.quickActionLabel}>{action.label}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderServices = () => (

    <View style={styles.services}>

      {[

        { icon: '../assets/snack-icon.png', label: '饿了么' },

        { icon: '../assets/snack-icon.png', label: '口碑团购' },

        { icon: '../assets/snack-icon.png', label: '市民中心' },

        { icon: '../assets/snack-icon.png', label: '淘票票' },

        { icon: '../assets/snack-icon.png', label: '转账' },

        { icon: '../assets/snack-icon.png', label: '信用卡还款' },

        { icon: '../assets/snack-icon.png', label: '手机充值' },

        { icon: '../assets/snack-icon.png', label: '余额宝' },

        { icon: '../assets/snack-icon.png', label: '高德打车' },

        { icon: '../assets/snack-icon.png', label: '生活缴费' },

        { icon: '../assets/snack-icon.png', label: '火车票机票' },

        { icon: '../assets/snack-icon.png', label: '蚂蚁森林' },

        { icon: '../assets/snack-icon.png', label: '芭芭农场' },

        { icon: '../assets/snack-icon.png', label: '我的小程序' },

        { icon: '../assets/snack-icon.png', label: '更多' },

      ].map((service, index) => (

        <TouchableOpacity key={index} style={styles.serviceItem}>

          <Image source={service.icon} style={styles.serviceIcon} />

          <Text style={styles.serviceLabel}>{service.label}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderRecentActivities = () => (

    <View style={styles.recentActivities}>

      <View style={styles.recentHeader}>

        <Text style={styles.recentHeaderText}>最近消息</Text>

        <TouchableOpacity>

          <Text style={styles.recentHeaderMore}>200条新消息 ></Text>

        </TouchableOpacity>

      </View>

      <View style={styles.recentItem}>

        <Text style={styles.recentItemText}>高德打车 自动扣款成功 ¥ 12.30</Text>

        <Text style={styles.recentItemTime}>7小时前</Text>

      </View>

      <View style={styles.recentItem}>

        <Text style={styles.recentItemText}>高德打车 自动扣款成功 ¥ 34.54，你有支付奖励待领取</Text>

        <Text style={styles.recentItemTime}>11小时前</Text>

      </View>

    </View>

  );



  const renderPromotions = () => (

    <View style={styles.promotions}>

      <View style={styles.promotionItem}>

        <Text style={styles.promotionTitle}>花呗青春季</Text>

        <Text style={styles.promotionSubtitle}>花呗请你喝奶茶</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />

      </View>

      <View style={styles.promotionItem}>

        <Text style={styles.promotionTitle}>消费圈</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />

      </View>

      <View style={styles.promotionItem}>

        <Text style={styles.promotionTitle}>理好财</Text>

        <Text style={styles.promotionSubtitle}>医保补充</Text>

        <Text style={styles.promotionSubtitle}>福汉康</Text>

      </View>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      {renderTopBar()}

      {renderQuickActions()}

      {renderServices()}

      {renderRecentActivities()}

      {renderPromotions()}

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f0f0f0',

  },

  topBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#1E90FF',

  },

  location: {

    color: 'white',

    fontWeight: 'bold',

  },

  temperature: {

    color: 'white',

    marginLeft: 10,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    backgroundColor: 'white',

    borderRadius: 20,

    marginHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    paddingHorizontal: 10,

  },

  searchButton: {

    padding: 5,

  },

  searchButtonText: {

    color: '#1E90FF',

  },

  addButton: {

    width: 30,

    height: 30,

    borderRadius: 15,

    backgroundColor: 'rgba(255,255,255,0.3)',

    justifyContent: 'center',

    alignItems: 'center',

  },

  addButtonText: {

    color: 'white',

    fontSize: 20,

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    backgroundColor: 'white',

  },

  quickActionItem: {

    alignItems: 'center',

  },

  quickActionIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 5,

  },

  quickActionLabel: {

    fontSize: 12,

  },

  services: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 10,

    backgroundColor: 'white',

  },

  serviceItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 15,

  },

  serviceIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  serviceLabel: {

    fontSize: 12,

    textAlign: 'center',

  },

  recentActivities: {

    backgroundColor: 'white',

    marginTop: 10,

    padding: 10,

  },

  recentHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 10,

  },

  recentHeaderText: {

    fontWeight: 'bold',

  },

  recentHeaderMore: {

    color: '#1E90FF',

  },

  recentItem: {

    marginBottom: 5,

  },

  recentItemText: {

    fontSize: 14,

  },

  recentItemTime: {

    fontSize: 12,

    color: '#999',

  },

  promotions: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

    backgroundColor: 'white',

    marginTop: 10,

  },

  promotionItem: {

    width: '32%',

    backgroundColor: '#f9f9f9',

    borderRadius: 5,

    padding: 10,

  },

  promotionTitle: {

    fontWeight: 'bold',

    marginBottom: 5,

  },

  promotionSubtitle: {

    fontSize: 12,

    color: '#666',

  },

  promotionImage: {

    width: '100%',

    height: 50,

    resizeMode: 'contain',

  },

});



export default HomeScreen;