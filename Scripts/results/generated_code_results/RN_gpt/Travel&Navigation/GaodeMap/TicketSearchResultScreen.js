import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const TicketSearchResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          {/* Back Icon */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>威海市 — 武汉市</Text>
        <TouchableOpacity style={styles.calendarButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.mainContent}>
        <View style={styles.dateSelector}>
          <Text style={styles.dateOption}>今天 18</Text>
          <TouchableOpacity style={styles.selectedDateOption}>
            <Text style={styles.dateOptionText}>明天 7.19</Text>
          </TouchableOpacity>
          <Text style={styles.dateOption}>后天 20</Text>
          <Text style={styles.dateOption}>周日 21</Text>
          <Text style={styles.dateOption}>周一 22</Text>
          <Text style={styles.dateOption}>周二 23</Text>
          <Text style={styles.dateOption}>周三 24</Text>
        </View>

        <View style={styles.transitModes}>
          <Text style={styles.transitModeSelected}>火车</Text>
          <Text style={styles.transitMode}>客车 ￥350 起</Text>
          <Text style={styles.transitMode}>飞机 ￥620 起</Text>
        </View>

        <View style={styles.filters}>
          <Text style={styles.filterOption}>只看有票</Text>
          <Text style={styles.filterOption}>只看高铁动车</Text>
          <Text style={styles.filterOption}>威海站</Text>
          <Text style={styles.filterOption}>武汉站</Text>
          <Text style={styles.filterOption}>上午出发</Text>
        </View>

        <View style={styles.promo}>
          <Text style={styles.promoText}>高德红包 满 50 减 1</Text>
          <Text style={styles.promoStatus}>已领取</Text>
        </View>

        <View style={styles.loginPrompt}>
          <Text style={styles.loginText}>登录 12306 官方出票无忧保障</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>登录</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.recommendation}>
          <Image source={require('../assets/snack-icon.png')} style={styles.recommendationIcon} />
          <View style={styles.recommendationTextContainer}>
            <Text style={styles.recommendationTitle}>飞机直达推荐</Text>
            <Text style={styles.recommendationSubTitle}>4时15分 比火车省69元</Text>
          </View>
          <Text style={styles.recommendationPrice}>￥620 起</Text>
        </View>

        <View style={styles.ticketAvailability}>
          <Text style={styles.availabilityText}>15:34 前无直达班次，推荐 2 个有票方案</Text>
        </View>

        <TouchableOpacity 
          style={styles.ticketOption} 
          onPress={() => navigation.navigate('TicketService')} // Adding redirection logic
        >
          <Text style={styles.ticketTime}>09:31</Text>
          <View style={styles.ticketInfo}>
            <Text style={styles.ticketInfoText}>共 8 时 29 分</Text>
            <View style={styles.ticketStations}>
              <Text style={styles.station}>威海站</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
              <Text style={styles.transferStation}>郑州东</Text>
              <Text style={styles.sameStationTransfer}>同站换乘 21 分</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
              <Text style={styles.station}>武汉站</Text>
            </View>
          </View>
          <Text style={styles.ticketTime}>18:00</Text>
          <View style={styles.ticketPricing}>
            <Text style={styles.ticketPrice}>￥745 起</Text>
            <Text style={styles.remainingTickets}>仅剩 3 张</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.ticketOption} 
          onPress={() => navigation.navigate('TicketService')} // Adding redirection logic
        >
          <Text style={styles.ticketTime}>12:38</Text>
          <View style={styles.ticketInfo}>
            <Text style={styles.ticketInfoText}>共 10 时</Text>
            <View style={styles.ticketStations}>
              <Text style={styles.station}>威海站</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
              <Text style={styles.transferStation}>合肥南</Text>
              <Text style={styles.sameStationTransfer}>同站换乘 19 分</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
              <Text style={styles.station}>汉口站</Text>
            </View>
          </View>
          <Text style={styles.ticketTime}>22:38</Text>
          <View style={styles.ticketPricing}>
            <Text style={styles.ticketPrice}>￥531 起</Text>
            <Text style={styles.remainingTickets}>仅剩 1 张</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.ticketOption} 
          onPress={() => navigation.navigate('TicketService')} // Adding redirection logic
        >
          <Text style={styles.ticketTime}>15:34</Text>
          <View style={styles.ticketInfo}>
            <Text style={styles.ticketInfoText}>7 时 37 分</Text>
            <View style={styles.ticketStations}>
              <Text style={styles.station}>威海站</Text>
              <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
              <Text style={styles.station}>武汉站</Text>
            </View>
          </View>
          <Text style={styles.ticketTime}>23:11</Text>
          <View style={styles.ticketPricing}>
            <Text style={styles.ticketPrice}>￥688 起</Text>
            <Text style={styles.promoPrice}>￥689</Text>
            <Text style={styles.promoDiscount}>高德红包 | 共减 1</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.navOption}>推荐排序</Text>
        <Text style={styles.navOption}>价格</Text>
        <Text style={styles.navOption}>耗时</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
          <Text style={styles.filterButtonText}>筛选</Text>
        </TouchableOpacity>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    // Back button style
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calendarButton: {
    // Calendar button style
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  mainContent: {
    padding: 16,
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateOption: {
    fontSize: 14,
    color: '#888',
  },
  selectedDateOption: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dateOptionText: {
    fontSize: 14,
    color: '#fff',
  },
  transitModes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  transitModeSelected: {
    fontSize: 16,
    color: '#007BFF',
  },
  transitMode: {
    fontSize: 16,
    color: '#888',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  filterOption: {
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
  },
  promo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  promoText: {
    color: '#FF0000',
  },
  promoStatus: {
    color: '#888',
  },
  loginPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  loginText: {
    flex: 1,
    color: '#007BFF',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  loginButtonText: {
    color: '#fff',
  },
  recommendation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  recommendationIcon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  recommendationTextContainer: {
    flex: 1,
  },
  recommendationTitle: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  recommendationSubTitle: {
    color: '#666',
  },
  recommendationPrice: {
    color: '#FF0000',
    fontWeight: 'bold',
  },
  ticketAvailability: {
    backgroundColor: '#E5FFE5',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  availabilityText: {
    color: '#007BFF',
  },
  ticketOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ticketTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ticketInfo: {
    flex: 1,
    marginHorizontal: 8,
  },
  ticketInfoText: {
    fontSize: 14,
    color: '#666',
  },
  ticketStations: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  station: {
    fontSize: 14,
    color: '#333',
  },
  transferStation: {
    fontSize: 14,
    color: '#007BFF',
    marginHorizontal: 4,
  },
  sameStationTransfer: {
    fontSize: 12,
    color: '#888',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 4,
  },
  ticketPricing: {
    alignItems: 'flex-end',
  },
  ticketPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  remainingTickets: {
    fontSize: 12,
    color: '#FF0000',
  },
  promoPrice: {
    textDecorationLine: 'line-through',
    fontSize: 12,
    color: '#888',
  },
  promoDiscount: {
    fontSize: 12,
    color: '#FF0000',
  },
  bottomNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navOption: {
    fontSize: 16,
    color: '#007BFF',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  filterButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
});

export default TicketSearchResultScreen;