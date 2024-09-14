import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All activity</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <Icon name="paper-plane-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/snack-icon.png')} style={styles.image} />
        <Text style={styles.title}>Notifications aren’t available</Text>
        <Text style={styles.subtitle}>Notifications about your account will appear here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  headerIcon: {
    padding: 8,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default InboxScreen;