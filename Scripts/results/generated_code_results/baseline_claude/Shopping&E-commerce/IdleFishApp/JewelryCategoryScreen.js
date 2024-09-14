import React from 'react';

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const newItems = [

  { face: '20元', discount: '官价8折起', price: '¥65.88起', image: '../assets/snack-icon.png' },

  { face: '10元', discount: '官价7折起', price: '¥25起', image: '../assets/snack-icon.png' },

  { face: '3元', discount: '官价8折起', price: '¥188起', image: '../assets/snack-icon.png' },

  { face: '5元', discount: '官价4折起', price: '¥10起', image: '../assets/snack-icon.png' },

];



const hotItems = [

  { name: '清 康熙通宝', price: '¥260', change: '13.0%', image: '../assets/snack-icon.png' },

  { name: '清 咸丰通宝、重', price: '¥549', change: '10.1%', image: '../assets/snack-icon.png' },

  { name: '清 乾隆通宝', price: '¥318', change: '6.0%', image: '../assets/snack-icon.png' },

];



const JewelryCategoryScreen = () => {

  const navigation = useNavigation();



  const renderNewItem = ({ item }) => (

    <TouchableOpacity style={styles.newItem}>

      <Text style={styles.newItemFace}>{item.face}</Text>

      <Text style={styles.newItemDiscount}>{item.discount}</Text>

      <Image source={item.image} style={styles.newItemImage} />

      <Text style={styles.newItemPrice}>{item.price}</Text>

    </TouchableOpacity>

  );



  const renderHotItem = ({ item }) => (

    <View style={styles.hotItem}>

      <Image source={item.image} style={styles.hotItemImage} />

      <View style={styles.hotItemInfo}>

        <Text style={styles.hotItemName}>{item.name}</Text>

        <View style={styles.hotItemPriceContainer}>

          <Text style={styles.hotItemPrice}>{item.price}</Text>

          <Text style={[styles.hotItemChange, { color: item.change.includes('-') ? 'green' : 'red' }]}>

            {item.change.includes('-') ? '▼' : '▲'} {item.change}

          </Text>

        </View>

      </View>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

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



      <View style={styles.banner}>

        <Text style={styles.bannerTitle}>钱币宝藏 低价捡漏</Text>

        <Image source={require('../assets/snack-icon.png')} style={styles.bannerMascot} />

        <TouchableOpacity style={styles.bannerButton}>

          <Text style={styles.bannerButtonText}>真品保障 质量问题包退</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.newItemsContainer}>

        <Text style={styles.sectionTitle}>新品热销 | 市价3折抢!</Text>

        <FlatList

          data={newItems}

          renderItem={renderNewItem}

          keyExtractor={(item, index) => index.toString()}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <Image source={require('../assets/snack-icon.png')} style={styles.promoBanner} />



      <View style={styles.hotItemsContainer}>

        <View style={styles.hotItemsHeader}>

          <Text style={styles.sectionTitle}>热度周榜</Text>

          <TouchableOpacity>

            <Text style={styles.seeAllText}>完整榜单 ></Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={hotItems}

          renderItem={renderHotItem}

          keyExtractor={(item, index) => index.toString()}

          scrollEnabled={false}

        />

      </View>



      <View style={styles.filterContainer}>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterButtonText}>爱藏评级</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterButtonText}>保粹评级</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterButtonText}>金盾评级</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.sortContainer}>

        <TouchableOpacity style={styles.sortButton}>

          <Text style={styles.sortButtonText}>发布时间</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.sortIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.sortButton}>

          <Text style={styles.sortButtonText}>价格</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.sortIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.sortButton}>

          <Text style={styles.sortButtonText}>类型</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.sortIcon} />

        </TouchableOpacity>

      </View>



      {/* Add more content here */}

    </ScrollView>

  );

};



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

    width: 24,

    height: 24,

  },

  headerTitle: {

    flex: 1,

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 10,

  },

  searchIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  moreIcon: {

    width: 24,

    height: 24,

  },

  banner: {

    backgroundColor: '#e6f7e9',

    padding: 15,

    flexDirection: 'row',

    alignItems: 'center',

  },

  bannerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

    flex: 1,

  },

  bannerMascot: {

    width: 50,

    height: 50,

  },

  bannerButton: {

    backgroundColor: '#4caf50',

    borderRadius: 15,

    paddingVertical: 5,

    paddingHorizontal: 10,

    marginTop: 10,

  },

  bannerButtonText: {

    color: '#fff',

    fontSize: 12,

  },

  newItemsContainer: {

    backgroundColor: '#fff',

    padding: 15,

    marginTop: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  newItem: {

    width: 120,

    marginRight: 15,

  },

  newItemFace: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  newItemDiscount: {

    fontSize: 14,

    color: '#666',

  },

  newItemImage: {

    width: 100,

    height: 100,

    borderRadius: 10,

    marginVertical: 5,

  },

  newItemPrice: {

    fontSize: 16,

    color: '#ff6e00',

  },

  promoBanner: {

    width: '100%',

    height: 80,

    marginVertical: 10,

  },

  hotItemsContainer: {

    backgroundColor: '#fff',

    padding: 15,

  },

  hotItemsHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  seeAllText: {

    color: '#666',

  },

  hotItem: {

    flexDirection: 'row',

    marginBottom: 15,

  },

  hotItemImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

    marginRight: 15,

  },

  hotItemInfo: {

    flex: 1,

  },

  hotItemName: {

    fontSize: 16,

    marginBottom: 5,

  },

  hotItemPriceContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  hotItemPrice: {

    fontSize: 18,

    fontWeight: 'bold',

    marginRight: 10,

  },

  hotItemChange: {

    fontSize: 14,

  },

  filterContainer: {

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

    backgroundColor: '#f0f0f0',

  },

  filterButtonText: {

    fontSize: 14,

  },

  sortContainer: {

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

    width: 12,

    height: 12,

  },

});



export default JewelryCategoryScreen;