import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('NewOptions')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.logoIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>For you</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.menuIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.connectionText}>Connection failed</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.errorImage} />
      </View>
      <TouchableOpacity style={styles.retryButton}>
        <Text style={styles.retryButtonText}>TRY AGAIN</Text>
      </TouchableOpacity>
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.refreshIcon} />
          <Text style={styles.refreshText}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Me')}>
          <Image source={require('../assets/snack-icon.png')} style={styles.meIcon} />
          <Text style={styles.meText}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  logoIcon: {
    width: 50,
    height: 50,
  },
  headerTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectionText: {
    fontSize: 16,
    color: '#A9A9A9',
  },
  errorImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  retryButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignSelf: 'center',
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  refreshIcon: {
    width: 24,
    height: 24,
  },
  meIcon: {
    width: 24,
    height: 24,
  },
  refreshText: {
    fontSize: 12,
    color: '#FF4500',
  },
  meText: {
    fontSize: 12,
    color: '#A9A9A9',
  },
});

export default HomeScreen;