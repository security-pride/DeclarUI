import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GroupTravelSearchResultScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (destination) => {
    navigation.navigate('GroupDetails', { destination: destination });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.searchText}>烟台出发</Text>
        <View style={styles.searchBox}>
          <Text>烟台</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.filterBar}>
          <Text style={styles.filterText}>推荐排序</Text>
          <Text style={styles.filterText}>天数/日期</Text>
          <Text style={styles.filterText}>人数 2</Text>
          <Text style={styles.filterText}>线路玩法</Text>
          <Text style={styles.filterText}>筛选</Text>
        </View>

        <View style={styles.promotionBanner}>
          <Text>暑期大促</Text>
        </View>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('烟台+蓬莱区·2日1晚')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.tag}>拼小团</Text>
            <Text style={styles.tag}>烟台出发</Text>
            <View style={styles.titleRow}>
              <Text style={styles.title}>烟台+蓬莱区·2日1晚</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
            </View>
            <Text style={styles.details}>游玩 帆船出海·喂海鸥·体验赶海乐趣</Text>
            <Text style={styles.details}>行住 全程3钻酒店</Text>
            <Text style={styles.details}>服务 纯玩无购物·6人小团·提前2天免费退</Text>
            <Text style={styles.rating}>5.0 分 已售 11人 酒店很舒服</Text>
          </View>
          <Text style={styles.price}>¥965 起</Text>
          <Text style={styles.promo}>限时促销 已减100</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('烟台+威海·3日2晚')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.tag}>拼小团</Text>
            <Text style={styles.tag}>烟台出发</Text>
            <View style={styles.titleRow}>
              <Text style={styles.title}>烟台+威海·3日2晚</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
            </View>
            <Text style={styles.details}>游玩 烟台玩1天·帆船出海</Text>
            <Text style={styles.details}>行住 全程3钻酒店</Text>
            <Text style={styles.details}>服务 纯玩无购物·6人小团·提前2天免费退</Text>
            <Text style={styles.rating}>5.0 分 已售 4人 酒店很舒服</Text>
          </View>
          <Text style={styles.price}>¥1699 起</Text>
          <Text style={styles.promo}>限时促销 已减100</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleCardPress('山东烟台+蓬莱+长岛·3日')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.tag}>跟团游</Text>
            <Text style={styles.tag}>烟台出发</Text>
            <Text style={styles.title}>山东烟台+蓬莱+长岛·3日</Text>
            <Text style={styles.details}>游玩 烟台玩3天·含2正餐</Text>
            <Text style={styles.details}>行住 2晚住宿 含1晚2钻</Text>
            <Text style={styles.details}>服务 纯玩无购物·提前2天免费退·成团保障</Text>
            <Text style={styles.rating}>5.0 分 已售 4人 酒店很舒服</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Button title="跟团首页" onPress={() => {}} />
        <Button title="目的地" onPress={() => {}} />
        <Button title="浏览历史" onPress={() => {}} />
        <Button title="我的收藏" onPress={() => {}} />
        <Button title="我的订单" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchText: {
    marginLeft: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  filterText: {
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 5,
  },
  promotionBanner: {
    padding: 10,
    backgroundColor: '#DCF4F9',
    margin: 10,
    borderRadius: 5,
  },
  card: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  cardContent: {
    padding: 10,
  },
  tag: {
    backgroundColor: '#E9F2FE',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  details: {
    marginTop: 5,
    color: '#555',
  },
  rating: {
    marginTop: 5,
    color: '#F00',
  },
  price: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#F00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  promo: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#F00',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default GroupTravelSearchResultScreen;