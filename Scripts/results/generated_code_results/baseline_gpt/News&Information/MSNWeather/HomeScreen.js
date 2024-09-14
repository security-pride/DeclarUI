import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header User Icon */}
      <TouchableOpacity style={styles.userIcon}>
        <Icon name="person-circle-outline" size={30} color="#000" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Ask me anything..."
          placeholderTextColor="#888"
        />
        <View style={styles.searchIcons}>
          <Icon name="camera-outline" size={24} color="#888" style={styles.icon} />
          <Icon name="mic-outline" size={24} color="#888" />
        </View>
      </View>

      {/* Card View */}
      <View style={styles.cardsContainer}>
        <View style={styles.weatherCard}>
          <Text style={styles.locationText}>Mountain View, CA</Text>
          <Text style={styles.temperatureText}>60°F</Text>
          <Text style={styles.detailText}>Low UV today</Text>
          <Text style={styles.percentageText}>81%</Text>
        </View>

        <View style={styles.rewardsCard}>
          <Text style={styles.rewardsTitle}>Rewards</Text>
          <Text style={styles.rewardsDesc}>Earn Microsoft Rewards points by searching</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.rewardsImage} />
        </View>
        
        <View style={styles.marketCard}>
          <Text style={styles.marketTitle}>Market</Text>
          <Text>DJI</Text>
          <Text>AAPL</Text>
          <Text>AMZN</Text>
          <Text>TSLA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 10,
    paddingTop: 40,
  },
  userIcon: {
    alignSelf: 'flex-start',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  weatherCard: {
    backgroundColor: '#2C3E50',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginBottom: 5,
  },
  temperatureText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  detailText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 5,
  },
  percentageText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 2,
  },
  rewardsCard: {
    backgroundColor: '#D3CCE3',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rewardsTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rewardsDesc: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  rewardsImage: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  marketCard: {
    backgroundColor: '#E3F8D3',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marketTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;