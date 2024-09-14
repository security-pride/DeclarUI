import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const StoreScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('瑜伽服装');



  const categories = [

    { id: '1', name: '运动奖品', icon: 'trophy-outline' },

    { id: '2', name: '全身燃脂', icon: 'fitness-outline' },

    { id: '3', name: '身体数据', icon: 'analytics-outline' },

    { id: '4', name: '运动装备', icon: 'barbell-outline' },

    { id: '5', name: '家用智能', icon: 'home-outline' },

    { id: '6', name: 'Keep周边', icon: 'star-outline' },

    { id: '7', name: '健康食品', icon: 'nutrition-outline' },

    { id: '8', name: '女子服饰', icon: 'woman-outline' },

    { id: '9', name: '男子服饰', icon: 'man-outline' },

    { id: '10', name: '全部分类', icon: 'grid-outline' },

  ];



  const newUserGifts = [

    { id: '1', name: '智能手表', price: 259, originalPrice: 289, image: require('../assets/snack-icon.png'), tag: '必买精选' },

    { id: '2', name: '体重秤', price: 82, originalPrice: 109, image: require('../assets/snack-icon.png'), tag: '热销爆款' },

    { id: '3', name: '瑜伽垫', price: 59, originalPrice: 89, image: require('../assets/snack-icon.png'), tag: '直降 ¥30' },

    { id: '4', name: '跳绳', price: 13, originalPrice: 29, image: require('../assets/snack-icon.png'), tag: '60 天低价' },

  ];



  const renderCategoryItem = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Icon name={item.icon} size={24} color="#333" />

      <Text style={styles.categoryName}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderNewUserGiftItem = ({ item }) => (

    <View style={styles.giftItem}>

      <Image source={item.image} style={styles.giftImage} />

      <Text style={styles.giftPrice}>¥{item.price}</Text>

      <Text style={styles.giftOriginalPrice}>¥{item.originalPrice}</Text>

      <View style={styles.giftTag}>

        <Text style={styles.giftTagText}>{item.tag}</Text>

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Icon name="search-outline" size={20} color="#999" style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="瑜伽服装"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity onPress={() => {}}>

          <Icon name="flash-outline" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>

          <Icon name="cart-outline" size={24} color="#333" />

        </TouchableOpacity>

      </View>

      

      <ScrollView style={styles.content}>

        <View style={styles.tabContainer}>

          <Text style={[styles.tabText, styles.activeTab]}>全部</Text>

          <Text style={styles.tabText}>运动必备</Text>

        </View>



        <View style={styles.newUserGifts}>

          <View style={styles.giftHeader}>

            <Text style={styles.giftTitle}>新人首单礼</Text>

            <TouchableOpacity>

              <Icon name="close-outline" size={20} color="#999" />

            </TouchableOpacity>

          </View>

          <FlatList

            data={newUserGifts}

            renderItem={renderNewUserGiftItem}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <FlatList

          data={categories}

          renderItem={renderCategoryItem}

          keyExtractor={(item) => item.id}

          numColumns={5}

          scrollEnabled={false}

        />



        <View style={styles.bannerContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home-outline" size={24} color="#999" />

          <Text style={styles.navText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="book-outline" size={24} color="#999" />

          <Text style={styles.navText}>课程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SearchSports')}>

          <Icon name="fitness-outline" size={24} color="#999" />

          <Text style={styles.navText}>运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="cart-outline" size={24} color="#333" />

          <Text style={[styles.navText, styles.activeNavText]}>商城</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>

          <Icon name="person-outline" size={24} color="#999" />

          <Text style={styles.navText}>我的</Text>

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

    borderBottomColor: '#eee',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchIcon: {

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  content: {

    flex: 1,

  },

  tabContainer: {

    flexDirection: 'row',

    padding: 10,

    borderBottomWidth: 1,

    borderBottomColor: '#eee',

  },

  tabText: {

    marginRight: 20,

    fontSize: 16,

    color: '#666',

  },

  activeTab: {

    color: '#333',

    fontWeight: 'bold',

  },

  newUserGifts: {

    padding: 10,

    backgroundColor: '#f6f0ff',

  },

  giftHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  giftTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  giftItem: {

    width: 100,

    marginRight: 10,

  },

  giftImage: {

    width: 100,

    height: 100,

    borderRadius: 5,

  },

  giftPrice: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#ff4d4f',

  },

  giftOriginalPrice: {

    fontSize: 12,

    color: '#999',

    textDecorationLine: 'line-through',

  },

  giftTag: {

    position: 'absolute',

    top: 5,

    left: 5,

    backgroundColor: '#ff4d4f',

    borderRadius: 3,

    padding: 2,

  },

  giftTagText: {

    color: '#fff',

    fontSize: 10,

  },

  categoryItem: {

    width: '20%',

    alignItems: 'center',

    marginBottom: 20,

  },

  categoryName: {

    marginTop: 5,

    fontSize: 12,

    color: '#333',

  },

  bannerContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

  },

  bannerImage: {

    width: '48%',

    height: 100,

    borderRadius: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    borderTopWidth: 1,

    borderTopColor: '#eee',

    paddingVertical: 5,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    color: '#999',

    marginTop: 2,

  },

  activeNavText: {

    color: '#333',

  },

});



export default StoreScreen;