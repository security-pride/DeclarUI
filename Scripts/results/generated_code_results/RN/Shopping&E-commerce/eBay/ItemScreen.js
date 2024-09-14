import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ItemScreen = () => {
const navigation = useNavigation();
const [isFavorite, setIsFavorite] = useState(false);
const toggleFavorite = () => {
setIsFavorite(!isFavorite);
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>物品</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.shareIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <View style={styles.imageContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
    <Text style={styles.imageCounter}>1/1</Text>
    <Text style={styles.inCarLabel}>车内</Text>
  </View>

  <View style={styles.productInfo}>
    <Text style={styles.productTitle}>Ottogi Jin Ramen Mild Noodles (Pack of 20)</Text>
    <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
      <Text style={styles.favoriteCount}>65</Text>
      <Image
        source={require('../assets/snack-icon.png')}
        style={[styles.heartIcon, isFavorite && styles.heartIconFilled]}
      />
    </TouchableOpacity>
  </View>

  <Text style={styles.price}>每件 £22.99</Text>

  <View style={styles.sellerInfo}>
    <Image source={require('../assets/snack-icon.png')} style={styles.sellerLogo} />
    <View>
      <Text style={styles.sellerName}>Wa Na Hong Oriental Supermarket (25024)</Text>
      <Text style={styles.sellerRating}>99.3% 好评率</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.chatIcon} />
    </TouchableOpacity>
  </View>

  <Text style={styles.shippingInfo}>Free 3 day postage</Text>
  <Text style={styles.deliveryEstimate}>预计在7月19日，星期五至7月20日，星期六之间送达</Text>

  <Text style={styles.productDetails}>
    KOREAN STYLE INSTANT NOODLE!{'\n'}
    NET WT: 120g{'\n'}
    www.WaNaHong.co.uk{'\n'}
    Packing: 120g x 20
  </Text>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
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
shareIcon: {
width: 24,
height: 24,
marginHorizontal: 10,
},
cartIcon: {
width: 24,
height: 24,
marginHorizontal: 10,
},
moreIcon: {
width: 24,
height: 24,
},
imageContainer: {
position: 'relative',
},
productImage: {
width: '100%',
height: 300,
resizeMode: 'contain',
},
imageCounter: {
position: 'absolute',
top: 10,
right: 10,
backgroundColor: 'rgba(0,0,0,0.5)',
color: 'white',
padding: 5,
borderRadius: 10,
},
inCarLabel: {
position: 'absolute',
top: 10,
left: 10,
backgroundColor: 'red',
color: 'white',
padding: 5,
borderRadius: 5,
},
productInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
productTitle: {
fontSize: 18,
fontWeight: 'bold',
flex: 1,
},
favoriteButton: {
flexDirection: 'row',
alignItems: 'center',
},
favoriteCount: {
marginRight: 5,
},
heartIcon: {
width: 24,
height: 24,
},
heartIconFilled: {
tintColor: 'red',
},
price: {
fontSize: 24,
fontWeight: 'bold',
padding: 10,
},
sellerInfo: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
sellerLogo: {
width: 40,
height: 40,
marginRight: 10,
},
sellerName: {
fontSize: 16,
fontWeight: 'bold',
},
sellerRating: {
fontSize: 14,
color: 'green',
},
chatButton: {
marginLeft: 'auto',
},
chatIcon: {
width: 24,
height: 24,
},
shippingInfo: {
fontSize: 16,
color: 'green',
padding: 10,
},
deliveryEstimate: {
fontSize: 14,
color: 'gray',
paddingHorizontal: 10,
},
productDetails: {
fontSize: 14,
padding: 10,
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
export default ItemScreen;