import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ItemScreen = () => {

  const navigation = useNavigation();



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>物品</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.imageContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />

          <View style={styles.imageCounter}>

            <Text style={styles.imageCounterText}>1/1</Text>

          </View>

          <TouchableOpacity style={styles.heartButton}>

            <Text style={styles.heartCount}>65</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.productInfo}>

          <Text style={styles.productTitle}>Ottogi Jin Ramen Mild Noodles (Pack of 20)</Text>

          <View style={styles.sellerInfo}>

            <Image source={require('../assets/snack-icon.png')} style={styles.sellerLogo} />

            <View>

              <Text style={styles.sellerName}>Wa Na Hong Oriental Supermarket (25024)</Text>

              <Text style={styles.sellerRating}>99.3% 好评率</Text>

            </View>

            <TouchableOpacity>

              <Image source={require('../assets/snack-icon.png')} style={styles.chatIcon} />

            </TouchableOpacity>

          </View>

          <Text style={styles.price}>每件 £22.99</Text>

          <Text style={styles.shipping}>Free 3 day postage</Text>

          <Text style={styles.deliveryDate}>预计在7月19日，星期五至7月20日，星期六之间送达</Text>

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.buyNowButton}>

          <Text style={styles.buyNowText}>立即购买</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.addToCartButton}>

          <Text style={styles.addToCartText}>加入购物车</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>主页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的 eBay</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>搜索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Notifications')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>通知</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Sell')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>出售物品</Text>

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

    justifyContent: 'space-between',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  icon: {

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

    backgroundColor: 'rgba(0,0,0,0.6)',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

  },

  imageCounterText: {

    color: '#fff',

    fontSize: 12,

  },

  heartButton: {

    position: 'absolute',

    bottom: 10,

    right: 10,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 12,

  },

  heartCount: {

    marginRight: 4,

    fontSize: 12,

  },

  heartIcon: {

    width: 16,

    height: 16,

  },

  productInfo: {

    padding: 15,

  },

  productTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  sellerInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  sellerLogo: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  sellerName: {

    fontSize: 14,

    fontWeight: 'bold',

  },

  sellerRating: {

    fontSize: 12,

    color: '#888',

  },

  chatIcon: {

    width: 24,

    height: 24,

    marginLeft: 'auto',

  },

  price: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  shipping: {

    fontSize: 16,

    color: '#4CAF50',

    marginBottom: 5,

  },

  deliveryDate: {

    fontSize: 14,

    color: '#888',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  buyNowButton: {

    flex: 1,

    backgroundColor: '#FFD700',

    paddingVertical: 12,

    borderRadius: 20,

    marginRight: 10,

  },

  buyNowText: {

    textAlign: 'center',

    fontWeight: 'bold',

  },

  addToCartButton: {

    flex: 1,

    backgroundColor: '#fff',

    paddingVertical: 12,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: '#000',

  },

  addToCartText: {

    textAlign: 'center',

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabText: {

    fontSize: 12,

    marginTop: 4,

  },

});



export default ItemScreen;