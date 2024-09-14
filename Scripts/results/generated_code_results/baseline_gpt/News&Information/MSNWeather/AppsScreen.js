import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign in to earn daily points</Text>
        <View style={styles.points}>
          <Text style={styles.pointsText}>0/30</Text>
          <Icon name="chevron-forward" size={18} color="black" />
        </View>
      </View>

      {/* Rewards Section */}
      <View style={styles.rewardsSection}>
        <Icon name="person-circle-outline" size={40} color="blue" />
        <Text style={styles.rewardsText}>
          Join Microsoft Rewards to redeem free gifts!
        </Text>
      </View>

      {/* Main Menu */}
      <View style={styles.mainMenu}>
        {renderMenuItem("star", "Interests")}
        {renderMenuItem("bookmark", "Bookmarks")}
        {renderMenuItem("time", "History")}
        {renderMenuItem("settings", "Settings")}
      </View>

      {/* Pinned Section */}
      <Text style={styles.sectionHeader}>PINNED</Text>
      <View style={styles.pinnedSection}>
        {renderMenuItem("add", "Pin", true)}
      </View>

      {/* Explore Section */}
      <Text style={styles.sectionHeader}>EXPLORE</Text>
      <View style={styles.exploreSection}>
        {renderMenuItem("medal", "Rewards")}
        {renderMenuItem("sparkles", "Explore AI")}
        {renderMenuItem("image", "Wallpapers")}
        {renderMenuItem("trending-up", "Money")}
        {renderMenuItem("play-circle", "Watch")}
        {renderMenuItem("game-controller", "Games")}
        {renderMenuItem("newspaper", "News")}
        {renderMenuItem("bar-chart", "Trending")}
        {renderMenuItem("image-outline", "Images")}
        {renderMenuItem("cloud-outline", "Weather")}
        {renderMenuItem("calculator-outline", "Math")}
        {renderMenuItem("location-outline", "Nearby")}
        {renderMenuItem("pricetags-outline", "Deals")}
        {renderMenuItem("translate-outline", "Translator")}
        {renderMenuItem("resize-outline", "Unit Converter")}
      </View>
    </ScrollView>
  );
};

const renderMenuItem = (iconName, label, isAdd = false) => (
  <View style={styles.menuItem}>
    <Icon name={iconName} size={28} color={isAdd ? 'blue' : 'black'} />
    <Text style={styles.menuLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f4f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  points: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 14,
    marginRight: 5,
  },
  rewardsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  rewardsText: {
    fontSize: 14,
    color: '#ffa500',
    marginLeft: 10,
  },
  mainMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 8,
    color: '#888',
  },
  pinnedSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    marginBottom: 16,
  },
  exploreSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  menuItem: {
    alignItems: 'center',
    margin: 10,
  },
  menuLabel: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default AppsScreen;