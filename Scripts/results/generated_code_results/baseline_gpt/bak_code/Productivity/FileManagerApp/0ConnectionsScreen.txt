import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ConnectionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back-outline" size={24} color="#6B52AE" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Connections</Text>
      </View>

      <View style={styles.computerConnection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.computerImage} />
        <View>
          <Text style={styles.computerTitle}>From Computer</Text>
          <Text style={styles.computerSubtitle}>Connect computer via address bar</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Import from cloud storage</Text>

      <View style={styles.cloudButtons}>
        <TouchableOpacity style={styles.cloudButton}>
          <Text style={styles.cloudButtonText}>Dropbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cloudButton, styles.googleDrive]}>
          <Text style={styles.cloudButtonText}>Google Drive</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Add Connection</Text>

      {['Box', 'OneDrive', 'FTP Server', 'SFTP Server', 'Windows SMB'].map((item, index) => (
        <TouchableOpacity style={styles.connectionItem} key={index}>
          <View style={styles.connectionItemTextContainer}>
            <Icon name="cloud-outline" size={24} color="#6B52AE" />
            <Text style={styles.connectionItemText}>{item}</Text>
          </View>
          <Feather name="chevron-right" size={24} color="#6B52AE" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
  computerConnection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EDF1FF',
    borderRadius: 8,
    marginBottom: 20,
  },
  computerImage: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  computerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  computerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#000',
  },
  cloudButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cloudButton: {
    flex: 1,
    backgroundColor: '#EDF1FF',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 10,
  },
  googleDrive: {
    backgroundColor: '#E3F5E3',
    marginRight: 0,
  },
  cloudButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  connectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  connectionItemTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectionItemText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#000',
  },
});

export default ConnectionsScreen;