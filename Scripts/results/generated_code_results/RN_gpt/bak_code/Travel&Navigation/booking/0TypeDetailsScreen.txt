import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TypeDetailsScreen = ({ navigation }) => {
  const handleReservation = () => {
    navigation.navigate('Reservation');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>选择客房</Text>
        <Icon name="share-social" size={24} color="white" onPress={() => {}} />
      </View>
      <Text style={styles.hotelName}>烟台南山皇冠假日酒店</Text>
      <View style={styles.filtersContainer}>
        <View style={styles.filter}>
          <Text style={styles.filterText}>包括早餐</Text>
        </View>
        <Text style={styles.filterLabel}>住客人数</Text>
        <View style={styles.guestCounter}>
          <Text style={styles.guestCount}>2</Text>
        </View>
      </View>
      <Text style={styles.optionCount}>有17个选项符合你的筛选条件</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.roomType}>标准间</Text>
          <View style={styles.detailRow}>
            <Icon name="close-circle" size={16} color="black" />
            <Text style={styles.detailText}>不可退款</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="checkmark-circle" size={16} color="green" />
            <Text style={styles.detailText}>无需预付 - 到店付款</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="person" size={16} color="black" />
            <Text style={styles.detailText}>2位成人的入住价格</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="bed" size={16} color="black" />
            <Text style={styles.detailText}>选项1: 2张单人床</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="bed" size={16} color="black" />
            <Text style={styles.detailText}>选项2: 1张超大号双人床</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="expand" size={16} color="black" />
            <Text style={styles.detailText}>客房面积: 46 平方米</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="restaurant" size={16} color="green" />
            <Text style={styles.detailText}>提供早餐 (到店付款)</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="wifi" size={16} color="green" />
            <Text style={styles.detailText}>免费无线网络</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="eye" size={16} color="green" />
            <Text style={styles.detailText}>享有风景</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="sunny" size={16} color="green" />
            <Text style={styles.detailText}>空调</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="radio-button-on" size={16} color="green" />
            <Text style={styles.detailText}>独立浴室</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="tv" size={16} color="green" />
            <Text style={styles.detailText}>平板电视</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="cube" size={16} color="green" />
            <Text style={styles.detailText}>迷你吧</Text>
          </View>
          <Text style={styles.alertText}>Booking.com上只剩1间房了</Text>
          <Text style={styles.priceText}>1晚房价 (7月18日 - 7月19日)</Text>
          <Text style={styles.price}>707元</Text>
          <Text style={styles.inclusiveTaxes}>含税费及其他费用</Text>
          <Button
            title="选择并定制"
            color="#007bff"
            onPress={handleReservation}
          />
        </View>
        <View style={[styles.card, styles.spacingCard]}>
          <Text style={styles.roomType}>标准间</Text>
          <View style={styles.detailRow}>
            <Icon name="close-circle" size={16} color="black" />
            <Text style={styles.detailText}>不可退款</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="checkmark-circle" size={16} color="green" />
            <Text style={styles.detailText}>无需预付 - 到店付款</Text>
          </View>
          {/* Additional Room Details */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
  hotelName: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  filtersContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
  },
  filter: {
    marginBottom: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    padding: 5,
  },
  filterText: {
    fontSize: 14,
  },
  filterLabel: {
    fontSize: 14,
  },
  guestCounter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  guestCount: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  optionCount: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  scrollView: {
    paddingHorizontal: 10,
    marginBottom: 80,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  roomType: {
    fontSize: 18,
    color: '#007bff',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailText: {
    marginLeft: 10,
  },
  alertText: {
    color: 'red',
    marginTop: 10,
  },
  priceText: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inclusiveTaxes: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
  },
  spacingCard: {
    marginTop: 20,
  }
});

export default TypeDetailsScreen;