import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchBranch = () => {
const navigation = useNavigation();
const [searchText, setSearchText] = useState('');
const [selectedDate, setSelectedDate] = useState('今天');
const navigateToCustomService = () => {
navigation.navigate('CustomService');
};
const dateOptions = [
{ label: '今天', date: '07-18' },
{ label: '明天', date: '07-19' },
{ label: '周六', date: '07-20' },
{ label: '周日', date: '07-21' },
{ label: '周一', date: '07-22' },
{ label: '周二', date: '07-23' },
{ label: '周三', date: '07-24' },
];
const branchList = [
{ name: '烟台滨海支行', address: '烟台市芝罘区滨海景区47号', distance: '685m', status: '今日营业', isNearest: true },
{ name: '烟台南大街支行', address: '烟台市芝罘区南大街303号国贸大厦1楼', distance: '864m', status: '今日营业' },
{ name: '烟台海港路支行', address: '烟台市芝罘区海港路25-4（阳光10...', distance: '2.63km', status: '今日营业' },
{ name: '烟台幸福路支行', address: '烟台市芝罘区幸福路46-1号', distance: '6.00km', status: '今日营业' },
{ name: '烟台莱山支行', address: '山东省烟台市莱山区迎春大街133号', distance: '8.01km', status: '今日营业' },
];
const renderDateOption = ({ item }) => (
<TouchableOpacity
style={[styles.dateOption, selectedDate === item.label && styles.selectedDateOption]}
onPress={() => setSelectedDate(item.label)}
>
<Text style={[styles.dateOptionText, selectedDate === item.label && styles.selectedDateOptionText]}>
{item.label}
</Text>
<Text style={[styles.dateOptionSubtext, selectedDate === item.label && styles.selectedDateOptionText]}>
{item.date}
</Text>
</TouchableOpacity>
);
const renderBranchItem = ({ item }) => (
<View style={styles.branchItem}>
<View>
<Text style={styles.branchName}>{item.name}</Text>
<Text style={styles.branchAddress}>{item.address}</Text>
</View>
<View style={styles.branchInfo}>
<Text style={styles.branchStatus}>{item.status}</Text>
{item.isNearest && <Text style={styles.nearestTag}>最近</Text>}
<Text style={styles.branchDistance}>{item.distance}</Text>
<TouchableOpacity style={styles.detailsButton}>
<Text style={styles.detailsButtonText}>详情</Text>
</TouchableOpacity>
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToCustomService}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.title}>选择网点</Text>
<View style={styles.headerIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />
<Text style={styles.locationText}>烟台</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.mapIcon} />
</View>
</View>
  <View style={styles.searchContainer}>
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
    data={dateOptions}
    renderItem={renderDateOption}
    keyExtractor={(item) => item.date}
    style={styles.dateSelector}
    showsHorizontalScrollIndicator={false}
  />

  <View style={styles.listHeader}>
    <Text style={styles.listHeaderText}>全部网点</Text>
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>筛选</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
    </TouchableOpacity>
  </View>

  <FlatList
    data={branchList}
    renderItem={renderBranchItem}
    keyExtractor={(item) => item.name}
    style={styles.branchList}
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
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
},
backIcon: {
width: 24,
height: 24,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
headerIcons: {
flexDirection: 'row',
alignItems: 'center',
},
locationIcon: {
width: 20,
height: 20,
marginRight: 5,
},
locationText: {
marginRight: 10,
},
mapIcon: {
width: 24,
height: 24,
},
searchContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'white',
margin: 15,
paddingHorizontal: 10,
borderRadius: 5,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
},
dateSelector: {
backgroundColor: 'white',
paddingVertical: 10,
},
dateOption: {
alignItems: 'center',
paddingHorizontal: 15,
},
selectedDateOption: {
backgroundColor: '#e6f7ff',
borderRadius: 5,
},
dateOptionText: {
fontSize: 16,
},
dateOptionSubtext: {
fontSize: 12,
color: '#888',
},
selectedDateOptionText: {
color: '#1890ff',
},
listHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: 'white',
},
listHeaderText: {
fontSize: 16,
fontWeight: 'bold',
},
filterButton: {
flexDirection: 'row',
alignItems: 'center',
},
filterButtonText: {
marginRight: 5,
},
filterIcon: {
width: 16,
height: 16,
},
branchList: {
flex: 1,
},
branchItem: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 15,
backgroundColor: 'white',
borderBottomWidth: 1,
borderBottomColor: '#f0f0f0',
},
branchName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
branchAddress: {
fontSize: 14,
color: '#888',
},
branchInfo: {
alignItems: 'flex-end',
},
branchStatus: {
color: '#52c41a',
marginBottom: 5,
},
nearestTag: {
backgroundColor: '#ff4d4f',
color: 'white',
paddingHorizontal: 5,
paddingVertical: 2,
borderRadius: 3,
fontSize: 12,
marginBottom: 5,
},
branchDistance: {
color: '#1890ff',
marginBottom: 5,
},
detailsButton: {
borderWidth: 1,
borderColor: '#1890ff',
borderRadius: 3,
paddingHorizontal: 10,
paddingVertical: 2,
},
detailsButtonText: {
color: '#1890ff',
},
});
export default SearchBranch;