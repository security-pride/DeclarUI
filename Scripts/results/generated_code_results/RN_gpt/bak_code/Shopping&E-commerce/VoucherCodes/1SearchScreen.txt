import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const rewardOffers = [
  { logo: require('../assets/snack-icon.png'), title: 'Free £50 Currys Voucher with Vodafone Pa...', expiry: 'Ends 20 Jul', brand: 'MOBILES.CO.UK' },
  { logo: require('../assets/snack-icon.png'), title: 'Free £5 Amazon Voucher with Orders Over...', expiry: 'Ends today', brand: 'DUNELM' },
  { logo: require('../assets/snack-icon.png'), title: 'Free £5 Groceries Voucher with Orders Ove...', expiry: 'Ends 21 Jul', brand: 'EBAY' },
  { logo: require('../assets/snack-icon.png'), title: 'Free £40 Amazon Voucher with Orders Ove...', expiry: 'Ends 1 Aug', brand: 'LG' },
  { logo: require('../assets/snack-icon.png'), title: 'Free £10 Amazon Voucher with Orders Ove...', expiry: 'Ends today', brand: 'ADIDAS' }
];

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.searchBar} 
        placeholder="Start searching" 
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Reward Offers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={rewardOffers}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
            <View style={styles.rewardItem}>
              <Image source={item.logo} style={styles.logo} />
              <View style={styles.rewardText}>
                <Text style={styles.rewardBrand}>{item.brand}</Text>
                <Text style={styles.rewardTitle}>{item.title}</Text>
                <Text style={styles.rewardExpiry}>Online Reward • {item.expiry}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Trending Now</Text>
        <TouchableOpacity onPress={() => navigation.navigate('More')}>
          <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.trendingItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.trendingImage} />
          <Text style={styles.trendingTitle}>2 for 1 Entry with National Rail</Text>
        </View>
      </ScrollView>
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Discover')}>
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('VIP')}>
          <Text>VIP</Text>
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>NEW</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Account')}>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5DC',
    padding: 16,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMore: {
    color: '#007BFF',
    fontWeight: '600',
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  rewardText: {
    flex: 1,
  },
  rewardBrand: {
    fontWeight: 'bold',
  },
  rewardTitle: {
    fontSize: 16,
    color: '#444',
  },
  rewardExpiry: {
    fontSize: 14,
    color: 'gray',
  },
  trendingItem: {
    width: 150,
    marginRight: 16,
  },
  trendingImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  trendingTitle: {
    fontSize: 14,
    marginTop: 8,
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFF',
  },
  navItem: {
    alignItems: 'center',
  },
  newBadge: {
    position: 'absolute',
    top: -4,
    right: -10,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 2,
    paddingHorizontal: 5,
  },
  newBadgeText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SearchScreen;