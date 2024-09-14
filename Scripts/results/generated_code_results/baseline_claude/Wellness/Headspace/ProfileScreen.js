import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <TouchableOpacity style={styles.settingsButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.settingsIcon} />

        </TouchableOpacity>



        <View style={styles.profileHeader}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />

          <Text style={styles.profileName}>子路 薛</Text>

          <Text style={styles.joinDate}>Joined in 2024</Text>

        </View>



        <Text style={styles.welcomeText}>Welcome!</Text>



        <TouchableOpacity style={styles.meditationCard}>

          <View style={styles.meditationInfo}>

            <Text style={styles.meditationTitle}>Beginning meditation</Text>

            <Text style={styles.meditationDescription}>Learn the fundamental techniques of meditation.</Text>

          </View>

          <Image source={require('../assets/snack-icon.png')} style={styles.meditationIcon} />

        </TouchableOpacity>



        <View style={styles.guestPassSection}>

          <Text style={styles.guestPassTitle}>Headspace 30-Day Guest Pass</Text>

          <TouchableOpacity style={styles.guestPassCard}>

            <Text style={styles.guestPassCardText}>Bring friends along the journey</Text>

            <Text style={styles.guestPassCardHighlight}>Send free access to new members</Text>

            <Image source={require('../assets/snack-icon.png')} style={styles.guestPassIcon} />

          </TouchableOpacity>

        </View>



        <View style={styles.progressSection}>

          <Text style={styles.progressTitle}>My progress</Text>

          <View style={styles.progressCards}>

            <View style={styles.progressCard}></View>

            <View style={styles.progressCard}></View>

          </View>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Today</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Explore')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Explore</Text>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>子路</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#1E1E3F',

  },

  scrollContent: {

    padding: 20,

  },

  settingsButton: {

    position: 'absolute',

    top: 20,

    right: 20,

    zIndex: 1,

  },

  settingsIcon: {

    width: 24,

    height: 24,

  },

  profileHeader: {

    alignItems: 'center',

    marginTop: 40,

  },

  profileImage: {

    width: 100,

    height: 100,

    borderRadius: 50,

    marginBottom: 10,

  },

  profileName: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

    marginBottom: 5,

  },

  joinDate: {

    fontSize: 16,

    color: '#A0A0A0',

  },

  welcomeText: {

    fontSize: 28,

    fontWeight: 'bold',

    color: 'white',

    marginTop: 30,

    marginBottom: 20,

  },

  meditationCard: {

    flexDirection: 'row',

    backgroundColor: '#2E2E5F',

    borderRadius: 10,

    padding: 15,

    marginBottom: 20,

  },

  meditationInfo: {

    flex: 1,

  },

  meditationTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

    marginBottom: 5,

  },

  meditationDescription: {

    fontSize: 14,

    color: '#A0A0A0',

  },

  meditationIcon: {

    width: 50,

    height: 50,

  },

  guestPassSection: {

    marginBottom: 20,

  },

  guestPassTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

    marginBottom: 10,

  },

  guestPassCard: {

    backgroundColor: '#FFD700',

    borderRadius: 10,

    padding: 15,

  },

  guestPassCardText: {

    fontSize: 14,

    color: '#1E1E3F',

  },

  guestPassCardHighlight: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#1E1E3F',

    marginTop: 5,

  },

  guestPassIcon: {

    position: 'absolute',

    right: 15,

    bottom: 15,

    width: 60,

    height: 60,

  },

  progressSection: {

    marginBottom: 20,

  },

  progressTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

    marginBottom: 10,

  },

  progressCards: {

    flexDirection: 'row',

    justifyContent: 'space-between',

  },

  progressCard: {

    width: '48%',

    height: 100,

    backgroundColor: '#2E2E5F',

    borderRadius: 10,

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#2E2E5F',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 5,

  },

  tabText: {

    fontSize: 12,

    color: '#A0A0A0',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#FFD700',

  },

  activeTabText: {

    color: '#FFD700',

  },

});



export default ProfileScreen;