import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HistoryScreen = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const purchaseHistory = [
{
id: '1',
title: 'Pack of 5 | Ottogi Jin Ramen Noodle (Mild) 120g (Pack of 5)',
price: 'GBP 14.99',
date: '2022年10月8日',
status: '已送达',
action: '购买相似物品',
},
{
id: '2',
title: 'Knife Sharpening Steel Rod Sharpener Honing Stick chef tool high quality',
price: 'GBP 3.99',
date: '2022年1月13日',
status: '已发货',
action: '再次购买',
},
{
id: '3',
title: 'Large Lightweight Wheeled Shopping Trolley Push Cart Luggage Bag with...',
price: 'GBP 9.16',
date: '2021年11月20日',
status: '已送达',
action: '购买相似物品',
},
];
const renderItem = ({ item }) => (
<View style={styles.itemContainer}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.productImage}
/>
<View style={styles.itemDetails}>
<Text style={styles.itemTitle}>{item.title}</Text>
<Text style={styles.itemPrice}>{item.price}</Text>
<Text style={styles.itemDate}>{item.date}</Text>
<Text style={styles.itemStatus}>{item.status}</Text>
<TouchableOpacity
style={styles.actionButton}
onPress={() => navigation.navigate('Item')}
>
<Text style={styles.actionButtonText}>{item.action}</Text>
</TouchableOpacity>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.backIcon}
/>
</TouchableOpacity>
<Text style={styles.headerTitle}>购买记录</Text>
<TouchableOpacity>
<Image
source={require('../assets/snack-icon.png')}
style={styles.cartIcon}
/>
</TouchableOpacity>
<TouchableOpacity>
<Image
source={require('../assets/snack-icon.png')}
style={styles.menuIcon}
/>
</TouchableOpacity>
</View>
<View style={styles.searchContainer}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.searchIcon}
/>
<TextInput style={styles.searchInput} placeholder="查找" value={searchText} onChangeText={setSearchText} />
<TouchableOpacity>
<Text style={styles.narrowSearch}>缩小搜索范围</Text>
</TouchableOpacity>
</View>
<FlatList
data={purchaseHistory}
renderItem={renderItem}
keyExtractor={(item) => item.id}
/>
<View style={styles.bottomNav}>
<TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.navIcon}
/>
<Text style={styles.navText}>主页</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.navIcon}
/>
<Text style={styles.navText}>我的 eBay</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.navIcon}
/>
<Text style={styles.navText}>搜索</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.navIcon}
/>
<Text style={styles.navText}>通知</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.navItem}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.navIcon}
/>
<Text style={styles.navText}>出售物品</Text>
</TouchableOpacity>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
flex: 1,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
cartIcon: {
width: 24,
height: 24,
marginHorizontal: 10,
},
menuIcon: {
width: 24,
height: 24,
},
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: '#e0e0e0',
borderRadius: 5,
paddingHorizontal: 10,
},
narrowSearch: {
marginLeft: 10,
color: '#0000FF',
},
itemContainer: {
flexDirection: 'row',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
productImage: {
width: 80,
height: 80,
marginRight: 10,
},
itemDetails: {
flex: 1,
},
itemTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
itemPrice: {
fontSize: 14,
color: '#888',
marginBottom: 5,
},
itemDate: {
fontSize: 12,
color: '#888',
marginBottom: 5,
},
itemStatus: {
fontSize: 12,
color: '#0000FF',
marginBottom: 5,
},
actionButton: {
backgroundColor: '#FFA500',
padding: 5,
borderRadius: 5,
alignSelf: 'flex-start',
},
actionButtonText: {
color: '#fff',
fontSize: 12,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
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
export default HistoryScreen;