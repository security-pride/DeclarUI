import React from 'react';
import { View, Text, Image, TextInput, Button, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchCategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="任何地方" />
        <TextInput style={styles.searchInput} placeholder="添加日期" />
        <TextInput style={styles.searchInput} placeholder="加入人数" />
        <TouchableOpacity style={styles.filterButton}>
          <Icon name="filter" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem} onPress={() => navigation.navigate('SearchCategory', { category: '海景民宿' })}>
          <Icon name="building" size={20} color="#000" />
          <Text style={styles.categoryText}>海景民宿</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="tree" size={20} color="#000" />
          <Text style={styles.categoryText}>魅力泳池</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="water" size={20} color="#000" />
          <Text style={styles.categoryText}>湖区</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="snowflake-o" size={20} color="#000" />
          <Text style={styles.categoryText}>近滑雪场</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Icon name="smile-o" size={20} color="#000" />
          <Text style={styles.categoryText}>OMG妙屋</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.switchContainer}>
        <Text>显示总价</Text>
        <Switch />
      </View>
      
      <View style={styles.listingContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.listingImage}/>
        <TouchableOpacity style={styles.mapButton}>
          <Text style={styles.mapButtonText} onPress={() => navigation.navigate('Details')}>地图</Text>
        </TouchableOpacity>
        <Text style={styles.listingText}>英国 多塞特(Dorset)</Text>
        <Text>Man O'War海滩</Text>
        <Text>9月2日至7日</Text>
        <Text>房客说 “会推荐再次入住。房源非常漂亮。”</Text>
        <Text>¥2,424 / 晚</Text>
        <Icon name="star" size={20} color="#000">4.8</Icon>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={20} color="#c71585" />
          <Text>探索</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="heart" size={20} color="#000" />
          <Text>心愿单</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Itinerary')}>
          <Icon name="map" size={20} color="#000" />
          <Text>行程</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Icon name="comments" size={20} color="#000" />
          <Text>消息</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="user" size={20} color="#000" />
          <Text>我的</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 5,
  },
  filterButton: {
    padding: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 12,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  listingContainer: {
    marginVertical: 10,
  },
  listingImage: {
    width: '100%',
    height: 200,
  },
  mapButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
  },
  mapButtonText: {
    color: '#fff',
  },
  listingText: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
});

export default SearchCategoryScreen;