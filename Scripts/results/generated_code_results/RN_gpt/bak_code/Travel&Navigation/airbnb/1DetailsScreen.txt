import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/snack-icon.png')} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="share-outline" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="heart-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.imageCount}>1/52</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Pitch 24 Creek Caravan Park Ringstead狗友好</Text>
        <Text style={styles.subTitle}>英国英格兰多塞特(Dorset)的整套小木屋</Text>
        <Text style={styles.infoText}>6位房客 · 2间卧室 · 3张床 · 1.5个卫生间</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.80</Text>
          <Text style={styles.recommendation}>房客推荐</Text>
          <Text style={styles.reviewCount}>5条评价</Text>
        </View>
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
            <Text style={styles.featureText}>海景民宿</Text>
          </View>
          <View style={styles.feature}>
            <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
            <Text style={styles.featureText}>超赞房东</Text>
          </View>
          <View style={styles.feature}>
            <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
            <Text style={styles.featureText}>位置极佳</Text>
          </View>
          <View style={styles.feature}>
            <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
            <Text style={styles.featureText}>入住便捷</Text>
          </View>
          <View style={styles.feature}>
            <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
            <Text style={styles.featureText}>无线网络</Text>
          </View>
        </View>
        <Text style={styles.specialNote}>这个房源很抢手</Text>
        <Text style={styles.price}>¥2,424/晚</Text>
        <Text style={styles.dateRange}>9月2日至7日</Text>
        <Button title="预订" color="#ff4081" onPress={() => navigation.navigate('Reservation')} />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.navItem}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SearchCategory')}>
          <Text style={styles.navItem}>SearchCategory</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
          <Text style={styles.navItem}>Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reservation')}>
          <Text style={styles.navItem}>Reservation</Text>
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
  image: {
    width: '100%',
    height: 250,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 10,
    width: '100%',
  },
  backIcon: {
    color: '#fff',
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 5,
  },
  imageCount: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#fff',
  },
  detailContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 5,
  },
  infoText: {
    color: '#aaa',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendation: {
    fontSize: 16,
  },
  reviewCount: {
    fontSize: 16,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  featureText: {
    fontSize: 14,
  },
  specialNote: {
    color: '#e91e63',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateRange: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
  },
  bottomNav: {
    height: 50,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailsScreen;