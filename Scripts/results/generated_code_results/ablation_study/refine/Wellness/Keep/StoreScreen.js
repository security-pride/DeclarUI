import React, { useState } from 'react';

import {

  View,

  Text,

  TextInput,

  Image,

  StyleSheet,

  TouchableOpacity,

  ScrollView,

  FlatList,

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



const StoreScreen = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState('');



  const categories = [

    { id: '1', name: '运动奖品', icon: 'trophy-outline' },

    { id: '2', name: '全身燃脂', icon: 'flame-outline' },

    { id: '3', name: '身体数据', icon: 'analytics-outline' },

    { id: '4', name: '运动装备', icon: 'fitness-outline' },

    { id: '5', name: '家用智能', icon: 'home-outline' },

  ];



  const newUserGifts = [

    { id: '1', name: '智能手表', price: 259, oldPrice: 289, label: '必买精选' },

    { id: '2', name: '智能体重秤', price: 82, oldPrice: 109, label: '热销爆款' },

    { id: '3', name: '瑜伽垫', price: 59, oldPrice: 89, label: '直降 ¥30' },

    { id: '4', name: '跳绳', price: 13, oldPrice: 29, label: '60 天低价' },

  ];



  const renderCategory = ({ item }) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Icon name={item.icon} size={24} color="#333" />

      <Text style={styles.categoryText}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderNewUserGift = ({ item }) => (

    <TouchableOpacity style={styles.giftItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.giftImage} />

      <Text style={styles.giftPrice}>¥{item.price}</Text>

      <Text style={styles.giftOldPrice}>¥{item.oldPrice}</Text>

      <View style={styles.giftLabel}>

        <Text style={styles.giftLabelText}>{item.label}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <View style={styles.searchBar}>

          <Icon name="search-outline" size={20} color="#999" />

          <TextInput

            style={styles.searchInput}

            placeholder="瑜伽服装"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>

        <TouchableOpacity>

          <Icon name="flash-outline" size={24} color="#333" />

        </TouchableOpacity>

        <TouchableOpacity>

          <Icon name="cart-outline" size={24} color="#333" />

        </TouchableOpacity>

      </View>

      <ScrollView>

        <View style={styles.tabContainer}>

          <TouchableOpacity style={[styles.tab, styles.activeTab]}>

            <Text style={[styles.tabText, styles.activeTabText]}>全部</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.tab}>

            <Text style={styles.tabText}>运动必备</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.newUserGift}>

          <Text style={styles.sectionTitle}>新人首单礼</Text>

          <FlatList

            data={newUserGifts}

            renderItem={renderNewUserGift}

            keyExtractor={(item) => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

        <FlatList

          data={categories}

          renderItem={renderCategory}

          keyExtractor={(item) => item.id}

          numColumns={5}

          style={styles.categories}

        />

        <View style={styles.extraCategories}>

          <TouchableOpacity style={styles.extraCategoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.extraCategoryIcon} />

            <Text style={styles.extraCategoryText}>Keep 周边</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.extraCategoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.extraCategoryIcon} />

            <Text style={styles.extraCategoryText}>健康食品</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.extraCategoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.extraCategoryIcon} />

            <Text style={styles.extraCategoryText}>女子服饰</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.extraCategoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.extraCategoryIcon} />

            <Text style={styles.extraCategoryText}>男子服饰</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.extraCategoryItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.extraCategoryIcon} />

            <Text style={styles.extraCategoryText}>全部分类</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.banners}>

          <Image source={require('../assets/snack-icon.png')} style={styles.banner} />

          <Image source={require('../assets/snack-icon.png')} style={styles.banner} />

        </View>

      </ScrollView>

      <View style={styles.bottomTabs}>

        <TouchableOpacity style={styles.bottomTab}>

          <Icon name="home-outline" size={24} color="#999" />

          <Text style={styles.bottomTabText}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>

          <Icon name="book-outline" size={24} color="#999" />

          <Text style={styles.bottomTabText}>课程</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.bottomTab, styles.activeBottomTab]}>

          <Icon name="flash" size={24} color="#000" />

          <Text style={[styles.bottomTabText, styles.activeBottomTabText]}>运动</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>

          <Icon name="cart-outline" size={24} color="#999" />

          <Text style={styles.bottomTabText}>商城</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTab}>

          <Icon name="person-outline" size={24} color="#999" />

          <Text style={styles.bottomTabText}>我的</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f5f5f5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 36,

    marginLeft: 5,

  },

  tabContainer: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  tab: {

    marginRight: 20,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#000',

  },

  tabText: {

    fontSize: 16,

    color: '#666',

  },

  activeTabText: {

    color: '#000',

    fontWeight: 'bold',

  },

  newUserGift: {

    backgroundColor: '#a080ff',

    padding: 15,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#fff',

    marginBottom: 10,

  },

  giftItem: {

    backgroundColor: '#fff',

    borderRadius: 8,

    padding: 10,

    marginRight: 10,

    width: 120,

  },

  giftImage: {

    width: 100,

    height: 100,

    resizeMode: 'cover',

    borderRadius: 4,

  },

  giftPrice: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#ff4d4f',

  },

  giftOldPrice: {

    fontSize: 12,

    color: '#999',

    textDecorationLine: 'line-through',

  },

  giftLabel: {

    position: 'absolute',

    top: 5,

    left: 5,

    backgroundColor: '#ff4d4f',

    borderRadius: 2,

    paddingHorizontal: 4,

    paddingVertical: 2,

  },

  giftLabelText: {

    color: '#fff',

    fontSize: 10,

  },

  categories: {

    backgroundColor: '#fff',

    paddingVertical: 15,

  },

  categoryItem: {

    flex: 1,

    alignItems: 'center',

    marginBottom: 15,

  },

  categoryText: {

    marginTop: 5,

    fontSize: 12,

    color: '#333',

  },

  extraCategories: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  extraCategoryItem: {

    flex: 1,

    alignItems: 'center',

  },

  extraCategoryIcon: {

    width: 40,

    height: 40,

    resizeMode: 'contain',

  },

  extraCategoryText: {

    marginTop: 5,

    fontSize: 12,

    color: '#333',

  },

  banners: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 15,

  },

  banner: {

    width: '48%',

    height: 100,

    resizeMode: 'cover',

    borderRadius: 8,

  },

  bottomTabs: {

    flexDirection: 'row',

    backgroundColor: '#fff',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  bottomTab: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 8,

  },

  activeBottomTab: {

    backgroundColor: '#f0f0f0',

  },

  bottomTabText: {

    fontSize: 12,

    color: '#999',

    marginTop: 4,

  },

  activeBottomTabText: {

    color: '#000',

  },

});



export default StoreScreen;