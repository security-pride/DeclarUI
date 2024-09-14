import React from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const OrdersScreen = () => {

  const navigation = useNavigation();



  const buyAgainItems = [

    { id: '1', image: require('../assets/snack-icon.png') },

    { id: '2', image: require('../assets/snack-icon.png') },

    { id: '3', image: require('../assets/snack-icon.png') },

    { id: '4', image: require('../assets/snack-icon.png') },

  ];



  const pastOrders = [

    {

      id: '1',

      title: 'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...',

      deliveryDate: 'Delivered 10 June',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '2',

      title: 'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...',

      deliveryDate: 'Delivered 10 June',

      image: require('../assets/snack-icon.png'),

    },

    {

      id: '3',

      title: 'Toyama Koshihikari 1kg',

      deliveryDate: 'Delivered 28 May',

      image: require('../assets/snack-icon.png'),

    },

  ];



  const renderBuyAgainItem = ({ item }) => (

    <View style={styles.buyAgainItem}>

      <Image source={item.image} style={styles.buyAgainImage} />

    </View>

  );



  const renderPastOrderItem = ({ item }) => (

    <TouchableOpacity style={styles.pastOrderItem}>

      <Image source={item.image} style={styles.pastOrderImage} />

      <View style={styles.pastOrderInfo}>

        <Text style={styles.pastOrderTitle} numberOfLines={2}>{item.title}</Text>

        <Text style={styles.pastOrderDate}>{item.deliveryDate}</Text>

      </View>

      <TouchableOpacity style={styles.arrowButton}>

        <Text style={styles.arrowText}>&gt;</Text>

      </TouchableOpacity>

    </TouchableOpacity>

  );



  return (

    <View style={styles.container}>
      <View style={styles.searchBar}>

<TextInput

  style={styles.searchInput}

  placeholder="Search Amazon.co.uk"

  placeholderTextColor="#888"

/>

<TouchableOpacity style={styles.cameraButton}>

  <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

</TouchableOpacity>

<TouchableOpacity style={styles.micButton}>

  <Image source={require('../assets/snack-icon.png')} style={styles.icon} />

</TouchableOpacity>

</View>

      <View style={styles.header}>
        

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>

          <Text style={styles.backButtonText}>&lt;</Text>

        </TouchableOpacity>


      </View>



      <ScrollView style={styles.content}>

        <Text style={styles.title}>Your Orders</Text>



        <View style={styles.searchOrdersContainer}>

          <View style={styles.searchOrdersBar}>

            <Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />

            <TextInput

              style={styles.searchOrdersInput}

              placeholder="Search all orders"

              placeholderTextColor="#888"

            />

          </View>

          <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate('Filter')}>

            <Text style={styles.filterButtonText}>Filter</Text>

            <Text style={styles.filterArrow}>&gt;</Text>

          </TouchableOpacity>

        </View>



        <View style={styles.buyAgainSection}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>Buy again</Text>

            <TouchableOpacity>

              <Text style={styles.seeMoreText}>See more</Text>

            </TouchableOpacity>

          </View>

          <FlatList

            data={buyAgainItems}

            renderItem={renderBuyAgainItem}

            keyExtractor={item => item.id}

            horizontal

            showsHorizontalScrollIndicator={false}

          />

        </View>



        <View style={styles.pastOrdersSection}>

          <Text style={styles.pastOrdersTitle}>Past three months</Text>

          <FlatList

            data={pastOrders}

            renderItem={renderPastOrderItem}

            keyExtractor={item => item.id}

            scrollEnabled={false}

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

    alignItems: 'center',

    padding: 10,

    backgroundColor: '#9cebd5',

  },

  backButton: {

    paddingRight: 10,

  },

  backButtonText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  searchBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 5,

    paddingHorizontal: 10,

  },

  searchInput: {

    flex: 1,

    height: 40,

  },

  icon: {

    width: 20,

    height: 20,

    marginLeft: 10,

  },

  content: {

    flex: 1,

  },

  title: {

    fontSize: 24,

    fontWeight: 'bold',

    padding: 15,

  },

  searchOrdersContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 15,

    paddingBottom: 15,

  },

  searchOrdersBar: {

    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: 'white',

    borderRadius: 5,

    paddingHorizontal: 10,

    marginRight: 10,

  },

  searchIcon: {

    width: 20,

    height: 20,

    marginRight: 10,

  },

  searchOrdersInput: {

    flex: 1,

    height: 40,

  },

  filterButton: {

    flexDirection: 'row',

    alignItems: 'center',

  },

  filterButtonText: {

    fontSize: 16,

    color: '#007185',

  },

  filterArrow: {

    fontSize: 16,

    color: '#007185',

    marginLeft: 5,

  },

  buyAgainSection: {

    backgroundColor: 'white',

    padding: 15,

    marginBottom: 10,

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

  seeMoreText: {

    color: '#007185',

  },

  buyAgainItem: {

    marginRight: 10,

  },

  buyAgainImage: {

    width: 100,

    height: 100,

    resizeMode: 'cover',

  },

  pastOrdersSection: {

    backgroundColor: 'white',

    padding: 15,

  },

  pastOrdersTitle: {

    fontSize: 16,

    fontWeight: 'bold',

    marginBottom: 10,

  },

  pastOrderItem: {

    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,

  },

  pastOrderImage: {

    width: 60,

    height: 60,

    resizeMode: 'cover',

    marginRight: 10,

  },

  pastOrderInfo: {

    flex: 1,

  },

  pastOrderTitle: {

    fontSize: 14,

    marginBottom: 5,

  },

  pastOrderDate: {

    fontSize: 12,

    color: '#555',

  },

  arrowButton: {

    padding: 5,

  },

  arrowText: {

    fontSize: 18,

    color: '#007185',

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



export default OrdersScreen;