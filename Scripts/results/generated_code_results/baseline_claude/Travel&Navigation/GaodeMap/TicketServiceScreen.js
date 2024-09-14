import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TicketServiceScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('火车票');

  const [departureCity, setDepartureCity] = useState('威海市');

  const [arrivalCity, setArrivalCity] = useState('武汉市');

  const [date, setDate] = useState('7月19日');



  const renderHeader = () => (

    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.goBack()}>

        <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

      </TouchableOpacity>

      <Text style={styles.headerTitle}>高德·火车票</Text>

    </View>

  );



  const renderBanner = () => (

    <View style={styles.banner}>

      <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

      <View style={styles.bannerOverlay}>

        <Text style={styles.bannerTitle}>夏日周末狂欢</Text>

        <Text style={styles.bannerSubtitle}>吃喝玩乐 全城低价</Text>

        <TouchableOpacity style={styles.bannerButton}>

          <Text style={styles.bannerButtonText}>查看 &gt;</Text>

        </TouchableOpacity>

      </View>

    </View>

  );



  const renderTabs = () => (

    <View style={styles.tabs}>

      {['机票', '火车票', '汽车票'].map((tab) => (

        <TouchableOpacity

          key={tab}

          style={[styles.tab, selectedTab === tab && styles.selectedTab]}

          onPress={() => setSelectedTab(tab)}

        >

          <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderTicketForm = () => (

    <View style={styles.ticketForm}>

      <View style={styles.citySelection}>

        <TouchableOpacity style={styles.cityButton}>

          <Text style={styles.cityButtonText}>{departureCity}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.switchButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.switchIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.cityButton}>

          <Text style={styles.cityButtonText}>{arrivalCity}</Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.dateButton}>

        <Text style={styles.dateButtonText}>{date}</Text>

        <Text style={styles.dateButtonSubtext}>明天 &gt;</Text>

      </TouchableOpacity>

      <View style={styles.ticketOptions}>

        <TouchableOpacity style={styles.optionButton}>

          <Text style={styles.optionButtonText}>学生票</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>

          <Text style={styles.optionButtonText}>高铁动车</Text>

        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.searchButton}>

        <Text style={styles.searchButtonText}>查询</Text>

        <Text style={styles.searchButtonSubtext}>暑期百亿补贴</Text>

      </TouchableOpacity>

    </View>

  );



  const renderQuickLinks = () => (

    <View style={styles.quickLinks}>

      <TouchableOpacity style={styles.quickLink}>

        <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />

        <Text style={styles.quickLinkText}>订票保障</Text>

        <Text style={styles.quickLinkSubtext}>安心出行</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.quickLink}>

        <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />

        <Text style={styles.quickLinkText}>酒店预订</Text>

        <Text style={styles.quickLinkSubtext}>便宜便捷</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.quickLink}>

        <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />

        <Text style={styles.quickLinkText}>领券中心</Text>

        <Text style={styles.quickLinkSubtext}>抢5折券</Text>

      </TouchableOpacity>

    </View>

  );



  const renderPromotion = () => (

    <View style={styles.promotion}>

      <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />

      <View style={styles.promotionContent}>

        <Text style={styles.promotionTitle}>暑期火车票优惠订</Text>

        <View style={styles.promotionDetails}>

          <Text style={styles.promotionRoute}>威海市—武汉市</Text>

          <Text style={styles.promotionPrice}>¥742起</Text>

        </View>

        <Text style={styles.promotionInfo}>07.19出发，约7时11分到达</Text>

        <View style={styles.promotionDates}>

          <Text style={styles.promotionDate}>7.15</Text>

          <Text style={styles.promotionDate}>7.19</Text>

          <Text style={styles.promotionDate}>7.20</Text>

          <Text style={styles.promotionDate}>7.21</Text>

          <Text style={styles.promotionDate}>7.22</Text>

        </View>

      </View>

      <TouchableOpacity style={styles.promotionButton}>

        <Text style={styles.promotionButtonText}>立即购票</Text>

      </TouchableOpacity>

    </View>

  );



  const renderLoginPrompt = () => (

    <View style={styles.loginPrompt}>

      <Image source={require('../assets/snack-icon.png')} style={styles.loginIcon} />

      <Text style={styles.loginText}>登录12306 官方出票无忧保障</Text>

      <TouchableOpacity style={styles.loginButton}>

        <Text style={styles.loginButtonText}>登录</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      {renderHeader()}

      {renderBanner()}

      {renderTabs()}

      {renderTicketForm()}

      {renderQuickLinks()}

      {renderPromotion()}

      {renderLoginPrompt()}

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  banner: {

    height: 150,

    position: 'relative',

  },

  bannerImage: {

    width: '100%',

    height: '100%',

  },

  bannerOverlay: {

    position: 'absolute',

    top: 0,

    left: 0,

    right: 0,

    bottom: 0,

    padding: 15,

    justifyContent: 'center',

  },

  bannerTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    color: '#FFFFFF',

  },

  bannerSubtitle: {

    fontSize: 16,

    color: '#FFFFFF',

    marginTop: 5,

  },

  bannerButton: {

    position: 'absolute',

    right: 15,

    bottom: 15,

    backgroundColor: 'rgba(255, 255, 255, 0.3)',

    borderRadius: 15,

    paddingHorizontal: 10,

    paddingVertical: 5,

  },

  bannerButtonText: {

    color: '#FFFFFF',

  },

  tabs: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  tab: {

    flex: 1,

    alignItems: 'center',

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1E90FF',

  },

  tabText: {

    fontSize: 16,

  },

  selectedTabText: {

    color: '#1E90FF',

  },

  ticketForm: {

    backgroundColor: '#FFFFFF',

    padding: 15,

  },

  citySelection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 15,

  },

  cityButton: {

    flex: 1,

  },

  cityButtonText: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  switchButton: {

    padding: 5,

  },

  switchIcon: {

    width: 20,

    height: 20,

  },

  dateButton: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

    paddingBottom: 10,

    marginBottom: 15,

  },

  dateButtonText: {

    fontSize: 16,

  },

  dateButtonSubtext: {

    color: '#888888',

  },

  ticketOptions: {

    flexDirection: 'row',

    marginBottom: 15,

  },

  optionButton: {

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 15,

    paddingHorizontal: 10,

    paddingVertical: 5,

    marginRight: 10,

  },

  optionButtonText: {

    fontSize: 14,

  },

  searchButton: {

    backgroundColor: '#1E90FF',

    borderRadius: 5,

    padding: 15,

    alignItems: 'center',

  },

  searchButtonText: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  searchButtonSubtext: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  quickLinks: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  quickLink: {

    flex: 1,

    alignItems: 'center',

  },

  quickLinkIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  quickLinkText: {

    fontSize: 14,

  },

  quickLinkSubtext: {

    fontSize: 12,

    color: '#888888',

  },

  promotion: {

    backgroundColor: '#FFFFFF',

    margin: 10,

    borderRadius: 10,

    overflow: 'hidden',

  },

  promotionImage: {

    width: '100%',

    height: 120,

  },

  promotionContent: {

    padding: 15,

  },

  promotionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  promotionDetails: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 5,

  },

  promotionRoute: {

    fontSize: 16,

  },

  promotionPrice: {

    fontSize: 16,

    color: '#FF6347',

  },

  promotionInfo: {

    fontSize: 14,

    color: '#888888',

    marginBottom: 10,

  },

  promotionDates: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  promotionDate: {

    fontSize: 12,

    color: '#888888',

  },

  promotionButton: {

    backgroundColor: '#FF6347',

    padding: 10,

    alignItems: 'center',

  },

  promotionButtonText: {

    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  loginPrompt: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  loginIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  loginText: {

    flex: 1,

    fontSize: 14,

  },

  loginButton: {

    backgroundColor: '#1E90FF',

    borderRadius: 15,

    paddingHorizontal: 15,

    paddingVertical: 5,

  },

  loginButtonText: {

    color: '#FFFFFF',

  },

});



export default TicketServiceScreen;