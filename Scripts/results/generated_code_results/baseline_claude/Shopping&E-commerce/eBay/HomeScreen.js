import React from 'react';

import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const categories = [

    { id: '1', name: '已保存', icon: 'heart-outline' },

    { id: '2', name: '时尚', icon: 'shirt-outline' },

    { id: '3', name: '探索 (全新!)', icon: 'grid-outline' },

  ];



  const recentItems = [

    { id: '1', name: 'Ottogi Jin Ramen Mild Noodles (Pack of 20)', price: 'GBP 22.99', image: '../assets/snack-icon.png' },

    { id: '2', name: 'Spiderman Push Pop for it Bubble Fidget T...', price: 'GBP 4.10', image: '../assets/snack-icon.png' },

    { id: '3', name: 'LEISURE FOLDIN', price: 'GBP 1', image: '../assets/snack-icon.png' },

  ];



  const renderCategoryItem = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.categoryIcon} />

      <Text style={styles.categoryName}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderRecentItem = ({ item }) => (

    <TouchableOpacity style={styles.recentItem}>

      <Image source={{ uri: item.image }} style={styles.recentItemImage} />

      <TouchableOpacity style={styles.heartIcon}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.heartIconImage} />

      </TouchableOpacity>

      <Text style={styles.recentItemName} numberOfLines={2}>{item.name}</Text>

      <Text style={styles.recentItemPrice}>{item.price}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.logo} />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.cartIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.searchBar}>

        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="搜索任何物品"

          placeholderTextColor="#888"

        />

        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.cameraIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <FlatList

          data={categories}

          renderItem={renderCategoryItem}

          keyExtractor={item => item.id}

          horizontal

          showsHorizontalScrollIndicator={false}

          style={styles.categoriesList}

        />



        <View style={styles.promotionBanner}>

          <Text style={styles.promotionTitle}>Join the party with 15% off</Text>

          <Text style={styles.promotionSubtitle}>Celebrate eBay UK with big deals on brands from selected sellers.</Text>

          <TouchableOpacity style={styles.promotionButton}>

            <Text style={styles.promotionButtonText}>Use code SIZZLE15</Text>

          </TouchableOpacity>

          <Text style={styles.promotionTerms}>Ends 21 July. Min spend £9.99. Max £75 off. T&Cs.</Text>

        </View>



        <View style={styles.recentSection}>

          <View style={styles.recentHeader}>

            <Text style={styles.recentTitle}>您最近浏览的物品</Text>

            <TouchableOpacity>

              <Text style={styles.viewAllText}>浏览全部</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={recentItems}

            renderItem={renderRecentItem}

            keyExtractor={item => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>主页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的 eBay</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>搜索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Notifications')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>通知</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Sell')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  logo: {

    width: 100,

    height: 40,

    resizeMode: 'contain',

  },

  cartIcon: {

    width: 24,

    height: 24,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f2f2f2',

    borderRadius: 20,

    margin: 10,

    paddingHorizontal: 10,

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

  cameraIcon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  categoriesList: {

    paddingVertical: 10,

  },

  categoryItem: {

    alignItems: 'center',

    marginHorizontal: 10,

  },

  categoryIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#f2f2f2',

    justifyContent: 'center',

    alignItems: 'center',

  },

  categoryName: {

    marginTop: 5,

    fontSize: 12,

  },

  promotionBanner: {

    backgroundColor: '#FFD700',

    padding: 15,

    margin: 10,

    borderRadius: 10,

  },

  promotionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  promotionSubtitle: {

    fontSize: 14,

    marginTop: 5,

  },

  promotionButton: {

    backgroundColor: '#4B3F2F',

    padding: 10,

    borderRadius: 20,

    alignSelf: 'flex-start',

    marginTop: 10,

  },

  promotionButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  promotionTerms: {

    fontSize: 12,

    marginTop: 10,

  },

  recentSection: {

    margin: 10,

  },

  recentHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  recentTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  viewAllText: {

    color: '#0000FF',

  },

  recentItem: {

    width: 150,

    marginRight: 10,

  },

  recentItemImage: {

    width: '100%',

    height: 150,

    borderRadius: 10,

  },

  heartIcon: {

    position: 'absolute',

    top: 5,

    right: 5,

    backgroundColor: 'rgba(255,255,255,0.8)',

    borderRadius: 15,

    padding: 5,

  },

  heartIconImage: {

    width: 20,

    height: 20,

  },

  recentItemName: {

    marginTop: 5,

    fontSize: 14,

  },

  recentItemPrice: {

    fontWeight: 'bold',

    marginTop: 5,

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

    marginTop: 5,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#0000FF',

  },

  activeTabText: {

    color: '#0000FF',

  },

});



export default HomeScreen;