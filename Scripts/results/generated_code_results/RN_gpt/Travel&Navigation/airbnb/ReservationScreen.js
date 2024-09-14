import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ReservationScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Icon name="arrow-back" size={24} />
          <Text style={styles.headerTitle}>确认并付款</Text>
        </View>

        <View style={styles.propertyInfo}>
          <Image
            source={require('../assets/snack-icon.png')}
            style={styles.image}
          />
          <View style={styles.propertyDetails}>
            <Text style={styles.propertyTitle}>整套小木屋</Text>
            <Text style={styles.propertyDescription}>
              Pitch 24 Creek Caravan Park Ringstead狗友好
            </Text>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>★ 4.80 (5) · 超赞房东</Text>
            </View>
          </View>
        </View>

        <View style={styles.cancellationPolicy}>
          <Text>8月3日前可免费取消订单。旅行规划有变，可获全额退款。</Text>
          <Icon name="calendar-outline" size={24} />
        </View>

        <View style={styles.itinerary}>
          <Text style={styles.itineraryTitle}>您的行程</Text>
          <View style={styles.itineraryItem}>
            <Text style={styles.itineraryLabel}>日期</Text>
            <Text>9月2日至7日</Text>
            <TouchableOpacity>
              <Text style={styles.editButton}>编辑</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itineraryItem}>
            <Text style={styles.itineraryLabel}>房客人数</Text>
            <Text>1位房客</Text>
            <TouchableOpacity>
              <Text style={styles.editButton}>编辑</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.paymentMethods}>
          <Text style={styles.paymentMethodsTitle}>选择付款方式</Text>
          <View style={styles.paymentOption}>
            <Text>立即支付 ¥12,120.95</Text>
            <TouchableOpacity>
              <Icon name="radio-button-off-outline" size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentOption}>
            <Text>现在支付部分费用，稍后再支付剩余的金额</Text>
            <Text>今天需支付 ¥6,060.48，2024年8月18日支付 ¥6,060.47。无需支付额外费用。更多信息</Text>
            <TouchableOpacity>
              <Icon name="radio-button-on-outline" size={24} />
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      <View style={styles.bottomNav}></View>
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
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 16,
  },
  propertyInfo: {
    flexDirection: 'row',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  propertyDetails: {
    justifyContent: 'center',
  },
  propertyTitle: {
    fontWeight: 'bold',
  },
  propertyDescription: {
    marginVertical: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
  },
  cancellationPolicy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itinerary: {
    padding: 16,
  },
  itineraryTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itineraryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  itineraryLabel: {
    fontWeight: 'bold',
  },
  editButton: {
    color: '#007BFF',
  },
  paymentMethods: {
    padding: 16,
  },
  paymentMethodsTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default ReservationScreen;