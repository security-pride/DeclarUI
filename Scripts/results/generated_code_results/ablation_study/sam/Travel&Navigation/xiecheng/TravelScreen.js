import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';



const TravelScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('精选');



  const renderTabs = () => {

    const tabs = ['精选', '国内游', '出境游'];

    return (

      <View style={styles.tabContainer}>

        {tabs.map((tab) => (

          <TouchableOpacity

            key={tab}

            style={[styles.tab, selectedTab === tab && styles.selectedTab]}

            onPress={() => setSelectedTab(tab)}

          >

            <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>

          </TouchableOpacity>

        ))}

      </View>

    );

  };



  const renderCategories = () => {

    const categories = [

      { name: '跟团游', icon: 'flag' },

      { name: '私家团', icon: 'group' },

      { name: '当地参团', icon: 'place' },

      { name: '邮轮', icon: 'directions-boat' },

      { name: '自由行', icon: 'flight-takeoff' },

      { name: '定制旅行', icon: 'edit' },

      { name: '包车游', icon: 'directions-car' },

    ];



    return (

      <View style={styles.categoriesContainer}>

        {categories.map((category) => (

          <TouchableOpacity

            key={category.name}

            style={styles.categoryItem}

            onPress={() => {

              if (category.name === '跟团游') {

                navigation.navigate('GroupTravel');

              }

            }}

          >

            <Icon name={category.icon} size={24} color="#007AFF" />

            <Text style={styles.categoryText}>{category.name}</Text>

          </TouchableOpacity>

        ))}

      </View>

    );

  };



  const renderDestinations = () => {

    const destinations = {

      '国内游': ['烟台', '威海', '山东', '新疆'],

      '出境游': ['日本', '韩国', '仙本那', '泰国'],

    };



    return (

      <View style={styles.destinationsContainer}>

        {Object.entries(destinations).map(([type, places]) => (

          <View key={type} style={styles.destinationTypeContainer}>

            <Text style={styles.destinationType}>{type}</Text>

            <View style={styles.destinationItemsContainer}>

              {places.map((place) => (

                <TouchableOpacity key={place} style={styles.destinationItem}>

                  <Image

                    source={require('../assets/snack-icon.png')}

                    style={styles.destinationImage}

                  />

                  <Text style={styles.destinationText}>{place}</Text>

                </TouchableOpacity>

              ))}

            </View>

          </View>

        ))}

      </View>

    );

  };



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="place" size={20} color="#999" />

          <TextInput

            style={styles.searchInput}

            placeholder="目的地/关键词"

            placeholderTextColor="#999"

          />

          <Icon name="search" size={20} color="#999" />

        </View>

        <TouchableOpacity>

          <Icon name="chat-bubble-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="more-vert" size={24} color="#000" />

        </TouchableOpacity>

      </View>

      {renderTabs()}

      <ScrollView style={styles.content}>

        {renderCategories()}

        {renderDestinations()}

      </ScrollView>

      <View style={styles.bottomNavBar}>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Home')}>

          <Icon name="home" size={24} color="#007AFF" />

          <Text style={styles.bottomNavText}>旅游首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="place" size={24} color="#999" />

          <Text style={styles.bottomNavText}>目的地</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="history" size={24} color="#999" />

          <Text style={styles.bottomNavText}>浏览历史</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="favorite-border" size={24} color="#999" />

          <Text style={styles.bottomNavText}>我的收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Icon name="assignment" size={24} color="#999" />

          <Text style={styles.bottomNavText}>我的订单</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFF',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    marginHorizontal: 10,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    paddingVertical: 8,

    marginLeft: 5,

  },

  tabContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    paddingVertical: 10,

  },

  tab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 5,

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#007AFF',

  },

  tabText: {

    fontSize: 16,

    color: '#999',

  },

  selectedTabText: {

    color: '#007AFF',

    fontWeight: 'bold',

  },

  content: {

    flex: 1,

  },

  categoriesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    backgroundColor: '#FFF',

    padding: 10,

  },

  categoryItem: {

    width: '25%',

    alignItems: 'center',

    marginBottom: 15,

  },

  categoryText: {

    marginTop: 5,

    fontSize: 12,

  },

  destinationsContainer: {

    marginTop: 10,

    backgroundColor: '#FFF',

    padding: 10,

  },

  destinationTypeContainer: {

    marginBottom: 15,

  },

  destinationType: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  destinationItemsContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  destinationItem: {

    width: '23%',

    alignItems: 'center',

  },

  destinationImage: {

    width: 80,

    height: 80,

    borderRadius: 5,

    marginBottom: 5,

  },

  destinationText: {

    fontSize: 12,

  },

  bottomNavBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  bottomNavItem: {

    alignItems: 'center',

  },

  bottomNavText: {

    fontSize: 12,

    marginTop: 2,

    color: '#999',

  },

});



export default TravelScreen;