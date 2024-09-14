import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GroupDetailsScreen = () => {
  const navigation = useNavigation();

  const handleRedirectToGroupTravelSearchResult = () => {
    navigation.navigate('GroupTravelSearchResult');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<--'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>图片1/4</Text>
        <TouchableOpacity style={styles.expertPath}>
          <Text style={styles.expertPathText}>达人探线</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIcon}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationIcon}>
          <View style={styles.notificationCount}>
            <Text style={styles.notificationText}>16</Text>
          </View>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      <View style={styles.infoSection}>
        <Text style={styles.title}>烟台+蓬莱区2日1晚拼小团</Text>
        <Text style={styles.subtitle}>编号 4558775</Text>
        <Text style={styles.price}>¥965/人起</Text>
        <Text style={styles.offer}>已减100 | 限时促销 | 已售11人</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          <Text style={styles.label}>卖点 </Text>
          6人MiniGroup帆船出海/黄渤海分界线/投喂海鸥/养马岛/中国四大名楼-蓬莱阁/专业司兼导/宝藏机位/千与千寻同款入海轨道/烟台古城
        </Text>
      </View>
      <View style={styles.reviewSection}>
        <Text style={styles.ratingTitle}>5.0分</Text>
        <Text style={styles.reviewTitle}>超棒 "酒店很舒服"</Text>
        <Text style={styles.reviewCount}>4条点评</Text>
      </View>
      <View style={styles.services}>
        <Text style={styles.service}>放⼼游</Text>
        <Text style={styles.service}>无购物</Text>
        <Text style={styles.service}>成团保障</Text>
        <Text style={styles.service}>提前2⽇免费退</Text>
      </View>
      <View style={styles.offers}>
        <Text style={styles.vipOffer}>钻⽯贵宾专享</Text>
        <Text style={styles.promoOffer}>暑期大促</Text>
        <TouchableOpacity style={styles.installmentOffer}>
          <Text style={styles.installmentText}>分期立减</Text>
        </TouchableOpacity>
        <Text style={styles.incentives}>29项优惠</Text>
      </View>
      <View style={styles.additionalInfo}>
        <Text style={styles.labelBold}>拼小团: </Text>
        <Text style={styles.label}>人少体验好</Text>
        <Text style={styles.labelBold}>自由灵活</Text>
        <Text style={styles.label}>
          | 特色体验
        </Text>
      </View>
      <View style={styles.departureSection}>
        <Text style={styles.departureTitle}>烟台出发</Text>
        <Text style={styles.dateItem}>最近30天低价</Text>
        <Text style={styles.dateItem}>周末出行</Text>
        <Text style={styles.dateLabel}>星期五 07-19</Text>
        <Text style={styles.dateLabel}>星期六 07-20</Text>
        <Text style={styles.dateLabel}>星期日 07-21</Text>
        <Text style={styles.allDates}>全部班期</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text>店铺</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Button title="收藏" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={handleRedirectToGroupTravelSearchResult}>
          <Text>客服</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>看每日行程</Text>
        </TouchableOpacity>
        <Button title="立即预订" color="#ff6600" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
  headerText: {
    fontSize: 14,
    color: '#333333',
  },
  expertPath: {
    padding: 10,
  },
  expertPathText: {
    color: '#007aff',
  },
  shareIcon: {
    padding: 10,
  },
  notificationIcon: {
    position: 'relative',
    padding: 10,
  },
  notificationCount: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 2,
  },
  notificationText: {
    color: '#ffffff',
    fontSize: 12,
  },
  icon: {
    width: 20,
    height: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoSection: {
    padding: 10,
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 12,
    color: '#ffffff',
  },
  price: {
    fontSize: 18,
    color: '#ff6600',
  },
  offer: {
    fontSize: 14,
    color: '#ff6600',
  },
  description: {
    padding: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333333',
  },
  label: {
    fontWeight: 'bold',
  },
  reviewSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  ratingTitle: {
    fontSize: 16,
    color: '#ff6600',
  },
  reviewTitle: {
    fontSize: 14,
    color: '#333333',
  },
  reviewCount: {
    fontSize: 12,
    color: '#333333',
  },
  services: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  service: {
    color: '#007aff',
    marginRight: 10,
  },
  offers: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  vipOffer: {
    backgroundColor: '#ff6600',
    padding: 5,
    borderRadius: 5,
    color: '#ffffff',
  },
  promoOffer: {
    backgroundColor: '#ffcc00',
    padding: 5,
    borderRadius: 5,
    color: '#333333',
  },
  installmentOffer: {
    backgroundColor: '#007aff',
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
  },
  installmentText: {
    color: '#ffffff',
  },
  incentives: {
    fontSize: 12,
  },
  additionalInfo: {
    flexDirection: 'row',
    padding: 10,
  },
  labelBold: {
    fontWeight: 'bold',
  },
  departureSection: {
    padding: 10,
  },
  departureTitle: {
    fontSize: 18,
    color: '#333333',
  },
  dateItem: {
    backgroundColor: '#ffcc00',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  dateLabel: {
    fontSize: 14,
    color: '#333333',
  },
  allDates: {
    fontSize: 14,
    color: '#007aff',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f2f2f2',
    height: 60,
  },
  navButton: {
    alignItems: 'center',
  },
});

export default GroupDetailsScreen;