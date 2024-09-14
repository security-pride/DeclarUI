import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

const OfflineReadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Offline reading</Text>
        <View style={styles.headerIcons}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        </View>
      </View>
      <Text style={styles.subtitle}>Automatic download on WiFi</Text>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.downloadRow}>
        <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
        <Text style={styles.downloadText}>Download articles</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>DOWNLO...</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.imageBackground}>
        <Image source={require('../assets/snack-icon.png')} style={styles.downloadImage} />
        <Text style={styles.downloadImageText}>Download the latest news in 10 seconds</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Me')}>
          <Text style={styles.navTextSelected}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  subtitle: {
    marginLeft: 16,
    fontSize: 16,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 8,
  },
  downloadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  downloadText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  imageBackground: {
    alignItems: 'center',
    marginTop: 32,
  },
  downloadImage: {
    width: 100,
    height: 100,
  },
  downloadImageText: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
    padding: 16,
  },
  navText: {
    color: '#888',
  },
  navTextSelected: {
    color: '#FF0000',
  },
});

export default OfflineReadingScreen;