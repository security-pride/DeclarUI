import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchBranchScreen = () => {

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');

  const [selectedDate, setSelectedDate] = useState('今天');



  const dates = [

    { id: '1', date: '今天', subtext: '07-18' },

    { id: '2', date: '明天', subtext: '07-19' },

    { id: '3', date: '周六', subtext: '07-20' },

    { id: '4', date: '周日', subtext: '07-21' },

    { id: '5', date: '周一', subtext: '07-22' },

    { id: '6', date: '周二', subtext: '07-23' },

    { id: '7', date: '周三', subtext: '07-24' },

  ];



  const branches = [

    { id: '1', name: '烟台滨海支行', address: '烟台市芝罘区滨海景区47号', distance: '685m', status: '今日营业', tag: '最近' },

    { id: '2', name: '烟台南大街支行', address: '烟台市芝罘区南大街303号国贸大厦1楼', distance: '864m', status: '今日营业' },

    { id: '3', name: '烟台海港路支行', address: '烟台市芝罘区海港路25-4（阳光100...', distance: '2.63km', status: '今日营业' },

    { id: '4', name: '烟台幸福路支行', address: '烟台市芝罘区幸福路46-1号', distance: '6.00km', status: '今日营业' },

    { id: '5', name: '烟台莱山支行', address: '山东省烟台市莱山区迎春大街133号', distance: '8.01km', status: '今日营业' },

  ];



  const renderDateItem = ({ item }) => (

    <TouchableOpacity

      style={[styles.dateItem, selectedDate === item.date && styles.selectedDateItem]}

      onPress={() => setSelectedDate(item.date)}

    >

      <Text style={[styles.dateText, selectedDate === item.date && styles.selectedDateText]}>{item.date}</Text>

      <Text style={[styles.dateSubtext, selectedDate === item.date && styles.selectedDateSubtext]}>{item.subtext}</Text>

    </TouchableOpacity>

  );



  const renderBranchItem = ({ item }) => (

    <TouchableOpacity style={styles.branchItem}>

      <View style={styles.branchHeader}>

        <Text style={styles.branchName}>{item.name}</Text>

        <Text style={styles.branchStatus}>{item.status}</Text>

        {item.tag && <Text style={styles.branchTag}>{item.tag}</Text>}

      </View>

      <Text style={styles.branchAddress}>{item.address}</Text>

      <View style={styles.branchFooter}>

        <Image source={require('../assets/snack-icon.png')} style={styles.distanceIcon} />

        <Text style={styles.branchDistance}>{item.distance}</Text>

        <TouchableOpacity style={styles.detailsButton}>

          <Text style={styles.detailsButtonText}>详情 ></Text>

        </TouchableOpacity>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>选择网点</Text>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.mapIcon} />

        </TouchableOpacity>

        <TouchableOpacity>

          <Image source={require('../assets/snack-icon.png')} style={styles.listIcon} />

        </TouchableOpacity>

      </View>



      <View style={styles.searchBar}>

        <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

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

        keyExtractor={(item) => item.id}

        showsHorizontalScrollIndicator={false}

        style={styles.dateList}

      />



      <View style={styles.filterBar}>

        <Text style={styles.filterText}>全部网点</Text>

        <TouchableOpacity>

          <Text style={styles.filterButton}>筛选 ▼</Text>

        </TouchableOpacity>

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

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    flex: 1,

    fontSize: 18,

    fontWeight: 'bold',

    textAlign: 'center',

  },

  mapIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  listIcon: {

    width: 24,

    height: 24,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    margin: 16,

    paddingHorizontal: 12,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 8,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  dateList: {

    backgroundColor: '#FFFFFF',

    paddingVertical: 8,

  },

  dateItem: {

    alignItems: 'center',

    paddingHorizontal: 16,

  },

  selectedDateItem: {

    backgroundColor: '#E6F7FF',

    borderRadius: 8,

  },

  dateText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  selectedDateText: {

    color: '#1890FF',

  },

  dateSubtext: {

    fontSize: 12,

    color: '#999999',

  },

  selectedDateSubtext: {

    color: '#1890FF',

  },

  filterBar: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 16,

    paddingVertical: 12,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,

    borderBottomWidth: 1,

    borderColor: '#EEEEEE',

  },

  filterText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  filterButton: {

    fontSize: 14,

    color: '#666666',

  },

  branchList: {

    flex: 1,

  },

  branchItem: {

    backgroundColor: '#FFFFFF',

    padding: 16,

    borderBottomWidth: 1,

    borderBottomColor: '#EEEEEE',

  },

  branchHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 4,

  },

  branchName: {

    fontSize: 16,

    fontWeight: 'bold',

    flex: 1,

  },

  branchStatus: {

    fontSize: 12,

    color: '#52C41A',

    marginRight: 8,

  },

  branchTag: {

    fontSize: 12,

    color: '#FF4D4F',

    backgroundColor: '#FFF1F0',

    paddingHorizontal: 4,

    paddingVertical: 2,

    borderRadius: 2,

  },

  branchAddress: {

    fontSize: 14,

    color: '#666666',

    marginBottom: 8,

  },

  branchFooter: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  distanceIcon: {

    width: 16,

    height: 16,

    marginRight: 4,

  },

  branchDistance: {

    fontSize: 14,

    color: '#1890FF',

    flex: 1,

  },

  detailsButton: {

    paddingVertical: 4,

    paddingHorizontal: 8,

  },

  detailsButtonText: {

    fontSize: 14,

    color: '#1890FF',

  },

});



export default SearchBranchScreen;