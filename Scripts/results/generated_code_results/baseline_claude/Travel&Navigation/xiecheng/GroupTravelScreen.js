import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const GroupTravelScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('国内跟团游');

  const [adults, setAdults] = useState(2);

  const [children, setChildren] = useState(0);



  const tabs = ['国内跟团游', '国际跟团游', '私家团', '自由行'];

  const destinations = ['烟台', '西安', '大连', '上海', '成都', '南京'];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Image source={require('../assets/snack-icon.png')} style={styles.logoIcon} />

        <TouchableOpacity style={styles.messageButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />

          <View style={styles.badge}>

            <Text style={styles.badgeText}>16</Text>

          </View>

        </TouchableOpacity>

      </View>



      <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />



      <View style={styles.tabContainer}>

        {tabs.map((tab, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.tab, selectedTab === tab && styles.selectedTab]}

            onPress={() => setSelectedTab(tab)}

          >

            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.searchBox}>

        <View style={styles.destinationRow}>

          <Text style={styles.destinationTitle}>烟台出发</Text>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationList}>

          {destinations.map((dest, index) => (

            <TouchableOpacity key={index} style={styles.destinationItem}>

              <Text style={[styles.destinationText, index === 0 && styles.selectedDestination]}>{dest}</Text>

              {index < 3 && <Image source={require('../assets/snack-icon.png')} style={styles.fireIcon} />}

            </TouchableOpacity>

          ))}

        </ScrollView>

        <TouchableOpacity style={styles.dateRow}>

          <Text style={styles.dateText}>出发日期不限</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.dateRow}>

          <Text style={styles.dateText}>游玩天数不限</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>

        <View style={styles.peopleRow}>

          <Text style={styles.peopleText}>{`${adults}成人 ${children}儿童`}</Text>

          <TouchableOpacity>

            <Text style={styles.editText}>看适合当前出行人的产品</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.searchButton}>

          <Text style={styles.searchButtonText}>查 询</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.promotionBox}>

        <Image source={require('../assets/snack-icon.png')} style={styles.diamondIcon} />

        <Text style={styles.promotionText}>钻石贵宾 · 已为您升级尊享折扣95折起</Text>

      </View>



      <View style={styles.quickLinksContainer}>

        <TouchableOpacity style={styles.quickLink}>

          <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />

          <Text style={styles.quickLinkText}>人气榜</Text>

          <Text style={styles.quickLinkSubtext}>纯玩无购物</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickLink}>

          <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />

          <Text style={styles.quickLinkText}>度假直播</Text>

          <Text style={styles.quickLinkSubtext}>热门游玩攻略</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.quickLink}>

          <Image source={require('../assets/snack-icon.png')} style={styles.quickLinkIcon} />

          <Text style={styles.quickLinkText}>会员专享价</Text>

          <Text style={styles.quickLinkSubtext}>退订无忧</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.promotionBanner}>

        <Text style={styles.promotionBannerTitle}>暑期大促 · 精选</Text>

        <Text style={styles.promotionBannerSubtitle}>限时优惠，促销进行时</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.promotionTags}>

          <TouchableOpacity style={styles.promotionTag}>

            <Text style={styles.promotionTagText}>精选</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.promotionTag}>

            <Text style={styles.promotionTagText}>云南</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.promotionTag}>

            <Text style={styles.promotionTagText}>新疆</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.promotionTag}>

            <Text style={styles.promotionTagText}>四川</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.promotionTag}>

            <Text style={styles.promotionTagText}>北京</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.promotionTag}>

            <Text style={styles.promotionTagText}>贵州</Text>

          </TouchableOpacity>

        </ScrollView>

        <TouchableOpacity style={styles.seeMoreButton}>

          <Text style={styles.seeMoreButtonText}>查看更多</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>跟团首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>全部目的地</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>我的收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>浏览历史</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>我的订单</Text>

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

    alignItems: 'center',

    justifyContent: 'space-between',

    padding: 10,

    backgroundColor: '#FFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  logoIcon: {

    width: 120,

    height: 30,

    resizeMode: 'contain',

  },

  messageButton: {

    position: 'relative',

  },

  messageIcon: {

    width: 24,

    height: 24,

  },

  badge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: 'red',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  badgeText: {

    color: '#FFF',

    fontSize: 12,

  },

  bannerImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  tabContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    paddingVertical: 10,

  },

  tab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 5,

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1E90FF',

  },

  tabText: {

    fontSize: 14,

    color: '#333',

  },

  selectedTabText: {

    color: '#1E90FF',

    fontWeight: 'bold',

  },

  searchBox: {

    backgroundColor: '#FFF',

    margin: 10,

    padding: 15,

    borderRadius: 8,

  },

  destinationRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  destinationTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  arrowIcon: {

    width: 16,

    height: 16,

  },

  destinationList: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  destinationItem: {

    marginRight: 15,

    flexDirection: 'row',

    alignItems: 'center',

  },

  destinationText: {

    fontSize: 14,

    color: '#333',

  },

  selectedDestination: {

    color: '#1E90FF',

  },

  fireIcon: {

    width: 16,

    height: 16,

    marginLeft: 5,

  },

  dateRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#EEE',

  },

  dateText: {

    fontSize: 14,

    color: '#333',

  },

  peopleRow: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingVertical: 10,

  },

  peopleText: {

    fontSize: 14,

    color: '#333',

  },

  editText: {

    fontSize: 12,

    color: '#1E90FF',

  },

  searchButton: {

    backgroundColor: '#FF9500',

    padding: 12,

    borderRadius: 5,

    alignItems: 'center',

    marginTop: 10,

  },

  searchButtonText: {

    color: '#FFF',

    fontSize: 16,

    fontWeight: 'bold',

  },

  promotionBox: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    margin: 10,

    padding: 10,

    borderRadius: 5,

  },

  diamondIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  promotionText: {

    fontSize: 12,

    color: '#FF9500',

  },

  quickLinksContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 15,

    marginBottom: 10,

  },

  quickLink: {

    alignItems: 'center',

  },

  quickLinkIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  quickLinkText: {

    fontSize: 14,

    color: '#333',

  },

  quickLinkSubtext: {

    fontSize: 12,

    color: '#999',

  },

  promotionBanner: {

    backgroundColor: '#FFF',

    padding: 15,

  },

  promotionBannerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  promotionBannerSubtitle: {

    fontSize: 12,

    color: '#999',

    marginBottom: 10,

  },

  promotionTags: {

    flexDirection: 'row',

    marginBottom: 10,

  },

  promotionTag: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 15,

    marginRight: 10,

  },

  promotionTagText: {

    fontSize: 12,

    color: '#333',

  },

  seeMoreButton: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'flex-end',

  },

  seeMoreButtonText: {

    fontSize: 14,

    color: '#1E90FF',

    marginRight: 5,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#EEE',

  },

  footerItem: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  footerText: {

    fontSize: 12,

    color: '#333',

  },

});



export default GroupTravelScreen;