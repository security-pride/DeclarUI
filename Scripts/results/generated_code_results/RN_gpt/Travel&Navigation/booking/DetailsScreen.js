import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.hotelTitle}>烟台南山皇冠假日酒店</Text>
        <TouchableOpacity style={styles.shareButton}>
          <ImageBackground source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.imagesRow}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.image} />
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.image} />
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.smallImage} />
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.smallImage}>
          <Text style={styles.imageCount}>+118</Text>
        </ImageBackground>
      </View>
      <View style={styles.amenities}>
        {['免费停车', '室内游泳池', '餐厅', 'Spa及健康中心', '免费无线网络连接'].map((amenity, index) => (
          <View key={index} style={styles.amenityItem}>
            <ImageBackground source={require('../assets/snack-icon.png')} style={styles.amenityIcon}/>
            <Text style={styles.amenityText}>{amenity}</Text>
          </View>
        ))}
      </View>
      <View style={styles.details}>
        <Text style={styles.detailTitle}>入住时间</Text>
        <Text style={styles.detailText}>7月18日 周四</Text>
        <Text style={styles.detailTitle}>退房时间</Text>
        <Text style={styles.detailText}>7月19日 周五</Text>
        <Text style={styles.detailTitle}>客房与客人数</Text>
        <Text style={styles.detailText}>1间房 · 2位成人 · 无儿童</Text>
      </View>
      <View style={styles.bottomNav}>
        <Button title="查看房型列表" onPress={() => navigation.navigate('TypeDetails')} />
        <Button title="搜索" onPress={() => navigation.navigate('Search')} />
        <Button title="周边环境" onPress={() => navigation.navigate('Surroundings')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#003580',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotelTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  shareButton: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  imagesRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
  },
  smallImage: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCount: {
    color: '#fff',
    fontSize: 12,
  },
  amenities: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  amenityItem: {
    alignItems: 'center',
  },
  amenityIcon: {
    width: 30,
    height: 30,
  },
  amenityText: {
    fontSize: 12,
    color: '#5a5a5a',
  },
  details: {
    padding: 15,
  },
  detailTitle: {
    color: '#5a5a5a',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  detailText: {
    color: '#003580',
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#003580',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default DetailsScreen;