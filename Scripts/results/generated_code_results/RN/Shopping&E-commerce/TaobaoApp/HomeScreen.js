import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
const HomePage = ({ navigation }) => {
const [searchQuery, setSearchQuery] = useState('team wang联名');
const categories = ['关注', '推荐', '小时达', '狂暑季', '穿搭', '居家', '数码', '……'];
const quickAccess = [
{ name: '飞猪旅行', icon: '../assets/snack-icon.png' },
{ name: '百亿补贴', icon: '../assets/snack-icon.png' },
{ name: '饿了么', icon: '../assets/snack-icon.png' },
{ name: '芭芭农场', icon: '../assets/snack-icon.png' },
{ name: '天猫国际', icon: '../assets/snack-icon.png' }
];
return (
<View style={styles.container}>
<View style={styles.header}>
<View style={styles.searchBar}>
<TextInput style={styles.searchInput} value={searchQuery} onChangeText={setSearchQuery} placeholder="搜索商品" />
<TouchableOpacity style={styles.cameraButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.searchButton}>
<Text style={styles.searchButtonText}>搜索</Text>
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryItem}>
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <View style={styles.quickAccessContainer}>
      {quickAccess.map((item, index) => (
        <TouchableOpacity key={index} style={styles.quickAccessItem}>
          <Image source={item.icon} style={styles.quickAccessIcon} />
          <Text style={styles.quickAccessText}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.liveStreamSection}>
      <Text style={styles.sectionTitle}>淘宝直播</Text>
      <Text style={styles.sectionSubtitle}>爆款抽免单</Text>
      <View style={styles.streamersContainer}>
        {['觅橘官方', '吉杰', '李宁官方'].map((streamer, index) => (
          <View key={index} style={styles.streamerItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.streamerImage} />
            <Text style={styles.streamerName}>{streamer}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.flashSaleSection}>
      <Text style={styles.sectionTitle}>淘宝秒杀</Text>
      <Text style={styles.timerText}>仅剩 22:35:11</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.flashSaleProducts}>
        {[
          { name: '小竹', price: '¥2.01' },
          { name: '不锈钢清洁球', price: '¥2.96' },
          { name: '湿厕纸', price: '¥1.42' }
        ].map((product, index) => (
          <View key={index} style={styles.flashSaleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>

    <View style={styles.featuredProductsSection}>
      <View style={styles.featuredProduct}>
        <Image source={require('../assets/snack-icon.png')} style={styles.featuredProductImage} />
        <Text style={styles.featuredProductName}>明日香EVA动漫水洗做旧</Text>
        <Text style={styles.featuredProductPrice}>¥536</Text>
        <Text style={styles.featuredProductSales}>87人付款</Text>
      </View>
      <View style={styles.featuredProduct}>
        <Image source={require('../assets/snack-icon.png')} style={styles.featuredProductImage} />
        <Text style={styles.featuredProductName}>MEDMXEVA联名</Text>
        <Text style={styles.featuredProductPrice}>¥279</Text>
        <Text style={styles.featuredProductPromotion}>每300减30</Text>
        <Text style={styles.featuredProductTag}>潮流男装 热卖好店上新</Text>
      </View>
    </View>
  </ScrollView>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navItemTextActive}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navItemText}>逛逛</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Message')}>
      <Text style={styles.navItemText}>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Cart')}>
      <Text style={styles.navItemText}>购物车</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Text style={styles.navItemText}>我的淘宝</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f8f8',
},
header: {
backgroundColor: '#ff6600',
padding: 10,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
borderRadius: 20,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
height: 40,
fontSize: 16,
},
cameraButton: {
padding: 5,
},
searchButton: {
backgroundColor: '#ff6600',
paddingHorizontal: 15,
paddingVertical: 8,
borderRadius: 15,
marginLeft: 10,
},
searchButtonText: {
color: '#fff',
fontWeight: 'bold',
},
icon: {
width: 20,
height: 20,
},
categories: {
flexDirection: 'row',
paddingVertical: 10,
backgroundColor: '#fff',
},
categoryItem: {
paddingHorizontal: 15,
},
categoryText: {
fontSize: 16,
},
quickAccessContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 15,
backgroundColor: '#fff',
marginTop: 10,
},
quickAccessItem: {
alignItems: 'center',
},
quickAccessIcon: {
width: 40,
height: 40,
marginBottom: 5,
},
quickAccessText: {
fontSize: 12,
},
liveStreamSection: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
sectionSubtitle: {
fontSize: 14,
color: '#666',
marginBottom: 10,
},
streamersContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
},
streamerItem: {
alignItems: 'center',
},
streamerImage: {
width: 60,
height: 60,
borderRadius: 30,
marginBottom: 5,
},
streamerName: {
fontSize: 12,
},
flashSaleSection: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
timerText: {
fontSize: 14,
color: '#ff6600',
marginBottom: 10,
},
flashSaleProducts: {
flexDirection: 'row',
},
flashSaleItem: {
marginRight: 15,
alignItems: 'center',
},
productImage: {
width: 80,
height: 80,
marginBottom: 5,
},
productName: {
fontSize: 14,
marginBottom: 3,
},
productPrice: {
fontSize: 16,
color: '#ff6600',
fontWeight: 'bold',
},
featuredProductsSection: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 15,
backgroundColor: '#fff',
marginTop: 10,
},
featuredProduct: {
width: '48%',
},
featuredProductImage: {
width: '100%',
height: 150,
marginBottom: 5,
},
featuredProductName: {
fontSize: 14,
marginBottom: 3,
},
featuredProductPrice: {
fontSize: 16,
color: '#ff6600',
fontWeight: 'bold',
},
featuredProductSales: {
fontSize: 12,
color: '#666',
},
featuredProductPromotion: {
fontSize: 12,
color: '#ff6600',
},
featuredProductTag: {
fontSize: 12,
color: '#666',
},
bottomNavBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#fff',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
navItem: {
alignItems: 'center',
},
navItemText: {
fontSize: 12,
color: '#666',
},
navItemTextActive: {
fontSize: 12,
color: '#ff6600',
fontWeight: 'bold',
},
});
export default HomePage;