import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const categories = [

    { name: '酒店', icon: 'hotel' },

    { name: '机票', icon: 'flight' },

    { name: '火车票', icon: 'train' },

    { name: '旅游', icon: 'beach-access' },

    { name: '攻略/景点', icon: 'map' },

  ];



  const specialOffers = [

    { name: '特价专区', image: require('../assets/snack-icon.png') },

    { name: '直播团购', image: require('../assets/snack-icon.png') },

    { name: '口碑榜', image: require('../assets/snack-icon.png') },

    { name: '旅行热点', image: require('../assets/snack-icon.png') },

  ];



  const renderCategory = (category) => (

    <TouchableOpacity key={category.name} style={styles.categoryItem}>

      <Icon name={category.icon} size={24} color="#1890ff" />

      <Text style={styles.categoryText}>{category.name}</Text>

    </TouchableOpacity>

  );



  const renderSpecialOffer = (offer) => (

    <TouchableOpacity key={offer.name} style={styles.offerItem}>

      <Image source={offer.image} style={styles.offerImage} />

      <Text style={styles.offerText}>{offer.name}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#999" />

          <TextInput

            style={styles.searchInput}

            placeholder="搜索"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Travel')}>

          <Icon name="map" size={24} color="#1890ff" />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.categories}>

          {categories.map(renderCategory)}

        </View>



        <View style={styles.specialOffers}>

          {specialOffers.map(renderSpecialOffer)}

        </View>



        <View style={styles.currentTrip}>

          <View style={styles.tripHeader}>

            <Text style={styles.tripTitle}>您有一段旅程</Text>

            <TouchableOpacity>

              <Text style={styles.moreText}>更多</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.tripDetails}>

            <Icon name="location-on" size={20} color="#1890ff" />

            <Text style={styles.tripText}>烟台百纳瑞汀酒店</Text>

          </View>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#1890ff" />

          <Text style={styles.navText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="group" size={24} color="#999" />

          <Text style={styles.navText}>社区</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="message" size={24} color="#999" />

          <Text style={styles.navText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="calendar-today" size={24} color="#999" />

          <Text style={styles.navText}>行程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person" size={24} color="#999" />

          <Text style={styles.navText}>我的</Text>

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

    backgroundColor: '#fff',

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

  searchInput: {

    flex: 1,

    marginLeft: 5,

    fontSize: 16,

  },

  categories: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#fff',

    paddingVertical: 15,

  },

  categoryItem: {

    alignItems: 'center',

  },

  categoryText: {

    marginTop: 5,

    fontSize: 12,

  },

  specialOffers: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#fff',

    paddingVertical: 15,

    marginTop: 10,

  },

  offerItem: {

    alignItems: 'center',

  },

  offerImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  offerText: {

    marginTop: 5,

    fontSize: 12,

  },

  currentTrip: {

    backgroundColor: '#fff',

    marginTop: 10,

    padding: 15,

  },

  tripHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  tripTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  moreText: {

    color: '#1890ff',

  },

  tripDetails: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  tripText: {

    marginLeft: 5,

    fontSize: 14,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 5,

  },

});



export default HomeScreen;