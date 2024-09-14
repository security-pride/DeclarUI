import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const quickActions = [

    { id: '1', title: '朝朝宝', icon: 'money-bag' },

    { id: '2', title: '借钱', icon: 'loan' },

    { id: '3', title: '转账', icon: 'transfer' },

    { id: '4', title: '账户总览', icon: 'overview' },

  ];



  const services = [

    { id: '1', title: '信用卡', icon: 'credit-card' },

    { id: '2', title: '收支明细', icon: 'receipt' },

    { id: '3', title: '他行卡转入', icon: 'bank-transfer' },

    { id: '4', title: '城市服务', icon: 'city-service' },

    { id: '5', title: '热门活动', icon: 'hot-activity' },

    { id: '6', title: '养老金融', icon: 'elderly-finance' },

    { id: '7', title: 'M+会员', icon: 'm-plus' },

    { id: '8', title: '外汇购汇', icon: 'foreign-exchange' },

    { id: '9', title: '银行卡', icon: 'bank-card' },

    { id: '10', title: '全部', icon: 'more' },

  ];



  const financialProducts = [

    { id: '1', title: 'T+1到账', subtitle: '日添利1号A', rate: '2.92%', period: '7日年化', riskLevel: 'R1低风险', feature: '随时申赎' },

    { id: '2', title: '每季可赎', subtitle: '季季宝 鑫鼎日开三个月持有', rate: '3.25%', period: '成立以来年化', riskLevel: '', feature: '' },

    { id: '3', title: '锁定票息', subtitle: '定期宝 24M创利目标盈1', rate: '', period: '', riskLevel: '', feature: '' },

  ];



  const renderQuickActionItem = ({ item }) => (

    <TouchableOpacity style={styles.quickActionItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />

      <Text style={styles.actionText}>{item.title}</Text>

    </TouchableOpacity>

  );



  const renderServiceItem = ({ item }) => (

    <TouchableOpacity style={styles.serviceItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />

      <Text style={styles.serviceText}>{item.title}</Text>

    </TouchableOpacity>

  );



  const renderFinancialProduct = ({ item }) => (

    <TouchableOpacity style={styles.productItem}>

      <View style={styles.productHeader}>

        <Text style={styles.productTitle}>{item.title}</Text>

        <Text style={styles.productSubtitle}>{item.subtitle}</Text>

      </View>

      {item.rate && (

        <View style={styles.productRateContainer}>

          <Text style={styles.productRate}>{item.rate}</Text>

          <Text style={styles.productPeriod}>{item.period}</Text>

        </View>

      )}

      {item.riskLevel && (

        <View style={styles.productFeatureContainer}>

          <Text style={styles.productRiskLevel}>{item.riskLevel}</Text>

          <Text style={styles.productFeature}>{item.feature}</Text>

        </View>

      )}

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.scanIcon} />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="信用卡全家福"

            placeholderTextColor="#fff"

          />

        </View>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.headsetIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />

          <View style={styles.badge}>

            <Text style={styles.badgeText}>99</Text>

          </View>

        </TouchableOpacity>

      </View>



      <View style={styles.quickActionsContainer}>

        <FlatList

          data={quickActions}

          renderItem={renderQuickActionItem}

          keyExtractor={item => item.id}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <View style={styles.servicesContainer}>

        <FlatList

          data={services}

          renderItem={renderServiceItem}

          keyExtractor={item => item.id}

          numColumns={5}

          scrollEnabled={false}

        />

      </View>



      <View style={styles.notificationContainer}>

        <Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />

        <Text style={styles.notificationText}>小招有财: 您有一份2元现金红包待领取</Text>

      </View>



      <View style={styles.adBanner}>

        <Image source={require('../assets/snack-icon.png')} style={styles.adImage} />

        <View style={styles.adContent}>

          <Text style={styles.adTitle}>活钱理财</Text>

          <Text style={styles.adSubtitle}>错过少3天收益</Text>

          <Text style={styles.adDescription}>—>闲钱好去处 周末收益不打烊—></Text>

          <TouchableOpacity style={styles.adButton}>

            <Text style={styles.adButtonText}>点击购买</Text>

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.financialProductsContainer}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>财富精选</Text>

          <TouchableOpacity>

            <Text style={styles.moreLink}>更多</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={financialProducts}

          renderItem={renderFinancialProduct}

          keyExtractor={item => item.id}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>一周回顾</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>财富</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>生活</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FF6B6B',

    padding: 10,

  },

  scanIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    borderRadius: 20,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 36,

    color: '#fff',

  },

  headsetIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  messageIcon: {

    width: 24,

    height: 24,

  },

  badge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: '#FF0000',

    borderRadius: 10,

    minWidth: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  badgeText: {

    color: '#fff',

    fontSize: 12,

  },

  quickActionsContainer: {

    backgroundColor: '#FF6B6B',

    paddingVertical: 10,

  },

  quickActionItem: {

    alignItems: 'center',

    marginHorizontal: 15,

  },

  actionIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  actionText: {

    color: '#fff',

    fontSize: 12,

  },

  servicesContainer: {

    backgroundColor: '#fff',

    padding: 15,

  },

  serviceItem: {

    alignItems: 'center',

    width: '20%',

    marginBottom: 15,

  },

  serviceIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  serviceText: {

    fontSize: 12,

    textAlign: 'center',

  },

  notificationContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF0F0',

    padding: 10,

    marginTop: 10,

  },

  notificationIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  notificationText: {

    fontSize: 14,

    color: '#FF6B6B',

  },

  adBanner: {

    backgroundColor: '#E6F7FF',

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    marginTop: 10,

  },

  adImage: {

    width: 60,

    height: 60,

    marginRight: 15,

  },

  adContent: {

    flex: 1,

  },

  adTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  adSubtitle: {

    fontSize: 14,

    color: '#FF6B6B',

    marginBottom: 5,

  },

  adDescription: {

    fontSize: 12,

    color: '#666',

    marginBottom: 10,

  },

  adButton: {

    backgroundColor: '#FF6B6B',

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    alignSelf: 'flex-start',

  },

  adButtonText: {

    color: '#fff',

    fontSize: 12,

  },

  financialProductsContainer: {

    backgroundColor: '#fff',

    padding: 15,

    marginTop: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  moreLink: {

    color: '#666',

    fontSize: 14,

  },

  productItem: {

    width: 200,

    backgroundColor: '#FFF0F0',

    borderRadius: 10,

    padding: 15,

    marginRight: 10,

  },

  productHeader: {

    marginBottom: 10,

  },

  productTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  productSubtitle: {

    fontSize: 14,

    color: '#666',

  },

  productRateContainer: {

    marginBottom: 10,

  },

  productRate: {

    fontSize: 24,

    color: '#FF6B6B',

    fontWeight: 'bold',

  },

  productPeriod: {

    fontSize: 12,

    color: '#666',

  },

  productFeatureContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  productRiskLevel: {

    fontSize: 12,

    color: '#666',

  },

  productFeature: {

    fontSize: 12,

    color: '#FF6B6B',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#fff',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

    color: '#666',

  },

  activeTab: {

    // Add styles for active tab if needed

  },

  activeTabText: {

    color: '#FF6B6B',

  },

});



export default HomeScreen;