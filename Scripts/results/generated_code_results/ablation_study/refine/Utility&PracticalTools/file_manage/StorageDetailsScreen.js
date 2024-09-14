import React, { useState } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';



const StorageDetailsScreen = ({ navigation }) => {

  const [storageData] = useState({

    used: 85,

    available: 43,

    total: 256,

    apps: { items: 1427, size: 55 },

    videos: { items: 53, size: 9.9 },

    documents: { items: 127, size: 9 },

    images: { items: 1432, size: 6.8 },

    audio: { items: 421, size: 0.116 },

  });



  const renderStorageItem = (icon, title, items, size, unit = 'GB') => (

    <View style={styles.storageItem}>

      <Icon name={icon} size={24} color="#007AFF" style={styles.itemIcon} />

      <View style={styles.itemInfo}>

        <Text style={styles.itemTitle}>{title}</Text>

        <Text style={styles.itemDetails}>{`${items.toLocaleString()} items ${size} ${unit}`}</Text>

      </View>

      <View style={styles.itemBar}>

        <View style={[styles.itemBarFill, { width: `${(size / storageData.total) * 100}%` }]} />

      </View>

    </View>

  );



  return (

    <View style={styles.container}>

      <View style={styles.header}>

        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Icon name="arrow-back" size={24} color="#007AFF" />

        </TouchableOpacity>

        <Text style={styles.headerTitle}>Internal Storage</Text>

      </View>

      <ScrollView style={styles.content}>

        <View style={styles.storageOverview}>

          <View style={styles.circleContainer}>

            <View style={styles.circleOuter}>

              <View style={styles.circleInner}>

                <Text style={styles.percentageText}>66%</Text>

              </View>

            </View>

          </View>

          <View style={styles.storageInfo}>

            <Text style={styles.storageInfoText}>Used {storageData.used} GB</Text>

            <Text style={styles.storageInfoText}>Available {storageData.available} GB</Text>

            <Text style={styles.storageInfoText}>Total {storageData.total} GB</Text>

          </View>

        </View>

        <TouchableOpacity style={styles.freeUpSpace}>

          <Icon name="delete-sweep" size={24} color="#007AFF" />

          <View>

            <Text style={styles.freeUpSpaceTitle}>Free up space</Text>

            <Text style={styles.freeUpSpaceSubtitle}>Go to Clean to manage and free up space</Text>

          </View>

        </TouchableOpacity>

        {renderStorageItem('apps', 'Apps', storageData.apps.items, storageData.apps.size)}

        {renderStorageItem('videocam', 'Videos', storageData.videos.items, storageData.videos.size)}

        {renderStorageItem('insert-drive-file', 'Document', storageData.documents.items, storageData.documents.size)}

        {renderStorageItem('image', 'Images', storageData.images.items, storageData.images.size)}

        {renderStorageItem('audiotrack', 'Audio', storageData.audio.items, storageData.audio.size, 'MB')}

        {renderStorageItem('audiotrack', 'Audio', storageData.audio.items, storageData.audio.size, 'MB')}

      </ScrollView>

    </View>

  );

};



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#F2F2F7',

  },

  header: {

    flexDirection: 'row',

    alignItems: 'center',

    padding: 16,

    backgroundColor: '#FFFFFF',

  },

  headerTitle: {

    fontSize: 17,

    fontWeight: '600',

    marginLeft: 16,

  },

  content: {

    flex: 1,

  },

  storageOverview: {

    flexDirection: 'row',

    justifyContent: 'space-around',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 16,

  },

  circleContainer: {

    width: 120,

    height: 120,

    justifyContent: 'center',

    alignItems: 'center',

  },

  circleOuter: {

    width: 120,

    height: 120,

    borderRadius: 60,

    borderWidth: 10,

    borderColor: '#E5E5EA',

    justifyContent: 'center',

    alignItems: 'center',

  },

  circleInner: {

    width: 100,

    height: 100,

    borderRadius: 50,

    borderWidth: 10,

    borderColor: '#007AFF',

    justifyContent: 'center',

    alignItems: 'center',

  },

  percentageText: {

    fontSize: 24,

    fontWeight: 'bold',

  },

  storageInfo: {

    justifyContent: 'center',

  },

  storageInfoText: {

    fontSize: 14,

    marginBottom: 4,

  },

  freeUpSpace: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 16,

  },

  freeUpSpaceTitle: {

    fontSize: 17,

    fontWeight: '600',

    marginLeft: 16,

  },

  freeUpSpaceSubtitle: {

    fontSize: 13,

    color: '#8E8E93',

    marginLeft: 16,

  },

  storageItem: {

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    padding: 16,

    marginBottom: 1,

  },

  itemIcon: {

    marginRight: 16,

  },

  itemInfo: {

    flex: 1,

  },

  itemTitle: {

    fontSize: 17,

    fontWeight: '400',

  },

  itemDetails: {

    fontSize: 13,

    color: '#8E8E93',

  },

  itemBar: {

    width: 50,

    height: 4,

    backgroundColor: '#E5E5EA',

    borderRadius: 2,

  },

  itemBarFill: {

    height: 4,

    backgroundColor: '#007AFF',

    borderRadius: 2,

  },

});



export default StorageDetailsScreen;