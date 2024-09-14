import React, { useState } from 'react';

import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('烟台百纳瑞汀酒店（第一海水浴...');



  const topDestinations = ['烟台', '威海', '蓬莱阁', '长岛', '武汉'];



  const mainCategories = [

    { icon: 'hotel', label: '酒店' },

    { icon: 'flight', label: '机票' },

    { icon: 'train', label: '火车票' },

    { icon: 'beach-access', label: '旅游' },

    { icon: 'map', label: '攻略/景点' },

  ];



  const subCategories = [

    { icon: 'home', label: '民宿/客栈' },

    { icon: 'flight-takeoff', label: '机票+酒店' },

    { icon: 'directions-bus', label: '汽车/船票' },

    { icon: 'local-activity', label: '门票/玩乐' },

    { icon: 'restaurant', label: '美食/购物' },

    { icon: 'hotel', label: '酒店套餐' },

    { icon: 'airport-shuttle', label: '接送机/包车' },

    { icon: 'directions-car', label: '租车' },

    { icon: 'account-balance-wallet', label: '签证/换外币' },

    { icon: 'monetization-on', label: '借钱/分期' },

  ];



  const specialOffers = [

    { title: '精选酒店套餐', image: require('../assets/snack-icon.png') },

    { title: '好货超值购', image: require('../assets/snack-icon.png') },

    { title: '美景酒店榜', image: require('../assets/snack-icon.png') },

    { title: '烟台海水浴场', image: require('../assets/snack-icon.png') },

  ];



  const renderTopDestination = (item) => (

    <TouchableOpacity style={styles.topDestinationItem}>

      <Text style={styles.topDestinationText}>{item}</Text>

    </TouchableOpacity>

  );



  const renderMainCategory = ({ item }) => (

    <TouchableOpacity style={styles.mainCategoryItem}>

      <Icon name={item.icon} size={24} color="#333" />

      <Text style={styles.mainCategoryLabel}>{item.label}</Text>

    </TouchableOpacity>

  );



  const renderSubCategory = ({ item }) => (

    <TouchableOpacity style={styles.subCategoryItem}>

      <Icon name={item.icon} size={24} color="#333" />

      <Text style={styles.subCategoryLabel}>{item.label}</Text>

    </TouchableOpacity>

  );



  const renderSpecialOffer = ({ item }) => (

    <TouchableOpacity style={styles.specialOfferItem}>

      <Image source={item.image} style={styles.specialOfferImage} />

      <Text style={styles.specialOfferTitle}>{item.title}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Icon name="search" size={24} color="#999" />

          <TextInput

            style={styles.searchInput}

            value={searchText}

            onChangeText={setSearchText}

            placeholder="搜索目的地、酒店、景点"

          />

        </View>

        <TouchableOpacity style={styles.mapButton}>

          <Icon name="map" size={24} color="#333" />

          <Text style={styles.mapButtonText}>旅游地图</Text>

        </TouchableOpacity>

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.topDestinations}>

        {topDestinations.map((item, index) => renderTopDestination(item, index))}

      </ScrollView>



      <FlatList

        data={mainCategories}

        renderItem={renderMainCategory}

        keyExtractor={(item) => item.label}

        numColumns={5}

        style={styles.mainCategories}

      />



      <FlatList

        data={subCategories}

        renderItem={renderSubCategory}

        keyExtractor={(item) => item.label}

        numColumns={5}

        style={styles.subCategories}

      />



      <View style={styles.specialOffers}>

        <Text style={styles.sectionTitle}>特价专区</Text>

        <FlatList

          data={specialOffers}

          renderItem={renderSpecialOffer}

          keyExtractor={(item) => item.title}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

      </View>



      <TouchableOpacity style={styles.reputationBanner}>

        <Text style={styles.reputationBannerText}>年度口碑榜酒店 惊喜0元住</Text>

        <Text style={styles.reputationBannerSubtext}>2024全球100 亚洲100</Text>

      </TouchableOpacity>



      <View style={styles.currentTrip}>

        <Text style={styles.sectionTitle}>您有一段旅程</Text>

        <View style={styles.tripDetails}>

          <Text style={styles.tripHotel}>烟台百纳瑞汀酒店（第一海水浴场火车站店）</Text>

          <Text style={styles.tripDates}>7月17日入住 · 3晚 · 7月20日离店</Text>

          <Text style={styles.tripRoom}>瑞雅海景大床房 1间</Text>

        </View>

      </View>

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

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    marginLeft: 10,

    fontSize: 16,

  },

  mapButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginLeft: 10,

  },

  mapButtonText: {

    marginLeft: 5,

    fontSize: 14,

    color: '#333',

  },

  topDestinations: {

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  topDestinationItem: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderRadius: 15,

    backgroundColor: '#f0f0f0',

    marginHorizontal: 5,

  },

  topDestinationText: {

    fontSize: 14,

    color: '#333',

  },

  mainCategories: {

    backgroundColor: '#fff',

    paddingVertical: 15,

  },

  mainCategoryItem: {

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 10,

  },

  mainCategoryLabel: {

    marginTop: 5,

    fontSize: 12,

    color: '#333',

  },

  subCategories: {

    backgroundColor: '#fff',

    paddingVertical: 15,

    marginTop: 10,

  },

  subCategoryItem: {

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 10,

  },

  subCategoryLabel: {

    marginTop: 5,

    fontSize: 12,

    color: '#333',

  },

  specialOffers: {

    marginTop: 10,

    backgroundColor: '#fff',

    padding: 15,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  specialOfferItem: {

    marginRight: 15,

  },

  specialOfferImage: {

    width: 120,

    height: 80,

    borderRadius: 8,

  },

  specialOfferTitle: {

    marginTop: 5,

    fontSize: 14,

    color: '#333',

  },

  reputationBanner: {

    marginTop: 10,

    backgroundColor: '#ff6b6b',

    padding: 15,

    borderRadius: 8,

  },

  reputationBannerText: {

    color: '#fff',

    fontSize: 16,

    fontWeight: 'bold',

  },

  reputationBannerSubtext: {

    color: '#fff',

    fontSize: 14,

    marginTop: 5,

  },

  currentTrip: {

    marginTop: 10,

    backgroundColor: '#fff',

    padding: 15,

  },

  tripDetails: {

    backgroundColor: '#f0f0f0',

    padding: 10,

    borderRadius: 8,

  },

  tripHotel: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  tripDates: {

    fontSize: 14,

    color: '#666',

    marginBottom: 5,

  },

  tripRoom: {

    fontSize: 14,

    color: '#666',

  },

});



export default HomeScreen;