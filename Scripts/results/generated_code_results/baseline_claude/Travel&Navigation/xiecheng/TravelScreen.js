import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  TouchableOpacity,

  Image,

  ScrollView,

  StyleSheet,

  FlatList,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TravelScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('精选');

  const [searchText, setSearchText] = useState('');



  const tabs = ['精选', '国内游', '出境游'];

  const visaFreeDestinations = ['泰国', '新加坡', '马尔代夫', '马来西亚', '巴厘'];

  const travelTypes = [

    { id: '1', icon: '../assets/snack-icon.png', name: '跟团游', highlight: true },

    { id: '2', icon: '../assets/snack-icon.png', name: '私家团' },

    { id: '3', icon: '../assets/snack-icon.png', name: '当地参团' },

    { id: '4', icon: '../assets/snack-icon.png', name: '邮轮', tag: '迪士尼游轮' },

    { id: '5', icon: '../assets/snack-icon.png', name: '自由行', highlight: true },

    { id: '6', icon: '../assets/snack-icon.png', name: '定制旅行' },

    { id: '7', icon: '../assets/snack-icon.png', name: '包车游' },

    { id: '8', icon: '../assets/snack-icon.png', name: '门票·玩乐' },

  ];

  const moreTravelTypes = ['高端游', '亲子游', '公司团建', '老友精选', '周边'];

  const destinations = [

    { id: '1', image: '../assets/snack-icon.png', name: '烟台', tag: '蓬莱阁' },

    { id: '2', image: '../assets/snack-icon.png', name: '新疆', tag: '探访我的阿勒泰' },

    { id: '3', image: '../assets/snack-icon.png', name: '日本', tag: '东京' },

    { id: '4', image: '../assets/snack-icon.png', name: '韩国', tag: '首尔' },

    { id: '5', image: '../assets/snack-icon.png', name: '威海' },

    { id: '6', image: '../assets/snack-icon.png', name: '山东' },

    { id: '7', image: '../assets/snack-icon.png', name: '仙本那' },

    { id: '8', image: '../assets/snack-icon.png', name: '泰国' },

  ];



  const renderTravelType = ({ item }) => (

    <TouchableOpacity style={[styles.travelTypeItem, item.highlight && styles.highlightedTravelType]}>

      <Image source={item.icon} style={styles.travelTypeIcon} />

      <Text style={styles.travelTypeName}>{item.name}</Text>

      {item.tag && <Text style={styles.travelTypeTag}>{item.tag}</Text>}

    </TouchableOpacity>

  );



  const renderDestination = ({ item }) => (

    <TouchableOpacity style={styles.destinationItem}>

      <Image source={item.image} style={styles.destinationImage} />

      <Text style={styles.destinationName}>{item.name}</Text>

      {item.tag && <Text style={styles.destinationTag}>{item.tag}</Text>}

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

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

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.messageIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <View style={styles.searchContainer}>

          <View style={styles.searchBar}>

            <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

            <Text style={styles.locationText}>烟台出发</Text>

            <TextInput

              style={styles.searchInput}

              placeholder="目的地/关键词"

              value={searchText}

              onChangeText={setSearchText}

            />

            <TouchableOpacity style={styles.searchButton}>

              <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.destinationButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.destinationIcon} />

            <Text style={styles.destinationButtonText}>目的地</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.visaFreeContainer}>

          <Text style={styles.visaFreeTitle}>免签落地签：</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            {visaFreeDestinations.map((destination, index) => (

              <TouchableOpacity key={index} style={styles.visaFreeItem}>

                <Text style={styles.visaFreeText}>{destination}</Text>

              </TouchableOpacity>

            ))}

          </ScrollView>

        </View>



        <FlatList

          data={travelTypes}

          renderItem={renderTravelType}

          keyExtractor={(item) => item.id}

          numColumns={4}

          style={styles.travelTypeList}

        />



        <View style={styles.moreTravelTypesContainer}>

          {moreTravelTypes.map((type, index) => (

            <TouchableOpacity key={index} style={styles.moreTravelTypeItem}>

              <Text style={styles.moreTravelTypeText}>{type}</Text>

            </TouchableOpacity>

          ))}

          <TouchableOpacity style={styles.moreTravelTypeItem}>

            <Text style={styles.moreTravelTypeText}>更多玩法 ></Text>

          </TouchableOpacity>

        </View>



        <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />



        <TouchableOpacity style={styles.nearbyShopsButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.shopIcon} />

          <Text style={styles.nearbyShopsText}>附近有3家携程门店</Text>

          <Text style={styles.nearbyShopsDistance}>最近距您3.5km ></Text>

        </TouchableOpacity>



        <View style={styles.destinationSection}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>国内游</Text>

            <TouchableOpacity>

              <Text style={styles.sectionMore}>更多 ></Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={destinations.slice(0, 4)}

            renderItem={renderDestination}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <View style={styles.destinationSection}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>出境游</Text>

            <TouchableOpacity>

              <Text style={styles.sectionMore}>更多 ></Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={destinations.slice(4)}

            renderItem={renderDestination}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>



      <View style={styles.footer}>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>旅游首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>目的地</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>浏览历史</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>我的收藏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.footerIcon} />

          <Text style={styles.footerText}>我的订单</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 10,

    paddingTop: 40,

    paddingBottom: 10,

    backgroundColor: '#1E90FF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  tabContainer: {

    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

  },

  tab: {

    paddingHorizontal: 15,

    paddingVertical: 5,

  },

  selectedTab: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

  },

  tabText: {

    color: '#FFFFFF',

    fontSize: 16,

  },

  selectedTabText: {

    color: '#1E90FF',

  },

  messageIcon: {

    width: 24,

    height: 24,

  },

  moreIcon: {

    width: 24,

    height: 24,

    marginLeft: 10,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

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

  },

  locationText: {

    marginLeft: 5,

    fontSize: 14,

    color: '#333333',

  },

  searchInput: {

    flex: 1,

    marginLeft: 10,

    fontSize: 14,

  },

  searchButton: {

    padding: 5,

  },

  searchIcon: {

    width: 20,

    height: 20,

  },

  destinationButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginLeft: 10,

  },

  destinationIcon: {

    width: 24,

    height: 24,

  },

  destinationButtonText: {

    marginLeft: 5,

    fontSize: 14,

    color: '#333333',

  },

  visaFreeContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  visaFreeTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    color: '#333333',

  },

  visaFreeItem: {

    paddingHorizontal: 10,

    paddingVertical: 5,

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    marginRight: 10,

  },

  visaFreeText: {

    fontSize: 12,

    color: '#666666',

  },

  travelTypeList: {

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  travelTypeItem: {

    flex: 1,

    alignItems: 'center',

    marginBottom: 10,

  },

  highlightedTravelType: {

    backgroundColor: '#FFF7E6',

    borderRadius: 5,

    padding: 5,

  },

  travelTypeIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  travelTypeName: {

    fontSize: 12,

    color: '#333333',

  },

  travelTypeTag: {

    fontSize: 10,

    color: '#FF6600',

    backgroundColor: '#FFF0E6',

    paddingHorizontal: 5,

    paddingVertical: 2,

    borderRadius: 10,

    marginTop: 5,

  },

  moreTravelTypesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  moreTravelTypeItem: {

    paddingHorizontal: 10,

    paddingVertical: 5,

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    margin: 5,

  },

  moreTravelTypeText: {

    fontSize: 12,

    color: '#666666',

  },

  bannerImage: {

    width: '100%',

    height: 100,

    resizeMode: 'cover',

  },

  nearbyShopsButton: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFFFFF',

    marginVertical: 10,

  },

  shopIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  nearbyShopsText: {

    flex: 1,

    fontSize: 14,

    color: '#333333',

  },

  nearbyShopsDistance: {

    fontSize: 12,

    color: '#1E90FF',

  },

  destinationSection: {

    backgroundColor: '#FFFFFF',

    padding: 10,

    marginBottom: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#333333',

  },

  sectionMore: {

    fontSize: 12,

    color: '#666666',

  },

  destinationItem: {

    marginRight: 10,

  },

  destinationImage: {

    width: 120,

    height: 80,

    borderRadius: 5,

  },

  destinationName: {

    fontSize: 14,

    color: '#333333',

    marginTop: 5,

  },

  destinationTag: {

    fontSize: 12,

    color: '#666666',

  },

  footer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  footerItem: {

    alignItems: 'center',

  },

  footerIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  footerText: {

    fontSize: 12,

    color: '#666666',

  },

});



export default TravelScreen;