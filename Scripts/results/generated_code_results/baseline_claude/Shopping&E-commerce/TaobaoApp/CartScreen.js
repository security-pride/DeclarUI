import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CartItem = ({ item }) => (

  <View style={styles.cartItem}>

    <TouchableOpacity style={styles.checkbox} />

    <Image source={item.image} style={styles.itemImage} />

    <View style={styles.itemDetails}>

      <Text style={styles.itemName}>{item.name}</Text>

      <Text style={styles.itemDescription}>{item.description}</Text>

      <Text style={styles.itemPrice}>¥{item.price}</Text>

    </View>

    <Text style={styles.itemQuantity}>×{item.quantity}</Text>

  </View>

);



const CartScreen = () => {

  const navigation = useNavigation();



  const cartItems = [

    {

      id: '1',

      name: 'MKSZY 复古水洗做旧短袖T恤',

      description: 'EVA 绫波丽[现货秒发]JS',

      price: 298,

      quantity: 1,

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '2',

      name: 'NITORI圆形舒柔质感抱枕',

      description: '假一赔四·极速退款·7天无理由退换',

      price: 0,

      quantity: 1,

      image: require('../assets/snack-icon.png'),

    },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.title}>购物车(18)</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>

          <Text style={styles.managementText}>管理</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.actionBar}>

        <TouchableOpacity style={styles.actionButton}>

          <Text style={styles.actionButtonText}>降价</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Text style={styles.actionButtonText}>常购</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.folderIcon} />

        </TouchableOpacity>

      </View>

      <FlatList

        data={cartItems}

        renderItem={({ item }) => <CartItem item={item} />}

        keyExtractor={item => item.id}

      />

      <View style={styles.footer}>

        <TouchableOpacity style={styles.checkAllButton}>

          <Text style={styles.checkAllText}>全选</Text>

        </TouchableOpacity>

        <View style={styles.totalContainer}>

          <Text style={styles.totalText}>合计: ¥0</Text>

        </View>

        <TouchableOpacity style={styles.checkoutButton}>

          <Text style={styles.checkoutButtonText}>结算</Text>

        </TouchableOpacity>

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Logistics')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>逛逛</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Message')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>购物车</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的淘宝</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1a1a1a',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  title: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  managementText: {

    color: 'white',

    fontSize: 16,

  },

  actionBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

  },

  actionButton: {

    backgroundColor: '#333',

    paddingVertical: 5,

    paddingHorizontal: 15,

    borderRadius: 15,

  },

  actionButtonText: {

    color: 'white',

  },

  folderIcon: {

    width: 20,

    height: 20,

  },

  cartItem: {

    flexDirection: 'row',

    padding: 10,

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#333',

  },

  checkbox: {

    width: 20,

    height: 20,

    borderWidth: 1,

    borderColor: '#666',

    borderRadius: 10,

    marginRight: 10,

  },

  itemImage: {

    width: 80,

    height: 80,

    marginRight: 10,

  },

  itemDetails: {

    flex: 1,

  },

  itemName: {

    color: 'white',

    fontSize: 16,

    marginBottom: 5,

  },

  itemDescription: {

    color: '#999',

    fontSize: 14,

    marginBottom: 5,

  },

  itemPrice: {

    color: '#ff6600',

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemQuantity: {

    color: 'white',

    fontSize: 16,

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    borderTopWidth: 1,

    borderTopColor: '#333',

  },

  checkAllButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  checkAllText: {

    color: 'white',

    marginLeft: 5,

  },

  totalContainer: {

    flex: 1,

    alignItems: 'flex-end',

  },

  totalText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  checkoutButton: {

    backgroundColor: '#ff6600',

    paddingVertical: 10,

    paddingHorizontal: 20,

    borderRadius: 20,

    marginLeft: 10,

  },

  checkoutButtonText: {

    color: 'white',

    fontSize: 16,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    color: '#999',

    fontSize: 12,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#ff6600',

  },

  activeTabText: {

    color: '#ff6600',

  },

});



export default CartScreen;