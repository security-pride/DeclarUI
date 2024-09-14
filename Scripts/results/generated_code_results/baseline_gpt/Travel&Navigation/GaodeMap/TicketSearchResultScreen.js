import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TicketSearchResultScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="chevron-back" size={24} color="#000" />
        <Text style={styles.headerText}>威海市 → 武汉市</Text>
        <Icon name="calendar-outline" size={24} color="#000" />
      </View>

      {/* Date Selection */}
      <View style={styles.dateSelection}>
        {/* Simplified for brevity, iterate over dates in a real app */}
        <Text>今天</Text>
        <View style={styles.selectedDate}>
          <Text style={styles.selectedDateText}>明天</Text>
          <Text style={styles.selectedDateNumber}>7.19</Text>
        </View>
        <Text>后天</Text>
        {/* ...additional dates */}
      </View>

      {/* Transport Selection */}
      <View style={styles.transportSelection}>
        <Text>火车</Text>
        <Text style={styles.priceText}>客车 ¥350 起</Text>
        <Text style={styles.priceText}>飞机 ¥620 起</Text>
      </View>

      {/* Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
        <Text>只看有票</Text>
        <Text>只看高铁动车</Text>
        <Text>威海站</Text>
        <Text>武汉站</Text>
        <Text>上午出发</Text>
      </ScrollView>

      {/* Offers */}
      <View style={styles.offerBanner}>
        <Text style={styles.offerText}>高德红包 满50减1</Text>
        <TouchableOpacity>
          <Text style={styles.offerLink}>已领取 ></Text>
        </TouchableOpacity>
      </View>

      {/* Login Banner */}
      <View style={styles.loginBanner}>
        <Icon name="shield-checkmark" size={24} color="#000" />
        <Text>登录 12306 官方出票无忧保障</Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>登录</Text>
        </TouchableOpacity>
      </View>

      {/* Recommendations */}
      <View style={styles.recommendations}>
        <Image source={require('../assets/snack-icon.png')} style={styles.planeIcon} />
        <Text style={styles.recommendationTitle}>飞机直达推荐</Text>
        <Text style={styles.priceRecommendation}>¥620 起</Text>
      </View>

      {/* Ticket Options */}
      <View style={styles.ticketOption}>
        <View style={styles.ticketInfo}>
          <Text style={styles.timeText}>09:31</Text>
          <Text style={styles.stationText}>威海站</Text>
          <Text>到</Text>
          <Text style={styles.timeText}>18:00</Text>
          <Text style={styles.stationText}>武汉站</Text>
          <Text style={styles.priceText}>¥745</Text>
        </View>
        <View style={styles.additionalInfo}>
          <Text style={styles.additionalRouteText}>共8时29分 同站换乘21分</Text>
          <Text style={styles.seatClassText}>二等 2张</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <Text>推荐排序</Text>
        <Text>价格</Text>
        <Text>耗时</Text>
        <Icon name="funnel-outline" size={24} color="#000" />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 8,
  },
  selectedDate: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 4,
  },
  selectedDateText: {
    color: '#FFF',
  },
  selectedDateNumber: {
    color: '#FFF',
  },
  transportSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  priceText: {
    color: '#007AFF',
  },
  filters: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  offerBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFEFEF',
    padding: 8,
    margin: 16,
    borderRadius: 8,
  },
  offerText: {
    color: '#FF4C4C',
  },
  offerLink: {
    color: '#007AFF',
  },
  loginBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6F7FF',
    padding: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  loginLink: {
    color: '#007AFF',
  },
  recommendations: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  planeIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceRecommendation: {
    marginLeft: 'auto',
    color: '#FF4C4C',
    fontWeight: 'bold',
  },
  ticketOption: {
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  ticketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stationText: {
    fontSize: 14,
    color: '#555',
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  additionalRouteText: {
    color: '#888',
  },
  seatClassText: {
    color: '#FF4C4C',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
});

export default TicketSearchResultScreen;