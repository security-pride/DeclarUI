import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const JewelryCategory = () => {
const navigation = useNavigation();
const [selectedFilter, setSelectedFilter] = useState('爱藏评级');
const navigateToCategories = () => {
navigation.navigate('Categories');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToCategories}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>钱币 陶瓷紫砂 文玩杂项</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.categoryTitle}>
    <Text style={styles.titleText}>钱币宝藏 依控漏</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.mascotIcon} />
  </View>

  <View style={styles.guaranteeBar}>
    <Text style={styles.guaranteeText}>真品保障 质量问题包退</Text>
  </View>

  <TouchableOpacity style={styles.promotionBar}>
    <Text style={styles.promotionText}>新品凹历 市价3折抢!</Text>
    <Text style={styles.arrowIcon}>›</Text>
  </TouchableOpacity>

  <View style={styles.coinGrid}>
    <CoinItem faceValue="20元" discount="8折起" price="¥65.88起" image={require('../assets/snack-icon.png')} />
    <CoinItem faceValue="10元" discount="7折起" price="¥25起" image={require('../assets/snack-icon.png')} />
    <CoinItem faceValue="3元" discount="8折起" price="¥188起" image={require('../assets/snack-icon.png')} />
    <CoinItem faceValue="5元" discount="4" price="¥10起" image={require('../assets/snack-icon.png')} />
  </View>

  <ImageBackground source={require('../assets/snack-icon.png')} style={styles.banner}>
    <Text style={styles.bannerText}>热门纪念币市场价75折起</Text>
    <Text style={styles.bannerSubtext}>快来捡漏！冲！</Text>
  </ImageBackground>

  <View style={styles.popularityRanking}>
    <Text style={styles.rankingTitle}>热度周榜</Text>
    <TouchableOpacity>
      <Text style={styles.viewAllText}>完整榜单 ›</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.topCoins}>
    <TopCoinItem rank="TOP.1" name="清 康熙通宝" price="¥260" change="+13.0%" image={require('../assets/snack-icon.png')} />
    <TopCoinItem rank="TOP.2" name="清 咸丰通宝、重" price="¥549" change="-10.1%" image={require('../assets/snack-icon.png')} />
    <TopCoinItem rank="TOP.3" name="清 乾隆通宝" price="¥318" change="+6.0%" image={require('../assets/snack-icon.png')} />
  </View>

  <View style={styles.filterBar}>
    {['爱藏评级', '保粹评级', '金盾评级'].map((filter) => (
      <TouchableOpacity
        key={filter}
        style={[styles.filterButton, selectedFilter === filter && styles.selectedFilter]}
        onPress={() => setSelectedFilter(filter)}
      >
        <Text style={[styles.filterText, selectedFilter === filter && styles.selectedFilterText]}>{filter}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.sortBar}>
    <TouchableOpacity style={styles.sortButton}>
      <Text style={styles.sortButtonText}>发布时间</Text>
      <Text style={styles.sortIcon}>↓</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.sortButton}>
      <Text style={styles.sortButtonText}>价格</Text>
      <Text style={styles.sortIcon}>↕</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.sortButton}>
      <Text style={styles.sortButtonText}>类型</Text>
      <Text style={styles.sortIcon}>↓</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.itemList}>
    <CoinListItem image={require('../assets/snack-icon.png')} />
    <CoinListItem image={require('../assets/snack-icon.png')} />
  </View>
</ScrollView>
);
};
const CoinItem = ({ faceValue, discount, price, image }) => (
<View style={styles.coinItem}>
<Image source={image} style={styles.coinImage} />
<Text style={styles.faceValue}>面值{faceValue}</Text>
<Text style={styles.discount}>官价{discount}</Text>
<Text style={styles.price}>{price}</Text>
</View>
);
const TopCoinItem = ({ rank, name, price, change, image }) => (
<View style={styles.topCoinItem}>
<Text style={styles.rankText}>{rank}</Text>
<Image source={image} style={styles.topCoinImage} />
<Text style={styles.coinName}>{name}</Text>
<Text style={styles.coinPrice}>{price}</Text>
<Text style={[styles.priceChange, { color: change.includes('+') ? 'green' : 'red' }]}>{change}</Text>
</View>
);
const CoinListItem = ({ image }) => (
<View style={styles.coinListItem}>
<Image source={image} style={styles.listItemImage} />
<View style={styles.listItemDetails}>
<Text style={styles.listItemName}>Coin Name</Text>
<Text style={styles.listItemGrade}>ACG 67</Text>
<Text style={styles.listItemPrice}>¥XXX</Text>
</View>
</View>
);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
backIcon: {
width: 20,
height: 20,
},
headerTitle: {
flex: 1,
fontSize: 16,
fontWeight: 'bold',
marginLeft: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
moreIcon: {
width: 20,
height: 20,
},
categoryTitle: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
titleText: {
fontSize: 20,
fontWeight: 'bold',
},
mascotIcon: {
width: 30,
height: 30,
marginLeft: 10,
},
guaranteeBar: {
backgroundColor: '#e6f7ff',
padding: 5,
},
guaranteeText: {
color: '#1890ff',
textAlign: 'center',
},
promotionBar: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
backgroundColor: '#fff',
padding: 10,
marginTop: 10,
},
promotionText: {
color: '#ff4d4f',
},
arrowIcon: {
fontSize: 18,
color: '#999',
},
coinGrid: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-between',
padding: 10,
},
coinItem: {
width: '23%',
alignItems: 'center',
marginBottom: 10,
},
coinImage: {
width: 60,
height: 60,
},
faceValue: {
fontSize: 12,
},
discount: {
fontSize: 12,
color: '#999',
},
price: {
fontSize: 14,
color: '#ff4d4f',
fontWeight: 'bold',
},
banner: {
height: 100,
justifyContent: 'center',
alignItems: 'center',
marginVertical: 10,
},
bannerText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
bannerSubtext: {
color: '#fff',
fontSize: 14,
},
popularityRanking: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
rankingTitle: {
fontSize: 16,
fontWeight: 'bold',
},
viewAllText: {
color: '#1890ff',
},
topCoins: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingBottom: 10,
},
topCoinItem: {
alignItems: 'center',
},
rankText: {
fontSize: 12,
fontWeight: 'bold',
color: '#ff4d4f',
},
topCoinImage: {
width: 80,
height: 80,
},
coinName: {
fontSize: 12,
marginTop: 5,
},
coinPrice: {
fontSize: 14,
fontWeight: 'bold',
},
priceChange: {
fontSize: 12,
},
filterBar: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
marginTop: 10,
},
filterButton: {
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
},
selectedFilter: {
backgroundColor: '#e6f7ff',
},
filterText: {
fontSize: 14,
},
selectedFilterText: {
color: '#1890ff',
},
sortBar: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#fff',
paddingVertical: 10,
marginTop: 1,
},
sortButton: {
flexDirection: 'row',
alignItems: 'center',
},
sortButtonText: {
fontSize: 14,
marginRight: 5,
},
sortIcon: {
fontSize: 12,
color: '#999',
},
itemList: {
backgroundColor: '#fff',
marginTop: 10,
},
coinListItem: {
flexDirection: 'row',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
listItemImage: {
width: 80,
height: 80,
},
listItemDetails: {
marginLeft: 10,
justifyContent: 'center',
},
listItemName: {
fontSize: 16,
fontWeight: 'bold',
},
listItemGrade: {
fontSize: 14,
color: '#999',
},
listItemPrice: {
fontSize: 16,
color: '#ff4d4f',
fontWeight: 'bold',
},
});
export default JewelryCategory;