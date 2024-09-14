import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchBranchScreen = () => {
  const navigation = useNavigation();

  const handleBranchDetails = () => {
    navigation.navigate('CustomService');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>选择网点</Text>
        <View style={styles.headerRight}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.cityLabel}>烟台</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.mapIcon} />
        </View>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="请输入网点名称、区划或街道搜索"
      />
      <View style={styles.dateSelector}>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.selectedDate}>今天 07-18</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton}>
          <Text>明天 07-19</Text>
        </TouchableOpacity>
        {/* Repeat TouchableOpacity for other dates */}
      </View>
      <Text style={styles.allBranches}>全部网点</Text>
      <View style={styles.branchItem}>
        <Text style={styles.branchName}>烟台滨海支行</Text>
        <View style={styles.branchDetails}>
          <Text style={styles.openStatus}>今日营业</Text>
          <Text style={styles.nearestLabel}>最近</Text>
          <TouchableOpacity onPress={handleBranchDetails}>
            <Text style={styles.detailsButton}>详情</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.branchAddress}>烟台市芝罘区滨海景区47号</Text>
        <View style={styles.distanceIndicator}>
          <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          <Text style={styles.distance}>685m</Text>
        </View>
      </View>
      {/* Repeat View for other branches */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  cityLabel: {
    fontSize: 16,
    marginRight: 10
  },
  mapIcon: {
    width: 24,
    height: 24
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginVertical: 10
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eee'
  },
  selectedDate: {
    color: '#007bff'
  },
  allBranches: {
    fontSize: 16,
    marginVertical: 10
  },
  branchItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8
  },
  branchName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  branchDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  openStatus: {
    color: 'green'
  },
  nearestLabel: {
    color: 'red',
    marginLeft: 8
  },
  detailsButton: {
    color: '#007bff'
  },
  branchAddress: {
    color: '#555',
    marginTop: 8
  },
  distanceIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  distance: {
    color: '#555'
  }
});

export default SearchBranchScreen;