import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const renderOrderItem = (icon, title) => (

    <TouchableOpacity style={styles.orderItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.orderIcon} />

      <Text style={styles.orderText}>{title}</Text>

    </TouchableOpacity>

  );



  const renderQuickAccessItem = (icon, title, subtitle, action) => (

    <TouchableOpacity style={styles.quickAccessItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />

      <View style={styles.quickAccessContent}>

        <Text style={styles.quickAccessTitle}>{title}</Text>

        <Text style={styles.quickAccessSubtitle}>{subtitle}</Text>

      </View>

      {action && (

        <TouchableOpacity style={styles.quickAccessAction}>

          <Text style={styles.quickAccessActionText}>{action}</Text>

        </TouchableOpacity>

      )}

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <StatusBar barStyle="light-content" />

      <ScrollView>

        <View style={styles.header}>

          <View style={styles.userInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

            <View style={styles.userDetails}>

              <Text style={styles.username}>不吃不吃不吃Orz</Text>

              <View style={styles.userMeta}>

                <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

                <Text style={styles.metaText}>收货地址</Text>

                <Image source={require('../assets/snack-icon.png')} style={styles.storeIcon} />

                <Text style={styles.metaText}>关注店铺</Text>

              </View>

            </View>

          </View>

          <View style={styles.headerActions}>

            <TouchableOpacity style={styles.headerAction}>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerActionIcon} />

              <Text style={styles.headerActionText}>官方客服</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.headerAction}>

              <Image source={require('../assets/snack-icon.png')} style={styles.headerActionIcon} />

              <Text style={styles.headerActionText}>设置</Text>

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.savingsCard}>

          <View style={styles.savingsInfo}>

            <Text style={styles.savingsTitle}>为你节省 ¥781</Text>

            <TouchableOpacity>

              <Text style={styles.savingsMore}>更多 ></Text>

            </TouchableOpacity>

          </View>

          <View style={styles.savingsDetails}>

            <View style={styles.savingsItem}>

              <Text style={styles.savingsItemTitle}>省钱卡</Text>

              <Text style={styles.savingsItemValue}>立即查看</Text>

            </View>

            <View style={styles.savingsItem}>

              <Text style={styles.savingsItemTitle}>天猫积分</Text>

              <Text style={styles.savingsItemValue}>990</Text>

            </View>

            <View style={styles.savingsItem}>

              <Text style={styles.savingsItemTitle}>红包</Text>

              <Text style={styles.savingsItemValue}>¥0.00</Text>

            </View>

            <View style={styles.savingsItem}>

              <Text style={styles.savingsItemTitle}>优惠券</Text>

              <Text style={styles.savingsItemValue}>0张</Text>

            </View>

          </View>

          <TouchableOpacity style={styles.savingsButton}>

            <Text style={styles.savingsButtonText}>点击查看更多优惠</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.couponCenter}>

            <Text style={styles.couponCenterText}>去查看</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.vipCard}>

          <Text style={styles.vipTitle}>88VIP</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.vipIcon} />

          <Text style={styles.vipDescription}>得网易云音乐VIP</Text>

          <TouchableOpacity style={styles.vipButton}>

            <Text style={styles.vipButtonText}>去解锁音乐特权</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.ordersSection}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>我的订单</Text>

            <TouchableOpacity>

              <Text style={styles.sectionMore}>全部 ></Text>

            </TouchableOpacity>

          </View>

          <View style={styles.orderItems}>

            {renderOrderItem('wallet', '待付款')}

            {renderOrderItem('box', '待发货')}

            {renderOrderItem('truck', '待收货')}

            {renderOrderItem('comment', '待评价')}

            {renderOrderItem('return', '退款/售后')}

          </View>

        </View>



        <View style={styles.quickAccessSection}>

          {renderQuickAccessItem('express', '快递', '查看快递信息')}

          {renderQuickAccessItem('folder', '收藏', '查看最近收藏', '去选逛更多宝贝')}

          {renderQuickAccessItem('footprint', '足迹', '看过的商品和视频')}

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>逛逛</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Message')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>购物车</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>我的淘宝</Text>

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

    padding: 16,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-start',

  },

  userInfo: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  avatar: {

    width: 60,

    height: 60,

    borderRadius: 30,

    marginRight: 12,

  },

  userDetails: {

    justifyContent: 'center',

  },

  username: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  userMeta: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  locationIcon: {

    width: 16,

    height: 16,

    marginRight: 4,

  },

  storeIcon: {

    width: 16,

    height: 16,

    marginLeft: 8,

    marginRight: 4,

  },

  metaText: {

    color: '#999999',

    fontSize: 12,

  },

  headerActions: {

    flexDirection: 'row',

  },

  headerAction: {

    alignItems: 'center',

    marginLeft: 16,

  },

  headerActionIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  headerActionText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  savingsCard: {

    backgroundColor: '#1A1A1A',

    margin: 16,

    borderRadius: 8,

    padding: 16,

  },

  savingsInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 12,

  },

  savingsTitle: {

    color: '#FF6600',

    fontSize: 18,

    fontWeight: 'bold',

  },

  savingsMore: {

    color: '#999999',

    fontSize: 14,

  },

  savingsDetails: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginBottom: 12,

  },

  savingsItem: {

    alignItems: 'center',

  },

  savingsItemTitle: {

    color: '#FFFFFF',

    fontSize: 12,

    marginBottom: 4,

  },

  savingsItemValue: {

    color: '#FF6600',

    fontSize: 14,

    fontWeight: 'bold',

  },

  savingsButton: {

    backgroundColor: '#FF6600',

    borderRadius: 20,

    paddingVertical: 8,

    alignItems: 'center',

    marginBottom: 8,

  },

  savingsButtonText: {

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: 'bold',

  },

  couponCenter: {

    alignItems: 'center',

  },

  couponCenterText: {

    color: '#FF6600',

    fontSize: 14,

  },

  vipCard: {

    backgroundColor: '#1A1A1A',

    margin: 16,

    borderRadius: 8,

    padding: 16,

    alignItems: 'center',

  },

  vipTitle: {

    color: '#FF6600',

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 8,

  },

  vipIcon: {

    width: 60,

    height: 60,

    marginBottom: 8,

  },

  vipDescription: {

    color: '#FFFFFF',

    fontSize: 14,

    marginBottom: 12,

  },

  vipButton: {

    backgroundColor: '#FF6600',

    borderRadius: 20,

    paddingVertical: 8,

    paddingHorizontal: 16,

  },

  vipButtonText: {

    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: 'bold',

  },

  ordersSection: {

    backgroundColor: '#1A1A1A',

    margin: 16,

    borderRadius: 8,

    padding: 16,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,

  },

  sectionTitle: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  sectionMore: {

    color: '#999999',

    fontSize: 14,

  },

  orderItems: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  orderItem: {

    alignItems: 'center',

  },

  orderIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  orderText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  quickAccessSection: {

    backgroundColor: '#1A1A1A',

    margin: 16,

    borderRadius: 8,

    padding: 16,

  },

  quickAccessItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 16,

  },

  quickAccessIcon: {

    width: 40,

    height: 40,

    marginRight: 12,

  },

  quickAccessContent: {

    flex: 1,

  },

  quickAccessTitle: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  quickAccessSubtitle: {

    color: '#999999',

    fontSize: 12,

  },

  quickAccessAction: {

    backgroundColor: '#333333',

    borderRadius: 12,

    paddingVertical: 4,

    paddingHorizontal: 8,

  },

  quickAccessActionText: {

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



export default ProfileScreen;