import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  { id: '1', name: '运动日历', icon: 'flash', selected: true },
  { id: '2', name: '户外跑步', icon: 'run', selected: false },
  { id: '3', name: '户外行走', icon: 'walk', selected: false },
  { id: '4', name: '跳绳', icon: 'jump-rope', selected: false },
  { id: '5', name: '室内骑行', icon: 'bike', selected: false },
  { id: '6', name: '户外骑行', icon: 'bicycle', selected: false },
  { id: '7', name: '室内跑步', icon: 'treadmill', selected: false },
  { id: '8', name: '爬楼梯', icon: 'stairs', selected: false },
  { id: '9', name: '室内行走', icon: 'walk', selected: false },
];

const SearchSportsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.iconText}>
        <Icon name={item.icon} size={24} color="#000" />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      {item.selected ? (
        <Icon name="check-circle" size={24} color="green" />
      ) : (
        <Icon name="circle-outline" size={24} color="#bbb" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>选择运动类别</Text>
        <TouchableOpacity>
          <Icon name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>我的运动</Text>
        <TouchableOpacity style={styles.manageButton}>
          <Icon name="pencil" size={16} color="#000" />
          <Text style={styles.manageText}>管理</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageText: {
    marginLeft: 5,
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 5,
    borderRadius: 8,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default SearchSportsScreen;