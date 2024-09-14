import React from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const DiscoveryScreen = () => {

  const navigation = useNavigation();



  const renderFeatureCard = (title, duration, isPremium, imageSource) => (

    <View style={styles.card}>

      <Image source={imageSource} style={styles.cardImage} />

      {isPremium && <Text style={styles.premiumLabel}>premium</Text>}

      <Text style={styles.duration}>{duration}</Text>

      <Text style={styles.cardTitle}>{title}</Text>

      <TouchableOpacity style={styles.playButton}>

        <Text style={styles.playButtonText}>播放</Text>

      </TouchableOpacity>

    </View>

  );



  return (

    <ScrollView style={styles.container}>

      <Text style={styles.sectionTitle}>发现</Text>

      <View style={styles.section}>

        <Text style={styles.sectionHeader}>特色</Text>

        {renderFeatureCard('Nature rain on leaves', '45 MIN', true, require('../assets/snack-icon.png'))}

      </View>

      <View style={styles.section}>

        <View style={styles.sectionHeaderContainer}>

          <Text style={styles.sectionHeader}>锻炼</Text>

          <TouchableOpacity>

            <Text style={styles.viewAllText}>查看全部</Text>

          </TouchableOpacity>

        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {renderFeatureCard('Total body barre: bodyweight', '27 MIN', true, require('../assets/snack-icon.png'))}

          {renderFeatureCard('Cardio groove dance', '16 MIN', false, require('../assets/snack-icon.png'))}

        </ScrollView>

      </View>

      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>发现</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>今天</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Friends')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>好友</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Premium')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Premium</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#fff',

  },

  sectionTitle: {

    fontSize: 24,

    fontWeight: 'bold',

    padding: 16,

  },

  section: {

    marginBottom: 20,

  },

  sectionHeader: {

    fontSize: 18,

    fontWeight: 'bold',

    marginLeft: 16,

    marginBottom: 10,

  },

  sectionHeaderContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingRight: 16,

  },

  viewAllText: {

    color: '#4a90e2',

  },

  card: {

    width: 300,

    marginLeft: 16,

    marginRight: 8,

    borderRadius: 8,

    overflow: 'hidden',

  },

  cardImage: {

    width: '100%',

    height: 150,

    resizeMode: 'cover',

  },

  premiumLabel: {

    position: 'absolute',

    top: 10,

    left: 10,

    backgroundColor: 'rgba(0,0,0,0.5)',

    color: 'white',

    padding: 4,

    borderRadius: 4,

    fontSize: 12,

  },

  duration: {

    position: 'absolute',

    top: 10,

    right: 10,

    color: 'white',

    fontSize: 12,

  },

  cardTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    margin: 8,

  },

  playButton: {

    backgroundColor: '#4a90e2',

    padding: 8,

    margin: 8,

    borderRadius: 4,

    alignItems: 'center',

  },

  playButtonText: {

    color: 'white',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

  tabText: {

    fontSize: 12,

    marginTop: 4,

  },

  activeTabText: {

    color: '#4a90e2',

  },

});



export default DiscoveryScreen;