import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const SearchBranchScreen = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState('07-18');



  const dates = [

    { id: '1', date: '07-18', day: '今天' },

    { id: '2', date: '07-19', day: '明天' },

    { id: '3', date: '07-20', day: '周六' },

    { id: '4', date: '07-21', day: '周日' },

    { id: '5', date: '07-22', day: '周一' },

    { id: '6', date: '07-23', day: '周二' },

    { id: '7', date: '07-24', day: '周三' },

  ];



  const branches = [

    { id: '1', name: '烟台滨海支行', address: '烟台市芝罘区滨海景区47号', distance: '685m', status: '今日营业', tag: '最近' },

    { id: '2', name: '烟台南大街支行', address: '烟台市芝罘区南大街303号国贸大厦1楼', distance: '864m', status: '今日营业' },

    { id: '3', name: '烟台海港路支行', address: '烟台市芝罘区海港路25-4（阳光10...', distance: '2.63km', status: '今日营业' },

    { id: '4', name: '烟台幸福路支行', address: '烟台市芝罘区幸福路46-1号', distance: '6.00km', status: '今日营业' },

    { id: '5', name: '烟台莱山支行', address: '山东省烟台市莱山区迎春大街133号', distance: '8.01km', status: '今日营业' },

  ];



  const renderDateItem = ({ item }) => (

    <TouchableOpacity

      style={[styles.dateItem, selectedDate === item.date && styles.selectedDateItem]}

      onPress={() => setSelectedDate(item.date)}

    >

      <Text style={[styles.dateText, selectedDate === item.date && styles.selectedDateText]}>{item.day}</Text>

      <Text style={[styles.dateSubText, selectedDate === item.date && styles.selectedDateText]}>{item.date}</Text>

    </TouchableOpacity>

  );



  const renderBranchItem = ({ item }) => (

    <TouchableOpacity style={styles.branchItem} onPress={() => navigation.navigate('CustomService')}>

      <View style={styles.branchInfo}>

        <Text style={styles.branchName}>{item.name}</Text>

        <Text style={styles.branchAddress}>{item.address}</Text>

        <View style={styles.branchStatusContainer}>

          <Text style={styles.branchStatus}>{item.status}</Text>

          {item.tag && <Text style={styles.branchTag}>{item.tag}</Text>}

        </View>

      </View>

      <View style={styles.branchDistance}>

        <Icon name="location-on" size={16} color="#007AFF" />

        <Text style={styles.distanceText}>{item.distance}</Text>

      </View>

      <Icon name="chevron-right" size={24} color="#C8C7CC" />

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>选择网点</Text>

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.locationButton}>

            <Icon name="location-on" size={24} color="#000" />

            <Text style={styles.locationText}>烟台</Text>

          </TouchableOpacity>

          <TouchableOpacity>

            <Icon name="map" size={24} color="#000" />

          </TouchableOpacity>

        </View>

      </View>



      <View style={styles.searchBar}>

        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />

        <TextInput

          style={styles.searchInput}

          placeholder="请输入网点名称、区划或街道搜索"

          placeholderTextColor="#999"

        />

      </View>



      <FlatList

        horizontal

        data={dates}

        renderItem={renderDateItem}

        keyExtractor={(item) => item.id}

        showsHorizontalScrollIndicator={false}

        style={styles.dateList}

      />



      <View style={styles.filterContainer}>

        <Text style={styles.filterText}>全部网点</Text>

        <Icon name="arrow-drop-down" size={24} color="#000" />

      </View>



      <FlatList

        data={branches}

        renderItem={renderBranchItem}

        keyExtractor={(item) => item.id}

        style={styles.branchList}

      />

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F2F2F7',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFF',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  locationButton: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 16,

  },

  locationText: {

    marginLeft: 4,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    margin: 16,

    borderRadius: 8,

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

    paddingVertical: 12,

  },

  dateItem: {

    alignItems: 'center',

    paddingHorizontal: 16,

  },

  selectedDateItem: {

    backgroundColor: '#F0F0F0',

    borderRadius: 16,

  },

  dateText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  dateSubText: {

    fontSize: 12,

    color: '#999',

    marginTop: 4,

  },

  selectedDateText: {

    color: '#007AFF',

  },

  filterContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  filterText: {

    fontSize: 16,

    marginRight: 4,

  },

  branchList: {

    flex: 1,

    backgroundColor: '#FFF',

  },

  branchItem: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#E5E5EA',

  },

  branchInfo: {

    flex: 1,

  },

  branchName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 4,

  },

  branchAddress: {

    fontSize: 14,

    color: '#666',

    marginBottom: 4,

  },

  branchStatusContainer: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  branchStatus: {

    fontSize: 12,

    color: '#4CAF50',

    marginRight: 8,

  },

  branchTag: {

    fontSize: 12,

    color: '#FF3B30',

    backgroundColor: '#FFE8E6',

    paddingHorizontal: 4,

    paddingVertical: 2,

    borderRadius: 2,

  },

  branchDistance: {

    flexDirection: 'row',

    alignItems: 'center',

    marginRight: 16,

  },

  distanceText: {

    fontSize: 14,

    color: '#007AFF',

    marginLeft: 4,

  },

});



export default SearchBranchScreen;