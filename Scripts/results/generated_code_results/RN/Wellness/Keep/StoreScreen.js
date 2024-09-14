import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Store = () => {
const navigation = useNavigation();
const [searchQuery, setSearchQuery] = useState('');
const handleHomePress = () => {
navigation.navigate('Home');
};
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
const renderCategoryItem = ({ item }) => (
<TouchableOpacity style={styles.categoryItem}>
<Image source={{ uri: item.icon }} style={styles.categoryIcon} />
<Text style={styles.categoryName}>{item.name}</Text>
</TouchableOpacity>
);
const newUserGifts = [
{ id: '1', name: '智能手表', price: 259, originalPrice: 289, tag: '必买精选' },
{ id: '2', name: '智能体重秤', price: 82, originalPrice: 109, tag: '热销爆款' },
{ id: '3', name: '瑜伽垫', price: 59, originalPrice: 89, tag: '直降 ¥30' },
{ id: '4', name: '跳绳', price: 13, originalPrice: 29, tag: '60 天低价' },
];
const renderGiftItem = ({ item }) => (
<View style={styles.giftItem}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.giftImage} />
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
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.cartIcon} />
</TouchableOpacity>
</View>
  <View style={styles.tabBar}>
    <Text style={[styles.tabText, styles.activeTab]}>全部</Text>
    <Text style={styles.tabText}>运动必备</Text>
  </View>

  <View style={styles.newUserGifts}>
    <Text style={styles.sectionTitle}>新人首单礼</Text>
    <FlatList
      data={newUserGifts}
      renderItem={renderGiftItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>

  <FlatList
    data={categories}
    renderItem={renderCategoryItem}
    keyExtractor={(item) => item.id}
    numColumns={5}
    style={styles.categoriesList}
  />

  <View style={styles.bannerContainer}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bannerImage} />
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bannerImage} />
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleHomePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>课程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>商城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
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
backgroundColor: '#ffffff',
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
tabBar: {
flexDirection: 'row',
backgroundColor: '#ffffff',
paddingVertical: 10,
},
tabText: {
flex: 1,
textAlign: 'center',
fontSize: 16,
color: '#666666',
},
activeTab: {
color: '#000000',
fontWeight: 'bold',
},
newUserGifts: {
backgroundColor: '#ffffff',
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
marginTop: 5,
},
giftOriginalPrice: {
fontSize: 14,
color: '#999999',
textDecorationLine: 'line-through',
},
giftTag: {
fontSize: 12,
color: '#ff6600',
marginTop: 5,
},
categoriesList: {
backgroundColor: '#ffffff',
paddingVertical: 10,
},
categoryItem: {
flex: 1,
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
bannerContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 10,
},
bannerImage: {
width: '48%',
height: 100,
borderRadius: 10,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
backgroundColor: '#ffffff',
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
activeNavText: {
color: '#007aff',
},
});
export default Store;