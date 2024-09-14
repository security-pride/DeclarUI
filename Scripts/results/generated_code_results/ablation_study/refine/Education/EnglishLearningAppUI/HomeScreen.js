import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const HomeScreen = ({ navigation }) => {

  const [activeTab, setActiveTab] = useState('NEW FEED');



  const renderTabContent = () => {

    if (activeTab === 'NEW FEED') {

      return (

        <ScrollView style={styles.feedContent}>

          <View style={styles.feedItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

            <Text style={styles.userName}>Charlie Herrera</Text>

            <View style={styles.cardContainer}>

              <Image source={require('../assets/snack-icon.png')} style={styles.cardImage} />

              <View style={styles.cardContent}>

                <Text style={styles.cardTitle}>ENGLISH TOURISM</Text>

                <Text style={styles.cardSubtitle}>Through the airport security door</Text>

                <TouchableOpacity style={styles.learnButton}>

                  <Text style={styles.learnButtonText}>LEARN FREE NOW</Text>

                </TouchableOpacity>

              </View>

            </View>

            <View style={styles.dotIndicator}>

              <View style={[styles.dot, styles.activeDot]} />

              <View style={styles.dot} />

              <View style={styles.dot} />

            </View>

          </View>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>When get hurt</Text>

            <TouchableOpacity>

              <Text style={styles.viewAllText}>view all</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.feedItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />

            <Text style={styles.userName}>Ellen Jacobs</Text>

            <View style={styles.videoContainer}>

              <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />

              <View style={styles.videoDuration}>

                <Text style={styles.durationText}>0:17</Text>

              </View>

            </View>

            <View style={styles.sentenceContainer}>

              <TextInput style={styles.sentenceInput} placeholder="It's just a" />

              <Text style={styles.translatedText}>Chỉ xước nhẹ thôi ý mà.</Text>

            </View>

            <View style={styles.sentenceContainer}>

              <TextInput style={styles.sentenceInput} placeholder="I" />

              <Text style={styles.translatedText}>Tôi bị xước d...</Text>

            </View>

          </View>

        </ScrollView>

      );

    }

    return null;

  };



  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.timeText}>9:41</Text>

        <View style={styles.headerRight}>

          <Icon name="signal-cellular-alt" size={16} color="#000" />

          <Icon name="wifi" size={16} color="#000" />

          <Icon name="battery-full" size={16} color="#000" />

        </View>

      </View>

      <View style={styles.content}>

        <Text style={styles.greeting}>Hi, Steven !</Text>

        <Text style={styles.subGreeting}>Learn new sentences right away</Text>

        <View style={styles.tabContainer}>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'NEW FEED' && styles.activeTab]}

            onPress={() => setActiveTab('NEW FEED')}

          >

            <Text style={[styles.tabText, activeTab === 'NEW FEED' && styles.activeTabText]}>NEW FEED</Text>

          </TouchableOpacity>

          <TouchableOpacity

            style={[styles.tab, activeTab === 'SUBSCRIPTION' && styles.activeTab]}

            onPress={() => setActiveTab('SUBSCRIPTION')}

          >

            <Text style={[styles.tabText, activeTab === 'SUBSCRIPTION' && styles.activeTabText]}>SUBSCRIPTION</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.notificationButton}>

            <Icon name="notifications" size={24} color="#000" />

            <View style={styles.notificationBadge}>

              <Text style={styles.notificationCount}>3</Text>

            </View>

          </TouchableOpacity>

        </View>

        {renderTabContent()}

      </View>

      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="home" size={24} color="#4A90E2" />

          <Text style={styles.navText}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="search" size={24} color="#999" />

          <Text style={styles.navText}>Search</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="mic" size={24} color="#999" />

          <Text style={styles.navText}>Speak</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="book" size={24} color="#999" />

          <Text style={styles.navText}>Word</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>

          <Icon name="person" size={24} color="#999" />

          <Text style={styles.navText}>Profile</Text>

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

  timeText: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  headerRight: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  content: {

    flex: 1,

    paddingHorizontal: 20,

  },

  greeting: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 20,

  },

  subGreeting: {

    fontSize: 16,

    color: '#666',

    marginTop: 5,

  },

  tabContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 20,

    borderBottomWidth: 1,

    borderBottomColor: '#E0E0E0',

  },

  tab: {

    paddingVertical: 10,

  },

  activeTab: {

    borderBottomWidth: 2,

    borderBottomColor: '#4A90E2',

  },

  tabText: {

    fontSize: 16,

    color: '#999',

  },

  activeTabText: {

    color: '#4A90E2',

    fontWeight: 'bold',

  },

  notificationButton: {

    position: 'relative',

  },

  notificationBadge: {

    position: 'absolute',

    top: -5,

    right: -5,

    backgroundColor: '#FF6B6B',

    borderRadius: 10,

    width: 20,

    height: 20,

    justifyContent: 'center',

    alignItems: 'center',

  },

  notificationCount: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  feedContent: {

    flex: 1,

  },

  feedItem: {

    marginTop: 20,

  },

  profilePic: {

    width: 40,

    height: 40,

    borderRadius: 20,

  },

  userName: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 5,

  },

  cardContainer: {

    backgroundColor: '#4A90E2',

    borderRadius: 10,

    overflow: 'hidden',

    marginTop: 10,

  },

  cardImage: {

    width: '100%',

    height: 150,

  },

  cardContent: {

    padding: 15,

  },

  cardTitle: {

    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: 'bold',

  },

  cardSubtitle: {

    color: '#FFFFFF',

    fontSize: 14,

    marginTop: 5,

  },

  learnButton: {

    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    paddingVertical: 10,

    paddingHorizontal: 20,

    alignSelf: 'flex-start',

    marginTop: 10,

  },

  learnButtonText: {

    color: '#4A90E2',

    fontWeight: 'bold',

  },

  dotIndicator: {

    flexDirection: 'row',

    justifyContent: 'center',

    marginTop: 10,

  },

  dot: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: '#E0E0E0',

    marginHorizontal: 5,

  },

  activeDot: {

    backgroundColor: '#4A90E2',

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 20,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  viewAllText: {

    color: '#4A90E2',

  },

  videoContainer: {

    position: 'relative',

    marginTop: 10,

  },

  videoThumbnail: {

    width: '100%',

    height: 200,

    borderRadius: 10,

  },

  videoDuration: {

    position: 'absolute',

    bottom: 10,

    right: 10,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    borderRadius: 5,

    paddingHorizontal: 5,

    paddingVertical: 2,

  },

  durationText: {

    color: '#FFFFFF',

    fontSize: 12,

  },

  sentenceContainer: {

    marginTop: 10,

  },

  sentenceInput: {

    borderWidth: 1,

    borderColor: '#E0E0E0',

    borderRadius: 5,

    padding: 10,

    fontSize: 16,

  },

  translatedText: {

    color: '#666',

    marginTop: 5,

  },

  bottomNav: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    paddingVertical: 10,

  },

  navItem: {

    alignItems: 'center',

  },

  navText: {

    fontSize: 12,

    marginTop: 5,

    color: '#999',

  },

});



export default HomeScreen;