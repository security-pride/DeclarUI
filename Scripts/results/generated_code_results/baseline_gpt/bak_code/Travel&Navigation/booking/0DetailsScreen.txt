import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>烟台南山皇冠假日酒店</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-social-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Images */}
      <View style={styles.imagesRow}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
      </View>

      {/* Features */}
      <View style={styles.featuresRow}>
        <View style={styles.feature}>
          <Icon name="car-outline" size={32} />
          <Text style={styles.featureText}>免费停车</Text>
        </View>
        <View style={styles.feature}>
          <Icon name="water-outline" size={32} />
          <Text style={styles.featureText}>室内游泳池</Text>
        </View>
        <View style={styles.feature}>
          <Icon name="restaurant-outline" size={32} />
          <Text style={styles.featureText}>餐厅</Text>
        </View>
        <View style={styles.feature}>
          <Icon name="fitness-outline" size={32} />
          <Text style={styles.featureText}>Spa及健康中心</Text>
        </View>
        <View style={styles.feature}>
          <Icon name="wifi-outline" size={32} />
          <Text style={styles.featureText}>免费无线网络连接</Text>
        </View>
      </View>

      {/* Hotel Info */}
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>烟台南山皇冠假日酒店</Text>
        <View style={styles.ratingRow}>
          <Icon name="star" size={18} color="orange" />
          <Icon name="star" size={18} color="orange" />
          <Icon name="star" size={18} color="orange" />
          <Icon name="star" size={18} color="orange" />
          <Icon name="star" size={18} color="orange" />
          <Text style={styles.ratingText}>8.6</Text>
        </View>
        <Text style={styles.subInfo}>入住时间: 7月18日 周四</Text>
        <Text style={styles.subInfo}>退房时间: 7月19日 周五</Text>
        <Text style={styles.subInfo}>客房与客人数: 1间房 · 2位成人 · 无儿童</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>查看房型列表</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: '#003d77',
    padding: 15,
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  imagesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  feature: {
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    marginTop: 5,
  },
  hotelInfo: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
  },
  subInfo: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#003d77',
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailsScreen;