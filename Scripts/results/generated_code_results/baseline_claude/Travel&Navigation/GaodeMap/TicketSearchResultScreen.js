import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const TicketSearchResultScreen = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('火车');



  const renderHeader = () => (

    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.goBack()}>

        <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

      </TouchableOpacity>

      <Text style={styles.headerTitle}>威海市 — 武汉市</Text>

      <TouchableOpacity onPress={() => {}}>

        <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />

      </TouchableOpacity>

    </View>

  );



  const renderDateSelector = () => {

    const dates = ['今天\n18', '明天\n7.19', '后天\n20', '周日\n21', '周一\n22', '周二\n23', '周三\n24'];

    return (

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateSelector}>

        {dates.map((date, index) => (

          <TouchableOpacity

            key={index}

            style={[styles.dateItem, index === 1 ? styles.selectedDateItem : null]}

          >

            <Text style={[styles.dateText, index === 1 ? styles.selectedDateText : null]}>{date}</Text>

          </TouchableOpacity>

        ))}

      </ScrollView>

    );

  };



  const renderTabSelector = () => {

    const tabs = ['火车', '客车', '飞机'];

    return (

      <View style={styles.tabSelector}>

        {tabs.map((tab) => (

          <TouchableOpacity

            key={tab}

            style={[styles.tabItem, selectedTab === tab ? styles.selectedTabItem : null]}

            onPress={() => setSelectedTab(tab)}

          >

            <Text style={[styles.tabText, selectedTab === tab ? styles.selectedTabText : null]}>{tab}</Text>

          </TouchableOpacity>

        ))}

      </View>

    );

  };



  const renderFilters = () => (

    <View style={styles.filters}>

      <TouchableOpacity style={styles.filterButton}>

        <Text style={styles.filterText}>只看有票</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton}>

        <Text style={styles.filterText}>只看高铁动车</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton}>

        <Text style={styles.filterText}>威海站</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton}>

        <Text style={styles.filterText}>武汉站</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.filterButton}>

        <Text style={styles.filterText}>上午出发</Text>

      </TouchableOpacity>

    </View>

  );



  const renderCoupon = () => (

    <View style={styles.coupon}>

      <Text style={styles.couponText}>高德红包 满50减1</Text>

      <TouchableOpacity>

        <Text style={styles.couponAction}>已领取 &gt;</Text>

      </TouchableOpacity>

    </View>

  );



  const renderLoginPrompt = () => (

    <View style={styles.loginPrompt}>

      <Image source={require('../assets/snack-icon.png')} style={styles.loginIcon} />

      <Text style={styles.loginText}>登录12306 官方出票无忧保障</Text>

      <TouchableOpacity style={styles.loginButton}>

        <Text style={styles.loginButtonText}>登录</Text>

      </TouchableOpacity>

    </View>

  );



  const renderFlightSuggestion = () => (

    <View style={styles.flightSuggestion}>

      <Image source={require('../assets/snack-icon.png')} style={styles.planeIcon} />

      <View style={styles.flightInfo}>

        <Text style={styles.flightTitle}>飞机直达推荐</Text>

        <Text style={styles.flightDetails}>4时15分 比火车省69元</Text>

      </View>

      <Text style={styles.flightPrice}>¥620起</Text>

    </View>

  );



  const renderTicketSuggestion = () => (

    <View style={styles.ticketSuggestion}>

      <Text style={styles.suggestionText}>有票推荐</Text>

      <Text style={styles.suggestionDetails}>15:34前无直达班次，推荐2个有票方案</Text>

    </View>

  );



  const renderTicketList = () => {

    const tickets = [

      { id: 1, departure: '09:31', arrival: '18:00', duration: '共8时29分', price: '¥745起', trains: ['G2148', 'G339'], stations: ['郑州东'], remainingTickets: 3 },

      { id: 2, departure: '12:38', arrival: '22:38', duration: '共10时', price: '¥531起', trains: ['D2150', 'G3247'], stations: ['合肥南'], remainingTickets: 1 },

      { id: 3, departure: '15:34', arrival: '23:11', duration: '7时37分', price: '¥688起', trains: ['G2084'], remainingTickets: 2 }

    ];



    return (

      <FlatList

        data={tickets}

        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (

          <View style={styles.ticketItem}>

            <View style={styles.ticketMainInfo}>

              <View style={styles.ticketTime}>

                <Text style={styles.departureTime}>{item.departure}</Text>

                <Text style={styles.duration}>{item.duration}</Text>

                <Text style={styles.arrivalTime}>{item.arrival}</Text>

              </View>

              <Text style={styles.price}>{item.price}</Text>

            </View>

            <View style={styles.ticketDetails}>

              {item.trains.map((train, index) => (

                <View key={index} style={styles.trainInfo}>

                  <Text style={styles.trainNumber}>{`第${index + 1}程`} {train}</Text>

                  <Text style={styles.seatInfo}>二等 {index === 0 ? '2张' : '有票'}</Text>

                </View>

              ))}

              {item.stations.length > 0 && (

                <Text style={styles.transferInfo}>

                  {item.stations[0]} 同站换乘{item.stations.length > 1 ? ` ${item.stations.length}次` : ''}

                </Text>

              )}

            </View>

            <Text style={styles.remainingTickets}>仅剩{item.remainingTickets}张</Text>

          </View>

        )}

      />

    );

  };



  return (

    <View style={styles.container}>

      {renderHeader()}

      {renderDateSelector()}

      {renderTabSelector()}

      {renderFilters()}

      {renderCoupon()}

      {renderLoginPrompt()}

      <ScrollView style={styles.content}>

        {renderFlightSuggestion()}

        {renderTicketSuggestion()}

        {renderTicketList()}

      </ScrollView>

    </View>

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

    paddingHorizontal: 15,

    paddingTop: 40,

    paddingBottom: 10,

    backgroundColor: '#FFFFFF',

  },

  backIcon: {

    width: 24,

    height: 24,

  },

  headerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  calendarIcon: {

    width: 24,

    height: 24,

  },

  dateSelector: {

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  dateItem: {

    paddingHorizontal: 15,

    alignItems: 'center',

  },

  selectedDateItem: {

    backgroundColor: '#4A90E2',

    borderRadius: 5,

  },

  dateText: {

    textAlign: 'center',

  },

  selectedDateText: {

    color: '#FFFFFF',

  },

  tabSelector: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 15,

    paddingVertical: 10,

  },

  tabItem: {

    marginRight: 20,

    paddingBottom: 5,

  },

  selectedTabItem: {

    borderBottomWidth: 2,

    borderBottomColor: '#4A90E2',

  },

  tabText: {

    fontSize: 16,

  },

  selectedTabText: {

    color: '#4A90E2',

  },

  filters: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    padding: 10,

    backgroundColor: '#FFFFFF',

  },

  filterButton: {

    backgroundColor: '#F0F0F0',

    borderRadius: 15,

    paddingHorizontal: 10,

    paddingVertical: 5,

    marginRight: 10,

    marginBottom: 10,

  },

  filterText: {

    fontSize: 12,

  },

  coupon: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    backgroundColor: '#FFF0F0',

    padding: 10,

    marginTop: 10,

  },

  couponText: {

    color: '#FF6B6B',

  },

  couponAction: {

    color: '#FF6B6B',

  },

  loginPrompt: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 10,

    marginTop: 10,

  },

  loginIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  loginText: {

    flex: 1,

  },

  loginButton: {

    backgroundColor: '#4A90E2',

    borderRadius: 15,

    paddingHorizontal: 15,

    paddingVertical: 5,

  },

  loginButtonText: {

    color: '#FFFFFF',

  },

  content: {

    flex: 1,

  },

  flightSuggestion: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  planeIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  flightInfo: {

    flex: 1,

  },

  flightTitle: {

    fontWeight: 'bold',

  },

  flightDetails: {

    color: '#888888',

  },

  flightPrice: {

    color: '#FF6B6B',

    fontWeight: 'bold',

  },

  ticketSuggestion: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 10,

  },

  suggestionText: {

    fontWeight: 'bold',

  },

  suggestionDetails: {

    color: '#888888',

  },

  ticketItem: {

    backgroundColor: '#FFFFFF',

    padding: 15,

    marginTop: 1,

  },

  ticketMainInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  ticketTime: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  departureTime: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  duration: {

    color: '#888888',

    marginHorizontal: 10,

  },

  arrivalTime: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  price: {

    color: '#FF6B6B',

    fontWeight: 'bold',

  },

  ticketDetails: {

    marginTop: 10,

  },

  trainInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  trainNumber: {

    color: '#4A90E2',

  },

  seatInfo: {

    color: '#888888',

  },

  transferInfo: {

    color: '#888888',

    marginTop: 5,

  },

  remainingTickets: {

    color: '#FF6B6B',

    marginTop: 5,

  },

});



export default TicketSearchResultScreen;