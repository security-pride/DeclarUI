import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const handleNavigate = (screen) => {

    navigation.navigate(screen);

  };



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <Text style={styles.time}>9:41</Text>

          <View style={styles.statusIcons}>

            <View style={styles.signalIcon} />

            <View style={styles.wifiIcon} />

            <View style={styles.batteryIcon} />

          </View>

        </View>



        <View style={styles.welcomeSection}>

          <Text style={styles.welcomeText}>Hi, Steven !</Text>

          <Text style={styles.subText}>Learn new sentences right away</Text>

        </View>



        <View style={styles.tabSection}>

          <TouchableOpacity style={styles.activeTab}>

            <Text style={styles.activeTabText}>NEW FEED</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.inactiveTab}>

            <Text style={styles.inactiveTabText}>SUBSCRIPTION</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.notificationIcon}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

            <View style={styles.notificationBadge}>

              <Text style={styles.notificationText}>3</Text>

            </View>

          </TouchableOpacity>

        </View>



        <View style={styles.feedItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />

          <Text style={styles.name}>Charlie Herrera</Text>

          <View style={styles.card}>

            <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />

            <View style={styles.cardContent}>

              <Text style={styles.cardTitle}>ENGLISH TOURISM</Text>

              <Text style={styles.cardSubtitle}>Through the airport security door</Text>

              <TouchableOpacity style={styles.learnButton}>

                <Text style={styles.learnButtonText}>LEARN FREE NOW</Text>

              </TouchableOpacity>

            </View>

          </View>

          <View style={styles.cardIndicator}>

            <View style={styles.indicatorActive} />

            <View style={styles.indicatorInactive} />

            <View style={styles.indicatorInactive} />

          </View>

        </View>



        <View style={styles.lessonSection}>

          <View style={styles.lessonHeader}>

            <Text style={styles.lessonTitle}>When get hurt</Text>

            <TouchableOpacity>

              <Text style={styles.viewAllText}>view all</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.lessonContent}>

            <Image source={require('../assets/snack-icon.png')} style={styles.lessonAvatar} />

            <Text style={styles.lessonAuthor}>Ellen Jacobs</Text>

            <View style={styles.lessonCards}>

              <View style={styles.lessonCard}>

                <Image source={require('../assets/snack-icon.png')} style={styles.lessonImage} />

                <View style={styles.lessonDuration}>

                  <Text style={styles.durationText}>0:17</Text>

                </View>

              </View>

              <View style={styles.lessonCard}>

                <Image source={require('../assets/snack-icon.png')} style={styles.lessonImage} />

              </View>

            </View>

            <View style={styles.phrases}>

              <Text style={styles.phraseText}>It's just a scratch.</Text>

              <Text style={styles.translationText}>Chỉ xước nhẹ thôi ý mà.</Text>

            </View>

          </View>

        </View>

      </ScrollView>



      <View style={styles.bottomNavigation}>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.activeNavText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Search')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.inactiveNavText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Speak')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.inactiveNavText}>Speak</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Word')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.inactiveNavText}>Word</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => handleNavigate('Profile')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />

          <Text style={styles.inactiveNavText}>Profile</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#FFFFFF',

  },

  header: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingHorizontal: 20,

    paddingTop: 10,

  },

  time: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  statusIcons: {

    flexDirection: 'row',

  },

  signalIcon: {

    width: 20,

    height: 20,

    backgroundColor: 'black',

    marginRight: 5,

  },

  wifiIcon: {

    width: 20,

    height: 20,

    backgroundColor: 'black',

    marginRight: 5,

  },

  batteryIcon: {

    width: 20,

    height: 20,

    backgroundColor: 'black',

  },

  welcomeSection: {

    paddingHorizontal: 20,

    paddingTop: 20,

  },

  welcomeText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  subText: {

    fontSize: 16,

    color: '#888',

    marginTop: 5,

  },

  tabSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 20,

    marginTop: 20,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#007AFF',

    paddingBottom: 5,

  },

  activeTabText: {

    color: '#007AFF',

    fontWeight: 'bold',

  },

  inactiveTab: {

    paddingBottom: 5,

  },

  inactiveTabText: {

    color: '#888',

  },

  notificationIcon: {

    position: 'relative',

  },

  icon: {

    width: 24,

    height: 24,

  },

  notificationBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: '#FF3B30',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationText: {

    color: 'white',

    fontSize: 12,

  },

  feedItem: {

    paddingHorizontal: 20,

    marginTop: 20,

  },

  avatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  name: {

    fontWeight: 'bold',

    marginTop: 5,

  },

  card: {

    backgroundColor: '#007AFF',

    borderRadius: 10,

    marginTop: 10,

    overflow: 'hidden',

  },

  cardImage: {

    width: '100%',

    height: 150,

  },

  cardContent: {

    padding: 15,

  },

  cardTitle: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  cardSubtitle: {

    color: 'white',

    fontSize: 16,

    marginTop: 5,

  },

  learnButton: {

    backgroundColor: 'white',

    borderRadius: 20,

    paddingVertical: 10,

    paddingHorizontal: 20,

    alignSelf: 'flex-start',

    marginTop: 10,

  },

  learnButtonText: {

    color: '#007AFF',

    fontWeight: 'bold',

  },

  cardIndicator: {

    flexDirection: 'row',

    justifyContent: 'center',

    marginTop: 10,

  },

  indicatorActive: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#007AFF',

    marginHorizontal: 2,

  },

  indicatorInactive: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#D1D1D6',

    marginHorizontal: 2,

  },

  lessonSection: {

    paddingHorizontal: 20,

    marginTop: 20,

  },

  lessonHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  lessonTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  viewAllText: {

    color: '#007AFF',

  },

  lessonContent: {

    marginTop: 10,

  },

  lessonAvatar: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  lessonAuthor: {

    fontWeight: 'bold',

    marginTop: 5,

  },

  lessonCards: {

    flexDirection: 'row',

    marginTop: 10,

  },

  lessonCard: {

    width: 150,

    height: 100,

    backgroundColor: '#F2F2F7',

    borderRadius: 10,

    marginRight: 10,

    overflow: 'hidden',

  },

  lessonImage: {

    width: '100%',

    height: '100%',

  },

  lessonDuration: {

    position: 'absolute',

    bottom: 5,

    right: 5,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: 10,

    paddingVertical: 2,

    paddingHorizontal: 5,

  },

  durationText: {

    color: 'white',

    fontSize: 12,

  },

  phrases: {

    marginTop: 10,

  },

  phraseText: {

    fontSize: 16,

  },

  translationText: {

    fontSize: 14,

    color: '#888',

    marginTop: 2,

  },

  bottomNavigation: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E5E5EA',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navIcon: {

    width: 24,

    height: 24,

  },

  activeNavText: {

    color: '#007AFF',

    marginTop: 5,

  },

  inactiveNavText: {

    color: '#888',

    marginTop: 5,

  },

});



export default HomeScreen;