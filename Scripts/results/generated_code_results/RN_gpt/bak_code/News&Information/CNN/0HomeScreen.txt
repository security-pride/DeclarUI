import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // For icons like search

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="battery-charging" size={20} style={styles.batteryIcon} />
        <Text style={styles.cnnLogo}>CNN</Text>
        <Icon name="search" size={20} style={styles.searchIcon} />
      </View>

      <ScrollView horizontal style={styles.navigationTabs}>
        <Text style={styles.navTab}>Top News</Text>
        <Text style={styles.navTab}>Your CNN</Text>
        <Text style={styles.navTab}>World</Text>
        <Text style={styles.navTab}>U.S. Politics</Text>
        <Text style={styles.navTab}>Business</Text>
      </ScrollView>

      <ScrollView style={styles.content}>
        <View style={styles.newsItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.newsImage} />
          <Text style={styles.newsTitle}>Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump</Text>
          <Text style={styles.newsTimestamp}>7h ago</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.liveUpdates}>LIVE UPDATES</Text>
          <Text style={styles.sectionTitle}>Biden condemns Trump shooting; authorities search for gunman’s motive</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.videoLabel}>VIDEO</Text>
          <Text style={styles.sectionTitle}>Watch Biden’s entire Oval Office address</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.analysisLabel}>ANALYSIS</Text>
          <Text style={styles.sectionTitle}>A nation traumatized and a campaign transformed as Trump is set to reemerge</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.navButton}>
          <Icon name="home" size={24} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Elections')} style={styles.navButton}>
          <Icon name="newspaper" size={24} />
          <Text>Elections</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Watch')} style={styles.navButton}>
          <Icon name="tv" size={24} />
          <Text>Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.navButton}>
          <Icon name="settings" size={24} />
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  batteryIcon: {
    marginLeft: 10,
  },
  cnnLogo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginRight: 10,
  },
  navigationTabs: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navTab: {
    marginHorizontal: 15,
    fontSize: 16,
    color: 'black',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  newsItem: {
    marginVertical: 10,
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  newsTimestamp: {
    fontSize: 12,
    color: 'gray',
  },
  section: {
    marginVertical: 10,
  },
  liveUpdates: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  videoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  analysisLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 5,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'white',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;