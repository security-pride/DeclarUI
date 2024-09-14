import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';



const GroupTravelScreen = ({ navigation }) => {

  const [selectedCity, setSelectedCity] = useState('烟台');

  const [adults, setAdults] = useState(2);

  const [children, setChildren] = useState(0);



  const cities = ['烟台', '西安', '大连', '上海', '成都', '南京'];

  const promotions = ['云南', '新疆', '四川', '北京', '贵州'];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="chevron-left" size={24} color="#333" />

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <View style={styles.headerRight}>

          <Icon name="comment" size={24} color="#333" />

          <Text style={styles.notificationCount}>16</Text>

        </View>

      </View>



      <View style={styles.banner}>

        <Text style={styles.bannerTitle}>游万里山河 黄一帆月</Text>

        <Text style={styles.bannerSubtitle}>老友精选，退休酷旅行</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

      </View>



      <View style={styles.tabContainer}>

        <Text style={[styles.tabItem, styles.activeTab]}>国内跟团游</Text>

        <Text style={styles.tabItem}>国际跟团游</Text>

        <Text style={styles.tabItem}>私家团</Text>

        <Text style={styles.tabItem}>自由行</Text>

      </View>



      <View style={styles.searchContainer}>

        <Text style={styles.searchLabel}>烟台出发</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cityScroll}>

          {cities.map((city, index) => (

            <TouchableOpacity

              key={index}

              style={[styles.cityButton, selectedCity === city && styles.selectedCity]}

              onPress={() => setSelectedCity(city)}

            >

              <Text style={[styles.cityText, selectedCity === city && styles.selectedCityText]}>{city}</Text>

              {['西安', '大连', '上海'].includes(city) && <Icon name="fire" size={12} color="orange" />}

            </TouchableOpacity>

          ))}

        </ScrollView>

        <View style={styles.searchRow}>

          <Text style={styles.searchItem}>出发日期不限</Text>

          <Icon name="angle-right" size={20} color="#999" />

        </View>

        <View style={styles.searchRow}>

          <Text style={styles.searchItem}>游玩天数不限</Text>

          <Icon name="angle-right" size={20} color="#999" />

        </View>

        <View style={styles.searchRow}>

          <Text style={styles.searchItem}>{`${adults}成人${children}儿童`}</Text>

          <Text style={styles.searchSubItem}>看适合当前出行人的产品</Text>

          <Icon name="angle-right" size={20} color="#999" />

        </View>

        <TouchableOpacity style={styles.searchButton}>

          <Text style={styles.searchButtonText}>查 询</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.vipContainer}>

        <Icon name="diamond" size={16} color="#8A2BE2" />

        <Text style={styles.vipText}>钻石贵宾 · 已为您升级尊享折扣95折起</Text>

      </View>



      <View style={styles.featuresContainer}>

        <TouchableOpacity style={styles.featureItem}>

          <Icon name="fire" size={24} color="#FF6347" />

          <Text style={styles.featureText}>人气榜</Text>

          <Text style={styles.featureSubtext}>纯玩无购物</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem}>

          <Icon name="line-chart" size={24} color="#4169E1" />

          <Text style={styles.featureText}>度假直播</Text>

          <Text style={styles.featureSubtext}>热门游玩攻略</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.featureItem}>

          <Icon name="crown" size={24} color="#FFD700" />

          <Text style={styles.featureText}>会员专享价</Text>

          <Text style={styles.featureSubtext}>退无忧</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.promotionContainer}>

        <View style={styles.promotionHeader}>

          <Text style={styles.promotionTitle}>暑期大促 · 精选</Text>

          <Text style={styles.promotionSubtitle}>限时优惠，促销进行时</Text>

          <TouchableOpacity style={styles.promotionMore}>

            <Text style={styles.promotionMoreText}>查看更多</Text>

            <Icon name="angle-right" size={16} color="#666" />

          </TouchableOpacity>

        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionScroll}>

          {promotions.map((promo, index) => (

            <TouchableOpacity key={index} style={styles.promotionItem}>

              <Text style={styles.promotionItemText}>{promo}</Text>

            </TouchableOpacity>

          ))}

        </ScrollView>

        <View style={styles.promotionImageContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />

          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />

        </View>

      </View>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="home" size={24} color="#1E90FF" />

          <Text style={styles.bottomNavText}>跟团首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="globe" size={24} color="#999" />

          <Text style={styles.bottomNavText}>全部目的地</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="heart" size={24} color="#999" />

          <Text style={styles.bottomNavText}>我的收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="history" size={24} color="#999" />

          <Text style={styles.bottomNavText}>浏览历史</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="file-text" size={24} color="#999" />

          <Text style={styles.bottomNavText}>我的订单</Text>

        </TouchableOpacity>

      </View>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFF',

  },

  logo: {

    width: 120,

    height: 30,

    resizeMode: 'contain',

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  notificationCount: {

    backgroundColor: 'red',

    color: 'white',

    borderRadius: 10,

    paddingHorizontal: 5,

    fontSize: 12,

    marginLeft: -10,

  },

  banner: {

    backgroundColor: '#1E90FF',

    padding: 20,

  },

  bannerTitle: {

    color: 'white',

    fontSize: 24,

    fontWeight: 'bold',

  },

  bannerSubtitle: {

    color: 'white',

    fontSize: 16,

  },

  bannerImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

    borderRadius: 10,

    marginTop: 10,

  },

  tabContainer: {

    flexDirection: 'row',

    backgroundColor: 'white',

    paddingVertical: 10,

  },

  tabItem: {

    flex: 1,

    textAlign: 'center',

    fontSize: 14,

    color: '#666',

  },

  activeTab: {

    color: '#1E90FF',

    fontWeight: 'bold',

  },

  searchContainer: {

    backgroundColor: 'white',

    padding: 15,

    margin: 10,

    borderRadius: 10,

  },

  searchLabel: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  cityScroll: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  cityButton: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    marginRight: 10,

    backgroundColor: '#F0F0F0',

    flexDirection: 'row',

    alignItems: 'center',

  },

  selectedCity: {

    backgroundColor: '#1E90FF',

  },

  cityText: {

    fontSize: 14,

    color: '#333',

  },

  selectedCityText: {

    color: 'white',

  },

  searchRow: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#EEE',

  },

  searchItem: {

    fontSize: 14,

    color: '#333',

  },

  searchSubItem: {

    fontSize: 12,

    color: '#999',

  },

  searchButton: {

    backgroundColor: '#FFA500',

    borderRadius: 5,

    paddingVertical: 10,

    marginTop: 15,

  },

  searchButtonText: {

    color: 'white',

    textAlign: 'center',

    fontSize: 16,

    fontWeight: 'bold',

  },

  vipContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0E68C',

    padding: 10,

    marginHorizontal: 10,

    borderRadius: 5,

  },

  vipText: {

    marginLeft: 10,

    fontSize: 12,

    color: '#8A2BE2',

  },

  featuresContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: 'white',

    padding: 15,

    marginTop: 10,

  },

  featureItem: {

    alignItems: 'center',

  },

  featureText: {

    fontSize: 14,

    color: '#333',

    marginTop: 5,

  },

  featureSubtext: {

    fontSize: 12,

    color: '#999',

  },

  promotionContainer: {

    backgroundColor: 'white',

    padding: 15,

    marginTop: 10,

  },

  promotionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  promotionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#333',

  },

  promotionSubtitle: {

    fontSize: 12,

    color: '#999',

  },

  promotionMore: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  promotionMoreText: {

    fontSize: 12,

    color: '#666',

    marginRight: 5,

  },

  promotionScroll: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  promotionItem: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    marginRight: 10,

    backgroundColor: '#F0F0F0',

  },

  promotionItemText: {

    fontSize: 14,

    color: '#333',

  },

  promotionImageContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  promotionImage: {

    width: '48%',

    height: 100,

    resizeMode: 'cover',

    borderRadius: 10,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: 'white',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#EEE',

  },

  bottomNavItem: {

    alignItems: 'center',

  },

  bottomNavText: {

    fontSize: 12,

    color: '#999',

    marginTop: 5,

  },

});



export default GroupTravelScreen;