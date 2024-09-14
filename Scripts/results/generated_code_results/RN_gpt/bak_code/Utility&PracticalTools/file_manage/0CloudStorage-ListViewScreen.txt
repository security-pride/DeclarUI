import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CloudStorageListViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cloud Storage</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.sortRow}>
        <Text style={styles.sortText}>A - Z</Text>
        <TouchableOpacity>
          <Image source={require('../assets/snack-icon.png')} style={styles.gridIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.storageItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.serviceText}>Dropbox</Text>
          <Text style={styles.detailsText}>2 items 1.2 Gb</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.ellipsis}>⋮</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.storageItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.serviceText}>Kangxpukul@gmail.com</Text>
          <Text style={styles.detailsText}>4 items 13.5 Gb</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.ellipsis}>⋮</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.storageItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.serviceText}>Nirwna - OneDrive</Text>
          <Text style={styles.detailsText}>5 items 184.3 Gb</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.ellipsis}>⋮</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.storageItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.serviceIcon} />
        <View style={styles.textContainer}>
          <Text style={styles.serviceText}>PIDT - OneDrive</Text>
          <Text style={styles.detailsText}>7 items 131.1 Gb</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.ellipsis}>⋮</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Files</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButtonActive}>
          <Text style={styles.navText}>Cloud</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Clean</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#333333',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF',
  },
  addButtonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  sortRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sortText: {
    fontSize: 16,
    color: '#333333',
  },
  gridIcon: {
    width: 24,
    height: 24,
  },
  storageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCCCCC',
  },
  serviceIcon: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  serviceText: {
    fontSize: 18,
    color: '#333333',
  },
  detailsText: {
    fontSize: 14,
    color: '#777777',
  },
  moreButton: {
    padding: 10,
  },
  ellipsis: {
    fontSize: 20,
    color: '#777777',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonActive: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  navText: {
    fontSize: 12,
    color: '#333333',
  },
});

export default CloudStorageListViewScreen;