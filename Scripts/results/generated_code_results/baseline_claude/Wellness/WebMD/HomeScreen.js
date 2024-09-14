import React from 'react';

import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const features = [

    { name: 'Symptom Checker', icon: 'bullseye' },

    { name: 'Med Reminders', icon: 'pill' },

    { name: 'Prescription Discounts', icon: 'prescription' },

    { name: 'Drug Interactions', icon: 'atom' },

    { name: 'Pill Identifier', icon: 'search' },

    { name: 'Track Symptoms', icon: 'chart-line' },

  ];



  const renderFeature = (feature, index) => (

    <TouchableOpacity

      key={index}

      style={styles.featureItem}

      onPress={() => navigation.navigate(feature.name.replace(' ', ''))}

    >

      <Image source={{ uri: `../assets/${feature.icon}.png` }} style={styles.featureIcon} />

      <Text style={styles.featureText}>{feature.name}</Text>

    </TouchableOpacity>

  );



  return (

    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity>

          <Image source={{ uri: '../assets/menu.png' }} style={styles.menuIcon} />

        </TouchableOpacity>

        <TextInput

          style={styles.searchInput}

          placeholder="Search drugs, conditions, news..."

          placeholderTextColor="#999"

        />

      </View>



      <View style={styles.featuresGrid}>

        {features.map(renderFeature)}

      </View>



      <View style={styles.bannerContainer}>

        <View style={styles.banner}>

          <View style={styles.bannerContent}>

            <Text style={styles.bannerTitle}>Track Symptoms</Text>

            <Text style={styles.bannerSubtitle}>Log symptoms or conditions</Text>

            <TouchableOpacity style={styles.bannerButton}>

              <Text style={styles.bannerButtonText}>Add symptom</Text>

            </TouchableOpacity>

          </View>

          <Image source={{ uri: '../assets/chart-person.png' }} style={styles.bannerImage} />

        </View>



        <View style={styles.banner}>

          <View style={styles.bannerContent}>

            <Text style={styles.bannerTitle}>WebMDRx</Text>

            <Text style={styles.bannerSubtitle}>Save up to 80% on prescriptions</Text>

            <TouchableOpacity style={styles.bannerButton}>

              <Text style={styles.bannerButtonText}>Compare prices</Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>



      <View style={styles.newsSection}>

        <Text style={styles.newsHeader}>Top News</Text>

        <View style={styles.newsItem}>

          <Image source={{ uri: '../assets/news-image.png' }} style={styles.newsImage} />

          <View style={styles.newsContent}>

            <Text style={styles.newsTitle}>The Summer COVID Wave Is Spreading</Text>

            <Text style={styles.newsSubtitle}>

              The summertime spread of COVID-19 is nowhere near ending, according to newly published

            </Text>

          </View>

        </View>

      </View>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={{ uri: '../assets/home-icon.png' }} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('DoctorFinder')}>

          <Image source={{ uri: '../assets/stethoscope-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Doctor Finder</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>

          <Image source={{ uri: '../assets/profile-icon.png' }} style={styles.tabIcon} />

          <Text style={styles.tabText}>Profile</Text>

        </TouchableOpacity>

      </View>

    </ScrollView>

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

    padding: 10,

    backgroundColor: '#fff',

  },

  menuIcon: {

    width: 24,

    height: 24,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    backgroundColor: '#f0f0f0',

    borderRadius: 20,

    paddingHorizontal: 15,

  },

  featuresGrid: {

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    padding: 10,

    backgroundColor: '#fff',

  },

  featureItem: {

    width: '33%',

    alignItems: 'center',

    marginBottom: 20,

  },

  featureIcon: {

    width: 40,

    height: 40,

    marginBottom: 5,

  },

  featureText: {

    textAlign: 'center',

    fontSize: 12,

  },

  bannerContainer: {

    padding: 10,

  },

  banner: {

    backgroundColor: '#e6f2ff',

    borderRadius: 10,

    padding: 15,

    marginBottom: 10,

    flexDirection: 'row',

  },

  bannerContent: {

    flex: 1,

  },

  bannerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  bannerSubtitle: {

    fontSize: 14,

    marginBottom: 10,

  },

  bannerButton: {

    backgroundColor: '#007bff',

    borderRadius: 20,

    paddingVertical: 8,

    paddingHorizontal: 15,

    alignSelf: 'flex-start',

  },

  bannerButtonText: {

    color: '#fff',

    fontWeight: 'bold',

  },

  bannerImage: {

    width: 100,

    height: 100,

  },

  newsSection: {

    backgroundColor: '#fff',

    padding: 10,

  },

  newsHeader: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  newsItem: {

    flexDirection: 'row',

  },

  newsImage: {

    width: 100,

    height: 100,

    borderRadius: 10,

    marginRight: 10,

  },

  newsContent: {

    flex: 1,

  },

  newsTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 5,

  },

  newsSubtitle: {

    fontSize: 14,

    color: '#666',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    paddingVertical: 10,

    backgroundColor: '#fff',

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

  },

  activeTabText: {

    color: '#007bff',

  },

});



export default HomeScreen;