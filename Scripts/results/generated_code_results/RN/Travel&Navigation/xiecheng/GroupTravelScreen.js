import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const GroupTravel = () => {
const navigation = useNavigation();
const [selectedTab, setSelectedTab] = useState('国内跟团游');
const navigateToGroupTravelSearchResult = () => {
navigation.navigate('GroupTravelSearchResult');
};
const navigateToTravel = () => {
navigation.navigate('Travel');
};
return (
<ScrollView style={styles.container}>
<TouchableOpacity onPress={navigateToTravel} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
  <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />
  <Text style={styles.bannerTitle}>游万里山河 黄一帆月</Text>
  <Text style={styles.bannerSubtitle}>老友聚选，退休酷旅行</Text>

  <View style={styles.tabContainer}>
    <TouchableOpacity
      style={[styles.tab, selectedTab === '国内跟团游' && styles.selectedTab]}
      onPress={() => setSelectedTab('国内跟团游')}
    >
      <Text style={styles.tabText}>国内跟团游</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.tab, selectedTab === '国际跟团游' && styles.selectedTab]}
      onPress={() => setSelectedTab('国际跟团游')}
    >
      <Text style={styles.tabText}>国际跟团游</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.filterContainer}>
    <TouchableOpacity style={styles.filterItem}>
      <Text>烟台出发</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterItem}>
      <Text>出发日期不限</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterItem}>
      <Text>游玩天数不限</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterItem}>
      <Text>2成人 0儿童</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.smallIcon} />
    </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.searchButton} onPress={navigateToGroupTravelSearchResult}>
    <Text style={styles.searchButtonText}>查询</Text>
  </TouchableOpacity>

  <Text style={styles.sectionTitle}>钻石贵宾 · 已为您升级尊享折扣95折起</Text>

  <View style={styles.popularDestinations}>
    <TouchableOpacity style={styles.destinationButton}>
      <Text>烟台</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.destinationButton}>
      <Text>西安</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.flameIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.destinationButton}>
      <Text>大连</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.flameIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.destinationButton}>
      <Text>上海</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.flameIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.destinationButton}>
      <Text>成都</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.destinationButton}>
      <Text>南京</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.featuredSection}>
    <Text style={styles.featuredTitle}>暑期大促·精选</Text>
    <Text style={styles.featuredSubtitle}>限时优惠，促销进行时</Text>
    <View style={styles.featuredButtons}>
      <TouchableOpacity style={styles.featuredButton}>
        <Text>精选</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featuredButton}>
        <Text>云南</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featuredButton}>
        <Text>新疆</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featuredButton}>
        <Text>四川</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featuredButton}>
        <Text>北京</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.featuredButton}>
        <Text>贵州</Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.viewMoreButton}>
      <Text style={styles.viewMoreText}>查看更多</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.promotionSection}>
    <TouchableOpacity style={styles.promotionItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
      <Text style={styles.promotionText}>人气榜</Text>
      <Text style={styles.promotionSubtext}>纯玩无购物</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.promotionItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
      <Text style={styles.promotionText}>度假直播</Text>
      <Text style={styles.promotionSubtext}>热门游玩攻略</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.promotionItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
      <Text style={styles.promotionText}>会员专享价</Text>
      <Text style={styles.promotionSubtext}>退订无忧</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>跟团首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>全部目的地</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的收藏</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>浏览历史</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的订单</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
backButton: {
position: 'absolute',
top: 40,
left: 20,
zIndex: 1,
},
icon: {
width: 24,
height: 24,
},
bannerImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
bannerTitle: {
position: 'absolute',
top: 100,
left: 20,
fontSize: 24,
fontWeight: 'bold',
color: 'white',
},
bannerSubtitle: {
position: 'absolute',
top: 130,
left: 20,
fontSize: 16,
color: 'white',
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
paddingVertical: 10,
},
tab: {
paddingHorizontal: 20,
paddingVertical: 10,
},
selectedTab: {
borderBottomWidth: 2,
borderBottomColor: '#1e90ff',
},
tabText: {
fontSize: 16,
},
filterContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
paddingVertical: 10,
marginTop: 10,
},
filterItem: {
flexDirection: 'row',
alignItems: 'center',
},
smallIcon: {
width: 16,
height: 16,
marginLeft: 5,
},
searchButton: {
backgroundColor: '#ff9500',
padding: 15,
margin: 10,
borderRadius: 5,
alignItems: 'center',
},
searchButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
sectionTitle: {
fontSize: 16,
fontWeight: 'bold',
padding: 10,
},
popularDestinations: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
padding: 10,
},
destinationButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'white',
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius: 20,
marginBottom: 10,
},
flameIcon: {
width: 16,
height: 16,
marginLeft: 5,
},
featuredSection: {
backgroundColor: 'white',
padding: 15,
marginTop: 10,
},
featuredTitle: {
fontSize: 18,
fontWeight: 'bold',
},
featuredSubtitle: {
fontSize: 14,
color: 'gray',
marginBottom: 10,
},
featuredButtons: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
},
featuredButton: {
backgroundColor: '#f0f0f0',
paddingHorizontal: 15,
paddingVertical: 10,
borderRadius: 20,
marginBottom: 10,
},
viewMoreButton: {
alignItems: 'center',
marginTop: 10,
},
viewMoreText: {
color: '#1e90ff',
},
promotionSection: {
flexDirection: 'row',
justifyContent: 'space-around',
marginTop: 10,
},
promotionItem: {
alignItems: 'center',
},
promotionImage: {
width: 60,
height: 60,
borderRadius: 30,
marginBottom: 5,
},
promotionText: {
fontWeight: 'bold',
},
promotionSubtext: {
fontSize: 12,
color: 'gray',
},
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: 'white',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default GroupTravel;