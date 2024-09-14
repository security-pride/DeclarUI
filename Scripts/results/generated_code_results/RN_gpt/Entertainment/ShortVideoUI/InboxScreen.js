import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InboxScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Status bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusBarText}>9:41</Text>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>All activity</Text>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image style={styles.largeIcon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.contentTitle}>Notifications aren’t available</Text>
        <Text style={styles.contentDescription}>
          Notifications about your account will appear here
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image style={styles.smallIcon} source={require('../assets/snack-icon.png')} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
          <Image style={styles.smallIcon} source={require('../assets/snack-icon.png')} />
          <Text>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.addButtonIcon} source={require('../assets/snack-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.smallIcon} source={require('../assets/snack-icon.png')} />
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={styles.smallIcon} source={require('../assets/snack-icon.png')} />
          <Text>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  statusBarText: {
    fontSize: 14,
    color: '#000',
  },
  icon: {
    width: 20,
    height: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contentDescription: {
    fontSize: 14,
    color: '#666',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  smallIcon: {
    width: 30,
    height: 30,
  },
  addButtonIcon: {
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 10,
  },
});

export default InboxScreen;