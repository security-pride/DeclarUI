import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const SearchBranchScreen = ({ navigation }) => {

  const [selectedDate, setSelectedDate] = useState('今天');

  const [searchText, setSearchText] = useState('');



  const dates = [

    { id: '1', day: '今天', date: '07-18' },

    { id: '2', day: '明天', date: '07-19' },

    { id: '3', day: '周六', date: '07-20' },

    { id: '4', day: '周日', date: '07-21' },

    { id: '5', day: '周一', date: '07-22' },

    { id: '6', day: '周二', date: '07-23' },

    { id: '7', day: '周三', date: '07-24' },

  ];



  const branches = [

    { id: '1', name: '烟台滨海支行', address: '烟台市芝罘区滨海景区47号', distance: '685m', status: '今日营业', tag: '最近' },

    { id: '2', name: '烟台南大街支行', address: '烟台市芝罘区南大街303号国贸大厦1楼', distance: '864m', status: '今日营业' },

    { id: '3', name: '烟台海港路支行', address: '烟台市芝罘区海港路25-4 (阳光10...', distance: '2.63km', status: '今日营业' },

    { id: '4', name: '烟台幸福路支行', address: '烟台市芝罘区幸福路46-1号', distance: '6.00km', status: '今日营业' },

    { id: '5', name: '烟台莱山支行', address: '山东省烟台市莱山区迎春大街133号', distance: '8.01km', status: '今日营业' },

  ];



  const renderDateItem = ({ item }) => (

    <TouchableOpacity

      style={[styles.dateItem, selectedDate === item.day && styles.selectedDateItem]}

      onPress={() => setSelectedDate(item.day)}

    >

      <Text style={[styles.dateDay, selectedDate === item.day && styles.selectedDateText]}>{item.day}</Text>

      <Text style={[styles.dateDate, selectedDate === item.day && styles.selectedDateText]}>{item.date}</Text>

    </TouchableOpacity>

  );



  const renderBranchItem = ({ item }) => (

    <TouchableOpacity style={styles.branchItem} onPress={() => navigation.navigate('BranchDetails', { branch: item })}>

      <View style={styles.branchInfo}>

        <Text style={styles.branchName}>{item.name}</Text>

        <View style={styles.branchStatusContainer}>

          <Text style={styles.branchStatus}>{item.status}</Text>

          {item.tag && <Text style={styles.branchTag}>{item.tag}</Text>}

        </View>

        <Text style={styles.branchAddress}>{item.address}</Text>

      </View>

      <View style={styles.branchDetails}>

        <View style={styles.distanceContainer}>

          <Icon name="location-on" size={16} color="#007AFF" />

          <Text style={styles.distanceText}>{item.distance}</Text>

        </View>

        <Text style={styles.detailsText}>详情 ></Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>选择网点</Text>

        <View style={styles.headerRightIcons}>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

          <TouchableOpacity>

            <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.searchContainer}>

        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="请输入网点名称、区划或街道搜索"

          value={searchText}

          onChangeText={setSearchText}

        />

      </View>

      <FlatList

        horizontal

        data={dates}

        renderItem={renderDateItem}

        keyExtractor={item => item.id}

        showsHorizontalScrollIndicator={false}

        style={styles.dateList}

      />

      <View style={styles.filterContainer}>

        <Text style={styles.filterText}>全部网点</Text>

        <TouchableOpacity>

          <Text style={styles.filterButton}>筛选 ▼</Text>

        </TouchableOpacity>

      </View>

      <FlatList

        data={branches}

        renderItem={renderBranchItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.branchList}

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

    justifyContent: 'space-between',

    padding: 16,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerRightIcons: {

    flexDirection: 'row',

  },

  headerIcon: {

    width: 24,

    height: 24,

    marginLeft: 16,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    borderRadius: 8,

    margin: 16,

    paddingHorizontal: 12,

  },

  searchIcon: {

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  dateList: {

    backgroundColor: '#FFF',

    paddingVertical: 8,

  },

  dateItem: {

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 8,

  },

  selectedDateItem: {

    backgroundColor: '#E6F2FF',

    borderRadius: 4,

  },

  dateDay: {

    fontSize: 14,

    color: '#333',

  },

  dateDate: {

    fontSize: 12,

    color: '#999',

    marginTop: 4,

  },

  selectedDateText: {

    color: '#007AFF',

  },

  filterContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

    backgroundColor: '#FFF',

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5E5',

  },

  filterText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  filterButton: {

    color: '#007AFF',

  },

  branchList: {

    paddingHorizontal: 16,

  },

  branchItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    backgroundColor: '#FFF',

    borderRadius: 8,

    padding: 16,

    marginTop: 12,

  },

  branchInfo: {

    flex: 1,

  },

  branchName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  branchStatusContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

  },

  branchStatus: {

    color: '#4CAF50',

    fontSize: 12,

  },

  branchTag: {

    backgroundColor: '#FF6B6B',

    color: '#FFF',

    fontSize: 10,

    paddingHorizontal: 4,

    paddingVertical: 2,

    borderRadius: 2,

    marginLeft: 8,

  },

  branchAddress: {

    color: '#999',

    fontSize: 12,

    marginTop: 4,

  },

  branchDetails: {

    alignItems: 'flex-end',

  },

  distanceContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  distanceText: {

    color: '#007AFF',

    fontSize: 12,

    marginLeft: 4,

  },

  detailsText: {

    color: '#007AFF',

    fontSize: 12,

    marginTop: 8,

  },

});



export default SearchBranchScreen;