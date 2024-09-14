import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();

  const handleReservation = () => {
    navigation.navigate('Reservation');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.shareButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={require('../assets/snack-icon.png')} style={styles.mainImage} />
      <Text style={styles.imageCounter}>1/52</Text>

      <View style={styles.content}>
        <Text style={styles.title}>Pitch 24 Creek Caravan Park Ringstead狗友好</Text>
        <Text style={styles.subtitle}>英国英格兰多塞特(Dorset)的整套小木屋</Text>
        <Text style={styles.details}>6位房客 · 2间卧室 · 3张床 · 1.5个卫生间</Text>

        <View style={styles.ratingContainer}>
          <View style={styles.ratingItem}>
            <Text style={styles.ratingScore}>4.80</Text>
            <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
          </View>
          <View style={styles.ratingItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.iconSmall} />
            <Text style={styles.ratingText}>房客推荐</Text>
          </View>
          <View style={styles.ratingItem}>
            <Text style={styles.reviewCount}>5</Text>
            <Text style={styles.reviewText}>条评价</Text>
          </View>
        </View>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>海景民宿</Text>
          </View>
          <View style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>超赞房东</Text>
          </View>
          <View style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>位置极佳</Text>
          </View>
          <View style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>8月3日前免费取消</Text>
          </View>
          <View style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>入住便捷</Text>
          </View>
          <View style={styles.featureItem}>
            <Image source={require('../assets/snack-icon.png')} style={styles.featureIcon} />
            <Text style={styles.featureText}>无线网络</Text>
          </View>
        </View>

        <View style={styles.rareFindContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.diamondIcon} />
          <Text style={styles.rareFindText}>这个房源很抢手</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>¥ 2,424 /晚</Text>
          <Text style={styles.date}>9月2日至7日</Text>
        </View>

        <TouchableOpacity style={styles.reserveButton} onPress={handleReservation}>
          <Text style={styles.reserveButtonText}>预订</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    padding: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    padding: 5,
  },
  headerRight: {
    flexDirection: 'row',
  },
  shareButton: {
    marginRight: 10,
    padding: 5,
  },
  favoriteButton: {
    padding: 5,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  mainImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  imageCounter: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    padding: 5,
    borderRadius: 10,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  ratingScore: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  starIcon: {
    width: 16,
    height: 16,
  },
  iconSmall: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
  },
  reviewCount: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  reviewText: {
    fontSize: 14,
  },
  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  featureIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  featureText: {
    fontSize: 14,
  },
  rareFindContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  diamondIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rareFindText: {
    color: '#FF69B4',
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  reserveButton: {
    backgroundColor: '#FF1493',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;