import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const rewards = [
  { id: '1', company: 'MOBILES.CO.UK', offer: 'Free £50 Currys Voucher', details: 'with Vodafone Pa...', expiry: 'Ends 20 Jul', logo: require('../assets/snack-icon.png') },
  { id: '2', company: 'DUNELM', offer: 'Free £5 Amazon Voucher', details: 'with Orders Over...', expiry: 'Ends today', logo: require('../assets/snack-icon.png') },
  { id: '3', company: 'EBAY', offer: 'Free £5 Groceries Voucher', details: 'with Orders Over...', expiry: 'Ends 21 Jul', logo: require('../assets/snack-icon.png') },
  { id: '4', company: 'LG', offer: 'Free £40 Amazon Voucher', details: 'with Orders Over...', expiry: 'Ends 1 Aug', logo: require('../assets/snack-icon.png') },
  { id: '5', company: 'ADIDAS', offer: 'Free £10 Amazon Voucher', details: 'with Orders Over...', expiry: 'Ends today', logo: require('../assets/snack-icon.png') },
];

const SearchScreen = () => {
  const renderRewardItem = ({ item }) => (
    <View style={styles.rewardItem}>
      <Image source={item.logo} style={styles.logo} />
      <View style={styles.rewardTextContainer}>
        <Text style={styles.companyName}>{item.company}</Text>
        <Text style={styles.offerText}>{item.offer} <Text style={styles.detailsText}>{item.details}</Text></Text>
        <Text style={styles.expiryText}>Online <Text style={styles.rewardText}>Reward</Text> • <Text style={styles.expiryDate}>{item.expiry}</Text></Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Start searching"
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Reward Offers</Text>
        <TouchableOpacity>
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={rewards}
        renderItem={renderRewardItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <TouchableOpacity>
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
      {/* Additional trending items can follow here, similar to the rewards list */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4E3',
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: '#FFD700',
  },
  searchBar: {
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMoreText: {
    fontSize: 14,
    color: '#0000FF',
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  rewardTextContainer: {
    flex: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerText: {
    fontSize: 14,
    color: '#000000',
  },
  detailsText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  expiryText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  rewardText: {
    color: '#FF4500',
  },
  expiryDate: {
    color: '#FF0000',
  },
});

export default SearchScreen;