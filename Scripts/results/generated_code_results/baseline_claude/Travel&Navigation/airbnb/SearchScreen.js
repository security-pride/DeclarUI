import React from 'react';

import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const categories = [

  { id: '1', name: '王牌', icon: require('../assets/snack-icon.png') },

  { id: '2', name: '小木屋', icon: require('../assets/snack-icon.png') },

  { id: '3', name: '海景民宿', icon: require('../assets/snack-icon.png') },

  { id: '4', name: '魅力泳池', icon: require('../assets/snack-icon.png') },

  { id: '5', name: '湖区', icon: require('../assets/snack-icon.png') },

];



const listings = [

  {

    id: '1',

    image: require('../assets/snack-icon.png'),

    title: '在X学院参加训练',

    host: 'Jubilee',

    status: '预订通道已关闭',

  },

];



const SearchScreen = () => {

  const navigation = useNavigation();



  const renderCategory = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Image source={item.icon} style={styles.categoryIcon} />

      <Text style={styles.categoryName}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderListing = ({ item }) => (

    <TouchableOpacity style={styles.listingItem}>

      <Image source={item.image} style={styles.listingImage} />

      <View style={styles.listingInfo}>

        <Text style={styles.listingTitle}>{item.title}</Text>

        <Text style={styles.listingHost}>房东：{item.host}</Text>

        <Text style={styles.listingStatus}>{item.status}</Text>

      </View>

      <TouchableOpacity style={styles.shareButton}>

        <Image source={require('../assets/snack-icon.png')} style={styles.shareIcon} />

      </TouchableOpacity>

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

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>

        <FlatList

          data={categories}

          renderItem={renderCategory}

          keyExtractor={(item) => item.id}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </ScrollView>



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

  categoriesContainer: {

    marginVertical: 10,

  },

  categoryItem: {

    alignItems: 'center',

    marginHorizontal: 15,

  },

  categoryIcon: {

    width: 30,

    height: 30,

    marginBottom: 5,

  },

  categoryName: {

    fontSize: 12,

  },

  listingItem: {

    flexDirection: 'row',

    marginHorizontal: 15,

    marginBottom: 20,

  },

  listingImage: {

    width: 120,

    height: 120,

    borderRadius: 10,

  },

  listingInfo: {

    flex: 1,

    marginLeft: 15,

    justifyContent: 'center',

  },

  listingTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  listingHost: {

    fontSize: 14,

    color: '#666',

    marginBottom: 5,

  },

  listingStatus: {

    fontSize: 14,

    color: '#666',

  },

  shareButton: {

    position: 'absolute',

    top: 10,

    right: 10,

    backgroundColor: 'rgba(255, 255, 255, 0.7)',

    borderRadius: 15,

    padding: 5,

  },

  shareIcon: {

    width: 20,

    height: 20,

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



export default SearchScreen;