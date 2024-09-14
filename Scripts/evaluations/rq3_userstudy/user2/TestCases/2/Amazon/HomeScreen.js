import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {

  const navigation = useNavigation();



  const renderCategoryItem = (icon, label) => (

    <TouchableOpacity style={styles.categoryItem}>

      <Image source={require('../assets/snack-icon.png')} style={styles.categoryIcon} />

      <Text style={styles.categoryLabel}>{label}</Text>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TextInput

          style={styles.searchInput}

          placeholder="Search Amazon.co.uk"

          placeholderTextColor="#888"

        />

        <TouchableOpacity style={styles.cameraButton}>

          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

        </TouchableOpacity>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.navbar}>

          <TouchableOpacity><Text style={styles.navItem}>Prime</Text></TouchableOpacity>

          <TouchableOpacity><Text style={styles.navItem}>Video</Text></TouchableOpacity>

          <TouchableOpacity><Text style={styles.navItem}>Music</Text></TouchableOpacity>

        </View>



        <TouchableOpacity style={styles.deliveryInfo}>

          <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />

          <Text style={styles.deliveryText}>Deliver to Muyi - St. Andrews KY16 9</Text>

          <Image source={require('../assets/snack-icon.png')} style={styles.dropdownIcon} />

        </TouchableOpacity>



        <View style={styles.banner}>

          <Image source={require('../assets/snack-icon.png')} style={styles.bannerImage} />

          <View style={styles.bannerOverlay}>

            <Text style={styles.bannerTitle}>Shop Electronics today</Text>

          </View>

        </View>



        <View style={styles.dealsSection}>

          <View style={styles.dealItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

            <Text style={styles.dealTitle}>Recommended deal for you</Text>

          </View>

          <View style={styles.dealItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

            <Text style={styles.dealTitle}>4+ star deal for you</Text>

          </View>

          <View style={styles.dealItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.dealImage} />

            <Text style={styles.dealTitle}>Sports & Outdoors</Text>

          </View>

        </View>



        <View style={styles.categorySection}>

          <Text style={styles.sectionTitle}>Prime Day by category</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>

            {renderCategoryItem('luggage', 'Bags & Luggage')}

            {renderCategoryItem('office', 'Office')}

            {renderCategoryItem('automotive', 'Automotive')}

            {renderCategoryItem('jewelry', 'Jewellery & Watches')}

            {renderCategoryItem('books', 'Books')}

          </ScrollView>

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Account')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

      </View>

    </View>

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

    backgroundColor: '#9cebd5',

  },

  searchInput: {

    flex: 1,

    height: 40,

    backgroundColor: 'white',

    borderRadius: 5,

    paddingHorizontal: 10,

  },

  cameraButton: {

    padding: 5,

    marginLeft: 10,

  },

  icon: {

    width: 20,

    height: 20,

  },

  content: {

    flex: 1,

  },

  navbar: {

    flexDirection: 'row',

    backgroundColor: '#9cebd5',

    paddingVertical: 5,

    paddingHorizontal: 10,

  },

  navItem: {

    marginRight: 15,

    fontSize: 16,

    fontWeight: 'bold',

  },

  deliveryInfo: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#c7f6e9',

    padding: 10,

  },

  locationIcon: {

    width: 16,

    height: 16,

    marginRight: 5,

  },

  deliveryText: {

    flex: 1,

    fontSize: 14,

  },

  dropdownIcon: {

    width: 12,

    height: 12,

  },

  banner: {

    height: 150,

    marginBottom: 10,

  },

  bannerImage: {

    width: '100%',

    height: '100%',

  },

  bannerOverlay: {

    position: 'absolute',

    bottom: 10,

    left: 10,

  },

  bannerTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    color: 'white',

  },

  dealsSection: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    padding: 10,

  },

  dealItem: {

    width: '31%',

    aspectRatio: 1,

    backgroundColor: 'white',

    borderRadius: 5,

    padding: 5,

  },

  dealImage: {

    width: '100%',

    height: '70%',

    resizeMode: 'cover',

    marginBottom: 5,

  },

  dealTitle: {

    fontSize: 12,

    textAlign: 'center',

  },

  categorySection: {

    padding: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  categoryScroll: {

    flexDirection: 'row',

  },

  categoryItem: {

    alignItems: 'center',

    marginRight: 20,

  },

  categoryIcon: {

    width: 50,

    height: 50,

    marginBottom: 5,

  },

  categoryLabel: {

    fontSize: 12,

    textAlign: 'center',

  },

  tabBar: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    borderTopWidth: 1,

    borderTopColor: '#e0e0e0',

    backgroundColor: 'white',

  },

  tabItem: {

    flex: 1,

    alignItems: 'center',

    paddingVertical: 10,

  },

  activeTab: {

    borderTopWidth: 2,

    borderTopColor: '#009987',

  },

  tabIcon: {

    width: 24,

    height: 24,

  },

});



export default HomeScreen;