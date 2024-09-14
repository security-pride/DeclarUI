import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.cartTitle}>购物车(18)</Text>
        <TouchableOpacity>
          <Text style={styles.action}>管理</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.action}>搜索</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.filterSection}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>降价</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>常购</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cartItem}>
        <Text style={styles.storeName}>淘宝 马克思主义 MKSZY</Text>
        <Text style={styles.promotion}>每300减30,可跨店</Text>
        <View style={styles.productDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>MKSZY 复古水洗做旧短袖T恤</Text>
            <Text style={styles.productDetail}>EVA绫波丽[现货秒发];S</Text>
            <Text style={styles.priceInfo}>每300减30, 3期免息, 库存紧张</Text>
            <Text style={styles.price}>¥298</Text>
            <Text style={styles.saleInfo}>即将售罄,34人抢购中</Text>
          </View>
        </View>
      </View>

      <View style={styles.cartItem}>
        <Text style={styles.storeName}>天猫 NITORI 家居官方旗舰店</Text>
        <View style={styles.productDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productTitle}>NITORI圆形舒柔质感抱枕</Text>
            <Text style={styles.promotion}>假一赔四, 极速退款, 7天无理由退换</Text>
            <TouchableOpacity style={styles.reselectButton}>
              <Text style={styles.reselectText}>重选</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.recommendationTitle}>为你推荐更多同款:</Text>
        <View style={styles.recommendedProductContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.recommendedProduct} />
          <Text style={styles.recommendedPrice}>¥218</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.recommendedProduct} />
          <Text style={styles.recommendedPrice}>¥128</Text>
          <View style={styles.moreButton}>
            <Text style={styles.moreText}>更多 ></Text>
          </View>
        </View>
        <View style={styles.checkoutSection}>
          <Text style={styles.totalPrice}>合计: ¥0</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>结算</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navBarItem}>首页</Text>
        </TouchableOpacity>
        <Text style={styles.navBarItem}>逛逛</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Message')} style={styles.navBarItem}>
          <Text>消息</Text>
          <Text style={styles.notificationBadge}>3</Text>
        </TouchableOpacity>
        <Text style={styles.navBarItem}>购物车</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navBarItem}>我的淘宝</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cartTitle: {
    color: '#fff',
    fontSize: 18,
  },
  action: {
    color: '#ffa500',
    marginHorizontal: 10,
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  filterText: {
    color: '#fff',
  },
  cartItem: {
    padding: 10,
    backgroundColor: '#292929',
    margin: 5,
    borderRadius: 8,
  },
  storeName: {
    color: '#ffa500',
    marginBottom: 5,
  },
  promotion: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: 2,
    borderRadius: 3,
    marginBottom: 5,
  },
  productDetails: {
    flexDirection: 'row',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  productTitle: {
    color: '#fff',
    marginBottom: 5,
  },
  productDetail: {
    color: '#aaa',
    marginBottom: 5,
  },
  priceInfo: {
    color: '#ffa500',
    marginBottom: 5,
  },
  price: {
    color: '#ff6600',
    marginBottom: 5,
  },
  saleInfo: {
    color: '#999',
  },
  reselectButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  reselectText: {
    color: '#fff',
  },
  bottomSection: {
    marginTop: 10,
  },
  recommendationTitle: {
    color: '#fff',
    paddingLeft: 10,
  },
  recommendedProductContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  recommendedProduct: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  recommendedPrice: {
    color: '#ff6600',
    marginRight: 10,
  },
  moreButton: {
    flex: 1,
    alignItems: 'flex-end',
    padding: 5,
  },
  moreText: {
    color: '#ffa500',
  },
  checkoutSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  totalPrice: {
    color: '#fff',
  },
  checkoutButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutText: {
    color: '#fff',
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    paddingVertical: 10,
    borderTopColor: '#444',
    borderTopWidth: 1,
  },
  navBarItem: {
    color: '#ffa500',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    color: '#fff',
    padding: 2,
    fontSize: 10,
  },
});

export default CartScreen;