import React, { useState } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const GroupTravelSearchResultScreen = () => {

  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('烟台出发参团');

  const [searchText, setSearchText] = useState('烟台');

  const [personCount, setPersonCount] = useState(2);



  const tabs = ['烟台出发参团', '亲子·游学', '店铺'];

  const filterOptions = ['推荐排序', '天数/日期', '人数', '线路玩法', '筛选'];

  const tags = ['携程自营', '2天', '暑期大促', '拼小团', '5钻', '金牌店铺'];



  const travelPackages = [

    {

      id: 1,

      type: '拼小团',

      departure: '烟台出发',

      rating: 3,

      title: '烟台+蓬莱区·2日1晚',

      description: '游玩 帆船出海·喂海鸥·体验赶海乐趣',

      accommodations: '全程3钻酒店',

      services: '纯玩无购物·6人小团·提前2天免费退',

      score: 5.0,

      salesCount: 11,

      storeName: '烟台玩美国旅 进店>',

      price: 965,

      discount: 100,

      image: require('../assets/snack-icon.png'),

    },

    {

      id: 2,

      type: '拼小团',

      departure: '烟台出发',

      rating: 3,

      title: '烟台+威海·3日2晚',

      description: '游玩 烟台玩1天·帆船出海',

      accommodations: '全程3钻酒店',

      services: '纯玩无购物·6人小团·提前2天免费退',

      score: 5.0,

      salesCount: 4,

      storeName: '烟台玩美国旅 进店>',

      price: 1699,

      discount: 100,

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderTravelPackage = ({ item }) => (

    <TouchableOpacity style={styles.packageContainer}>

      <Image source={item.image} style={styles.packageImage} />

      <View style={styles.packageContent}>

        <View style={styles.packageHeader}>

          <Text style={styles.packageType}>{item.type}</Text>

          <Text style={styles.packageDeparture}>{item.departure}</Text>

          <View style={styles.ratingContainer}>

            <Text style={styles.ratingText}>优选</Text>

            <Text style={styles.ratingScore}>{item.rating}</Text>

          </View>

        </View>

        <Text style={styles.packageTitle}>{item.title}</Text>

        <Text style={styles.packageDescription}>{item.description}</Text>

        <Text style={styles.packageAccommodations}>{item.accommodations}</Text>

        <Text style={styles.packageServices}>{item.services}</Text>

        <View style={styles.packageFooter}>

          <View style={styles.scoreContainer}>

            <Text style={styles.scoreText}>{item.score}分</Text>

            <Text style={styles.salesCount}>已售{item.salesCount}人</Text>

            <Text style={styles.storeName}>{item.storeName}</Text>

          </View>

          <View style={styles.priceContainer}>

            <Text style={styles.price}>¥{item.price}起</Text>

            <Text style={styles.discount}>限时促销 已减{item.discount}></Text>

          </View>

        </View>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

          <TextInput

            style={styles.searchInput}

            value={searchText}

            onChangeText={setSearchText}

            placeholder="搜索目的地/景点/关键词"

          />

          <TouchableOpacity onPress={() => setSearchText('')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.clearIcon} />

          </TouchableOpacity>

        </View>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.tabContainer}>

        {tabs.map((tab, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.tab, activeTab === tab && styles.activeTab]}

            onPress={() => setActiveTab(tab)}

          >

            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>

        {filterOptions.map((option, index) => (

          <TouchableOpacity key={index} style={styles.filterOption}>

            <Text style={styles.filterOptionText}>{option}</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.arrowDownIcon} />

          </TouchableOpacity>

        ))}

      </ScrollView>



      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tagContainer}>

        {tags.map((tag, index) => (

          <TouchableOpacity key={index} style={styles.tag}>

            <Text style={styles.tagText}>{tag}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>



      <View style={styles.diamondBanner}>

        <Image source={require('../assets/snack-icon.png')} style={styles.diamondIcon} />

        <Text style={styles.diamondText}>钻石贵宾&机票用户尊享</Text>

        <Text style={styles.diamondSubtext}>可享专属预订折扣·无忧退订</Text>

        <TouchableOpacity style={styles.detailsButton}>

          <Text style={styles.detailsButtonText}>详情 ></Text>

        </TouchableOpacity>

      </View>



      <FlatList

        data={travelPackages}

        renderItem={renderTravelPackage}

        keyExtractor={(item) => item.id.toString()}

        showsVerticalScrollIndicator={false}

      />

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

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    borderRadius: 20,

    paddingHorizontal: 10,

  },

  locationIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 36,

    fontSize: 14,

  },

  clearIcon: {

    width: 16,

    height: 16,

  },

  messageIcon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  moreIcon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  tabContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    paddingVertical: 10,

  },

  tab: {

    flex: 1,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1E90FF',

  },

  tabText: {

    fontSize: 14,

    color: '#333',

  },

  activeTabText: {

    color: '#1E90FF',

    fontWeight: 'bold',

  },

  filterContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    paddingHorizontal: 5,

  },

  filterOption: {

    flexDirection: 'row',

    alignItems: 'center',

    marginHorizontal: 5,

  },

  filterOptionText: {

    fontSize: 12,

    color: '#333',

    marginRight: 5,

  },

  arrowDownIcon: {

    width: 12,

    height: 12,

  },

  tagContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    paddingHorizontal: 5,

  },

  tag: {

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    paddingHorizontal: 10,

    paddingVertical: 5,

    marginHorizontal: 5,

  },

  tagText: {

    fontSize: 12,

    color: '#333',

  },

  diamondBanner: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    padding: 10,

    marginVertical: 5,

  },

  diamondIcon: {

    width: 24,

    height: 24,

    marginRight: 5,

  },

  diamondText: {

    fontSize: 12,

    color: '#333',

    fontWeight: 'bold',

  },

  diamondSubtext: {

    fontSize: 10,

    color: '#666',

    marginLeft: 5,

  },

  detailsButton: {

    marginLeft: 'auto',

  },

  detailsButtonText: {

    fontSize: 12,

    color: '#1E90FF',

  },

  packageContainer: {

    flexDirection: 'row',

    backgroundColor: '#FFF',

    marginBottom: 10,

    padding: 10,

  },

  packageImage: {

    width: 100,

    height: 100,

    borderRadius: 5,

    marginRight: 10,

  },

  packageContent: {

    flex: 1,

  },

  packageHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  packageType: {

    fontSize: 12,

    color: '#1E90FF',

    backgroundColor: '#E6F3FF',

    paddingHorizontal: 5,

    paddingVertical: 2,

    borderRadius: 3,

    marginRight: 5,

  },

  packageDeparture: {

    fontSize: 12,

    color: '#666',

  },

  ratingContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginLeft: 'auto',

  },

  ratingText: {

    fontSize: 12,

    color: '#FF6347',

    marginRight: 5,

  },

  ratingScore: {

    fontSize: 12,

    color: '#FF6347',

    fontWeight: 'bold',

  },

  packageTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  packageDescription: {

    fontSize: 12,

    color: '#666',

    marginBottom: 5,

  },

  packageAccommodations: {

    fontSize: 12,

    color: '#666',

    marginBottom: 5,

  },

  packageServices: {

    fontSize: 12,

    color: '#666',

    marginBottom: 5,

  },

  packageFooter: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'flex-end',

  },

  scoreContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  scoreText: {

    fontSize: 12,

    color: '#FF6347',

    fontWeight: 'bold',

    marginRight: 5,

  },

  salesCount: {

    fontSize: 12,

    color: '#666',

    marginRight: 5,

  },

  storeName: {

    fontSize: 12,

    color: '#1E90FF',

  },

  priceContainer: {

    alignItems: 'flex-end',

  },

  price: {

    fontSize: 18,

    color: '#FF6347',

    fontWeight: 'bold',

  },

  discount: {

    fontSize: 12,

    color: '#FF6347',

  },

});



export default GroupTravelSearchResultScreen;