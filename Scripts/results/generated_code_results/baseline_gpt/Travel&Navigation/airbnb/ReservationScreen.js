import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ReservationScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>确认并付款</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>整套小木屋</Text>
          <Text style={styles.subtitle}>Pitch 24 Creek Caravan Park Ringstead狗友好</Text>
          <Text style={styles.rating}>
            <Icon name="star" size={16} color="#f0a" /> 4.80 (5)・超赞房东
          </Text>
        </View>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          8月3日前可免费取消订单。旅行规划有变，可获全额退款。
        </Text>
        <Icon name="calendar-today" size={24} color="#000" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>您的行程</Text>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>日期</Text>
          <Text style={styles.rowValue}>9月2日至7日</Text>
          <Text style={styles.editText}>编辑</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>房客人数</Text>
          <Text style={styles.rowValue}>1位房客</Text>
          <Text style={styles.editText}>编辑</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>选择付款方式</Text>
        <View style={styles.paymentRow}>
          <Text>立即支付 ¥ 12,120.95</Text>
          <Icon name="radio-button-checked" size={24} color="#000" />
        </View>
        <Text style={styles.paymentDetails}>
          现在支付部分费用，稍后再支付剩余的金额
          今天需支付 ¥ 6,060.48，2024年8月18日支付 ¥ 6,060.47。无需支付额外费用。更多信息
        </Text>
        <View style={styles.paymentRow}>
          <Icon name="radio-button-unchecked" size={24} color="#000" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
  },
  rating: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  notice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingVertical: 8,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  noticeText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  rowLabel: {
    fontSize: 14,
    color: '#000',
  },
  rowValue: {
    fontSize: 14,
    color: '#666',
  },
  editText: {
    fontSize: 14,
    color: '#007BFF',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 8,
  },
  paymentDetails: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
});

export default ReservationScreen;