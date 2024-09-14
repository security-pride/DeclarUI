import React from 'react';
import { View, Text, Image, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="team wang联名" />
        <Pressable style={styles.cameraIcon} onPress={() => { /* handle camera icon press */ }}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </Pressable>
        <Pressable style={styles.searchButton} onPress={() => { /* handle search button press */ }}>
          <Text style={styles.searchButtonText}>搜索</Text>
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.categoryRow}>
          <Text style={styles.categoryText}>关注</Text>
          <Text style={styles.categoryText}>推荐</Text>
          <Text style={styles.categoryText}>小时达</Text>
          <Text style={styles.categoryText}>狂暑季</Text>
          <Text style={styles.categoryText}>穿搭</Text>
          <Text style={styles.categoryText}>居家</Text>
          <Text style={styles.categoryText}>数码</Text>
        </View>
        <ScrollView horizontal style={styles.quickAccessContainer}>
          <View style={styles.quickAccessItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
            <Text style={styles.quickAccessText}>飞猪旅行</Text>
          </View>
          <View style={styles.quickAccessItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
            <Text style={styles.quickAccessText}>百亿补贴</Text>
          </View>
          <View style={styles.quickAccessItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
            <Text style={styles.quickAccessText}>饿了么</Text>
          </View>
          <View style={styles.quickAccessItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
            <Text style={styles.quickAccessText}>芭芭农场</Text>
          </View>
          <View style={styles.quickAccessItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
            <Text style={styles.quickAccessText}>天猫国际</Text>
          </View>
        </ScrollView>
        <Text style={styles.sectionTitle}>淘宝直播</Text>
        <ScrollView horizontal style={styles.liveStreamContainer}>
          <View style={styles.liveStreamItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.liveStreamImage} />
            <Text style={styles.liveStreamText}>觅橘官方</Text>
          </View>
          <View style={styles.liveStreamItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.liveStreamImage} />
            <Text style={styles.liveStreamText}>吉杰</Text>
          </View>
          <View style={styles.liveStreamItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.liveStreamImage} />
            <Text style={styles.liveStreamText}>李宁官方</Text>
          </View>
        </ScrollView>
        <Text style={styles.flashSaleTitle}>淘宝秒杀</Text>
        <Text style={styles.flashSaleTimer}>仅剩 22:35:11</Text>
        <View style={styles.flashSaleItemContainer}>
          <View style={styles.flashSaleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <Text style={styles.productPrice}>¥2.01</Text>
          </View>
          <View style={styles.flashSaleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <Text style={styles.productPrice}>¥2.96</Text>
          </View>
          <View style={styles.flashSaleItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.productImage} />
            <Text style={styles.productPrice}>¥1.42</Text>
          </View>
        </View>
        <View style={styles.featuredProductsContainer}>
          <View style={styles.featuredProduct}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featuredProductImage} />
            <Text style={styles.featuredProductInfo}>明日香EVA动漫水洗做</Text>
            <Text style={styles.featuredProductPrice}>¥536 87人付款</Text>
          </View>
          <View style={styles.featuredProduct}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featuredProductImage} />
            <Text style={styles.productTag}>潮流男装 热卖好店上新</Text>
            <Text style={styles.featuredProductInfo}>狂暑季 MEDMXEVA联名</Text>
            <Text style={styles.featuredProductPrice}>¥279 每300减30</Text>
          </View>
        </View>
        <View style={styles.moreProductsContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.moreProductImage} />
          <Image source={require('../assets/snack-icon.png')} style={styles.moreProductImage} />
        </View>
      </ScrollView>
      <View style={styles.bottomNavBar}>
        <Pressable style={styles.bottomNavItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.bottomNavText}>首页</Text>
        </Pressable>
        <Pressable style={styles.bottomNavItem} onPress={() => navigation.navigate('Logistics')}>
          <Text style={styles.bottomNavText}>逛逛</Text>
        </Pressable>
        <Pressable style={styles.bottomNavItem} onPress={() => navigation.navigate('Message')}>
          <Text style={styles.bottomNavText}>消息</Text>
        </Pressable>
        <Pressable style={styles.bottomNavItem} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.bottomNavText}>购物车</Text>
        </Pressable>
        <Pressable style={styles.bottomNavItem} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.bottomNavText}>我的淘宝</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchBarContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
  },
  searchBar: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1c1c1c',
    borderRadius: 5,
    color: '#fff',
  },
  cameraIcon: {
    padding: 10,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#f60',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  mainContent: {
    padding: 15,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  quickAccessItem: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quickAccessIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  quickAccessText: {
    color: '#fff',
    fontSize: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  liveStreamContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  liveStreamItem: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  liveStreamImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  liveStreamText: {
    color: '#fff',
    fontSize: 12,
  },
  flashSaleTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  flashSaleTimer: {
    color: '#ff4d4f',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flashSaleItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  flashSaleItem: {
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
  },
  productPrice: {
    color: '#ff4d4f',
  },
  featuredProductsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  featuredProduct: {
    alignItems: 'center',
    width: '48%',
  },
  featuredProductImage: {
    width: '100%',
    height: 150,
    marginBottom: 5,
  },
  featuredProductInfo: {
    color: '#fff',
    marginBottom: 5,
  },
  featuredProductPrice: {
    color: '#ff4d4f',
  },
  productTag: {
    color: '#ff4d4f',
    marginBottom: 5,
  },
  moreProductsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  moreProductImage: {
    width: '48%',
    height: 100,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    color: '#fff',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default HomeScreen;