import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TypeDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>选择客房</Text>
          <Text style={styles.headerSubtitle}>烟台南山皇冠假日酒店</Text>
        </View>
        <Icon name="share-social" size={24} color="#fff" />
      </View>
      
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>筛选条件</Text>
        <View style={styles.breakfastBadge}>
          <Text style={styles.breakfastText}>包括早餐</Text>
        </View>
        <Text style={styles.guestTitle}>住客人数</Text>
        <View style={styles.guestNumber}>
          <Text>2</Text>
          <Text>3</Text>
        </View>
      </View>

      <Text style={styles.optionsText}>有 17 个选项符合你的筛选条件</Text>

      <View style={styles.roomContainer}>
        <View style={styles.roomHeader}>
          <Text style={styles.roomTitle}>标准间</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.roomImage} />
        </View>
        <View style={styles.roomDetails}>
          <Text>不可退款</Text>
          <Text>无需预付 - 到店付款</Text>
          <Text>2位成人的入住价格</Text>
          <Text>选项1：2张单人床</Text>
          <Text>选项2：1张超大号双人床</Text>
          <Text>客房面积：46 平方米</Text>
          <Text style={styles.greenText}>提供早餐（到店付款）</Text>
          <Text style={styles.greenText}>免费无线网络 享有风景 空调 独立浴室 平板电视 迷你吧</Text>
          <Text style={styles.redText}>Booking.com 上只剩 1间房了</Text>
          <Text>1晚房价（7月18日 - 7月19日）</Text>
          <Text style={styles.price}>707元</Text>
          <Text>含税费及其他费用</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>选择并定制</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 16,
  },
  headerTitleContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 14,
  },
  filterContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
  },
  filterTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  breakfastBadge: {
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  breakfastText: {
    fontSize: 14,
  },
  guestTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  guestNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9d9d9',
  },
  optionsText: {
    paddingHorizontal: 16,
    fontSize: 14,
    marginVertical: 8,
  },
  roomContainer: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  roomTitle: {
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  roomImage: {
    width: 100,
    height: 75,
    borderRadius: 8,
  },
  roomDetails: {
    marginBottom: 8,
  },
  greenText: {
    color: 'green',
    marginVertical: 2,
  },
  redText: {
    color: 'red',
    marginVertical: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#0066cc',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TypeDetailsScreen;