import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TravelScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Tabs */}
      <View style={styles.headerTabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabTextActive}>精选</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>国内游</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>出境游</Text>
        </TouchableOpacity>
      </View>

      {/* Search Area */}
      <View style={styles.searchArea}>
        <TouchableOpacity style={styles.location}>
          <Icon name="location-on" size={20} color="#000" />
          <Text style={styles.locationText}>烟台出发</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="目的地/关键词"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Icon name="search" size={20} color="#004de6" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="emoji-people" size={20} color="#004de6" />
        </TouchableOpacity>
      </View>

      {/* Tag List */}
      <ScrollView horizontal style={styles.tagList}>
        {['泰国', '新加坡', '马尔代夫', '马来西亚', '巴厘'].map(tag => (
          <TouchableOpacity key={tag} style={styles.tagButton}>
            <Text>{tag}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Main Categories */}
      <View style={styles.mainCategories}>
        <View style={styles.categoryItem}>
          <Icon name="flag" size={50} color="#004de6" />
          <Text>跟团游</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="crown" size={50} color="#004de6" />
          <Text>私家团</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="location-on" size={50} color="#004de6" />
          <Text>当地参团</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="boat" size={50} color="#004de6" />
          <Text>邮轮</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="home" size={50} color="#ff9900" />
          <Text>自由行</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="note" size={50} color="#ff9900" />
          <Text>定制旅行</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="car-rental" size={50} color="#ff9900" />
          <Text>包车游</Text>
        </View>
        <View style={styles.categoryItem}>
          <Icon name="ticket" size={50} color="#ff9900" />
          <Text>门票·玩乐</Text>
        </View>
      </View>

      {/* Promo Banner */}
      <Image source={require('../assets/snack-icon.png')} style={styles.banner} />

      {/* Nearby Shops */}
      <View style={styles.nearbyShops}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="local-store" size={20} color="#000" />
          <Text>附近有</Text>
          <Text style={styles.highlightedText}>3家携程门店</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.linkText}>最近距离您 3.5km ></Text>
        </TouchableOpacity>
      </View>

      {/* Travel Sections */}
      <View>
        <View style={styles.travelSectionHeader}>
          <Text>国内游</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>更多 ></Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.travelCards}>
          {[
            { image: require('../assets/snack-icon.png'), label: '烟台', subLabel: '蓬莱阁' },
            { image: require('../assets/snack-icon.png'), label: '新疆', subLabel: '探访我的阿勒泰' }
          ].map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text>{item.label}</Text>
              <Text>{item.subLabel}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View>
        <View style={styles.travelSectionHeader}>
          <Text>出境游</Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>更多 ></Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.travelCards}>
          {[
            { image: require('../assets/snack-icon.png'), label: '日本', subLabel: '东京' },
            { image: require('../assets/snack-icon.png'), label: '韩国', subLabel: '首尔' }
          ].map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <Text>{item.label}</Text>
              <Text>{item.subLabel}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { icon: 'home', label: '旅游首页' },
          { icon: 'map', label: '目的地' },
          { icon: 'history', label: '浏览历史' },
          { icon: 'favorite', label: '我的收藏' },
          { icon: 'assignment', label: '我的订单' }
        ].map((item, index) => (
          <View key={index} style={styles.bottomNavItem}>
            <Icon name={item.icon} size={24} color="#000" />
            <Text>{item.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  headerTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  tabTextActive: {
    fontSize: 16,
    color: '#004de6',
    fontWeight: 'bold',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  locationText: {
    marginLeft: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#eef',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  tagList: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  tagButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  mainCategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  categoryItem: {
    width: '23%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 100,
    marginVertical: 15,
  },
  nearbyShops: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  highlightedText: {
    color: '#ff3300',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#004de6',
  },
  travelSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  travelCards: {
    paddingLeft: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
});

export default TravelScreen;