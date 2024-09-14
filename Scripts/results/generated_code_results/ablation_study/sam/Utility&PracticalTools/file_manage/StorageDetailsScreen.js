import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const StorageDetailsScreen = ({ navigation }) => {

  const storageData = {

    usedSpace: 85,

    availableSpace: 43,

    totalSpace: 256,

    usagePercentage: 66,

    categories: [

      { name: 'Apps', items: 1427, size: 55, icon: 'apps' },

      { name: 'Videos', items: 53, size: 9.9, icon: 'video-library' },

      { name: 'Document', items: 127, size: 9.0, icon: 'description' },

      { name: 'Images', items: 1432, size: 6.8, icon: 'image' },

      { name: 'Audio', items: 421, size: 0.116, icon: 'audiotrack' },

    ],

  };



  const renderStorageItem = (item, index) => (

    <View key={index} style={styles.storageItem}>

      <View style={styles.iconContainer}>

        <Icon name={item.icon} size={24} color="#4A90E2" />

      </View>

      <View style={styles.itemInfo}>

        <Text style={styles.itemName}>{item.name}</Text>

        <Text style={styles.itemDetails}>{item.items} items • {item.size} GB</Text>

      </View>

      <View style={styles.barContainer}>

        <View style={[styles.bar, { width: `${(item.size / storageData.totalSpace) * 100}%` }]} />

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#000" />

        </TouchableOpacity>

        <Text style={styles.title}>Internal Storage</Text>

      </View>

      <ScrollView>

        <View style={styles.storageChart}>

          <View style={styles.circleChart}>

            <Text style={styles.percentageText}>{storageData.usagePercentage}%</Text>

          </View>

        </View>

        <View style={styles.storageInfo}>

          <View style={styles.infoItem}>

            <Text style={styles.infoLabel}>Used</Text>

            <Text style={styles.infoValue}>{storageData.usedSpace} GB</Text>

          </View>

          <View style={styles.infoItem}>

            <Text style={styles.infoLabel}>Available</Text>

            <Text style={styles.infoValue}>{storageData.availableSpace} GB</Text>

          </View>

          <View style={styles.infoItem}>

            <Text style={styles.infoLabel}>Total</Text>

            <Text style={styles.infoValue}>{storageData.totalSpace} GB</Text>

          </View>

        </View>

        <TouchableOpacity style={styles.freeUpSpace} onPress={() => navigation.navigate('Cleaner')}>

          <Icon name="cleaning-services" size={24} color="#FFA000" />

          <View style={styles.freeUpSpaceText}>

            <Text style={styles.freeUpSpaceTitle}>Free up space</Text>

            <Text style={styles.freeUpSpaceSubtitle}>Go to Clean to manage and free up space</Text>

          </View>

        </TouchableOpacity>

        {storageData.categories.map(renderStorageItem)}

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F5F5F5',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  title: {

    fontSize: 20,

    fontWeight: 'bold',

    marginLeft: 16,

  },

  storageChart: {

    alignItems: 'center',

    marginTop: 24,

    marginBottom: 16,

  },

  circleChart: {

    width: 150,

    height: 150,

    borderRadius: 75,

    borderWidth: 15,

    borderColor: '#4A90E2',

    justifyContent: 'center',

    alignItems: 'center',

  },

  percentageText: {

    fontSize: 32,

    fontWeight: 'bold',

    color: '#4A90E2',

  },

  storageInfo: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    marginBottom: 24,

  },

  infoItem: {

    alignItems: 'center',

  },

  infoLabel: {

    fontSize: 14,

    color: '#757575',

  },

  infoValue: {

    fontSize: 16,

    fontWeight: 'bold',

    marginTop: 4,

  },

  freeUpSpace: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 16,

  },

  freeUpSpaceText: {

    marginLeft: 16,

  },

  freeUpSpaceTitle: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  freeUpSpaceSubtitle: {

    fontSize: 14,

    color: '#757575',

  },

  storageItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 1,

  },

  iconContainer: {

    width: 40,

    height: 40,

    borderRadius: 20,

    backgroundColor: '#E3F2FD',

    justifyContent: 'center',

    alignItems: 'center',

  },

  itemInfo: {

    flex: 1,

    marginLeft: 16,

  },

  itemName: {

    fontSize: 16,

    fontWeight: 'bold',

  },

  itemDetails: {

    fontSize: 14,

    color: '#757575',

  },

  barContainer: {

    width: 60,

    height: 4,

    backgroundColor: '#E0E0E0',

    borderRadius: 2,

  },

  bar: {

    height: 4,

    backgroundColor: '#4A90E2',

    borderRadius: 2,

  },

});



export default StorageDetailsScreen;