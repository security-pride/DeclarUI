import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const StoreScreen = () => {

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('瑜伽服装');

  const [selectedCategory, setSelectedCategory] = useState('全部');



  const categories = ['全部', '运动必备'];



  const newUserItems = [

    { id: '1', name: '智能手表', price: 259, originalPrice: 289, image: '../assets/snack-icon.png', tag: '必买精选' },

    { id: '2', name: '体重秤', price: 82, originalPrice: 109, image: '../assets/snack-icon.png', tag: '热销爆款' },

    { id: '3', name: '瑜伽垫', price: 59, originalPrice: 89, image: '../assets/snack-icon.png', tag: '直降 ¥30' },

    { id: '4', name: '跳绳', price: 13, originalPrice: 29, image: '../assets/snack-icon.png', tag: '60 天低价' },

  ];



  const productCategories = [

    { id: '1', name: '运动奖品', icon: '../assets/snack-icon.png' },

    { id: '2', name: '全身燃脂', icon: '../assets/snack-icon.png' },

    { id: '3', name: '身体数据', icon: '../assets/snack-icon.png' },

    { id: '4', name: '运动装备', icon: '../assets/snack-icon.png' },

    { id: '5', name: '家用智能', icon: '../assets/snack-icon.png' },

    { id: '6', name: 'Keep 周边', icon: '../assets/snack-icon.png' },

    { id: '7', name: '健康食品', icon: '../assets/snack-icon.png' },

    { id: '8', name: '女子服饰', icon: '../assets/snack-icon.png' },

    { id: '9', name: '男子服饰', icon: '../assets/snack-icon.png' },

    { id: '10', name: '全部分类', icon: '../assets/snack-icon.png' },

  ];



  const renderNewUserItem = ({ item }) => (

    <View style={styles.newUserItem}>

      <Image source={{ uri: item.image }} style={styles.newUserItemImage} />

      <Text style={styles.newUserItemPrice}>¥{item.price}</Text>

      <Text style={styles.newUserItemOriginalPrice}>¥{item.originalPrice}</Text>

      <View style={styles.newUserItemTag}>

        <Text style={styles.newUserItemTagText}>{item.tag}</Text>

      </View>

    </View>

  );



  const renderProductCategory = ({ item }) => (

    <TouchableOpacity style={styles.productCategory}>

      <Image source={{ uri: item.icon }} style={styles.productCategoryIcon} />

      <Text style={styles.productCategoryName}>{item.name}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            value={searchText}

            onChangeText={setSearchText}

            placeholder="搜索商品"

          />

        </View>

        <TouchableOpacity>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.headerIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.headerIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.categoryTabs}>

          {categories.map((category) => (

            <TouchableOpacity

              key={category}

              style={[styles.categoryTab, selectedCategory === category && styles.selectedCategoryTab]}

              onPress={() => setSelectedCategory(category)}

            >

              <Text style={[styles.categoryTabText, selectedCategory === category && styles.selectedCategoryTabText]}>

                {category}

              </Text>

            </TouchableOpacity>

          ))}

        </View>



        <View style={styles.newUserSection}>

          <View style={styles.newUserHeader}>

            <Text style={styles.newUserTitle}>新人首单礼</Text>

            <TouchableOpacity>

              <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.closeIcon} />

            </TouchableOpacity>

          </View>

          <FlatList

            data={newUserItems}

            renderItem={renderNewUserItem}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <FlatList

          data={productCategories}

          renderItem={renderProductCategory}

          keyExtractor={(item) => item.id}

          numColumns={5}

          columnWrapperStyle={styles.productCategoryRow}

        />



        <View style={styles.bannerContainer}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bannerImage} />

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bannerImage} />

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>课程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>商城</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: 'white',

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

    width: 20,

    height: 20,

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  categoryTabs: {

    flexDirection: 'row',

    backgroundColor: 'white',

    paddingVertical: 10,

  },

  categoryTab: {

    paddingHorizontal: 15,

  },

  selectedCategoryTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#4CAF50',

  },

  categoryTabText: {

    fontSize: 16,

    color: '#888',

  },

  selectedCategoryTabText: {

    color: '#4CAF50',

    fontWeight: 'bold',

  },

  newUserSection: {

    backgroundColor: '#8A2BE2',

    padding: 10,

    marginVertical: 10,

  },

  newUserHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  newUserTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  closeIcon: {

    width: 20,

    height: 20,

  },

  newUserItem: {

    backgroundColor: 'white',

    borderRadius: 10,

    padding: 10,

    marginRight: 10,

    width: 120,

  },

  newUserItemImage: {

    width: 100,

    height: 100,

    marginBottom: 5,

  },

  newUserItemPrice: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#FF4500',

  },

  newUserItemOriginalPrice: {

    fontSize: 14,

    color: '#888',

    textDecorationLine: 'line-through',

  },

  newUserItemTag: {

    position: 'absolute',

    top: 5,

    left: 5,

    backgroundColor: '#FF4500',

    borderRadius: 10,

    paddingHorizontal: 5,

    paddingVertical: 2,

  },

  newUserItemTagText: {

    color: 'white',

    fontSize: 10,

  },

  productCategoryRow: {

    justifyContent: 'space-between',

    paddingHorizontal: 10,

    marginBottom: 15,

  },

  productCategory: {

    alignItems: 'center',

    width: '20%',

  },

  productCategoryIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  productCategoryName: {

    fontSize: 12,

    textAlign: 'center',

  },

  bannerContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

  },

  bannerImage: {

    width: '48%',

    height: 100,

    borderRadius: 10,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: 'white',

    paddingVertical: 5,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 2,

  },

  tabText: {

    fontSize: 12,

    color: '#888',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#4CAF50',

  },

  activeTabIcon: {

    tintColor: '#4CAF50',

  },

  activeTabText: {

    color: '#4CAF50',

  },

});



export default StoreScreen;