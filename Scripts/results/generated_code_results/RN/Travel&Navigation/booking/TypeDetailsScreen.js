import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TypeDetailsScreen = () => {
  const navigation = useNavigation();
  const [guestCount, setGuestCount] = useState(2);

  const handleBack = () => {
    navigation.navigate('Details');
  };

  const handleReservation = () => {
    navigation.navigate('Reservation');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>选择客房</Text>
        <TouchableOpacity>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.shareIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.filterSection}>
        <Text style={styles.filterTitle}>筛选条件</Text>
        <TouchableOpacity style={styles.filterOption}>
          <Text style={styles.filterOptionText}>包括早餐</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.guestCountSection}>
        <Text style={styles.sectionTitle}>住客人数</Text>
        <View style={styles.guestCountSelector}>
          <TouchableOpacity 
            style={[styles.guestCountOption, guestCount === 2 && styles.selectedOption]} 
            onPress={() => setGuestCount(2)}>
            <Text style={styles.guestCountText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.guestCountOption, guestCount === 3 && styles.selectedOption]} 
            onPress={() => setGuestCount(3)}>
            <Text style={styles.guestCountText}>3</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.matchingOptions}>有17个选项符合你的筛选条件</Text>

      <View style={styles.roomTypeSection}>
        <Text style={styles.roomType}>标准间</Text>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.roomImage} />
        <View style={styles.roomFeatures}>
          <Text style={styles.featureText}>不可退款</Text>
          <Text style={styles.featureText}>无需预付 - 到店付款</Text>
          <Text style={styles.featureText}>2位成人的入住价格</Text>
          <Text style={styles.featureText}>选项1: 2张单人床</Text>
          <Text style={styles.featureText}>选项2: 1张超大号双人床</Text>
          <Text style={styles.featureText}>客房面积: 46平方米</Text>
          <Text style={styles.featureText}>提供早餐 (到店付款)</Text>
          <Text style={styles.featureText}>免费无线网络</Text>
          <Text style={styles.featureText}>享有风景</Text>
          <Text style={styles.featureText}>空调</Text>
          <Text style={styles.featureText}>独立浴室</Text>
          <Text style={styles.featureText}>平板电视</Text>
          <Text style={styles.featureText}>迷你吧</Text>
        </View>
        <Text style={styles.availabilityWarning}>Booking.com上只剩1间房了</Text>
        <View style={styles.priceSection}>
          <Text style={styles.price}>707元</Text>
          <Text style={styles.priceInfo}>含税费及其他费用</Text>
          <Text style={styles.nightInfo}>1晚房价 (7月18日 - 7月19日)</Text>
        </View>
        <TouchableOpacity style={styles.selectButton} onPress={handleReservation}>
          <Text style={styles.selectButtonText}>选择并定制</Text>
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#003580',
  },
  backButton: {
    color: '#fff',
    fontSize: 18,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  shareIcon: {
    width: 24,
    height: 24,
  },
  filterSection: {
    padding: 10,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterOption: {
    borderWidth: 1,
    borderColor: '#003580',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
  },
  filterOptionText: {
    color: '#003580',
  },
  guestCountSection: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  guestCountSelector: {
    flexDirection: 'row',
  },
  guestCountOption: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  guestCountText: {
    fontSize: 16,
  },
  matchingOptions: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontSize: 14,
  },
  roomTypeSection: {
    padding: 10,
  },
  roomType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  roomImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  roomFeatures: {
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    marginBottom: 5,
  },
  availabilityWarning: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  priceSection: {
    marginBottom: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#008009',
  },
  priceInfo: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  nightInfo: {
    fontSize: 12,
    color: '#6b6b6b',
  },
  selectButton: {
    backgroundColor: '#0071c2',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TypeDetailsScreen;