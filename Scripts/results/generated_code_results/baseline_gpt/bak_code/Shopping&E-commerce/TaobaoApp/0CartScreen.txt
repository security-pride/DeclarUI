import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>购物车(18)</Text>
        <View style={styles.location}>
          <Icon name="eye-outline" size={20} color="#fff" />
          <Text style={styles.locationText}>精武路1号越秀国际...</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="search-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.manageText}>管理</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView style={styles.cartItems}>
        {/* Cart Item 1 */}
        <View style={styles.cartItem}>
          <View style={styles.storeHeader}>
            <Text style={styles.storeTitle}>淘宝 马克思主义 MKSZY</Text>
            <TouchableOpacity>
              <Text style={styles.dropdownArrow}>›</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.discountInfo}>每300减30, 可跨店</Text>
          <View style={styles.productDetail}>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>MKSZY 复古水洗做旧短袖 T恤</Text>
              <Text style={styles.productDescription}>EVA 绩波丽 [现货秒发]: S</Text>
              <Text style={styles.priceInfo}>每300减30 3期免息, 库存紧张</Text>
              <Text style={styles.price}>¥298</Text>
            </View>
          </View>
        </View>
        
        {/* Add more cart items similarly */}

        {/* Checkout Bar */}
        <View style={styles.checkoutBar}>
          <View style={styles.selectAll}>
            <TouchableOpacity style={styles.selectButton}>
              {/* Custom Select Button */}
            </TouchableOpacity>
            <Text style={styles.selectAllText}>全选</Text>
          </View>
          <Text style={styles.totalAmount}>合计: ¥0</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>结算</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#ccc" />
          <Text style={styles.navText}>首页</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome name="youtube" size={24} color="#ccc" />
          <Text style={styles.navText}>逛逛</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.messageBadge}>
            <Text style={styles.messageCount}>3</Text>
          </View>
          <Icon name="chatbubble-outline" size={24} color="#ccc" />
          <Text style={styles.navText}>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="cart-outline" size={24} color="#ffa500" />
          <Text style={styles.navText}>购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#ccc" />
          <Text style={styles.navText}>我的淘宝</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#303030',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#fff',
    marginLeft: 8,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageText: {
    color: '#fff',
    marginLeft: 16,
  },
  cartItems: {
    flex: 1,
  },
  cartItem: {
    backgroundColor: '#2c2c2e',
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  storeTitle: {
    color: '#ff7f00',
    fontWeight: 'bold',
  },
  dropdownArrow: {
    color: '#ff7f00',
  },
  discountInfo: {
    color: '#808080',
    fontSize: 12,
  },
  productDetail: {
    flexDirection: 'row',
    marginTop: 16,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productDescription: {
    color: '#ccc',
    fontSize: 12,
  },
  priceInfo: {
    color: '#808080',
    fontSize: 12,
    marginVertical: 4,
  },
  price: {
    color: '#ff4d00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#202122',
  },
  selectAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
  },
  selectAllText: {
    color: '#fff',
  },
  totalAmount: {
    color: '#ff4d00',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#303030',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#ccc',
    fontSize: 12,
  },
  messageBadge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 2,
    alignItems: 'center',
    zIndex: 1
  },
  messageCount: {
    color: '#fff',
    fontSize: 10,
  },
});

export default CartScreen;