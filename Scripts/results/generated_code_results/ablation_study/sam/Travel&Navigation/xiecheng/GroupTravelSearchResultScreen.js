import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const GroupTravelSearchResultScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('烟台出发');

  const [selectedFilter, setSelectedFilter] = useState('推荐排序');



  const filters = ['天数/日期', '人数 2', '线路玩法', '筛选'];



  const tourResults = [

    {

      id: '1',

      title: '烟台+蓬莱区·2日1晚',

      price: '¥965起',

      rating: '5.0分',

      sales: '已售11人',

      description: '纯玩无购物·6人小团·提前2天免费退',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '2',

      title: '烟台+威海·3日2晚',

      price: '¥1699起',

      rating: '5.0分',

      sales: '已售4人',

      description: '纯玩无购物·6人小团·提前2天免费退',

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderTourItem = ({ item }) => (

    <TouchableOpacity

      style={styles.tourItem}

      onPress={() => navigation.navigate('GroupDetails', { tourId: item.id })}

    >

      <Image source={item.image} style={styles.tourImage} />

      <View style={styles.tourInfo}>

        <Text style={styles.tourTitle}>{item.title}</Text>

        <Text style={styles.tourDescription}>{item.description}</Text>

        <View style={styles.tourRatingContainer}>

          <Text style={styles.tourRating}>{item.rating}</Text>

          <Text style={styles.tourSales}>{item.sales}</Text>

        </View>

        <Text style={styles.tourPrice}>{item.price}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.navigate('GroupTravel')}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Icon name="search" size={20} color="#999" />

          <TextInput

            style={styles.searchInput}

            value={searchQuery}

            onChangeText={setSearchQuery}

            placeholder="搜索目的地/关键词"

          />

          <TouchableOpacity onPress={() => setSearchQuery('')}>

            <Icon name="close" size={20} color="#999" />

          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.filterContainer}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {filters.map((filter, index) => (

            <TouchableOpacity

              key={index}

              style={[

                styles.filterItem,

                selectedFilter === filter && styles.selectedFilter,

              ]}

              onPress={() => setSelectedFilter(filter)}

            >

              <Text style={styles.filterText}>{filter}</Text>

              <Icon name="arrow-drop-down" size={20} color="#333" />

            </TouchableOpacity>

          ))}

        </ScrollView>

      </View>

      <FlatList

        data={tourResults}

        renderItem={renderTourItem}

        keyExtractor={(item) => item.id}

        contentContainerStyle={styles.tourList}

      />

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

    marginLeft: 10,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    marginLeft: 5,

    fontSize: 16,

  },

  filterContainer: {

    backgroundColor: '#fff',

    paddingVertical: 10,

  },

  filterItem: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingVertical: 5,

    marginHorizontal: 5,

    borderRadius: 15,

    borderWidth: 1,

    borderColor: '#e0e0e0',

  },

  selectedFilter: {

    backgroundColor: '#e6f7ff',

    borderColor: '#1890ff',

  },

  filterText: {

    fontSize: 14,

    marginRight: 5,

  },

  tourList: {

    padding: 10,

  },

  tourItem: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    borderRadius: 8,

    marginBottom: 10,

    overflow: 'hidden',

  },

  tourImage: {

    width: 100,

    height: 100,

  },

  tourInfo: {

    flex: 1,

    padding: 10,

  },

  tourTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  tourDescription: {

    fontSize: 14,

    color: '#666',

    marginBottom: 5,

  },

  tourRatingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  tourRating: {

    fontSize: 14,

    color: '#ff9800',

    marginRight: 10,

  },

  tourSales: {

    fontSize: 14,

    color: '#999',

  },

  tourPrice: {

    fontSize: 16,

    color: '#f50',

    fontWeight: 'bold',

  },

});



export default GroupTravelSearchResultScreen;