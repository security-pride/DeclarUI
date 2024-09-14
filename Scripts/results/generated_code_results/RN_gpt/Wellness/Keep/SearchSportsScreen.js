import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const options = [
  { icon: require('../assets/snack-icon.png'), label: '运动日历', selected: true },
  { icon: require('../assets/snack-icon.png'), label: '户外跑步', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '户外行走', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '跳绳', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '室内骑行', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '户外骑行', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '室内跑步', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '爬楼梯', selected: false },
  { icon: require('../assets/snack-icon.png'), label: '室内行走', selected: false },
];

const SearchSportsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.optionContainer}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.optionText}>{item.label}</Text>
      <View style={[styles.selectionCircle, item.selected && styles.selectedCircle]} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>选择运动类别</Text>
        <TouchableOpacity style={styles.manageButton}>
          <Text style={styles.manageText}>管理</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subheading}>我的运动</Text>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageText: {
    fontSize: 16,
    marginLeft: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
  },
  closeText: {
    fontSize: 24,
    color: '#000',
  },
  subheading: {
    fontSize: 14,
    color: '#999',
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  selectionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectedCircle: {
    borderColor: 'green',
  },
});

export default SearchSportsScreen;