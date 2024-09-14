import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomePageScreen = () => {

  const navigation = useNavigation();



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <Text style={styles.title}>File Manager</Text>

        

        <View style={styles.searchContainer}>

          <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

          <TextInput

            style={styles.searchInput}

            placeholder="Search folder or files"

            placeholderTextColor="#888"

          />

        </View>



        <View style={styles.storageContainer}>

          <View style={styles.storageItem}>

            <View style={styles.storageInfo}>

              <Text style={styles.storageTitle}>Internal Storage</Text>

              <Text style={styles.storageUsage}>85 GB of 128 GB used</Text>

              <TouchableOpacity onPress={() => navigation.navigate('StorageDetails', { type: 'internal' })}>

                <Text style={styles.viewDetailsText}>View Details</Text>

              </TouchableOpacity>

            </View>

            <View style={styles.pieChart}>

              <View style={[styles.pieSlice, { transform: [{ rotate: '234deg' }] }]} />

              <View style={styles.pieCenter}>

                <Text style={styles.piePercentage}>66%</Text>

              </View>

            </View>

          </View>



          <View style={styles.storageItem}>

            <View style={styles.storageInfo}>

              <Text style={styles.storageTitle}>Cloud Storage</Text>

              <Text style={styles.storageUsage}>131 GB of 2 TB used</Text>

              <TouchableOpacity onPress={() => navigation.navigate('CloudStorage')}>

                <Text style={styles.viewDetailsText}>Go to storage lists</Text>

              </TouchableOpacity>

            </View>

            <View style={styles.pieChart}>

              <View style={[styles.pieSlice, { transform: [{ rotate: '133.2deg' }] }]} />

              <View style={styles.pieCenter}>

                <Text style={styles.piePercentage}>37%</Text>

              </View>

            </View>

          </View>

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Favorites</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Files', { filter: 'favorites' })}>

              <Text style={styles.seeAllText}>See All</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.favoriteItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.favoriteIcon} />

            <View style={styles.favoriteInfo}>

              <Text style={styles.favoriteName}>Download</Text>

              <Text style={styles.favoriteDetails}>5 items • 4.6 GB</Text>

            </View>

          </View>

          <View style={styles.favoriteItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.favoriteIcon} />

            <View style={styles.favoriteInfo}>

              <Text style={styles.favoriteName}>Canva</Text>

              <Text style={styles.favoriteDetails}>31 item • 821 MB</Text>

            </View>

          </View>

        </View>



        <View style={styles.sectionContainer}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Recent Files</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Files', { filter: 'recent' })}>

              <Text style={styles.seeAllText}>See All</Text>

            </TouchableOpacity>

          </View>

          <View style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <View style={styles.recentInfo}>

              <Text style={styles.recentName}>DSC202108133.jpg</Text>

              <Text style={styles.recentSize}>2MB</Text>

            </View>

          </View>

          <View style={styles.recentItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.recentIcon} />

            <View style={styles.recentInfo}>

              <Text style={styles.recentName}>RKAKL2022.xlsx</Text>

              <Text style={styles.recentSize}>140KB</Text>

            </View>

          </View>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={[styles.tabText, styles.activeTabText]}>Home</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Files')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Files</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('CloudStorage')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Cloud</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cleaner')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

          <Text style={styles.tabText}>Clean</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F6F8FA',

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    marginTop: 20,

    marginBottom: 15,

    marginLeft: 20,

  },

  searchContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    margin: 20,

    paddingHorizontal: 15,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

    fontSize: 16,

  },

  storageContainer: {

    marginHorizontal: 20,

  },

  storageItem: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 20,

    marginBottom: 15,

  },

  storageInfo: {

    flex: 1,

  },

  storageTitle: {

    fontSize: 18,

    fontWeight: '600',

    marginBottom: 5,

  },

  storageUsage: {

    fontSize: 14,

    color: '#666',

    marginBottom: 10,

  },

  viewDetailsText: {

    color: '#007AFF',

    fontSize: 14,

  },

  pieChart: {

    width: 60,

    height: 60,

    borderRadius: 30,

    backgroundColor: '#E0E0E0',

    justifyContent: 'center',

    alignItems: 'center',

  },

  pieSlice: {

    width: 60,

    height: 60,

    position: 'absolute',

    backgroundColor: '#007AFF',

    borderTopRightRadius: 30,

    borderBottomRightRadius: 30,

  },

  pieCenter: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',

    alignItems: 'center',

  },

  piePercentage: {

    fontSize: 14,

    fontWeight: '600',

  },

  sectionContainer: {

    marginTop: 20,

    marginHorizontal: 20,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 15,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: '600',

  },

  seeAllText: {

    color: '#007AFF',

    fontSize: 14,

  },

  favoriteItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    marginBottom: 10,

  },

  favoriteIcon: {

    width: 40,

    height: 40,

    marginRight: 15,

  },

  favoriteInfo: {

    flex: 1,

  },

  favoriteName: {

    fontSize: 16,

    fontWeight: '500',

  },

  favoriteDetails: {

    fontSize: 14,

    color: '#666',

  },

  recentItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    padding: 15,

    marginBottom: 10,

  },

  recentIcon: {

    width: 40,

    height: 40,

    marginRight: 15,

  },

  recentInfo: {

    flex: 1,

  },

  recentName: {

    fontSize: 16,

    fontWeight: '500',

  },

  recentSize: {

    fontSize: 14,

    color: '#666',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#E0E0E0',

    backgroundColor: '#FFFFFF',

    paddingVertical: 10,

  },

  tabItem: {

    alignItems: 'center',

  },

  tabIcon: {

    width: 24,

    height: 24,

    marginBottom: 4,

  },

  tabText: {

    fontSize: 12,

    color: '#888',

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#007AFF',

  },

  activeTabText: {

    color: '#007AFF',

  },

});



export default HomePageScreen;