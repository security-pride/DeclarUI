import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={24} color="#ccc" />
        <TextInput
          placeholder="Search for items or categories"
          style={styles.searchInput}
        />
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Categories List */}
        <View style={styles.categoryList}>
          <Text style={styles.categoryTextActive}>热门推荐</Text>
          <Text style={styles.categoryText}>游戏装备</Text>
          <Text style={styles.categoryText}>数码</Text>
          <Text style={styles.categoryText}>模玩动漫</Text>
          <Text style={styles.categoryText}>企业</Text>
          <Text style={styles.categoryText}>文玩玉翠</Text>
          <Text style={styles.categoryText}>家居生活</Text>
          <Text style={styles.categoryText}>优惠券码</Text>
          <Text style={styles.categoryText}>美容彩妆</Text>
          <Text style={styles.categoryText}>母婴</Text>
          <Text style={styles.categoryText}>运动户外</Text>
          <Text style={styles.categoryText}>服饰鞋帽</Text>
          <Text style={styles.categoryText}>技能服务</Text>
          <Text style={styles.categoryText}>家用电器</Text>
          <Text style={styles.categoryText}>宠物花卉</Text>
        </View>
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.recommendation}>
        {/* Recommendations Grid */}
        <View style={styles.gridContainer}>
          {recommendations.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={require('../assets/snack-icon.png')} style={styles.itemImage}/>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const recommendations = [
  '闲鱼帮卖', '闲鱼集市', '手机严选', '文玩珠宝', '潮玩盲盒', '奢侈品帮卖',
  '免费送', '明星玩家', '免费鉴定', '卡券', '手机回收', '卡券回收',
  '省心卖', '二手车', '图书回收', '卖闲置', '旧衣回收', '大件回收'
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 10,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
  },
  categoryList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryTextActive: {
    fontSize: 16,
    color: '#f00',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
  },
  recommendation: {
    marginTop: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  gridItem: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoriesScreen;