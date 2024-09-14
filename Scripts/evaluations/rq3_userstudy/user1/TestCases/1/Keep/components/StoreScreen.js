import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const StoreScreen = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const categories = [
{ id: '1', name: '运动奖品', icon: '../assets/snack-icon.png' },
{ id: '2', name: '全身燃脂', icon: '../assets/snack-icon.png' },
{ id: '3', name: '身体数据', icon: '../assets/snack-icon.png' },
{ id: '4', name: '运动装备', icon: '../assets/snack-icon.png' },
{ id: '5', name: '家用智能', icon: '../assets/snack-icon.png' },
{ id: '6', name: 'Keep周边', icon: '../assets/snack-icon.png' },
{ id: '7', name: '健康食品', icon: '../assets/snack-icon.png' },
{ id: '8', name: '女子服饰', icon: '../assets/snack-icon.png' },
{ id: '9', name: '男子服饰', icon: '../assets/snack-icon.png' },
{ id: '10', name: '全部分类', icon: '../assets/snack-icon.png' },
];
const newUserGifts = [
{ id: '1', name: '智能手表', price: 259, originalPrice: 289, tag: '必买精选' },
{ id: '2', name: '智能体脂秤', price: 82, originalPrice: 109, tag: '热销爆款' },
{ id: '3', name: '瑜伽垫', price: 59, originalPrice: 89, tag: '直降 ¥30' },
{ id: '4', name: '跳绳', price: 13, originalPrice: 29, tag: '60 天低价' },
];
const renderCategory = ({ item }) => (
<TouchableOpacity style={styles.categoryItem}>
<Image source={{ uri: item.icon }} style={styles.categoryIcon} />
<Text style={styles.categoryName}>{item.name}</Text>
</TouchableOpacity>
);
const renderNewUserGift = ({ item }) => (
<View style={styles.giftItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.giftImage} />
<Text style={styles.giftPrice}>¥{item.price}</Text>
<Text style={styles.giftOriginalPrice}>¥{item.originalPrice}</Text>
<Text style={styles.giftTag}>{item.tag}</Text>
</View>
);
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TextInput style={styles.searchBar} placeholder="瑜伽服装" value={searchQuery} onChangeText={setSearchQuery} />
<TouchableOpacity style={styles.cartButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />
</TouchableOpacity>
</View>
  <View style={styles.tabContainer}>
    <TouchableOpacity style={[styles.tab, styles.activeTab]}>
      <Text style={[styles.tabText, styles.activeTabText]}>全部</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tab}>
      <Text style={styles.tabText}>运动必备</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.newUserGifts}>
    <Text style={styles.sectionTitle}>新人首单礼</Text>
    <FlatList
      data={newUserGifts}
      renderItem={renderNewUserGift}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>

  <FlatList
    data={categories}
    renderItem={renderCategory}
    keyExtractor={(item) => item.id}
    numColumns={5}
    style={styles.categoriesList}
  />

  <View style={styles.promotionBanner}>
    <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>课程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Sports')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>商城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
searchBar: {
flex: 1,
height: 40,
backgroundColor: '#f0f0f0',
borderRadius: 20,
paddingHorizontal: 15,
marginRight: 10,
},
cartButton: {
padding: 5,
},
cartIcon: {
width: 24,
height: 24,
},
tabContainer: {
flexDirection: 'row',
backgroundColor: '#fff',
paddingVertical: 10,
},
tab: {
flex: 1,
alignItems: 'center',
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#000',
},
tabText: {
fontSize: 16,
},
activeTabText: {
fontWeight: 'bold',
},
newUserGifts: {
backgroundColor: '#fff',
padding: 10,
marginTop: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
giftItem: {
width: 120,
marginRight: 10,
},
giftImage: {
width: 120,
height: 120,
borderRadius: 10,
},
giftPrice: {
fontSize: 16,
fontWeight: 'bold',
},
giftOriginalPrice: {
fontSize: 14,
color: '#999',
textDecorationLine: 'line-through',
},
giftTag: {
fontSize: 12,
color: '#ff6b6b',
marginTop: 5,
},
categoriesList: {
backgroundColor: '#fff',
paddingVertical: 10,
marginTop: 10,
},
categoryItem: {
width: '20%',
alignItems: 'center',
marginBottom: 15,
},
categoryIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
categoryName: {
fontSize: 12,
textAlign: 'center',
},
promotionBanner: {
marginTop: 10,
},
promotionImage: {
width: '100%',
height: 150,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
backgroundColor: '#fff',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
fontSize: 12,
marginTop: 5,
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#000',
},
activeNavText: {
color: '#000',
},
});
export default StoreScreen;