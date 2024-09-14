import React from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConnectionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Connections</Text>
      </View>
      <View style={styles.section}>
        <ImageBackground source={require('../assets/snack-icon.png')} style={styles.imageBackground}>
          <Text style={styles.sectionTitle}>From Computer</Text>
          <Text style={styles.sectionDescription}>Connect computer via address bar</Text>
        </ImageBackground>
      </View>
      <Text style={styles.sectionLabel}>Import from cloud storage</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.cloudButton} onPress={() => { /* Handle Dropbox connect */ }}>
          <Text style={styles.buttonText}>Dropbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cloudButton, styles.googleButton]} onPress={() => { /* Handle Google Drive connect */ }}>
          <Text style={styles.buttonText}>Google Drive</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionLabel}>Add Connection</Text>
      <TouchableOpacity style={styles.listItem} onPress={() => { /* Handle Box connect */ }}>
        <Text style={styles.listText}>Box</Text>
        <Icon name="chevron-right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => { /* Handle OneDrive connect */ }}>
        <Text style={styles.listText}>OneDrive</Text>
        <Icon name="chevron-right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => { /* Handle FTP Server connect */ }}>
        <Text style={styles.listText}>FTP Server</Text>
        <Icon name="chevron-right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => { /* Handle SFTP Server connect */ }}>
        <Text style={styles.listText}>SFTP Server</Text>
        <Icon name="chevron-right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => { /* Handle Windows SMB connect */ }}>
        <Text style={styles.listText}>Windows SMB</Text>
        <Icon name="chevron-right" size={16} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('ConnectToComputer')}>
        <Text style={styles.listText}>Connect To Computer</Text>
        <Icon name="chevron-right" size={16} color="#000" />
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeGrid')}>
          <Icon name="home" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Recents')}>
          <Icon name="clock-o" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Add action */ }}>
          <Icon name="plus-circle" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Connections')}>
          <Icon name="wifi" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { /* Handle Stats action*/ }}>
          <Icon name="bar-chart" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  section: {
    marginTop: 16,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 16,
  },
  imageBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginLeft: 16,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: 8,
  },
  cloudButton: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: '#D0F0C0',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  listText: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
});

export default ConnectionsScreen;