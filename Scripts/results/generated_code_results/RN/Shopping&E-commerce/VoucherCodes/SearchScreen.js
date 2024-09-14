import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const SearchScreen = () => {
const navigation = useNavigation();
const rewardOffers = [
{ logo: require('../assets/snack-icon.png'), title: 'MOBILES.CO.UK\nFree £50 Currys Voucher with Vodafone Pa...', type: 'Online Reward', expiryDate: 'Ends 20 Jul' },
{ logo: require('../assets/snack-icon.png'), title: 'DUNELM\nFree £5 Amazon Voucher with Orders Over...', type: 'Online Reward', expiryDate: 'Ends today' },
{ logo: require('../assets/snack-icon.png'), title: 'EBAY\nFree £5 Groceries Voucher with Orders Ove...', type: 'Online Reward', expiryDate: 'Ends 21 Jul' },
{ logo: require('../assets/snack-icon.png'), title: 'LG\nFree £40 Amazon Voucher with Orders Ove...', type: 'Online Reward', expiryDate: 'Ends 1 Aug' },
{ logo: require('../assets/snack-icon.png'), title: 'ADIDAS\nFree £10 Amazon Voucher with Orders Ove...', type: 'Online Reward', expiryDate: 'Ends today' },
];
const trendingItems = [
{ image: require('../assets/snack-icon.png'), title: '2 for 1 Entry with National Rail' },
];
const renderRewardItem = ({ item }) => (
<TouchableOpacity style={styles.rewardItem} onPress={() => navigation.navigate('Details')}>
<Image source={item.logo} style={styles.logo} />
<View style={styles.rewardDetails}>
<Text style={styles.rewardTitle}>{item.title}</Text>
<View style={styles.rewardInfo}>
<Text style={styles.rewardType}>{item.type}</Text>
<Text style={styles.rewardExpiry}>{item.expiryDate}</Text>
</View>
</View>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<ScrollView>
<View style={styles.searchBarContainer}>
<Icon name="search" size={24} color="#000" style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="Start searching" placeholderTextColor="#888" />
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
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
    </View>

    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View More</Text>
        </TouchableOpacity>
      </View>
      <Image source={trendingItems[0].image} style={styles.trendingImage} />
      <Text style={styles.trendingTitle}>{trendingItems[0].title}</Text>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={styles.navItem}>
      <Icon name="explore" size={24} color="#000" />
      <Text>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Icon name="search" size={24} color="#000" />
      <Text>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('VIP')} style={styles.navItem}>
      <Icon name="star" size={24} color="#000" />
      <Text>VIP</Text>
      <View style={styles.newBadge}>
        <Text style={styles.newBadgeText}>NEW</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.navItem}>
      <Icon name="person" size={24} color="#000" />
      <Text>Account</Text>
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
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 8,
margin: 16,
paddingHorizontal: 12,
},
searchIcon: {
marginRight: 8,
},
searchInput: {
flex: 1,
height: 40,
fontSize: 16,
},
sectionContainer: {
marginBottom: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 16,
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
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
logo: {
width: 50,
height: 50,
marginRight: 16,
},
rewardDetails: {
flex: 1,
},
rewardTitle: {
fontSize: 16,
marginBottom: 4,
},
rewardInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
},
rewardType: {
color: '#FF6347',
},
rewardExpiry: {
color: '#888',
},
trendingImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
trendingTitle: {
fontSize: 16,
fontWeight: 'bold',
margin: 16,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 8,
},
navItem: {
alignItems: 'center',
},
activeNavItem: {
borderTopWidth: 2,
borderTopColor: '#007AFF',
},
newBadge: {
position: 'absolute',
top: -5,
right: -15,
backgroundColor: '#FF6347',
borderRadius: 10,
paddingHorizontal: 5,
paddingVertical: 2,
},
newBadgeText: {
color: '#fff',
fontSize: 10,
fontWeight: 'bold',
},
});
export default SearchScreen;