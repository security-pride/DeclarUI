import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const StoreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="瑜伽服装" />
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <Text style={styles.activeTab}>全部</Text>
        <Text style={styles.tab}>运动必备</Text>
      </View>

      <View style={styles.promotionContainer}>
        <Text style={styles.promotionLabel}>新人首单礼</Text>
        <View style={styles.promotionItems}>
          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
        </View>
        <View style={styles.prices}>
          <Text style={styles.price}>¥259 ¥289</Text>
          <Text style={styles.price}>¥82 ¥109</Text>
          <Text style={styles.price}>¥59 ¥89</Text>
          <Text style={styles.price}>¥13 ¥29</Text>
        </View>
      </View>

      <View style={styles.categoriesContainer}>
        {['运动奖品', '全身燃脂', '身体数据', '运动装备', '家用智能', '健康食品', '女子服饰', '男子服饰', '全部分类'].map((category, index) => (
          <View key={index} style={styles.category}>
            <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>{category}</Text>
          </View>
        ))}
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>首页</Text>
        </TouchableOpacity>
        <Text style={styles.navItem}>课程</Text>
        <Text style={styles.navItemActive}>运动</Text>
        <Text style={styles.navItem}>商城</Text>
        <Text style={styles.navItem}>我的</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  tab: {
    fontSize: 16,
    color: '#888888',
  },
  activeTab: {
    fontSize: 16,
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  promotionContainer: {
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  promotionLabel: {
    fontSize: 16,
    color: '#000000',
  },
  promotionItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  promotionImage: {
    width: 80,
    height: 80,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    color: '#FF0000',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  category: {
    alignItems: 'center',
    width: '20%',
    marginVertical: 10,
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  categoryLabel: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
  navItem: {
    flex: 1,
    textAlign: 'center',
    color: '#888888',
  },
  navItemActive: {
    flex: 1,
    textAlign: 'center',
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#0000FF',
  },
});

export default StoreScreen;