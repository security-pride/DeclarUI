import React from 'react';

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const categoryIcons = [

  { name: '人才市场', icon: '../assets/snack-icon.png' },

  { name: '手机', icon: '../assets/snack-icon.png' },

  { name: '省钱神券', icon: '../assets/snack-icon.png' },

  { name: '充值中心', icon: '../assets/snack-icon.png' },

  { name: '奢品', icon: '../assets/snack-icon.png' },

];



const promotions = [

  { title: '闲鱼特卖超低价', description: '全新正品1折起', image: '../assets/snack-icon.png' },

  { title: '极速回收', description: '免费上门', image: '../assets/snack-icon.png' },

  { title: '闲鱼直播', description: '爆款好物直播中', image: '../assets/snack-icon.png' },

];



const tags = ['猜你喜欢', '最新发布', '鱼币抵钱', '省钱小组'];



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderCategoryIcon = ({ item }) => (

    <TouchableOpacity style={styles.categoryIconContainer}>

      <Image source={item.icon} style={styles.categoryIcon} />

      <Text style={styles.categoryIconText}>{item.name}</Text>

    </TouchableOpacity>

  );



  const renderPromotion = ({ item }) => (

    <TouchableOpacity style={styles.promotionContainer}>

      <Image source={item.image} style={styles.promotionImage} />

      <View style={styles.promotionTextContainer}>

        <Text style={styles.promotionTitle}>{item.title}</Text>

        <Text style={styles.promotionDescription}>{item.description}</Text>

      </View>

    </TouchableOpacity>

  );



  const renderTag = ({ item }) => (

    <TouchableOpacity style={styles.tag}>

      <Text style={styles.tagText}>{item}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.headerTitle}>海鲜市场</Text>

        <Text style={styles.headerSubtitle}>推荐</Text>

        <Text style={styles.headerLocation}>武汉</Text>

        <TouchableOpacity style={styles.headerRight}>

          <Image source={require('../assets/snack-icon.png')} style={styles.headerIcon} />

          <Text style={styles.headerRightText}>签到</Text>

        </TouchableOpacity>

      </View>



      <View style={styles.searchBar}>

        <TouchableOpacity style={styles.cameraButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />

        </TouchableOpacity>

        <TextInput

          style={styles.searchInput}

          placeholder="穿戴甲"

          placeholderTextColor="#999"

        />

        <TouchableOpacity style={styles.searchButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('Categories')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <FlatList

          data={categoryIcons}

          renderItem={renderCategoryIcon}

          horizontal

          showsHorizontalScrollIndicator={false}

          style={styles.categoryList}

        />



        <FlatList

          data={promotions}

          renderItem={renderPromotion}

          horizontal

          showsHorizontalScrollIndicator={false}

          style={styles.promotionList}

        />



        <FlatList

          data={tags}

          renderItem={renderTag}

          horizontal

          showsHorizontalScrollIndicator={false}

          style={styles.tagList}

        />



        {/* Add more content here */}

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />

          <Text style={styles.bottomNavText}>闲鱼</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />

          <Text style={styles.bottomNavText}>游戏</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('Sell')}>

          <View style={styles.sellButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.sellIcon} />

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />

          <Text style={styles.bottomNavText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomNavItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bottomNavIcon} />

          <Text style={styles.bottomNavText}>我的</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#f8f8f8',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  headerSubtitle: {

    fontSize: 16,

    marginLeft: 10,

  },

  headerLocation: {

    fontSize: 14,

    color: '#666',

    marginLeft: 'auto',

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

    marginLeft: 10,

  },

  headerIcon: {

    width: 20,

    height: 20,

  },

  headerRightText: {

    fontSize: 14,

    color: '#666',

    marginLeft: 5,

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#fff',

  },

  cameraButton: {

    padding: 5,

  },

  cameraIcon: {

    width: 24,

    height: 24,

  },

  searchInput: {

    flex: 1,

    height: 36,

    backgroundColor: '#f0f0f0',

    borderRadius: 18,

    paddingHorizontal: 15,

    marginHorizontal: 10,

  },

  searchButton: {

    padding: 5,

  },

  searchIcon: {

    width: 24,

    height: 24,

  },

  menuButton: {

    padding: 5,

  },

  menuIcon: {

    width: 24,

    height: 24,

  },

  content: {

    flex: 1,

  },

  categoryList: {

    paddingVertical: 10,

  },

  categoryIconContainer: {

    alignItems: 'center',

    marginHorizontal: 10,

  },

  categoryIcon: {

    width: 40,

    height: 40,

  },

  categoryIconText: {

    fontSize: 12,

    marginTop: 5,

  },

  promotionList: {

    paddingVertical: 10,

  },

  promotionContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#fff',

    borderRadius: 8,

    padding: 10,

    marginHorizontal: 10,

    width: 250,

  },

  promotionImage: {

    width: 60,

    height: 60,

    borderRadius: 8,

  },

  promotionTextContainer: {

    marginLeft: 10,

  },

  promotionTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  promotionDescription: {

    fontSize: 14,

    color: '#666',

    marginTop: 5,

  },

  tagList: {

    paddingVertical: 10,

  },

  tag: {

    backgroundColor: '#fff',

    borderRadius: 16,

    paddingHorizontal: 12,

    paddingVertical: 6,

    marginHorizontal: 5,

  },

  tagText: {

    fontSize: 14,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#fff',

    paddingVertical: 5,

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

  },

  bottomNavItem: {

    alignItems: 'center',

  },

  bottomNavIcon: {

    width: 24,

    height: 24,

  },

  bottomNavText: {

    fontSize: 12,

    marginTop: 2,

  },

  sellButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#FF6E00',

    justifyContent: 'center',

    alignItems: 'center',

  },

  sellIcon: {

    width: 30,

    height: 30,

  },

});



export default HomeScreen;