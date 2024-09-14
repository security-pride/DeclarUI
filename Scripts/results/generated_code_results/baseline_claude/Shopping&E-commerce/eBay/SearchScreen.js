import React, { useState } from 'react';

import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="搜索任何物品"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.cartIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.tabContainer}>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>

          <Text style={[styles.tabText, styles.activeTabText]}>最近</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>已保存</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.content}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIllustration} />

        <Text style={styles.searchTitle}>搜索 eBay</Text>

        <Text style={styles.searchSubtitle}>发现下一件您最喜爱的物品。</Text>

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

        <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>

          <Image source={require('../assets/snack-icon.png')} style={[styles.tabIcon, styles.activeTabIcon]} />

          <Text style={[styles.tabText, styles.activeTabText]}>搜索</Text>

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

    </SafeAreaView>

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

    borderBottomColor: '#e0e0e0',

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

  cameraIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  cartIcon: {

    width: 24,

    height: 24,

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

  },

  tab: {

    flex: 1,

    paddingVertical: 10,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#000',

  },

  tabText: {

    fontSize: 16,

  },

  activeTabText: {

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 20,

  },

  searchIllustration: {

    width: 100,

    height: 100,

    marginBottom: 20,

  },

  searchTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  searchSubtitle: {

    fontSize: 16,

    color: '#666',

    textAlign: 'center',

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

    marginBottom: 4,

  },

  activeTabItem: {

    color: '#0000FF',

  },

  activeTabIcon: {

    tintColor: '#0000FF',

  },

});



export default SearchScreen;