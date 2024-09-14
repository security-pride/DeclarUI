import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TicketServiceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" size={30} color="#fff" />
        <Text style={styles.headerText}>高德·火车票</Text>
      </View>

      <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}><Text>机票</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.tabButton, styles.activeTabButton]}>
          <Text style={styles.activeTabText}>火车票</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Text>汽车票</Text></TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.cityRow}>
          <Text style={styles.cityText}>威海市</Text>
          <Icon name="exchange" size={20} color="#000" />
          <Text style={styles.cityText}>武汉市</Text>
        </View>
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>7月19日</Text>
          <Text style={styles.dateText}>明天</Text>
        </View>
        <View style={styles.optionRow}>
          <View style={styles.optionCheck}>
            <Icon name="square-o" size={20} color="#000" />
            <Text style={styles.optionText}>学生票</Text>
          </View>
          <View style={styles.optionCheck}>
            <Icon name="square-o" size={20} color="#000" />
            <Text style={styles.optionText}>高铁动车</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>查询</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceRow}>
        <TouchableOpacity style={styles.serviceButton}>
          <Text>订票保障</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Text>酒店预订</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Text>领券中心</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.promotionSection}>
        <Text style={styles.promoHeader}>暑期火车票优惠订</Text>
        <View style={styles.trainInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.trainImage} />
          <View style={styles.ticketInfo}>
            <Text style={styles.routeText}>威海市 → 武汉市</Text>
            <Text style={styles.timeText}>07.19出发，约7时11分到达</Text>
          </View>
          <View style={styles.priceInfo}>
            <Text style={styles.priceText}>¥ 742起</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>立即购买</Text>
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
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5733',
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  bannerImage: {
    width: '100%',
    height: 150,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 5,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderColor: '#FF5733',
  },
  activeTabText: {
    color: '#FF5733',
  },
  searchContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionCheck: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 5,
  },
  searchButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  serviceButton: {
    alignItems: 'center',
  },
  promotionSection: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  promoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  trainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trainImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  ticketInfo: {
    flex: 1,
  },
  routeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeText: {
    fontSize: 14,
    color: '#555',
  },
  priceInfo: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    color: '#FF5733',
  },
  buyButton: {
    backgroundColor: '#FF5733',
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
  },
});

export default TicketServiceScreen;