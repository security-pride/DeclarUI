import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="ios-search" size={20} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="搜索任何物品"
          placeholderTextColor="#C4C4C4"
        />
        <View style={styles.iconContainer}>
          <Icon name="ios-camera-outline" size={24} color="#000" />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="ios-cart-outline" size={24} color="#000" />
        </View>
      </View>

      {/* Search Content */}
      <View style={styles.content}>
        <View style={styles.tabBar}>
          <Text style={styles.activeTab}>最近</Text>
          <Text style={styles.inactiveTab}>已保存</Text>
        </View>
        <View style={styles.centerContent}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.image}
          />
          <Text style={styles.mainText}>搜索 eBay</Text>
          <Text style={styles.subText}>发现下一件您最喜爱的物品。</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  iconContainer: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  activeTab: {
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  inactiveTab: {
    fontSize: 18,
    color: '#C4C4C4',
  },
  centerContent: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    tintColor: '#C4C4C4',
    marginBottom: 20,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#C4C4C4',
  },
});

export default SearchScreen;