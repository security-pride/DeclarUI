import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Text style={styles.headerText}>推荐</Text>
        <Icon name="location-outline" size={20} style={styles.locationIcon} />
        <Text style={styles.locationText}>武汉</Text>
        <Icon name="notifications-outline" size={20} style={styles.notificationIcon} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} style={styles.searchIcon} />
        <TextInput placeholder="穿戴甲" style={styles.searchInput} />
      </View>

      {/* Category Icons */}
      <View style={styles.categoryIcons}>
        <CategoryIcon name="人力市场" />
        <CategoryIcon name="手机" />
        <CategoryIcon name="省钱神券" />
        <CategoryIcon name="充值中心" />
        <CategoryIcon name="奢品" />
      </View>

      {/* Ad and Offers */}
      <View style={styles.adSection}>
        <AdCard title="闲鱼特卖 超低价" subtitle="全新正品1折起" price="¥4.8" />
        <AdCard title="极速回收" subtitle="免费上门" price="" />
        <AdCard title="闲鱼直播" subtitle="爆款好物直播放" price="" />
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabs}>
          <TabButton title="猜你喜欢" />
          <TabButton title="最新发布" />
          <TabButton title="鱼币抵钱" />
          <TabButton title="省钱小组" />
          <TabButton title="更多" />
        </View>
      </ScrollView>

      {/* Content Items (Dummy) */}
      <View style={styles.content}>
        <Text>Content goes here...</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <FooterButton iconName="home" title="闲鱼" />
        <FooterButton iconName="game-controller" title="游戏" />
        <FooterButton iconName="add-circle" title="发布" isMain />
        <FooterButton iconName="chatbubbles" title="消息" />
        <FooterButton iconName="person" title="我的" />
      </View>
    </ScrollView>
  );
};

const CategoryIcon = ({ name }) => (
  <View style={styles.categoryIcon}>
    <Image source={require('../assets/snack-icon.png')} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const AdCard = ({ title, subtitle, price }) => (
  <View style={styles.adCard}>
    <Text style={styles.adTitle}>{title}</Text>
    <Text style={styles.adSubtitle}>{subtitle}</Text>
    {price ? <Text style={styles.adPrice}>{price}</Text> : null}
  </View>
);

const TabButton = ({ title }) => (
  <TouchableOpacity style={styles.tabButton}>
    <Text style={styles.tabButtonText}>{title}</Text>
  </TouchableOpacity>
);

const FooterButton = ({ iconName, title, isMain }) => (
  <TouchableOpacity style={[styles.footerButton, isMain && styles.mainButton]}>
    <Icon name={iconName} size={20} style={styles.footerIcon} />
    <Text style={styles.footerText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationIcon: {
    marginLeft: 'auto',
  },
  locationText: {
    marginLeft: 5,
  },
  notificationIcon: {
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    margin: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
  },
  categoryIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoryIcon: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    marginTop: 5,
  },
  adSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  adCard: {
    width: 100,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    alignItems: 'center',
  },
  adTitle: {
    fontWeight: 'bold',
  },
  adSubtitle: {
    fontSize: 12,
  },
  adPrice: {
    marginTop: 5,
    color: 'red',
  },
  tabs: {
    flexDirection: 'row',
    padding: 10,
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    margin: 5,
  },
  tabButtonText: {
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  footerButton: {
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: '#ff0f0f',
    borderRadius: 50,
    padding: 10,
  },
  footerIcon: {
    marginBottom: 5,
  },
  footerText: {
    fontSize: 12,
  },
});

export default HomeScreen;