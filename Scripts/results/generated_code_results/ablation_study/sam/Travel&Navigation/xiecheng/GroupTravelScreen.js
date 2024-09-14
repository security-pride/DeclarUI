import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const GroupTravelScreen = ({ navigation }) => {

  const [selectedTab, setSelectedTab] = useState('国内跟团游');

  const [selectedDestination, setSelectedDestination] = useState('烟台');

  const [adults, setAdults] = useState(2);

  const [children, setChildren] = useState(0);



  const handleTabPress = (tab) => {

    setSelectedTab(tab);

  };



  const handleDestinationPress = (destination) => {

    setSelectedDestination(destination);

  };



  const handleSearch = () => {

    navigation.navigate('GroupTravelSearchResult', { searchQuery: selectedDestination });

  };



  const navigateToTravel = () => {

    navigation.navigate('Travel');

  };



  const renderTabs = () => (

    <View style={styles.tabContainer}>

      {['国内跟团游', '国际跟团游'].map((tab) => (

        <TouchableOpacity

          key={tab}

          style={[styles.tab, selectedTab === tab && styles.selectedTab]}

          onPress={() => handleTabPress(tab)}

        >

          <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>{tab}</Text>

        </TouchableOpacity>

      ))}

    </View>

  );



  const renderPopularDestinations = () => (

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinationsContainer}>

      {['烟台', '西安', '大连', '上海', '成都', '南京'].map((destination) => (

        <TouchableOpacity

          key={destination}

          style={[styles.destinationItem, selectedDestination === destination && styles.selectedDestination]}

          onPress={() => handleDestinationPress(destination)}

        >

          <Text style={[styles.destinationText, selectedDestination === destination && styles.selectedDestinationText]}>

            {destination}

          </Text>

        </TouchableOpacity>

      ))}

    </ScrollView>

  );



  const renderFilters = () => (

    <View style={styles.filtersContainer}>

      {['热门目的地', '游玩天数', '出发日期', '人数'].map((filter) => (

        <TouchableOpacity key={filter} style={styles.filterItem}>

          <Text style={styles.filterText}>{filter}</Text>

          <Icon name="keyboard-arrow-down" size={20} color="#666" />

        </TouchableOpacity>

      ))}

    </View>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

        {renderTabs()}

        {renderPopularDestinations()}

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            placeholder="搜索目的地/关键词"

            value={selectedDestination}

            onChangeText={setSelectedDestination}

          />

          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>

            <Text style={styles.searchButtonText}>查询</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.travelersContainer}>

          <Text style={styles.travelersText}>{`${adults}成人 ${children}儿童`}</Text>

          <TouchableOpacity>

            <Text style={styles.modifyText}>修改</Text>

          </TouchableOpacity>

        </View>

        {renderFilters()}

      </ScrollView>

      <View style={styles.bottomNavBar}>

        {['跟团首页', '目的地', '浏览历史', '我的收藏', '我的订单'].map((item) => (

          <TouchableOpacity key={item} style={styles.bottomNavItem} onPress={item === '跟团首页' ? navigateToTravel : undefined}>

            <Icon name="place" size={24} color="#666" />

            <Text style={styles.bottomNavText}>{item}</Text>

          </TouchableOpacity>

        ))}

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  bannerImage: {

    width: '100%',

    height: 200,

    resizeMode: 'cover',

  },

  tabContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#FFF',

  },

  tab: {

    paddingVertical: 5,

    paddingHorizontal: 10,

  },

  selectedTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#1E90FF',

  },

  tabText: {

    fontSize: 16,

    color: '#666',

  },

  selectedTabText: {

    color: '#1E90FF',

    fontWeight: 'bold',

  },

  destinationsContainer: {

    paddingVertical: 10,

    backgroundColor: '#FFF',

  },

  destinationItem: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    marginHorizontal: 5,

    borderRadius: 15,

    backgroundColor: '#F0F0F0',

  },

  selectedDestination: {

    backgroundColor: '#1E90FF',

  },

  destinationText: {

    fontSize: 14,

    color: '#666',

  },

  selectedDestinationText: {

    color: '#FFF',

  },

  searchContainer: {

    flexDirection: 'row',

    padding: 10,

    backgroundColor: '#FFF',

  },

  searchInput: {

    flex: 1,

    height: 40,

    borderWidth: 1,

    borderColor: '#DDD',

    borderRadius: 20,

    paddingHorizontal: 15,

    marginRight: 10,

  },

  searchButton: {

    backgroundColor: '#1E90FF',

    paddingHorizontal: 20,

    justifyContent: 'center',

    alignItems: 'center',

    borderRadius: 20,

  },

  searchButtonText: {

    color: '#FFF',

    fontWeight: 'bold',

  },

  travelersContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FFF',

    marginTop: 10,

  },

  travelersText: {

    fontSize: 14,

    color: '#666',

  },

  modifyText: {

    fontSize: 14,

    color: '#1E90FF',

  },

  filtersContainer: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#FFF',

    marginTop: 10,

  },

  filterItem: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  filterText: {

    fontSize: 14,

    color: '#666',

    marginRight: 5,

  },

  bottomNavBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    paddingVertical: 10,

    backgroundColor: '#FFF',

    borderTopWidth: 1,

    borderTopColor: '#DDD',

  },

  bottomNavItem: {

    alignItems: 'center',

  },

  bottomNavText: {

    fontSize: 12,

    color: '#666',

    marginTop: 5,

  },

});



export default GroupTravelScreen;