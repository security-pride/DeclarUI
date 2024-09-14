import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.profileIcon}
        />
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Ask me anything..."
          />
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require('../assets/snack-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.dealsButton}>
          <Text style={styles.dealsText}>Deals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.widgetsContainer}>
        <View style={styles.weatherWidget}>
          <Text style={styles.weatherText}>Mountain View, CA</Text>
          <Text style={styles.temperature}>60°F</Text>
          <Text style={styles.weatherFooter}>Low UV today - 81%</Text>
        </View>
        <View style={styles.rewardsWidget}>
          <Text style={styles.rewardsTitle}>Rewards</Text>
          <Text style={styles.rewardsDescription}>
            Earn Microsoft Rewards points by searching
          </Text>
        </View>
        <View style={styles.stocksWidget}>
          <Text style={styles.stockTicker}>DJI</Text>
          <Text style={styles.stockTicker}>AAPL</Text>
          <Text style={styles.stockTicker}>AMZN</Text>
          <Text style={styles.stockTicker}>TSLA</Text>
        </View>
      </View>

      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>Apps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
  },
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
  },
  iconButton: {
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  dealsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealsText: {
    fontSize: 16,
  },
  widgetsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  weatherWidget: {
    backgroundColor: '#005f73',
    borderRadius: 10,
    padding: 15,
    width: '30%',
  },
  weatherText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  temperature: {
    color: 'white',
    fontSize: 28,
  },
  weatherFooter: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  rewardsWidget: {
    backgroundColor: '#f0db4f',
    borderRadius: 10,
    padding: 15,
    width: '30%',
  },
  rewardsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rewardsDescription: {
    marginTop: 10,
  },
  stocksWidget: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    padding: 15,
    width: '30%',
  },
  stockTicker: {
    fontSize: 16,
    marginBottom: 5,
  },
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    alignItems: 'center',
  },
});

export default HomeScreen;