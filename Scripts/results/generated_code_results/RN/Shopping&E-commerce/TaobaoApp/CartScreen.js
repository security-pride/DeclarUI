import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
const CartScreen = ({ navigation }) => {
const [cartItems, setCartItems] = useState([
{
store: '淘宝马克思主义MKSZY',
discount: '每300减30,可跨店',
product: {
name: 'MKSZY 复古水洗做旧短袖T恤',
image: '../assets/snack-icon.png',
price: '¥298',
details: 'EVA绫波丽[现货秒发];S',
promotions: ['每300减30', '3期免息', '库存紧张'],
quantity: 1
}
},
{
store: '天猫NITORI家居官方旗舰店',
product: {
name: 'NITORI圆形舒柔质感抱枕',
image: '../assets/snack-icon.png',
promotions: ['假一赔四', '极速退款', '7天无理由退换'],
action: '重选'
}
}
]);
const [recommendations, setRecommendations] = useState({
store: '淘宝MEDM',
product: {
image: '../assets/snack-icon.png',
price: '¥749',
state: '商品下架',
similarProducts: [
{ price: '¥218', image: '../assets/snack-icon.png' },
{ price: '¥128', image: '../assets/snack-icon.png' },
{ price: '更多 >', image: '../assets/snack-icon.png' }
]
}
});
const renderCartItem = ({ item }) => (
<View style={styles.cartItem}>
<Text style={styles.storeName}>{item.store}</Text>
{item.discount && <Text style={styles.discount}>{item.discount}</Text>}
<View style={styles.productInfo}>
<Image source={item.product.image} style={styles.productImage} />
<View style={styles.productDetails}>
<Text style={styles.productName}>{item.product.name}</Text>
<Text style={styles.productPrice}>{item.product.price}</Text>
{item.product.details && <Text style={styles.productDetails}>{item.product.details}</Text>}
{item.product.promotions && (
<View style={styles.promotions}>
{item.product.promotions.map((promo, index) => (
<Text key={index} style={styles.promotionText}>{promo}</Text>
))}
</View>
)}
{item.product.quantity && <Text style={styles.quantity}>x{item.product.quantity}</Text>}
</View>
</View>
{item.product.action && (
<TouchableOpacity style={styles.actionButton}>
<Text style={styles.actionButtonText}>{item.product.action}</Text>
</TouchableOpacity>
)}
</View>
);
const renderRecommendation = () => (
<View style={styles.recommendationContainer}>
<Text style={styles.recommendationTitle}>为你推荐更多同款:</Text>
<View style={styles.recommendedProducts}>
{recommendations.product.similarProducts.map((product, index) => (
<View key={index} style={styles.recommendedProduct}>
<Image source={product.image} style={styles.recommendedProductImage} />
<Text style={styles.recommendedProductPrice}>{product.price}</Text>
</View>
))}
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>购物车(18)</Text>
<TouchableOpacity onPress={() => {/* Handle search /}}>
<Text style={styles.headerAction}>搜索</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => {/ Handle manage */}}>
<Text style={styles.headerAction}>管理</Text>
</TouchableOpacity>
</View>
  <View style={styles.filterContainer}>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>降价</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>常购</Text>
    </TouchableOpacity>
  </View>

  <ScrollView style={styles.scrollView}>
    <FlatList
      data={cartItems}
      renderItem={renderCartItem}
      keyExtractor={(item, index) => index.toString()}
    />
    {renderRecommendation()}
  </ScrollView>

  <View style={styles.footer}>
    <Text style={styles.totalAmount}>合计: ￥0</Text>
    <TouchableOpacity style={styles.checkoutButton}>
      <Text style={styles.checkoutButtonText}>结算</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNavBar}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>逛逛</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Message')}>
      <Text>消息</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.activeNavItem}>购物车</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Text>我的淘宝</Text>
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
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
headerAction: {
fontSize: 14,
color: '#666',
},
filterContainer: {
flexDirection: 'row',
padding: 10,
backgroundColor: '#fff',
marginBottom: 10,
},
filterButton: {
marginRight: 10,
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
backgroundColor: '#f0f0f0',
},
filterButtonText: {
fontSize: 12,
color: '#333',
},
scrollView: {
flex: 1,
},
cartItem: {
backgroundColor: '#fff',
marginBottom: 10,
padding: 10,
},
storeName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
discount: {
fontSize: 12,
color: '#ff6600',
marginBottom: 5,
},
productInfo: {
flexDirection: 'row',
},
productImage: {
width: 80,
height: 80,
marginRight: 10,
},
productDetails: {
flex: 1,
},
productName: {
fontSize: 14,
marginBottom: 5,
},
productPrice: {
fontSize: 16,
color: '#ff6600',
fontWeight: 'bold',
marginBottom: 5,
},
promotions: {
flexDirection: 'row',
flexWrap: 'wrap',
},
promotionText: {
fontSize: 12,
color: '#ff6600',
marginRight: 5,
marginBottom: 2,
},
quantity: {
fontSize: 14,
color: '#666',
alignSelf: 'flex-end',
},
actionButton: {
alignSelf: 'flex-end',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
backgroundColor: '#f0f0f0',
marginTop: 5,
},
actionButtonText: {
fontSize: 12,
color: '#333',
},
recommendationContainer: {
backgroundColor: '#fff',
padding: 10,
},
recommendationTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
recommendedProducts: {
flexDirection: 'row',
justifyContent: 'space-between',
},
recommendedProduct: {
alignItems: 'center',
},
recommendedProductImage: {
width: 60,
height: 60,
marginBottom: 5,
},
recommendedProductPrice: {
fontSize: 12,
color: '#ff6600',
},
footer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
totalAmount: {
fontSize: 16,
fontWeight: 'bold',
},
checkoutButton: {
backgroundColor: '#ff6600',
paddingVertical: 8,
paddingHorizontal: 20,
borderRadius: 20,
},
checkoutButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
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
activeNavItem: {
color: '#ff6600',
},
});
export default CartScreen;