import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, Switch } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const categories = [

  { id: '1', name: '海景民宿', icon: require('../assets/snack-icon.png') },

  { id: '2', name: '魅力泳池', icon: require('../assets/snack-icon.png') },

  { id: '3', name: '湖区', icon: require('../assets/snack-icon.png') },

  { id: '4', name: '近滑雪场', icon: require('../assets/snack-icon.png') },

  { id: '5', name: 'OMG 妙', icon: require('../assets/snack-icon.png') },

];



const listings = [

  {

    id: '1',

    image: require('../assets/snack-icon.png'),

    tag: '房客推荐',

    location: '英国 多塞特(Dorset)',

    name: "Man O'War海滩",

    date: '9月2日至7日',

    review: '会推荐再次光临的美丽海滨亮。',

    price: '¥ 2,424 /晚',

    rating: 4.8,

  },

];



const SearchCategoryScreen = () => {

  const navigation = useNavigation();

  const [showTotalPrice, setShowTotalPrice] = useState(false);



  const renderCategory = ({ item }) => (

    <TouchableOpacity style={[styles.categoryItem, item.id === '1' && styles.activeCategoryItem]}>

      <Image source={item.icon} style={styles.categoryIcon} />

      <Text style={[styles.categoryName, item.id === '1' && styles.activeCategoryName]}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderListing = ({ item }) => (

    <TouchableOpacity style={styles.listingItem}>

      <Image source={item.image} style={styles.listingImage} />

      <View style={styles.tagContainer}>

        <Text style={styles.tagText}>{item.tag}</Text>

      </View>

      <TouchableOpacity style={styles.heartButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />

      </TouchableOpacity>

      <View style={styles.listingInfo}>

        <View style={styles.listingHeader}>

          <Text style={styles.listingLocation}>{item.location}</Text>

          <View style={styles.ratingContainer}>

            <Text style={styles.ratingText}>★ {item.rating}</Text>

          </View>

        </View>

        <Text style={styles.listingName}>{item.name}</Text>

        <Text style={styles.listingDate}>{item.date}</Text>

        <Text style={styles.listingReview}>{item.review}</Text>

        <Text style={styles.listingPrice}>{item.price}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.searchBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="任何地方"

          placeholderTextColor="#000"

        />

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterButtonText}>添加日期</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>

          <Text style={styles.filterButtonText}>添加人数</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.filterIconButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />

        </TouchableOpacity>

      </View>



      <FlatList

        data={categories}

        renderItem={renderCategory}

        keyExtractor={(item) => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        style={styles.categoriesContainer}

      />



      <View style={styles.totalPriceToggle}>

        <Text style={styles.totalPriceText}>显示总价</Text>

        <Text style={styles.totalPriceSubtext}>税前价格，包含所有费用</Text>

        <Switch

          value={showTotalPrice}

          onValueChange={setShowTotalPrice}

          trackColor={{ false: "#767577", true: "#81b0ff" }}

          thumbColor={showTotalPrice ? "#f5dd4b" : "#f4f3f4"}

        />

      </View>



      <FlatList

        data={listings}

        renderItem={renderListing}

        keyExtractor={(item) => item.id}

        showsVerticalScrollIndicator={false}

      />



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={[styles.navText, styles.activeNavText]}>探索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>心愿单</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>行程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

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

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f2f2f2',

    borderRadius: 25,

    margin: 10,

    paddingHorizontal: 15,

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

  filterButton: {

    paddingHorizontal: 10,

    paddingVertical: 5,

    borderLeftWidth: 1,

    borderLeftColor: '#ddd',

  },

  filterButtonText: {

    color: '#000',

  },

  filterIconButton: {

    padding: 5,

  },

  filterIcon: {

    width: 20,

    height: 20,

  },

  categoriesContainer: {

    marginVertical: 10,

  },

  categoryItem: {

    alignItems: 'center',

    marginHorizontal: 15,

  },

  activeCategoryItem: {

    borderBottomWidth: 2,

    borderBottomColor: '#000',

  },

  categoryIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  categoryName: {

    fontSize: 12,

  },

  activeCategoryName: {

    fontWeight: 'bold',

  },

  totalPriceToggle: {

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 15,

    paddingVertical: 10,

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#e0e0e0',

  },

  totalPriceText: {

    fontWeight: 'bold',

  },

  totalPriceSubtext: {

    fontSize: 12,

    color: '#666',

  },

  listingItem: {

    margin: 15,

  },

  listingImage: {

    width: '100%',

    height: 200,

    borderRadius: 10,

  },

  tagContainer: {

    position: 'absolute',

    top: 10,

    left: 10,

    backgroundColor: 'white',

    paddingHorizontal: 8,

    paddingVertical: 4,

    borderRadius: 4,

  },

  tagText: {

    fontSize: 12,

    fontWeight: 'bold',

  },

  heartButton: {

    position: 'absolute',

    top: 10,

    right: 10,

  },

  heartIcon: {

    width: 24,

    height: 24,

  },

  listingInfo: {

    marginTop: 10,

  },

  listingHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  listingLocation: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  ratingText: {

    marginLeft: 5,

  },

  listingName: {

    fontSize: 14,

    marginTop: 5,

  },

  listingDate: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  listingReview: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  listingPrice: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 5,

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

    color: '#666',

  },

  activeNavText: {

    color: '#ff385c',

  },

});



export default SearchCategoryScreen;