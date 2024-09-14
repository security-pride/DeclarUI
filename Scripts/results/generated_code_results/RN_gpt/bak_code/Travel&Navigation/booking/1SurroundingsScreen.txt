import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SurroundingsScreen = () => {
  const navigation = useNavigation();

  const redirectToSearch = () => {
    navigation.navigate('Search');
  };

  const redirectToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} style={styles.backIcon} />
        <Text style={styles.headerText}>周围地区  7月18日 - 7月19日</Text>
      </View>
      
      <View style={styles.sortFilterContainer}>
        <Button title="排序" onPress={() => {}} />
        <Button title="筛选" onPress={() => {}} />
        <Button title="地图" onPress={() => {}} />
      </View>
      
      <View style={styles.notificationBar}>
        <Text>所付佣金和其他商业因素可能会影响住宿的排名。</Text>
        <Text style={styles.learnMore}>了解更多</Text>
        <Icon name="close" size={20} />
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.resultCount}>24家住宿</Text>
        
        <TouchableOpacity style={styles.hotelCard} onPress={redirectToDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.hotelImage} />
          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>烟台南山皇冠假日酒店</Text>
            <View style={styles.reviewContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.reviewScore} />
              <Text style={styles.reviewText}>8.6 很棒 • 29条点评</Text>
            </View>
            <Text style={styles.hotelLocation}>莱山区, 烟台 • 距你: 10千米</Text>
            <Text style={styles.roomInfo}>1间酒店客房: 2张床</Text>
            <Text style={styles.price}>707元</Text>
            <Text style={styles.priceNote}>含税费及其他费用</Text>
            <Text style={styles.specialOffer}>该价格在Booking.com上仅剩2间</Text>
            <Text style={styles.paymentOption}>无需预付</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.hotelCard} onPress={redirectToDetails}>
          <Image source={require('../assets/snack-icon.png')} style={styles.hotelImage} />
          <View style={styles.hotelInfo}>
            <Text style={styles.hotelName}>烟台世茂希尔顿酒店</Text>
            <View style={styles.reviewContainer}>
              <Image source={require('../assets/snack-icon.png')} style={styles.reviewScore} />
              <Text style={styles.reviewText}>8.9 很棒 • 40条点评</Text>
            </View>
            <Text style={styles.hotelLocation}>烟台 • 距你: 750米</Text>
            <Text style={styles.sustainability}>可持续性认证</Text>
            <Text style={styles.roomInfo}>1张床</Text>
            <Text style={styles.price}>908元</Text>
            <Text style={styles.priceNote}>含税费及其他费用</Text>
          </View>
        </TouchableOpacity>
        
        {/* Additional Hotel Listings */}
        
      </ScrollView>
      
      <View style={styles.bottomNav}>
        <Button title="Search" onPress={redirectToSearch} />
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
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'blue',
  },
  backIcon: {
    color: 'white',
    marginRight: 8,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  sortFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  notificationBar: {
    padding: 16,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  learnMore: {
    color: 'blue',
  },
  scrollContainer: {
    flex: 1,
  },
  resultCount: {
    padding: 16,
    fontSize: 14,
  },
  hotelCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  hotelImage: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  reviewScore: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#757575',
  },
  hotelLocation: {
    fontSize: 12,
    color: '#757575',
  },
  roomInfo: {
    fontSize: 12,
    color: '#757575',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5722',
  },
  priceNote: {
    fontSize: 12,
    color: '#757575',
  },
  specialOffer: {
    fontSize: 12,
    color: '#f44336',
  },
  paymentOption: {
    fontSize: 12,
    color: '#757575',
  },
  sustainability: {
    fontSize: 12,
    color: '#4caf50',
    marginTop: 4,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SurroundingsScreen;