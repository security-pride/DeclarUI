import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const MoreScreen = () => {

  const navigation = useNavigation();



  const rewardOffers = [

    {

      id: '1',

      logo: '../assets/snack-icon.png',

      title: 'Exclusive Great Savings with Prime Day Deals Plus a £3...',

      company: 'amazon.co.uk',

      type: 'Online Reward',

      endDate: 'Ends 22 Jul',

    },

    {

      id: '2',

      logo: '../assets/snack-icon.png',

      title: 'Exclusive Free £10 Currys Voucher with Orders Over £...',

      company: 'currys',

      type: 'Online Reward',

      endDate: 'Ends 1 Aug',

    },

    {

      id: '3',

      logo: '../assets/snack-icon.png',

      title: 'Exclusive Free £3 Amazon Voucher with Orders Over £...',

      company: 'just eat',

      type: 'Online Reward',

      endDate: 'Ends today',

    },

    {

      id: '4',

      logo: '../assets/snack-icon.png',

      title: 'Exclusive 15% off Selected Hotel Bookings: Free £5 A...',

      company: 'Booking.com',

      type: 'Online Reward',

      endDate: 'Ends 1 Aug',

    },

  ];



  const renderRewardItem = ({ item }) => (

    <TouchableOpacity style={styles.rewardItem} onPress={() => navigation.navigate('Details', { reward: item })}>

      <Image source={{ uri: item.logo }} style={styles.logo} />

      <View style={styles.rewardContent}>

        <Text style={styles.rewardTitle}>

          <Text style={styles.exclusiveText}>Exclusive </Text>

          {item.title}

        </Text>

        <View style={styles.rewardInfo}>

          <Text style={styles.rewardType}>{item.type}</Text>

          <Text style={[styles.rewardEndDate, item.endDate === 'Ends today' && styles.endsToday]}>

            {item.endDate}

          </Text>

        </View>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>‹</Text>

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Reward Offers</Text>

      </View>

      <FlatList

        data={rewardOffers}

        renderItem={renderRewardItem}

        keyExtractor={item => item.id}

        contentContainerStyle={styles.listContent}

      />

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Discover')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Discover</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Search')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('VIP')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>VIP</Text>

          <View style={styles.newBadge}>

            <Text style={styles.newBadgeText}>NEW</Text>

          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Account')}>

          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabLabel}>Account</Text>

        </TouchableOpacity>

      </View>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F2F2F2',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFD700',

    paddingTop: 40,

    paddingBottom: 15,

    paddingHorizontal: 15,

  },

  backButton: {

    marginRight: 10,

  },

  backButtonText: {

    fontSize: 30,

    color: '#000',

  },

  headerTitle: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  listContent: {

    padding: 10,

  },

  rewardItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    marginBottom: 10,

    padding: 15,

    alignItems: 'center',

  },

  logo: {

    width: 50,

    height: 50,

    borderRadius: 5,

    marginRight: 15,

  },

  rewardContent: {

    flex: 1,

  },

  rewardTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  exclusiveText: {

    color: '#FF0000',

  },

  rewardInfo: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  rewardType: {

    color: '#FFA500',

  },

  rewardEndDate: {

    color: '#808080',

  },

  endsToday: {

    color: '#FF0000',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabLabel: {

    fontSize: 12,

    marginTop: 5,

  },

  newBadge: {

    position: 'absolute',

    top: -5,

    right: -15,

    backgroundColor: '#FFD700',

    borderRadius: 10,

    paddingHorizontal: 5,

    paddingVertical: 2,

  },

  newBadgeText: {

    fontSize: 10,

    fontWeight: 'bold',

  },

});



export default MoreScreen;