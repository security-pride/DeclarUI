import React from 'react';

import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MessageScreen = () => {

  const navigation = useNavigation();



  const categories = [

    { id: '1', title: '交易物流', icon: require('../assets/snack-icon.png'), subtitle: '即将确认收货', action: '点击延长收货', image: require('../assets/snack-icon.png') },

    { id: '2', title: '售后', icon: require('../assets/snack-icon.png') },

    { id: '3', title: '提醒', icon: require('../assets/snack-icon.png') },

    { id: '4', title: '互动', icon: require('../assets/snack-icon.png') },

  ];



  const messages = [

    { id: '1', store: 'romoss旗舰店', avatar: require('../assets/snack-icon.png'), message: '商品使用说明', date: '24/07/03', unread: 4 },

    { id: '2', store: '订阅号消息', avatar: require('../assets/snack-icon.png'), message: 'COURTMAN野球帝:新品揭晓, 所有等待都值得。', date: '24/06/13' },

    { id: '3', store: 'jELLYCAT海外旗舰店', avatar: require('../assets/snack-icon.png'), message: 'Jellycat 2024新生系列焕新上市! 会员臻享...', date: '24/04/03', unread: 3 },

    { id: '4', store: 'YOMIK', avatar: require('../assets/snack-icon.png'), message: '亲，对藕香抹微云、的服务满意吗?', date: '24/03/25', unread: 1 },

    { id: '5', store: 'Starbucks星巴克官方旗舰店', avatar: require('../assets/snack-icon.png'), message: '亲爱的，你感兴趣的宝贝降价啦，不要错过限...', date: '24/03/19', unread: 4 },

    { id: '6', store: '良品铺子旗舰店', avatar: require('../assets/snack-icon.png'), message: '周三会员福利日! 千万别错过!', date: '24/03/13', unread: 5 },

    { id: '7', store: 'jELLYCAT旗舰店', avatar: require('../assets/snack-icon.png'), message: '龙腾新岁、开工大吉! 入会臻享爆品优先购。', date: '24/02/22', unread: 2 },

  ];



  const renderCategory = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Image source={item.icon} style={styles.categoryIcon} />

      <Text style={styles.categoryTitle}>{item.title}</Text>

      {item.subtitle && <Text style={styles.categorySubtitle}>{item.subtitle}</Text>}

      {item.action && <Text style={styles.categoryAction}>{item.action}</Text>}

      {item.image && <Image source={item.image} style={styles.categoryImage} />}

    </TouchableOpacity>

  );



  const renderMessage = ({ item }) => (

    <TouchableOpacity style={styles.messageItem}>

      <Image source={item.avatar} style={styles.avatar} />

      <View style={styles.messageContent}>

        <View style={styles.messageHeader}>

          <Text style={styles.storeName}>{item.store}</Text>

          <Text style={styles.messageDate}>{item.date}</Text>

        </View>

        <Text style={styles.messageText} numberOfLines={1}>{item.message}</Text>

      </View>

      {item.unread && <View style={styles.unreadBadge}><Text style={styles.unreadText}>{item.unread}</Text></View>}

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <View style={styles.header}>

        <Text style={styles.headerTitle}>消息</Text>

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

      <FlatList

        data={categories}

        renderItem={renderCategory}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.categoriesList}

      />

      <View style={styles.promotionBanner}>

        <Image source={require('../assets/snack-icon.png')} style={styles.promotionIcon} />

        <View>

          <Text style={styles.promotionTitle}>热门活动抢先看</Text>

          <Text style={styles.promotionSubtitle}>更多优惠尽在掌握</Text>

        </View>

        <Text style={styles.promotionDate}>6.1-8.31</Text>

        <TouchableOpacity style={styles.closeButton}>

          <Text style={styles.closeButtonText}>×</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.sectionHeader}>

        <Text style={styles.sectionTitle}>两周前的消息</Text>

      </View>

      <FlatList

        data={messages}

        renderItem={renderMessage}

        keyExtractor={item => item.id}

        style={styles.messagesList}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>逛逛</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>购物车</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的淘宝</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000000',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  headerIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 16,

  },

  categoriesList: {

    paddingHorizontal: 16,

  },

  categoryItem: {

    alignItems: 'center',

    marginRight: 16,

    width: 100,

  },

  categoryIcon: {

    width: 40,

    height: 40,

    marginBottom: 8,

  },

  categoryTitle: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  categorySubtitle: {

    color: '#999999',

    fontSize: 10,

    marginTop: 4,

  },

  categoryAction: {

    color: '#FF6600',

    fontSize: 10,

    marginTop: 4,

  },

  categoryImage: {

    width: 60,

    height: 60,

    marginTop: 8,

    borderRadius: 4,

  },

  promotionBanner: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#1A1A1A',

    padding: 12,

    marginTop: 16,

    marginHorizontal: 16,

    borderRadius: 8,

  },

  promotionIcon: {

    width: 40,

    height: 40,

    marginRight: 12,

  },

  promotionTitle: {

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: 'bold',

  },

  promotionSubtitle: {

    color: '#999999',

    fontSize: 12,

  },

  promotionDate: {

    color: '#999999',

    fontSize: 12,

    marginLeft: 'auto',

  },

  closeButton: {

    marginLeft: 12,

  },

  closeButtonText: {

    color: '#999999',

    fontSize: 16,

  },

  sectionHeader: {

    padding: 16,

  },

  sectionTitle: {

    color: '#999999',

    fontSize: 14,

  },

  messagesList: {

    flex: 1,

  },

  messageItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  avatar: {

    width: 48,

    height: 48,

    borderRadius: 24,

    marginRight: 12,

  },

  messageContent: {

    flex: 1,

  },

  messageHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 4,

  },

  storeName: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  messageDate: {

    color: '#999999',

    fontSize: 12,

  },

  messageText: {

    color: '#999999',

    fontSize: 14,

  },

  unreadBadge: {

    backgroundColor: '#FF6600',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  unreadText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333333',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    color: '#999999',

    fontSize: 12,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#FF6600',

  },

  activeTabText: {

    color: '#FF6600',

  },

});



export default MessageScreen;