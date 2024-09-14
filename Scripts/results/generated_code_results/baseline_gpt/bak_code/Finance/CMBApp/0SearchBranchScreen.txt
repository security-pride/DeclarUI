import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBranchScreen = () => {
  const branches = [
    { name: '烟台滨海支行', status: '今日营业', address: '烟台市芝罘区滨海景区47号', distance: '685m' },
    { name: '烟台南大街支行', status: '今日营业', address: '烟台市芝罘区南大街303号国贸大厦1楼', distance: '864m' },
    { name: '烟台海港路支行', status: '今日营业', address: '烟台市芝罘区海港路25-4 (阳光10...)', distance: '2.63km' },
    { name: '烟台幸福路支行', status: '今日营业', address: '烟台市芝罘区幸福路46-1号', distance: '6.00km' },
    { name: '烟台莱山支行', status: '今日营业', address: '山东省烟台市莱山区迎春大街133号', distance: '8.01km' },
  ];

  const renderBranch = ({ item }) => (
    <View style={styles.branchContainer}>
      <View>
        <Text style={styles.branchName}>{item.name}</Text>
        <Text style={styles.branchStatus}>{item.status}</Text>
        <Text style={styles.branchAddress}>{item.address}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>详情</Text>
        <Text style={styles.distanceText}>
          <Icon name="near-me" size={14} color="#4a90e2" /> {item.distance}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>选择网点</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="black" />
          <Icon name="location-on" size={24} color="black" />
          <Image source={require('../assets/snack-icon.png')} style={styles.mapIcon} />
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="请输入网点名称、区域或街道搜索"
      />
      <FlatList
        data={branches}
        renderItem={renderBranch}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.buttonsRow}>
            {['今天', '明天', '周六', '周日', '周一', '周二', '周三'].map((label, idx) => (
              <Text key={idx} style={idx === 0 ? styles.activeButton : styles.button}>{label}</Text>
            ))}
          </View>
        }
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
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  mapIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  searchInput: {
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    backgroundColor: 'white',
    padding: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: 'black',
  },
  activeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: '#4a90e2',
    borderBottomWidth: 2,
    borderBottomColor: '#4a90e2',
  },
  branchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 1,
  },
  branchName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  branchStatus: {
    color: 'green',
  },
  branchAddress: {
    color: '#757575',
  },
  detailsContainer: {
    alignItems: 'flex-end',
  },
  detailsText: {
    color: '#4a90e2',
    marginBottom: 4,
  },
  distanceText: {
    color: '#757575',
  },
});

export default SearchBranchScreen;