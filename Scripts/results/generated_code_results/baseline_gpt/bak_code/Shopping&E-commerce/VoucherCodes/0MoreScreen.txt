import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const offers = [
  {
    id: '1',
    logo: require('../assets/snack-icon.png'),
    title: 'Exclusive Great Savings with Prime Day Deals Plus a £3...',
    type: 'Online Reward',
    expiry: 'Ends 22 Jul',
  },
  {
    id: '2',
    logo: require('../assets/snack-icon.png'),
    title: 'Exclusive Free £10 Currys Voucher with Orders Over £...',
    type: 'Online Reward',
    expiry: 'Ends 1 Aug',
  },
  {
    id: '3',
    logo: require('../assets/snack-icon.png'),
    title: 'Exclusive Free £3 Amazon Voucher with Orders Over £...',
    type: 'Online Reward',
    expiry: 'Ends today',
  },
  {
    id: '4',
    logo: require('../assets/snack-icon.png'),
    title: 'Exclusive 15% off Selected Hotel Bookings: Free £5 A...',
    type: 'Online Reward',
    expiry: 'Ends 1 Aug',
  },
];

const OfferCard = ({ logo, title, type, expiry }) => (
  <View style={styles.card}>
    <Image source={logo} style={styles.logo} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>
        <Text style={styles.exclusiveText}>Exclusive </Text>
        {title}
      </Text>
      <Text style={styles.type}>{type}<Text style={styles.rewardText}> Reward</Text></Text>
    </View>
    <Text style={styles.expiry}>{expiry}</Text>
  </View>
);

const MoreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#000" />
        <Text style={styles.headerTitle}>Reward Offers</Text>
      </View>
      <FlatList
        data={offers}
        renderItem={({ item }) => <OfferCard {...item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4E6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFD700',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  exclusiveText: {
    color: '#D9534F',
  },
  rewardText: {
    color: '#FF8C00',
  },
  type: {
    fontSize: 14,
    color: '#A9A9A9',
  },
  expiry: {
    fontSize: 14,
    color: '#D9534F',
    fontWeight: 'bold',
  },
});

export default MoreScreen;