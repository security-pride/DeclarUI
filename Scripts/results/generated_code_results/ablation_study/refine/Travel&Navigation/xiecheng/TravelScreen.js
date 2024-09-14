import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  Image,

  TouchableOpacity,

  StyleSheet,

  ScrollView,

  FlatList,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const TravelScreen = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');



  const visaFreeCountries = ['泰国', '新加坡', '马尔代夫', '马来西亚', '巴厘'];



  const travelTypes = [

    { id: '1', icon: 'group', label: '跟团游' },

    { id: '2', icon: 'person', label: '私家团' },

    { id: '3', icon: 'place', label: '当地参团' },

    { id: '4', icon: 'directions-boat', label: '邮轮' },

    { id: '5', icon: 'flight', label: '自由行' },

    { id: '6', icon: 'build', label: '定制旅行' },

    { id: '7', icon: 'directions-car', label: '包车游' },

    { id: '8', icon: 'event', label: '一日游' },

  ];



  const destinations = [

    { id: '1', image: require('../assets/snack-icon.png'), name: '烟台', desc: '莲莱阁' },

    { id: '2', image: require('../assets/snack-icon.png'), name: '新疆', desc: '探访我的阿勒泰' },

    { id: '3', image: require('../assets/snack-icon.png'), name: '日本', desc: '东京' },

    { id: '4', image: require('../assets/snack-icon.png'), name: '韩国', desc: '首尔' },

    { id: '5', image: require('../assets/snack-icon.png'), name: '威海', desc: '' },

    { id: '6', image: require('../assets/snack-icon.png'), name: '山东', desc: '' },

    { id: '7', image: require('../assets/snack-icon.png'), name: '仙本那', desc: '' },

    { id: '8', image: require('../assets/snack-icon.png'), name: '泰国', desc: '' },

  ];



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <View style={styles.tabs}>

          <TouchableOpacity style={styles.activeTab}>

            <Text style={styles.activeTabText}>精选</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>国内游</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>出境游</Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity>

          <Icon name="chat-bubble-outline" size={24} color="#000" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="more-vert" size={24} color="#000" />

        </TouchableOpacity>

      </View>



      <View style={styles.searchBar}>

        <Icon name="place" size={20} color="#999" />

        <TextInput

          style={styles.searchInput}

          placeholder="烟台出发"

          value={searchText}

          onChangeText={setSearchText}

        />

        <TouchableOpacity>

          <Icon name="search" size={20} color="#999" />

        </TouchableOpacity>

      </View>



      <View style={styles.visaFreeSection}>

        <Text style={styles.sectionTitle}>免签落地签：</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {visaFreeCountries.map((country, index) => (

            <TouchableOpacity key={index} style={styles.visaFreeItem}>

              <Text style={styles.visaFreeText}>{country}</Text>

            </TouchableOpacity>

          ))}

        </ScrollView>

      </View>



      <View style={styles.travelTypesGrid}>

        {travelTypes.map((type) => (

          <TouchableOpacity key={type.id} style={styles.travelTypeItem}>

            <Icon name={type.icon} size={24} color="#4A90E2" />

            <Text style={styles.travelTypeText}>{type.label}</Text>

          </TouchableOpacity>

        ))}

      </View>



      <View style={styles.categoriesSection}>

        <TouchableOpacity style={styles.categoryItem}>

          <Text style={styles.categoryText}>高端游</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>

          <Text style={styles.categoryText}>亲子游</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>

          <Text style={styles.categoryText}>公司团建</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>

          <Text style={styles.categoryText}>老友精选</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>

          <Text style={styles.categoryText}>周边</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItemMore}>

          <Text style={styles.categoryTextMore}>更多玩法</Text>

          <Icon name="chevron-right" size={16} color="#999" />

        </TouchableOpacity>

      </View>



      <View style={styles.bannerSection}>

        <Image

          source={require('../assets/snack-icon.png')}

          style={styles.bannerImage}

          resizeMode="cover"

        />

      </View>



      <View style={styles.nearbyStoresSection}>

        <Icon name="store" size={16} color="#4A90E2" />

        <Text style={styles.nearbyStoresText}>附近有3家携程门店</Text>

        <Text style={styles.nearbyStoresDistance}>最近距您3.5km</Text>

        <Icon name="chevron-right" size={16} color="#999" />

      </View>



      <View style={styles.destinationsSection}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>国内游</Text>

          <TouchableOpacity>

            <Text style={styles.sectionMore}>更多</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={destinations.slice(0, 4)}

          renderItem={({ item }) => (

            <TouchableOpacity style={styles.destinationItem}>

              <Image source={item.image} style={styles.destinationImage} />

              <Text style={styles.destinationName}>{item.name}</Text>

              <Text style={styles.destinationDesc}>{item.desc}</Text>

            </TouchableOpacity>

          )}

          keyExtractor={(item) => item.id}

          numColumns={2}

        />

      </View>



      <View style={styles.destinationsSection}>

        <View style={styles.sectionHeader}>

          <Text style={styles.sectionTitle}>出境游</Text>

          <TouchableOpacity>

            <Text style={styles.sectionMore}>更多</Text>

          </TouchableOpacity>

        </View>

        <FlatList

          data={destinations.slice(4)}

          renderItem={({ item }) => (

            <TouchableOpacity style={styles.destinationItem}>

              <Image source={item.image} style={styles.destinationImage} />

              <Text style={styles.destinationName}>{item.name}</Text>

              <Text style={styles.destinationDesc}>{item.desc}</Text>

            </TouchableOpacity>

          )}

          keyExtractor={(item) => item.id}

          numColumns={2}

        />

      </View>

    </ScrollView>

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

    justifyContent: 'space-between',

    padding: 10,

    backgroundColor: '#FFF',

  },

  tabs: {

    flexDirection: 'row',

  },

  tab: {

    paddingHorizontal: 15,

    paddingVertical: 5,

  },

  activeTab: {

    paddingHorizontal: 15,

    paddingVertical: 5,

    borderBottomWidth: 2,

    borderBottomColor: '#4A90E2',

  },

  tabText: {

    color: '#999',

  },

  activeTabText: {

    color: '#4A90E2',

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    margin: 10,

    paddingHorizontal: 10,

    borderRadius: 5,

  },

  searchInput: {

    flex: 1,

    paddingVertical: 8,

    marginLeft: 10,

  },

  visaFreeSection: {

    backgroundColor: '#FFF',

    padding: 10,

  },

  sectionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  visaFreeItem: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 15,

    marginRight: 10,

  },

  visaFreeText: {

    color: '#333',

  },

  travelTypesGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    backgroundColor: '#FFF',

    padding: 10,

  },

  travelTypeItem: {

    width: '25%',

    alignItems: 'center',

    marginBottom: 15,

  },

  travelTypeText: {

    marginTop: 5,

    fontSize: 12,

  },

  categoriesSection: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    backgroundColor: '#FFF',

    padding: 10,

    marginTop: 10,

  },

  categoryItem: {

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 15,

    marginRight: 10,

    marginBottom: 10,

  },

  categoryText: {

    color: '#333',

  },

  categoryItemMore: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F0F0F0',

    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 15,

  },

  categoryTextMore: {

    color: '#999',

    marginRight: 5,

  },

  bannerSection: {

    marginTop: 10,

  },

  bannerImage: {

    width: '100%',

    height: 100,

  },

  nearbyStoresSection: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    padding: 10,

    marginTop: 10,

  },

  nearbyStoresText: {

    flex: 1,

    marginLeft: 10,

  },

  nearbyStoresDistance: {

    color: '#999',

    marginRight: 10,

  },

  destinationsSection: {

    backgroundColor: '#FFF',

    padding: 10,

    marginTop: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionMore: {

    color: '#999',

  },

  destinationItem: {

    flex: 1,

    margin: 5,

  },

  destinationImage: {

    width: '100%',

    height: 100,

    borderRadius: 5,

  },

  destinationName: {

    marginTop: 5,

    fontSize: 14,

    fontWeight: 'bold',

  },

  destinationDesc: {

    fontSize: 12,

    color: '#999',

  },

});



export default TravelScreen;