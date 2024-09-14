import React from 'react';

import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

  const navigation = useNavigation();



  const quickLinks = [

    { id: '1', title: 'Your Orders' },

    { id: '2', title: 'Buy Again' },

    { id: '3', title: 'Your Account' },

    { id: '4', title: 'Your Lists' },

  ];



  const orders = [

    { id: '1', image: require('../assets/snack-icon.png') },

    { id: '2', image: require('../assets/snack-icon.png') },

  ];



  const buyAgainItems = [

    { id: '1', image: require('../assets/snack-icon.png') },

    { id: '2', image: require('../assets/snack-icon.png') },

    { id: '3', image: require('../assets/snack-icon.png') },

    { id: '4', image: require('../assets/snack-icon.png') },

    { id: '5', image: require('../assets/snack-icon.png') },

    { id: '6', image: require('../assets/snack-icon.png') },

  ];



  const renderQuickLink = ({ item , index}) => (

    <TouchableOpacity style={styles.quickLinkItem}
        onPress={() => {
        if (index === 0) {
            navigation.navigate('Orders');
          } else if (index === 2) {
            navigation.navigate('Account');
          }
        }}
    >
      <Text style={styles.quickLinkText}>{item.title}</Text>

    </TouchableOpacity>

  );



  const renderOrderItem = ({ item }) => (

    <Image source={item.image} style={styles.orderImage} />

  );



  const renderBuyAgainItem = ({ item }) => (

    <Image source={item.image} style={styles.buyAgainImage} />

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />

        <View style={styles.headerRight}>

          <TouchableOpacity style={styles.notificationButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

          <TouchableOpacity style={styles.searchButton}>

            <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

          </TouchableOpacity>

        </View>

      </View>



      <ScrollView style={styles.content}>

        <View style={styles.profileSection}>

          <Image source={require('../assets/snack-icon.png')} style={styles.profileIcon} />

          <View style={styles.profileInfo}>

            <Text style={styles.profileName}>Hello, ml296</Text>

            <TouchableOpacity style={styles.languageSelector}>

              <Image source={require('../assets/snack-icon.png')} style={styles.flagIcon} />

              <Text style={styles.languageText}>EN</Text>

            </TouchableOpacity>

          </View>

        </View>



        <FlatList

          data={quickLinks}

          renderItem={renderQuickLink}

          keyExtractor={item => item.id}

          numColumns={2}

          style={styles.quickLinks}

        />



        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Your Orders</Text>


              <Text style={styles.seeAllText}>See all</Text>



          </View>

          <FlatList

            data={orders}

            renderItem={renderOrderItem}

            keyExtractor={item => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Buy again</Text>

            <TouchableOpacity>

              <Text style={styles.seeAllText}>See all</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={buyAgainItems}

            renderItem={renderBuyAgainItem}

            keyExtractor={item => item.id}

            numColumns={3}

          />

        </View>

      </ScrollView>



      <View style={styles.tabBar}>

        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.tabIcon} />

        </TouchableOpacity>

        <TouchableOpacity style={[styles.tabItem, styles.activeTab]}>

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

    justifyContent: 'space-between',

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#9cebd5',

  },

  logo: {

    width: 100,

    height: 30,

    resizeMode: 'contain',

  },

  headerRight: {

    flexDirection: 'row',

  },

  icon: {

    width: 24,

    height: 24,

  },

  notificationButton: {

    marginRight: 15,

  },

  content: {

    flex: 1,

  },

  profileSection: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 15,

    backgroundColor: '#9cebd5',

  },

  profileIcon: {

    width: 40,

    height: 40,

    borderRadius: 20,

    marginRight: 10,

  },

  profileInfo: {

    flex: 1,

  },

  profileName: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  languageSelector: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,

  },

  flagIcon: {

    width: 20,

    height: 15,

    marginRight: 5,

  },

  languageText: {

    fontSize: 14,

  },

  quickLinks: {

    padding: 10,

  },

  quickLinkItem: {

    flex: 1,

    backgroundColor: 'white',

    padding: 15,

    margin: 5,

    borderRadius: 5,

    alignItems: 'center',

    justifyContent: 'center',

  },

  quickLinkText: {

    fontSize: 16,

    textAlign: 'center',

  },

  section: {

    backgroundColor: 'white',

    marginBottom: 10,

    padding: 15,

  },

  sectionHeader: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 10,

  },

  sectionTitle: {

    fontSize: 18,

    fontWeight: 'bold',

  },

  seeAllText: {

    color: '#007185',

  },

  orderImage: {

    width: 150,

    height: 150,

    marginRight: 10,

    resizeMode: 'cover',

  },

  buyAgainImage: {

    width: '30%',

    aspectRatio: 1,

    margin: '1.5%',

    resizeMode: 'cover',

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



export default ProfileScreen;