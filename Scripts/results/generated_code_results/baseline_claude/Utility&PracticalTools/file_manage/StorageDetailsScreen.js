import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const StorageDetailsScreen = () => {

  const navigation = useNavigation();



  const storageItems = [

    { name: 'Apps', items: 1427, size: '55 GB', icon: '../assets/snack-icon.png' },

    { name: 'Videos', items: 53, size: '9.9 GB', icon: '../assets/snack-icon.png' },

    { name: 'Document', items: 127, size: '9.0 GB', icon: '../assets/snack-icon.png' },

    { name: 'Images', items: 1432, size: '6.8 GB', icon: '../assets/snack-icon.png' },

    { name: 'Audio', items: 421, size: '116 MB', icon: '../assets/snack-icon.png' },

    { name: 'Audio', items: 0, size: '0 B', icon: '../assets/snack-icon.png' },

  ];



  return (

    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />

          </TouchableOpacity>

          <Text style={styles.title}>Internal Storage</Text>

        </View>



        <View style={styles.chartContainer}>

          <View style={styles.chart}>

            <View style={styles.chartInner}>

              <Text style={styles.chartPercentage}>66%</Text>

            </View>

          </View>

        </View>



        <View style={styles.storageInfo}>

          <View style={styles.storageInfoItem}>

            <Text style={styles.storageInfoLabel}>Used</Text>

            <Text style={styles.storageInfoValue}>85 GB</Text>

          </View>

          <View style={styles.storageInfoItem}>

            <Text style={styles.storageInfoLabel}>Available</Text>

            <Text style={styles.storageInfoValue}>43 GB</Text>

          </View>

          <View style={styles.storageInfoItem}>

            <Text style={styles.storageInfoLabel}>Total</Text>

            <Text style={styles.storageInfoValue}>256 GB</Text>

          </View>

        </View>



        <TouchableOpacity style={styles.cleanupButton} onPress={() => navigation.navigate('Cleaner')}>

          <Image source={require('../assets/snack-icon.png')} style={styles.cleanupIcon} />

          <View>

            <Text style={styles.cleanupTitle}>Free up space</Text>

            <Text style={styles.cleanupSubtitle}>Go to Clean to manage and free up space</Text>

          </View>

        </TouchableOpacity>



        {storageItems.map((item, index) => (

          <View key={index} style={styles.storageItem}>

            <Image source={require('../assets/snack-icon.png')} style={styles.storageItemIcon} />

            <View style={styles.storageItemInfo}>

              <Text style={styles.storageItemName}>{item.name}</Text>

              <Text style={styles.storageItemDetails}>{item.items} items • {item.size}</Text>

            </View>

            <View style={[styles.storageItemBar, { width: `${(parseFloat(item.size) / 55) * 100}%` }]} />

          </View>

        ))}

      </ScrollView>

    </SafeAreaView>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F6F8FA',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

  },

  backIcon: {

    width: 24,

    height: 24,

    marginRight: 16,

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

  },

  chartContainer: {

    alignItems: 'center',

    marginVertical: 24,

  },

  chart: {

    width: 200,

    height: 200,

    borderRadius: 100,

    borderWidth: 20,

    borderColor: '#007AFF',

    justifyContent: 'center',

    alignItems: 'center',

  },

  chartInner: {

    width: 160,

    height: 160,

    borderRadius: 80,

    backgroundColor: '#F6F8FA',

    justifyContent: 'center',

    alignItems: 'center',

  },

  chartPercentage: {

    fontSize: 36,

    fontWeight: 'bold',

  },

  storageInfo: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 24,

  },

  storageInfoItem: {

    alignItems: 'center',

  },

  storageInfoLabel: {

    fontSize: 14,

    color: '#666',

  },

  storageInfoValue: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 4,

  },

  cleanupButton: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    margin: 16,

    padding: 16,

    borderRadius: 8,

  },

  cleanupIcon: {

    width: 40,

    height: 40,

    marginRight: 16,

  },

  cleanupTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  cleanupSubtitle: {

    fontSize: 14,

    color: '#666',

  },

  storageItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFF',

    marginHorizontal: 16,

    marginBottom: 8,

    padding: 16,

    borderRadius: 8,

  },

  storageItemIcon: {

    width: 40,

    height: 40,

    marginRight: 16,

  },

  storageItemInfo: {

    flex: 1,

  },

  storageItemName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  storageItemDetails: {

    fontSize: 14,

    color: '#666',

  },

  storageItemBar: {

    position: 'absolute',

    bottom: 0,

    left: 0,

    height: 4,

    backgroundColor: '#007AFF',

    borderBottomLeftRadius: 8,

  },

});



export default StorageDetailsScreen;