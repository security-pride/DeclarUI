import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const categories = [
    { icon: 'ios-airplane', label: '飞猪旅行' },
    { icon: 'ios-gift', label: '百亿补贴' },
    { icon: 'ios-restaurant', label: '饿了么' },
    { icon: 'ios-leaf', label: '芭芭农场' },
    { icon: 'ios-planet', label: '天猫国际' },
  ];

  const liveOptions = [
    { image: "../assets/snack-icon.png", label: '觅橙官方' },
    { image: "../assets/snack-icon.png", label: '李宁官方' },
    { image: "../assets/snack-icon.png", label: '吉杰' },
  ];

  const products = [
    { image: "../assets/snack-icon.png", name: '明日香 EVA动漫水洗做', price: '¥536', paymentInfo: '87人付款' },
    { image: "../assets/snack-icon.png", name: 'MEDMXEVA联名', price: '¥279 每300减30', tag: '季' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="qr-code-outline" size={24} color="#fff" />
        <Text style={styles.headerTitle}>team wang联名</Text>
        <View style={styles.headerIcons}>
          <Icon name="camera-outline" size={24} color="#fff" />
          <TextInput style={styles.searchInput} placeholder="搜索" placeholderTextColor="#000" />
        </View>
      </View>

      <View style={styles.tabBar}>
        <Text style={styles.tabItem}>关注</Text>
        <Text style={styles.tabItem}>推荐</Text>
        <Text style={styles.tabItem}>小时达</Text>
        <Text style={styles.tabItemActive}>狂暑季</Text>
        <Text style={styles.tabItem}>穿搭</Text>
        <Text style={styles.tabItem}>居家</Text>
      </View>
      
      <ScrollView horizontal style={styles.categoryList}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItem}>
            <Icon name={category.icon} size={30} color="#fff" />
            <Text style={styles.categoryLabel}>{category.label}</Text>
          </View>
        ))}
      </ScrollView>

      <ScrollView style={styles.mainScroll}>
        <FlatList
          horizontal
          style={styles.liveList}
          data={liveOptions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.liveItem}>
              <Image source={{ uri: item.image }} style={styles.liveImage} />
              <Text style={styles.liveLabel}>{item.label}</Text>
            </View>
          )}
        />

        <FlatList
          numColumns={2}
          data={products}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              <Text style={styles.paymentInfo}>{item.paymentInfo}</Text>
            </View>
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="storefront-outline" size={30} color="#f60" />
          <Text style={styles.footerText}>淘宝</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="tv-outline" size={30} color="#fff" />
          <Text style={styles.footerText}>逛逛</Text>
        </TouchableOpacity>
        <View style={styles.footerItem}>
          <Icon name="chatbubble-outline" size={30} color="#fff" />
          <Text style={styles.footerText}>消息</Text>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="cart-outline" size={30} color="#fff" />
          <Text style={styles.footerText}>购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="person-outline" size={30} color="#fff" />
          <Text style={styles.footerText}>我的淘宝</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#171717',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#fff',
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginLeft: 10,
    width: 100,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    backgroundColor: '#333',
    paddingVertical: 5,
  },
  tabItem: {
    color: '#fff',
    fontSize: 12,
  },
  tabItemActive: {
    color: '#ff0000',
    fontSize: 12,
  },
  categoryList: {
    paddingVertical: 10,
    backgroundColor: '#333',
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  categoryLabel: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
  },
  liveList: {
    paddingVertical: 10,
  },
  liveItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  liveImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  liveLabel: {
    color: '#ff0066',
    fontSize: 10,
  },
  mainScroll: {
    backgroundColor: '#333',
  },
  productItem: {
    backgroundColor: '#222',
    margin: 5,
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productName: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
  productPrice: {
    color: '#ff6600',
    marginTop: 2,
    fontSize: 14,
  },
  paymentInfo: {
    color: '#909090',
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#444',
    backgroundColor: '#171717',
    paddingVertical: 5,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 10,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: -5,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: '#fff',
    fontSize: 10,
  },
});

export default HomeScreen;