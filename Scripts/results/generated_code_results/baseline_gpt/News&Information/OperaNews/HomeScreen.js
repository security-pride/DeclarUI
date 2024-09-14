import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Icon name="more-vert" size={24} color="black" />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>For you</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.connectionFailedText}>Connection failed</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.failedImage} />
        <TouchableOpacity style={styles.tryAgainButton}>
          <Text style={styles.tryAgainButtonText}>TRY AGAIN</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="refresh" size={24} color="red" />
          <Text style={styles.footerText}>Refresh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Icon name="person" size={24} color="gray" />
          <Text style={styles.footerText}>Me</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectionFailedText: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 10,
  },
  failedImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  tryAgainButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  tryAgainButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default HomeScreen;