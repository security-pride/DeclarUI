import React from 'react';

import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.navigate('PersonalCentral')}>

            <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

          </TouchableOpacity>

          <Text style={styles.time}>9:10</Text>

          <View style={styles.headerRight}>

            <Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />

            <Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />

            <Text style={styles.networkText}>3G</Text>

            <TouchableOpacity style={styles.dealsButton}>

              <Image source={require('../assets/snack-icon.png')} style={styles.tagIcon} />

              <Text style={styles.dealsText}>Deals</Text>

            </TouchableOpacity>

          </View>

        </View>



        <View style={styles.searchBar}>

          <TextInput

            style={styles.searchInput}

            placeholder="Ask me anything..."

            placeholderTextColor="#666"

          />

          <TouchableOpacity style={styles.cameraButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.micButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

        </View>



        <View style={styles.cardContainer}>

          <TouchableOpacity style={styles.weatherCard}>

            <View style={styles.weatherHeader}>

              <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

              <Text style={styles.locationText}>Mountain View, CA</Text>

            </View>

            <View style={styles.weatherInfo}>

              <Image source={require('../assets/snack-icon.png')} style={styles.weatherIcon} />

              <Text style={styles.temperature}>60°F</Text>

            </View>

            <Text style={styles.weatherCondition}>Low UV today</Text>

            <Text style={styles.humidity}>81%</Text>

          </TouchableOpacity>



          <TouchableOpacity style={styles.rewardsCard}>

            <View style={styles.rewardsHeader}>

              <Image source={require('../assets/snack-icon.png')} style={styles.medalIcon} />

              <Text style={styles.rewardsTitle}>Rewards</Text>

            </View>

            <Text style={styles.rewardsDescription}>Earn Microsoft Rewards points by searching</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.rewardsIllustration} />

          </TouchableOpacity>



          <TouchableOpacity style={styles.stocksCard}>

            <Text style={styles.stocksTitle}>Market</Text>

            <View style={styles.stockItem}>

              <Text style={styles.stockSymbol}>DJI</Text>

            </View>

            <View style={styles.stockItem}>

              <Text style={styles.stockSymbol}>AAPL</Text>

            </View>

            <View style={styles.stockItem}>

              <Text style={styles.stockSymbol}>AMZN</Text>

            </View>

            <View style={styles.stockItem}>

              <Text style={styles.stockSymbol}>TSLA</Text>

            </View>

          </TouchableOpacity>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Weather')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Weather</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Chat</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Tabs</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Apps')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.navText}>Apps</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F5',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

  },

  profileIcon: {

    width: 30,

    height: 30,

    borderRadius: 15,

  },

  time: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  batteryIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  signalIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  networkText: {

    marginRight: 10,

  },

  dealsButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#E6F3FF',

    borderRadius: 15,

    paddingHorizontal: 10,

    paddingVertical: 5,

  },

  tagIcon: {

    width: 15,

    height: 15,

    marginRight: 5,

  },

  dealsText: {

    color: '#0078D4',

    fontWeight: 'bold',

  },

  searchBar: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 25,

    margin: 10,

    paddingHorizontal: 15,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  cameraButton: {

    padding: 5,

  },

  micButton: {

    padding: 5,

  },

  icon: {

    width: 20,

    height: 20,

  },

  cardContainer: {

    padding: 10,

  },

  weatherCard: {

    backgroundColor: '#1E3A5F',

    borderRadius: 15,

    padding: 15,

    marginBottom: 10,

  },

  weatherHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 10,

  },

  locationIcon: {

    width: 15,

    height: 15,

    marginRight: 5,

  },

  locationText: {

    color: '#FFFFFF',

    fontSize: 16,

  },

  weatherInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  weatherIcon: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  temperature: {

    color: '#FFFFFF',

    fontSize: 32,

    fontWeight: 'bold',

  },

  weatherCondition: {

    color: '#FFFFFF',

    fontSize: 14,

  },

  humidity: {

    color: '#FFFFFF',

    fontSize: 14,

  },

  rewardsCard: {

    backgroundColor: '#F0F5FF',

    borderRadius: 15,

    padding: 15,

    marginBottom: 10,

  },

  rewardsHeader: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 5,

  },

  medalIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  rewardsTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: '#333',

  },

  rewardsDescription: {

    fontSize: 14,

    color: '#666',

    marginBottom: 10,

  },

  rewardsIllustration: {

    width: '100%',

    height: 100,

    resizeMode: 'contain',

  },

  stocksCard: {

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    padding: 15,

  },

  stocksTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  stockItem: {

    marginBottom: 5,

  },

  stockSymbol: {

    fontSize: 16,

    color: '#333',

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  navText: {

    fontSize: 12,

    color: '#666',

  },

});



export default HomeScreen;