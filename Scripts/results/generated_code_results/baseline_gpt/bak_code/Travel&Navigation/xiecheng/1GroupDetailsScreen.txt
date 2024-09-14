import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const GroupDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <View style={styles.headerOverlay}>
          <TouchableOpacity style={styles.navButton}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.imageCountContainer}>
            <Text style={styles.imageCountText}>图片 1/4</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Icon name="share" size={24} color="#fff" />
            <Icon name="more-vert" size={24} color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>烟台+蓬莱区 2日1晚拼小团</Text>
        <Text style={styles.price}>¥965/人起</Text>
        <Text style={styles.discount}>已减100 限时促销 已售11人</Text>
        <Text style={styles.subTitle}>达人探线</Text>
        <Text style={styles.description}>
          6人 MiniGroup 帆船出海/黄渤海分界线/投喂海鸥--“小马尔代夫”-养马岛 | 中国四大名楼-蓬莱阁 | 专业司兼导 |
          宝藏机位 | 千与千寻同款入海轨道/烟台古城-所
        </Text>
        <TouchableOpacity>
          <Text style={styles.expandText}>展开</Text>
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingScore}>5.0分</Text>
          <Text style={styles.ratingText}>超棒 “酒店很舒脏”</Text>
          <TouchableOpacity>
            <Text style={styles.reviewsText}>4条点评</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesContainer}>
          <Text style={styles.serviceText}>服务</Text>
          <Text>放心游 · 无购物 · 成团保障 · 提前2天免费退</Text>
          <Text style={styles.benefitText}>优惠</Text>
          <Text>钻石贵宾专享 暑期大促 分期立减 29项优惠</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottomButton}>
          <Icon name="store" size={24} color="#fff" />
          <Text style={styles.buttonText}>店铺</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Icon name="favorite" size={24} color="#fff" />
          <Text style={styles.buttonText}>收藏</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Icon name="support" size={24} color="#fff" />
          <Text style={styles.buttonText}>客服</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>看每日行程</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>立即预订</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    position: 'relative'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  navButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 20,
  },
  imageCountContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 10,
  },
  imageCountText: {
    color: '#fff',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'red',
    marginBottom: 5,
  },
  discount: {
    marginBottom: 5,
    color: 'red',
  },
  subTitle: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  expandText: {
    color: '#007AFF',
    fontSize: 14,
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingScore: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  reviewsText: {
    fontSize: 14,
    color: '#007AFF',
  },
  servicesContainer: {
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  benefitText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  bottomButton: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#333',
  },
  primaryButton: {
    backgroundColor: '#FF3B30',
    padding: 10,
    borderRadius: 5,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default GroupDetailsScreen;