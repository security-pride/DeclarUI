import React from 'react';
import { View, Text, TouchableOpacity, Image, Switch, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const OfflineReadingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="chevron-back" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Offline reading</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="trash-bin-outline" size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Icon name="settings-outline" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Automatic download option */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Automatic download on WiFi</Text>
        <Switch />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Download articles */}
      <View style={styles.downloadContainer}>
        <TouchableOpacity style={styles.downloadButton}>
          <Icon name="cloud-download-outline" size={20} color="#000" />
          <Text style={styles.downloadButtonText}>Download articles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadRightButton}>
          <Text style={styles.downloadRightButtonText}>DOWNLOAD...</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration with text */}
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.illustrationImage}
        />
        <Text style={styles.illustrationText}>
          Download the latest news in 10 seconds
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 15,
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadButtonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  downloadRightButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  downloadRightButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  illustrationImage: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  illustrationText: {
    color: '#808080',
    fontSize: 14,
  },
});

export default OfflineReadingScreen;