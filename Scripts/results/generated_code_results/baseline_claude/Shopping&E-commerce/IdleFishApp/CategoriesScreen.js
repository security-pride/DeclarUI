import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const categories = [

  { name: '游戏装备', icon: '../assets/snack-icon.png' },

  { name: '数码', icon: '../assets/snack-icon.png' },

  { name: '模玩动漫', icon: '../assets/snack-icon.png' },

  { name: '企业', icon: '../assets/snack-icon.png' },

  { name: '文玩玉翠', icon: '../assets/snack-icon.png' },

  { name: '家居生活', icon: '../assets/snack-icon.png' },

  { name: '优惠券码', icon: '../assets/snack-icon.png' },

  { name: '美容彩妆', icon: '../assets/snack-icon.png' },

  { name: '母婴', icon: '../assets/snack-icon.png' },

  { name: '运动户外', icon: '../assets/snack-icon.png' },

  { name: '服饰鞋帽', icon: '../assets/snack-icon.png' },

  { name: '技能服务', icon: '../assets/snack-icon.png' },

  { name: '家用电器', icon: '../assets/snack-icon.png' },

  { name: '宠物花卉', icon: '../assets/snack-icon.png' },

];



const hotRecommends = [

  { name: '闲鱼帮卖', icon: '../assets/snack-icon.png' },

  { name: '闲鱼鱼市', icon: '../assets/snack-icon.png' },

  { name: '手机严选', icon: '../assets/snack-icon.png' },

  { name: '文玩珠宝', icon: '../assets/snack-icon.png' },

  { name: '潮玩盲盒', icon: '../assets/snack-icon.png' },

  { name: '奢侈品帮卖', icon: '../assets/snack-icon.png' },

  { name: '奢侈品', icon: '../assets/snack-icon.png' },

  { name: '闲鱼租房', icon: '../assets/snack-icon.png' },

  { name: '闲鱼游戏', icon: '../assets/snack-icon.png' },

  { name: '免费送', icon: '../assets/snack-icon.png' },

  { name: '明星玩家', icon: '../assets/snack-icon.png' },

  { name: '免费鉴定', icon: '../assets/snack-icon.png' },

  { name: '卡券', icon: '../assets/snack-icon.png' },

  { name: '手机回收', icon: '../assets/snack-icon.png' },

  { name: '卡券回收', icon: '../assets/snack-icon.png' },

  { name: '省心卖', icon: '../assets/snack-icon.png' },

  { name: '二手车', icon: '../assets/snack-icon.png' },

  { name: '图书回收', icon: '../assets/snack-icon.png' },

  { name: '卖闲置', icon: '../assets/snack-icon.png' },

  { name: '旧衣回收', icon: '../assets/snack-icon.png' },

  { name: '大件回收', icon: '../assets/snack-icon.png' },

];



const CategoriesScreen = () => {

  const navigation = useNavigation();



  const renderCategory = (item, index) => (

    <TouchableOpacity

      key={index}

      style={styles.categoryItem}

      onPress={() => navigation.navigate('JewelryCategory', { category: item.name })}

    >

      <Text style={styles.categoryText}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderHotRecommend = (item, index) => (

    <TouchableOpacity

      key={index}

      style={styles.hotRecommendItem}

      onPress={() => navigation.navigate('Home', { category: item.name })}

    >

      <View style={styles.hotRecommendIconContainer}>

        <Image source={item.icon} style={styles.hotRecommendIcon} />

      </View>

      <Text style={styles.hotRecommendText}>{item.name}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.searchBar}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

        </TouchableOpacity>

        <View style={styles.searchInput}>

          <Text style={styles.searchText}>淘腿裤 | 牛仔短裤</Text>

        </View>

      </View>



      <View style={styles.tabContainer}>

        <TouchableOpacity style={[styles.tab, styles.activeTab]}>

          <Text style={[styles.tabText, styles.activeTabText]}>热门推荐</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>

          <Text style={styles.tabText}>推荐</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.categoriesContainer}>

        {categories.map(renderCategory)}

      </View>



      <View style={styles.hotRecommendsContainer}>

        {hotRecommends.map(renderHotRecommend)}

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f8f8f8',

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 36,

    backgroundColor: '#f0f0f0',

    borderRadius: 18,

    paddingHorizontal: 15,

    justifyContent: 'center',

  },

  searchText: {

    color: '#999',

  },

  tabContainer: {

    flexDirection: 'row',

    borderBottomWidth: 1,

    borderBottomColor: '#e0e0e0',

    backgroundColor: '#fff',

  },

  tab: {

    flex: 1,

    paddingVertical: 12,

    alignItems: 'center',

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#ff6e00',

  },

  tabText: {

    fontSize: 16,

    color: '#333',

  },

  activeTabText: {

    color: '#ff6e00',

    fontWeight: 'bold',

  },

  categoriesContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 10,

    backgroundColor: '#fff',

  },

  categoryItem: {

    width: '25%',

    paddingVertical: 10,

    alignItems: 'center',

  },

  categoryText: {

    fontSize: 14,

    color: '#666',

  },

  hotRecommendsContainer: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 10,

    backgroundColor: '#fff',

    marginTop: 10,

  },

  hotRecommendItem: {

    width: '33.33%',

    alignItems: 'center',

    marginBottom: 15,

  },

  hotRecommendIconContainer: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#f0f0f0',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 5,

  },

  hotRecommendIcon: {

    width: 30,

    height: 30,

  },

  hotRecommendText: {

    fontSize: 12,

    color: '#333',

    textAlign: 'center',

  },

});



export default CategoriesScreen;