import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CategoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <Text style={styles.searchBarText}>👁‍🗨</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.recommendationLabel}>热门推荐</Text>
        <Text style={styles.recommendationLabel}>推荐</Text>
      </View>
      <View style={styles.recommendedContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>闲鱼帮卖</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>闲鱼鱼币</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>手游严选</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('JewelryCategory')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>文玩珠宝</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconWrapper}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
            <Text style={styles.iconLabel}>返回主页</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>游戏装备</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>数码</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>模玩动漫</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>企业</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>文玩玉翠</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>家居生活</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>优惠券码</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>美容彩妆</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>母婴</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>运动户外</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>服饰鞋帽</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>技能服务</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>家用电器</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryText}>宠物花卉</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchBar: {
    marginTop: 10,
    height: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  searchBarText: {
    color: '#CCCCCC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  recommendationLabel: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    width: 60,
    margin: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconLabel: {
    marginTop: 5,
    textAlign: 'center',
    color: '#000',
    fontSize: 10,
  },
  categoriesContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  category: {
    paddingVertical: 5,
  },
  categoryText: {
    fontSize: 14,
    color: '#666666',
  },
});

export default CategoriesScreen;