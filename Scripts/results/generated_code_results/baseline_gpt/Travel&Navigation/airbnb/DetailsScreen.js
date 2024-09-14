import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.image} />
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.topRightIcons}>
            <Icon name="share-social-outline" size={24} color="#000" style={styles.icon} />
            <Icon name="heart-outline" size={24} color="#000" style={styles.icon} />
          </View>
          <Text style={styles.imageCounter}>1 / 52</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pitch 24 Creek Caravan Park Ringstead狗友好</Text>
          <Text style={styles.subtitle}>
            英国英格兰多塞特(Dorset)的整套小木屋
          </Text>
          <Text style={styles.details}>
            6 位房客 · 2 间卧室 · 3 张床 · 1.5 个卫生间
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>4.80</Text>
            <Icon name="star" size={12} color="#FFD700" />
            <Text style={styles.recommendation}>房客推荐</Text>
            <Text style={styles.reviews}>5 条评价</Text>
          </View>
          <View style={styles.featuresContainer}>
            <View style={styles.feature}>
              <Icon name="water-outline" size={24} color="#000" />
              <Text>海景民宿</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="thumbs-up-outline" size={24} color="#000" />
              <Text>超赞房东</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="location-outline" size={24} color="#000" />
              <Text>位置极佳</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="calendar-outline" size={24} color="#000" />
              <Text>8月3日前免费取消</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="key-outline" size={24} color="#000" />
              <Text>入住便捷</Text>
            </View>
            <View style={styles.feature}>
              <Icon name="wifi-outline" size={24} color="#000" />
              <Text>无线网络</Text>
            </View>
          </View>
          <Text style={styles.notice}>
            <Icon name="diamond-outline" size={16} color="#FF1493" /> 这个房源很抢手
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>¥ 2,424 / 晚</Text>
            <Text style={styles.dates}>9月2日至7日</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>预订</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  topRightIcons: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  imageCounter: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  details: {
    marginVertical: 10,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  recommendation: {
    marginLeft: 15,
  },
  reviews: {
    marginLeft: 15,
    color: '#666',
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginVertical: 5,
  },
  notice: {
    color: '#FF1493',
    marginVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dates: {
    fontSize: 12,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#FF1493',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DetailsScreen;