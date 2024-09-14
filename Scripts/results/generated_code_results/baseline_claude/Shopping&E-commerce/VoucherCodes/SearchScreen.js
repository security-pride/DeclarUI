import React, { useState } from 'react';

import {

  View,

  Text,

  StyleSheet,

  TextInput,

  FlatList,

  Image,

  TouchableOpacity,

  ScrollView

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const SearchScreen = () => {

  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');



  const rewardOffers = [

    { id: '1', logo: '../assets/snack-icon.png', company: 'MOBILES.CO.UK', title: 'Free £50 Currys Voucher with Vodafone Pa...', type: 'Online Reward', endDate: 'Ends 20 Jul' },

    { id: '2', logo: '../assets/snack-icon.png', company: 'DUNELM', title: 'Free £5 Amazon Voucher with Orders Over...', type: 'Online Reward', endDate: 'Ends today' },

    { id: '3', logo: '../assets/snack-icon.png', company: 'EBAY', title: 'Free £5 Groceries Voucher with Orders Ove...', type: 'Online Reward', endDate: 'Ends 21 Jul' },

    { id: '4', logo: '../assets/snack-icon.png', company: 'LG', title: 'Free £40 Amazon Voucher with Orders Ove...', type: 'Online Reward', endDate: 'Ends 1 Aug' },

    { id: '5', logo: '../assets/snack-icon.png', company: 'ADIDAS', title: 'Free £10 Amazon Voucher with Orders Ove...', type: 'Online Reward', endDate: 'Ends today' },

  ];



  const trendingOffers = [

    { id: '1', logo: '../assets/snack-icon.png', company: 'ZSL LONDON ZOO', title: '2 for 1 Entry with National Rail' },

    { id: '2', logo: '../assets/snack-icon.png', company: 'DELIVEROO', title: '£10 off Your First Order' },

  ];



  const renderRewardItem = ({ item }) => (

    <TouchableOpacity style={styles.rewardItem} onPress={() => navigation.navigate('Details', { reward: item })}>

      <Image source={{ uri: item.logo }} style={styles.logo} />

      <View style={styles.rewardContent}>

        <Text style={styles.companyName}>{item.company}</Text>

        <Text style={styles.rewardTitle}>{item.title}</Text>

        <View style={styles.rewardInfo}>

          <Text style={styles.rewardType}>{item.type}</Text>

          <Text style={[styles.rewardEndDate, item.endDate === 'Ends today' && styles.endsToday]}>• {item.endDate}</Text>

        </View>

      </View>

    </TouchableOpacity>

  );



  const renderTrendingItem = ({ item }) => (

    <TouchableOpacity style={styles.trendingItem} onPress={() => navigation.navigate('Details', { reward: item })}>

      <Image source={{ uri: item.logo }} style={styles.trendingLogo} />

      <View style={styles.trendingContent}>

        <Text style={styles.trendingTitle}>{item.title}</Text>

      </View>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <ScrollView>

        <View style={styles.searchContainer}>

          <TextInput

            style={styles.searchInput}

            placeholder="Start searching"

            value={searchQuery}

            onChangeText={setSearchQuery}

          />

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Reward Offers</Text>

            <TouchableOpacity onPress={() => navigation.navigate('More')}>

              <Text style={styles.viewMore}>View More</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={rewardOffers}

            renderItem={renderRewardItem}

            keyExtractor={item => item.id}

            scrollEnabled={false}

          />

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Trending Now</Text>

            <TouchableOpacity onPress={() => navigation.navigate('More')}>

              <Text style={styles.viewMore}>View More</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={trendingOffers}

            renderItem={renderTrendingItem}

            keyExtractor={item => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>

      </ScrollView>



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

    backgroundColor: '#F5F5F5',

  },

  searchContainer: {

    padding: 15,

    backgroundColor: '#FFD700',

  },

  searchInput: {

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    paddingVertical: 10,

    paddingHorizontal: 15,

    fontSize: 16,

  },

  sectionContainer: {

    marginTop: 20,

    paddingHorizontal: 15,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  viewMore: {

    color: '#007AFF',

  },

  rewardItem: {

    flexDirection: 'row',

    backgroundColor: '#FFFFFF',

    borderRadius: 8,

    padding: 10,

    marginBottom: 10,

  },

  logo: {

    width: 50,

    height: 50,

    borderRadius: 8,

    marginRight: 10,

  },

  rewardContent: {

    flex: 1,

  },

  companyName: {

    fontWeight: 'bold',

    marginBottom: 2,

  },

  rewardTitle: {

    fontSize: 16,

    marginBottom: 5,

  },

  rewardInfo: {

    flexDirection: 'row',

  },

  rewardType: {

    color: '#FFA500',

    marginRight: 5,

  },

  rewardEndDate: {

    color: '#808080',

  },

  endsToday: {

    color: '#FF0000',

  },

  trendingItem: {

    width: 200,

    marginRight: 15,

  },

  trendingLogo: {

    width: '100%',

    height: 120,

    borderRadius: 8,

    marginBottom: 5,

  },

  trendingTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

    backgroundColor: '#FFFFFF',

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



export default SearchScreen;