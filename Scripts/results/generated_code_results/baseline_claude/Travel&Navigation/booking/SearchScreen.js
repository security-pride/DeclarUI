import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';



const SearchScreen = () => {

  const navigation = useNavigation();



  const searchData = [

    { id: '1', label: '周围地区', icon: 'search-outline' },

    { id: '2', label: '7月18日 周四 - 7月19日 周五', icon: 'calendar-outline' },

    { id: '3', label: '1间房 · 2位成人 · 无儿童', icon: 'person-outline' },

  ];



  const hotelData = [

    { id: '1', name: 'AC Hotel by Marriott Manch...', distance: '8,540公里', price: '£160', image: '../assets/snack-icon.png' },

    { id: '2', name: 'Maldron Hotel Manc', distance: '8,541公里', price: '£1', image: '../assets/snack-icon.png' },

  ];



  const renderSearchItem = ({ item }) => (

    <TouchableOpacity style={styles.searchItem}>

      <Icon name={item.icon} size={24} color="#000" style={styles.searchIcon} />

      <Text style={styles.searchLabel}>{item.label}</Text>

    </TouchableOpacity>

  );



  const renderHotelItem = ({ item }) => (

    <TouchableOpacity style={styles.hotelItem} onPress={() => navigation.navigate('Details')}>

      <Image source={{ uri: item.image }} style={styles.hotelImage} />

      <View style={styles.hotelInfo}>

        <Text style={styles.hotelName}>{item.name}</Text>

        <Text style={styles.hotelDistance}>{item.distance}</Text>

        <Text style={styles.hotelPrice}>{item.price}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>Booking.com</Text>

        <TouchableOpacity>

          <Icon name="notifications-outline" size={24} color="#fff" />

        </TouchableOpacity>

      </View>



      <View style={styles.searchContainer}>

        <FlatList

          data={searchData}

          renderItem={renderSearchItem}

          keyExtractor={item => item.id}

          scrollEnabled={false}

        />

        <TouchableOpacity style={styles.searchButton}>

          <Text style={styles.searchButtonText}>搜索</Text>

        </TouchableOpacity>

      </View>



      <Text style={styles.sectionTitle}>临时起意?</Text>



      <FlatList

        data={hotelData}

        renderItem={renderHotelItem}

        keyExtractor={item => item.id}

        horizontal

        showsHorizontalScrollIndicator={false}

        contentContainerStyle={styles.hotelList}

      />



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="search" size={24} color="#0071c2" />

          <Text style={[styles.tabLabel, styles.activeTabLabel]}>搜索</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="heart-outline" size={24} color="#666" />

          <Text style={styles.tabLabel}>已保存</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="briefcase-outline" size={24} color="#666" />

          <Text style={styles.tabLabel}>订单</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Icon name="person-outline" size={24} color="#666" />

          <Text style={styles.tabLabel}>账户资料</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#003580',

    padding: 16,

  },

  headerTitle: {

    color: '#fff',

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchContainer: {

    backgroundColor: '#febb02',

    padding: 16,

    borderRadius: 8,

    margin: 16,

  },

  searchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    padding: 12,

    marginBottom: 8,

    borderRadius: 4,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchLabel: {

    fontSize: 16,

  },

  searchButton: {

    backgroundColor: '#0071c2',

    padding: 12,

    borderRadius: 4,

    alignItems: 'center',

  },

  searchButtonText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    margin: 16,

  },

  hotelList: {

    paddingHorizontal: 16,

  },

  hotelItem: {

    width: 200,

    marginRight: 16,

    backgroundColor: '#fff',

    borderRadius: 8,

    overflow: 'hidden',

  },

  hotelImage: {

    width: '100%',

    height: 120,

  },

  hotelInfo: {

    padding: 8,

  },

  hotelName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  hotelDistance: {

    fontSize: 14,

    color: '#666',

    marginBottom: 4,

  },

  hotelPrice: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#0071c2',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: '#fff',

    paddingVertical: 8,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 4,

    color: '#666',

  },

  activeTabLabel: {

    color: '#0071c2',

  },

});



export default SearchScreen;