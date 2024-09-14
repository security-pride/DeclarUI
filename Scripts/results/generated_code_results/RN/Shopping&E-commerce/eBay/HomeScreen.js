import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const handleProductPress = (productId) => {
navigation.navigate('Item', { productId });
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<TouchableOpacity onPress={() => navigation.navigate('Cart')}>
<Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchBar}>
    <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="搜索任何物品"
      value={searchText}
      onChangeText={setSearchText}
      onFocus={() => navigation.navigate('Search')}
    />
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.quickLinks}>
    <TouchableOpacity style={styles.quickLink}>
      <Text>已保存</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickLink}>
      <Text>时尚</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickLink}>
      <Text>探索（全新！）</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.promotionBanner}>
    <Text style={styles.promotionTitle}>Join the party with 15% off</Text>
    <Text style={styles.promotionSubtitle}>
      Celebrate eBay UK with big deals on brands from selected sellers.
    </Text>
    <TouchableOpacity style={styles.promoButton}>
      <Text style={styles.promoButtonText}>Use code SIZZLE15</Text>
    </TouchableOpacity>
    <Text style={styles.promotionTerms}>
      Ends 21 July. Min spend £9.99. Max £75 off. T&Cs.
    </Text>
  </View>

  <View style={styles.recentlyViewed}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>您最近浏览的物品</Text>
      <TouchableOpacity>
        <Text style={styles.viewAllLink}>浏览全部</Text>
      </TouchableOpacity>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.productCard} onPress={() => handleProductPress('1')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
        </TouchableOpacity>
        <Text style={styles.productTitle}>Ottogi Jin Ramen Mild Noodles (Pack of 20)</Text>
        <Text style={styles.productPrice}>GBP 22.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.productCard} onPress={() => handleProductPress('2')}>
        <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
        </TouchableOpacity>
        <Text style={styles.productTitle}>Spiderman Push Pop for it Bubble Fidget T...</Text>
        <Text style={styles.productPrice}>GBP 4.10</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>主页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>我的 eBay</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>搜索</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>通知</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>出售物品</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f8f8',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
logo: {
width: 100,
height: 40,
resizeMode: 'contain',
},
cartIcon: {
width: 24,
height: 24,
},
searchBar: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'white',
borderRadius: 20,
margin: 10,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
},
cameraIcon: {
width: 20,
height: 20,
marginLeft: 10,
},
quickLinks: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
},
quickLink: {
backgroundColor: 'white',
padding: 10,
borderRadius: 20,
},
promotionBanner: {
backgroundColor: '#ffc300',
padding: 20,
margin: 10,
borderRadius: 10,
},
promotionTitle: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
promotionSubtitle: {
fontSize: 16,
marginBottom: 10,
},
promoButton: {
backgroundColor: '#333',
padding: 10,
borderRadius: 5,
alignSelf: 'flex-start',
marginBottom: 10,
},
promoButtonText: {
color: 'white',
fontWeight: 'bold',
},
promotionTerms: {
fontSize: 12,
},
recentlyViewed: {
margin: 10,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
viewAllLink: {
color: 'blue',
},
productCard: {
backgroundColor: 'white',
borderRadius: 10,
padding: 10,
marginRight: 10,
width: 150,
},
productImage: {
width: 130,
height: 130,
borderRadius: 5,
},
favoriteButton: {
position: 'absolute',
right: 15,
top: 15,
},
heartIcon: {
width: 24,
height: 24,
},
productTitle: {
marginTop: 5,
fontSize: 14,
},
productPrice: {
marginTop: 5,
fontWeight: 'bold',
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
export default HomeScreen;