import React from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const AppsScreen = () => {

  const navigation = useNavigation();



  const renderMenuItem = (icon, label, onPress) => (

    <TouchableOpacity style={styles.menuItem} onPress={onPress}>

      <Image source={icon} style={styles.menuIcon} />

      <Text style={styles.menuLabel}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

          </TouchableOpacity>

          <View style={styles.profileSection}>

            <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

            <View>

              <Text style={styles.signInText}>Sign in to earn daily points</Text>

              <Text style={styles.pointsText}>0/30 &gt;</Text>

            </View>

          </View>

        </View>



        <TouchableOpacity style={styles.rewardsButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.rewardIcon} />

          <Text style={styles.rewardsText}>Join Microsoft Rewards to redeem free gifts!</Text>

        </TouchableOpacity>



        <View style={styles.quickActions}>

          {renderMenuItem(require('../assets/snack-icon.png'), 'Interests', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), 'Bookmarks', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), 'History', () => {})}

          {renderMenuItem(require('../assets/snack-icon.png'), 'Settings', () => navigation.navigate('Settings'))}

        </View>



        <View style={styles.pinnedSection}>

          <Text style={styles.sectionTitle}>PINNED</Text>

          <TouchableOpacity style={styles.addPinButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.addIcon} />

            <Text style={styles.addPinText}>Pin</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.exploreSection}>

          <Text style={styles.sectionTitle}>EXPLORE</Text>

          <View style={styles.exploreGrid}>

            {renderMenuItem(require('../assets/snack-icon.png'), 'Rewards', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Explore AI', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Wallpapers', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Money', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Watch', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Games', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'News', () => navigation.navigate('News'))}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Trending', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Images', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Weather', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Math', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Nearby', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Deals', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Translator', () => {})}

            {renderMenuItem(require('../assets/snack-icon.png'), 'Unit Converter', () => {})}

          </View>

        </View>

      </ScrollView>



      <View style={styles.bottomNav}>

        {renderMenuItem(require('../assets/snack-icon.png'), 'Home', () => navigation.navigate('Home'))}

        {renderMenuItem(require('../assets/snack-icon.png'), 'Weather', () => {})}

        {renderMenuItem(require('../assets/snack-icon.png'), 'Chat', () => {})}

        {renderMenuItem(require('../assets/snack-icon.png'), 'Tabs', () => {})}

        {renderMenuItem(require('../assets/snack-icon.png'), 'Apps', () => {})}

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F0F0F0',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  profileSection: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  profileIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  signInText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  pointsText: {

    fontSize: 14,

    color: '#666',

  },

  rewardsButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    padding: 10,

    margin: 10,

    borderRadius: 8,

  },

  rewardIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  rewardsText: {

    fontSize: 14,

    color: '#333',

  },

  quickActions: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    padding: 10,

    backgroundColor: '#FFF',

    marginBottom: 10,

  },

  menuItem: {

    alignItems: 'center',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  menuLabel: {

    fontSize: 12,

  },

  sectionTitle: {

    fontSize: 14,

    fontWeight: 'bold',

    padding: 10,

  },

  pinnedSection: {

    backgroundColor: '#FFF',

    marginBottom: 10,

  },

  addPinButton: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 10,

    borderWidth: 1,

    borderColor: '#DDD',

    borderStyle: 'dashed',

    borderRadius: 8,

    margin: 10,

  },

  addIcon: {

    width: 20,

    height: 20,

    marginRight: 5,

  },

  addPinText: {

    fontSize: 14,

    color: '#666',

  },

  exploreSection: {

    backgroundColor: '#FFF',

  },

  exploreGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-around',

    padding: 10,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    backgroundColor: '#FFF',

    paddingVertical: 10,

    borderTopWidth: 1,

    borderTopColor: '#DDD',

  },

});



export default AppsScreen;