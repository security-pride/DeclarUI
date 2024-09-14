import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const navigateToTravel = () => {
navigation.navigate('Travel');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} placeholder="烟台百纳瑞汀酒店（第一海水浴..." value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity style={styles.searchButton}>
<Text style={styles.searchButtonText}>搜索</Text>
</TouchableOpacity>
</View>
<TouchableOpacity style={styles.mapButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Text>旅游地图</Text>
</TouchableOpacity>
</View>
  <View style={styles.locationTags}>
    <TouchableOpacity style={styles.tag}><Text>烟台</Text></TouchableOpacity>
    <TouchableOpacity style={styles.tag}><Text>威海</Text></TouchableOpacity>
    <TouchableOpacity style={styles.tag}><Text>蓬莱阁</Text></TouchableOpacity>
    <TouchableOpacity style={styles.tag}><Text>长岛</Text></TouchableOpacity>
    <TouchableOpacity style={styles.tag}><Text>武汉</Text></TouchableOpacity>
    <TouchableOpacity style={styles.tag}><Text>直播</Text></TouchableOpacity>
    <TouchableOpacity style={styles.tag}><Text>养生</Text></TouchableOpacity>
  </View>

  <View style={styles.categories}>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>酒店</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>机票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>火车票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem} onPress={navigateToTravel}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>旅游</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
      <Text>攻略/景点</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.subCategories}>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.subCategoryIcon} />
      <Text>民宿/客栈</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.subCategoryIcon} />
      <Text>机票+酒店</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.subCategoryIcon} />
      <Text>汽车/船票</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.subCategoryIcon} />
      <Text>门票/玩乐</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subCategoryItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.subCategoryIcon} />
      <Text>美食/购物</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.specialOffers}>
    <TouchableOpacity style={styles.offerItem}>
      <Text style={styles.offerTitle}>特价专区</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.offerItem}>
      <Text style={styles.offerTitle}>直播团购</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.offerItem}>
      <Text style={styles.offerTitle}>口碑榜</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.offerItem}>
      <Text style={styles.offerTitle}>旅行热点</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
    </TouchableOpacity>
  </View>

  <View style={styles.promotionBanner}>
    <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
    <Text style={styles.promotionText}>年度口碑榜酒店 惊喜0元住</Text>
  </View>

  <View style={styles.currentTrip}>
    <Text style={styles.sectionTitle}>您有一段旅程</Text>
    <TouchableOpacity style={styles.moreButton}>
      <Text style={styles.moreButtonText}>更多 ></Text>
    </TouchableOpacity>
    <View style={styles.tripDetails}>
      <Text style={styles.hotelName}>烟台百纳瑞汀酒店（第一海水浴场火车站店）</Text>
      <Text style={styles.tripDates}>7月17日入住 · 3晚 · 7月20日离店</Text>
      <Text style={styles.roomType}>瑞雅海景大床房 1间</Text>
      <TouchableOpacity style={styles.mapButton}>
        <Text style={styles.mapButtonText}>地图·周边 ></Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>社区</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>行程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text>我的</Text>
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
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#1e90ff',
},
searchBar: {
flex: 1,
flexDirection: 'row',
backgroundColor: 'white',
borderRadius: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
paddingHorizontal: 10,
},
searchButton: {
padding: 10,
backgroundColor: '#1e90ff',
borderTopRightRadius: 20,
borderBottomRightRadius: 20,
},
searchButtonText: {
color: 'white',
},
mapButton: {
flexDirection: 'row',
alignItems: 'center',
},
icon: {
width: 20,
height: 20,
marginRight: 5,
},
locationTags: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 10,
},
tag: {
backgroundColor: 'white',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
marginRight: 10,
marginBottom: 10,
},
categories: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: 'white',
},
categoryItem: {
alignItems: 'center',
},
categoryIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
subCategories: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: 'white',
marginTop: 10,
},
subCategoryItem: {
alignItems: 'center',
},
subCategoryIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
specialOffers: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 10,
marginTop: 10,
},
offerItem: {
width: '48%',
aspectRatio: 16 / 9,
marginBottom: 10,
borderRadius: 10,
overflow: 'hidden',
},
offerTitle: {
position: 'absolute',
top: 10,
left: 10,
color: 'white',
fontWeight: 'bold',
zIndex: 1,
},
offerImage: {
width: '100%',
height: '100%',
},
promotionBanner: {
margin: 10,
borderRadius: 10,
overflow: 'hidden',
},
promotionImage: {
width: '100%',
height: 100,
},
promotionText: {
position: 'absolute',
bottom: 10,
left: 10,
color: 'white',
fontWeight: 'bold',
},
currentTrip: {
margin: 10,
padding: 10,
backgroundColor: 'white',
borderRadius: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
moreButton: {
position: 'absolute',
top: 10,
right: 10,
},
moreButtonText: {
color: '#1e90ff',
},
tripDetails: {
marginTop: 10,
},
hotelName: {
fontWeight: 'bold',
marginBottom: 5,
},
tripDates: {
color: 'gray',
marginBottom: 5,
},
roomType: {
marginBottom: 5,
},
mapButton: {
alignSelf: 'flex-start',
backgroundColor: '#f0f0f0',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
},
mapButtonText: {
color: '#1e90ff',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
backgroundColor: 'white',
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
});
export default Home;