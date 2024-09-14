import React from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomepageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>File Manager</Text>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search folder or files"
      />

      <View style={styles.storageSection}>
        <View style={styles.internalStorage}>
          <Icon name="storage" size={16} color="#000" />
          <Text>Internal Storage</Text>
          <Text>85 GB of 128 GB used</Text>
          <Text style={styles.link} onPress={() => navigateToPage('StorageDetails')}>View Details</Text>
        </View>
        <View style={styles.cloudStorage}>
          <Icon name="cloud" size={16} color="#000" />
          <Text>Cloud Storage</Text>
          <Text>131 GB of 2 TB used</Text>
          <Text style={styles.link} onPress={() => navigateToPage('CloudStorage')}>Go to storage lists</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Favorites</Text>
      <View style={styles.favorites}>
        <View style={styles.favoriteItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text>Download</Text>
            <Text>5 items 4.6 GB</Text>
          </View>
        </View>
        <View style={styles.favoriteItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text>Canva</Text>
            <Text>31 items 821 MB</Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}>Recent Files</Text>
      <View style={styles.recentFiles}>
        <View style={styles.recentFileItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text>DSC2021084133.jpg</Text>
            <Text>2MB</Text>
          </View>
        </View>
        <View style={styles.recentFileItem}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <View>
            <Text>RKAKL2022.xlsx</Text>
            <Text>140 KB</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Icon name="home" size={32} color="#000" />
        <Icon name="folder" size={32} color="#000" />
        <Icon name="cloud" size={32} color="#000" />
        <Icon name="clean" size={32} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  searchBar: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
  },
  storageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  internalStorage: {
    alignItems: 'center',
  },
  cloudStorage: {
    alignItems: 'center',
  },
  link: {
    color: '#007aff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  favorites: {
    marginVertical: 10,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  recentFiles: {
    marginVertical: 10,
  },
  recentFileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
});

export default HomepageScreen;