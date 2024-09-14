import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const CategoryButton = ({ title, icon }) => (

  <TouchableOpacity style={styles.categoryButton}>

    <Image source={icon} style={styles.categoryIcon} />

    <Text style={styles.categoryText}>{title}</Text>

  </TouchableOpacity>

);



const ProductCard = ({ item }) => (

  <TouchableOpacity style={styles.productCard}>

    <Image source={item.image} style={styles.productImage} />

    <Text style={styles.productName}>{item.name}</Text>

    <Text style={styles.productPrice}>¥{item.price}</Text>

    {item.tag && <Text style={styles.productTag}>{item.tag}</Text>}

    {item.soldCount && <Text style={styles.productSold}>{item.soldCount}人付款</Text>}

  </TouchableOpacity>

);



const LiveStreamCard = ({ item }) => (

  <TouchableOpacity style={styles.liveStreamCard}>

    <Image source={item.image} style={styles.liveStreamImage} />

    <Text style={styles.liveStreamName}>{item.name}</Text>

  </TouchableOpacity>

);



const HomeScreen = () => {

  const navigation = useNavigation();



  const categories = [

    { title: '飞猪旅行', icon: require('../assets/snack-icon.png') },

    { title: '百亿补贴', icon: require('../assets/snack-icon.png') },

    { title: '饿了么', icon: require('../assets/snack-icon.png') },

    { title: '芭芭农场', icon: require('../assets/snack-icon.png') },

    { title: '天猫国际', icon: require('../assets/snack-icon.png') },

    { title: '阿里', icon: require('../assets/snack-icon.png') },

  ];



  const liveStreams = [

    { id: '1', name: '觅橘官方', image: require('../assets/snack-icon.png') },

    { id: '2', name: '吉杰', image: require('../assets/snack-icon.png') },

    { id: '3', name: '李宁官方', image: require('../assets/snack-icon.png') },

  ];



  const products = [

    { id: '1', name: '明日香EVA动漫水洗做', price: 536, image: require('../assets/snack-icon.png'), soldCount: 87 },

    { id: '2', name: 'MEDMXEVA联名', price: 279, image: require('../assets/snack-icon.png'), tag: '每300减30' },

  ];



  const flashSaleProducts = [

    { id: '1', name: '小竹', price: 2.01, image: require('../assets/snack-icon.png') },

    { id: '2', name: '钢丝球', price: 2.96, image: require('../assets/snack-icon.png') },

    { id: '3', name: '卫生纸', price: 1.42, image: require('../assets/snack-icon.png') },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity style={styles.scanButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.scanIcon} />

        </TouchableOpacity>

        <View style={styles.searchBar}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="team wang联名"

            placeholderTextColor="#999"

          />

        </View>

        <TouchableOpacity style={styles.cameraButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />

        </TouchableOpacity>

      </View>



      <ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>

          {categories.map((category, index) => (

            <CategoryButton key={index} title={category.title} icon={category.icon} />

          ))}

        </ScrollView>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>淘宝直播</Text>

            <Text style={styles.sectionSubtitle}>爆款抢免单</Text>

          </View>

          <FlatList

            horizontal

            data={liveStreams}

            renderItem={({ item }) => <LiveStreamCard item={item} />}

            keyExtractor={item => item.id}

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>淘宝秒杀</Text>

            <Text style={styles.sectionSubtitle}>仅剩 22:35:11</Text>

          </View>

          <FlatList

            horizontal

            data={flashSaleProducts}

            renderItem={({ item }) => <ProductCard item={item} />}

            keyExtractor={item => item.id}

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <View style={styles.productGrid}>

          {products.map(product => (

            <ProductCard key={product.id} item={product} />

          ))}

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>首页</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Logistics')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>逛逛</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Message')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>消息</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>购物车</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>我的淘宝</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#000',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#FF6600',

  },

  scanButton: {

    marginRight: 10,

  },

  scanIcon: {

    width: 24,

    height: 24,

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    paddingHorizontal: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  searchInput: {

    flex: 1,

    height: 36,

    color: '#000',

  },

  cameraButton: {

    marginLeft: 10,

  },

  cameraIcon: {

    width: 24,

    height: 24,

  },

  categoryContainer: {

    flexDirection: 'row',

    paddingVertical: 10,

  },

  categoryButton: {

    alignItems: 'center',

    marginHorizontal: 10,

  },

  categoryIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  categoryText: {

    color: '#FFFFFF',

    marginTop: 5,

    fontSize: 12,

  },

  sectionContainer: {

    marginVertical: 10,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 10,

    marginBottom: 10,

  },

  sectionTitle: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  sectionSubtitle: {

    color: '#FF6600',

    fontSize: 14,

  },

  liveStreamCard: {

    marginRight: 10,

    alignItems: 'center',

  },

  liveStreamImage: {

    width: 60,

    height: 60,

    borderRadius: 30,

  },

  liveStreamName: {

    color: '#FFFFFF',

    marginTop: 5,

    fontSize: 12,

  },

  productGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    paddingHorizontal: 10,

  },

  productCard: {

    width: '48%',

    backgroundColor: '#1A1A1A',

    borderRadius: 10,

    padding: 10,

    marginBottom: 10,

  },

  productImage: {

    width: '100%',

    height: 150,

    borderRadius: 5,

    marginBottom: 5,

  },

  productName: {

    color: '#FFFFFF',

    fontSize: 14,

    marginBottom: 5,

  },

  productPrice: {

    color: '#FF6600',

    fontSize: 16,

    fontWeight: 'bold',

  },

  productTag: {

    color: '#FF6600',

    fontSize: 12,

    marginTop: 5,

  },

  productSold: {

    color: '#999999',

    fontSize: 12,

    marginTop: 5,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#333333',

    paddingVertical: 5,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabText: {

    color: '#999999',

    fontSize: 12,

    marginTop: 2,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#FF6600',

  },

  activeTabText: {

    color: '#FF6600',

  },

});



export default HomeScreen;