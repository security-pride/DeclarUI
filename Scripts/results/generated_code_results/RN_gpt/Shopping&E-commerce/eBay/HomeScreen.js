import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header with Search Bar and Icons */}
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#000" />
          <Text style={styles.searchText}>搜索任何物品</Text>
        </View>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Quick Links */}
      <View style={styles.quickLinks}>
        <TouchableOpacity style={styles.quickLinkItem}>
          <Icon name="favorite-outline" size={24} color="#000" />
          <Text>已保存</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLinkItem}>
          <Icon name="style" size={24} color="#000" />
          <Text>时尚</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickLinkItem}>
          <Icon name="explore" size={24} color="#000" />
          <Text>探索（全新！）</Text>
        </TouchableOpacity>
      </View>

      {/* Promotion Banner */}
      <View style={styles.promotionBanner}>
        <Text style={styles.bannerTitle}>Join the party with 15% off</Text>
        <Text style={styles.bannerSubtitle}>Celebrate eBay UK with big deals on brands from selected sellers.</Text>
        <TouchableOpacity style={styles.promoCodeButton}>
          <Text style={styles.promoCodeText}>Use code SIZZLE15</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>Ends 21 July. Min spend £9.99. Max £75 off. T&Cs.</Text>
      </View>

      {/* Recently Viewed Items */}
      <View style={styles.recentlyViewed}>
        <Text style={styles.recentlyViewedTitle}>您最近浏览的物品</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>浏览全部</Text>
        </TouchableOpacity>
      </View>

      {/* Product Items */}
      <View style={styles.productList}>
        <TouchableOpacity style={styles.productItem}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.productImage}>
            <Icon name="favorite" size={20} color="#fff" />
          </ImageBackground>
          <Text>Ottogi Jin Ramen Mild Noodles (Pack of 20)</Text>
          <Text>GBP 22.99</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.productItem}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.productImage}>
            <Icon name="favorite" size={20} color="#fff" />
          </ImageBackground>
          <Text>Spiderman Push Pop for it Bubble Fidget T...</Text>
          <Text>GBP 4.10</Text>
        </TouchableOpacity>
        {/* Add more items as needed */}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="local-offer" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#ededed',
    borderRadius: 20,
    flex: 1,
  },
  searchText: {
    marginLeft: 8,
    color: '#000',
  },
  quickLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  quickLinkItem: {
    alignItems: 'center',
  },
  promotionBanner: {
    backgroundColor: '#ffd700',
    padding: 16,
    marginVertical: 8,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  bannerSubtitle: {
    color: '#000',
    marginVertical: 8,
  },
  promoCodeButton: {
    backgroundColor: '#fff',
    padding: 8,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  promoCodeText: {
    color: '#000',
  },
  termsText: {
    color: '#000',
    marginTop: 8,
  },
  recentlyViewed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  recentlyViewedTitle: {
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#007bff',
  },
  productList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  productItem: {
    width: 120,
    marginBottom: 16,
  },
  productImage: {
    width: 120,
    height: 80,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;