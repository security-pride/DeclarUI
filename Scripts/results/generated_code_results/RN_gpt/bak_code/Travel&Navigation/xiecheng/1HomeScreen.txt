import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>烟台百纳瑞汀酒店 (第一海水浴...</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>搜索</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Tags */}
      <View style={styles.tagsContainer}>
        {['烟台', '威海', '蓬莱阁', '长岛', '武汉'].map(tag => (
          <TouchableOpacity key={tag} style={styles.tagButton}>
            <Text style={styles.tagText}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        {[
          { name: '酒店', icon: require('../assets/snack-icon.png') },
          { name: '机票', icon: require('../assets/snack-icon.png') },
          { name: '火车票', icon: require('../assets/snack-icon.png') },
          { name: '旅游', icon: require('../assets/snack-icon.png'), navigateTo: 'Travel' }, // Added navigation
          { name: '攻略/景点', icon: require('../assets/snack-icon.png') },
        ].map(category => (
          <TouchableOpacity key={category.name} style={styles.category} onPress={() => category.navigateTo && navigation.navigate(category.navigateTo)}>
            <Image source={category.icon} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Special Offers */}
      <View style={styles.specialOffersContainer}>
        <Text style={styles.sectionTitle}>特价专区</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.offerImage} />
        <Text style={styles.offerText}>精选酒店套餐</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: '首页', icon: require('../assets/snack-icon.png') },
          { name: '社区', icon: require('../assets/snack-icon.png') },
          { name: '消息', icon: require('../assets/snack-icon.png') },
          { name: '行程', icon: require('../assets/snack-icon.png') },
          { name: '我的', icon: require('../assets/snack-icon.png') },
        ].map(navItem => (
          <TouchableOpacity key={navItem.name} style={styles.navButton}>
            <Image source={navItem.icon} style={styles.navIcon} />
            <Text style={styles.navText}>{navItem.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  searchText: {
    flex: 1,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#FFF',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  tagButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
  tagText: {
    color: '#000',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  categoryText: {
    marginTop: 5,
  },
  specialOffersContainer: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  offerImage: {
    width: '100%',
    height: 100,
  },
  offerText: {
    textAlign: 'center',
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  navButton: {
    alignItems: 'center',
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  navText: {
    marginTop: 5,
  },
});

export default HomeScreen;