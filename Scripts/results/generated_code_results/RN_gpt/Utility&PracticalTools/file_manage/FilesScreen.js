import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FilesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Internal Storage</Text>
      <View style={styles.headerIcons}>
        <Icon name="add" size={24} />
        <Icon name="search" size={24} style={styles.searchIcon} />
      </View>
      <ScrollView>
        {/* Folder List */}
        {renderFolder('Alarms', '1 item', false)}
        {renderFolder('Android', '6 items 12 MB', false)}
        {renderFolder('Backups', '3 items 821 MB', false)}
        {renderFolder('Browser', '1 item 204 KB', false)}
        {renderFolder('Canva', '23 items 98 MB', true)}
        {renderFolder('DCIM', '3 items 18.4 GB', false)}
        {renderFolder('Documents', '6 items 2.4 GB', false)}
        {renderFolder('Download', '5 items 4.6 GB', true)}
        {renderFolder('Notifications', '', false)}
      </ScrollView>

      <View style={styles.bottomNav}>
        <Icon name="home-outline" size={24} />
        <Icon name="folder-outline" size={24} />
        <Icon name="cloud-outline" size={24} onPress={() => navigation.navigate('CloudStorage')} />
        <Icon name="settings-outline" size={24} onPress={() => navigation.navigate('Cleaner')} />
      </View>
    </View>
  );
};

const renderFolder = (name, details, isFavorite) => (
  <View style={styles.folderContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.folderIcon} />
    <View style={styles.folderDetails}>
      <Text style={styles.folderName}>{name}</Text>
      <Text style={styles.folderInfo}>{details}</Text>
    </View>
    {isFavorite && <Icon name="heart" size={16} color="red" style={styles.favoriteIcon} />}
    <Icon name="ellipsis-vertical" size={24} style={styles.ellipsisIcon} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 16,
    top: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  folderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  folderIcon: {
    width: 40,
    height: 40,
  },
  folderDetails: {
    flex: 1,
    marginLeft: 10,
  },
  folderName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  folderInfo: {
    fontSize: 14,
    color: '#666',
  },
  favoriteIcon: {
    position: 'absolute',
    left: 20,
  },
  ellipsisIcon: {
    marginLeft: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default FilesScreen;