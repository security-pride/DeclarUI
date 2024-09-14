import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GasInformationScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-left" size={24} style={styles.backIcon} />
        <Text style={styles.headerTitle}>高德车服 · 加油</Text>
        <Icon name="search" size={24} style={styles.searchIcon} />
      </View>

      {/* Banner Section */}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerItem}>
          <Text style={styles.bannerText}>新人专享</Text>
        </View>
        <View style={styles.bannerItem}>
          <Text style={styles.bannerText}>调价补贴</Text>
        </View>
        <View style={styles.bannerItem}>
          <Text style={styles.bannerText}>领券中心</Text>
        </View>
        <View style={styles.bannerItem}>
          <Text style={styles.bannerText}>分享油礼</Text>
        </View>
        <View style={styles.bannerItem}>
          <Text style={styles.bannerText}>油惠卡</Text>
        </View>
      </View>

      {/* Promotion Section */}
      <View style={styles.promotionContainer}>
        <Text style={styles.promotionText}>天天享 “油” 惠 单品本，单单省</Text>
        <TouchableOpacity style={styles.checkButton}>
          <Text style={styles.checkButtonText}>立即查看</Text>
        </TouchableOpacity>
      </View>

      {/* List of Gas Stations */}
      <View style={styles.stationList}>
        <View style={styles.stationItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.stationImage} />
          <View style={styles.stationInfo}>
            <View style={styles.stationHeader}>
              <Text style={styles.stationTitle}>供应石油加油站</Text>
              <Text style={styles.stationDistance}>3km 最便宜</Text>
            </View>
            <Text style={styles.stationDetails}>1.2公里 芝罘区二马路3号2单元内四号东山名...</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>¥ 7.56/L</Text>
              <Text style={styles.discount}>加200省8</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={styles.buyNowText}>立即加油</Text>
          </TouchableOpacity>
        </View>

        {/* Repeat similar blocks for other gas stations as needed */}
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backIcon: {
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchIcon: {
    color: '#000',
  },
  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFF',
  },
  bannerItem: {
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 12,
    color: '#FF5722',
  },
  promotionContainer: {
    backgroundColor: '#FFE0B2',
    margin: 16,
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promotionText: {
    fontSize: 14,
    color: '#000',
  },
  checkButton: {
    backgroundColor: '#FF5722',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  checkButtonText: {
    color: '#FFF',
  },
  stationList: {
    padding: 16,
  },
  stationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
  stationImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
    marginRight: 16,
  },
  stationInfo: {
    flex: 1,
  },
  stationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  stationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stationDistance: {
    fontSize: 12,
    color: '#999',
  },
  stationDetails: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  discount: {
    marginLeft: 8,
    fontSize: 12,
    color: '#999',
  },
  buyNowButton: {
    backgroundColor: '#FF5722',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  buyNowText: {
    color: '#FFF',
  },
});

export default GasInformationScreen;