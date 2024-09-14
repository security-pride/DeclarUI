import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        <Text style={styles.appName}>Opera News</Text>
      </View>
      <View style={styles.menuItem}>
        <Icon name="offline-pin" size={24} color="#666" />
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>Offline reading</Text>
          <Text style={styles.menuDescription}>Read news without the internet</Text>
        </View>
        <Icon name="navigate-next" size={24} color="#ccc" />
      </View>
      <View style={styles.menuItem}>
        <Icon name="restore" size={24} color="#666" />
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>Read it later</Text>
        </View>
        <Icon name="navigate-next" size={24} color="#ccc" />
      </View>
      <View style={styles.menuItem}>
        <Icon name="block" size={24} color="#666" />
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>Blocked users</Text>
        </View>
        <Icon name="navigate-next" size={24} color="#ccc" />
      </View>
      <View style={styles.menuItem}>
        <Icon name="language" size={24} color="#666" />
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>Country & language</Text>
        </View>
        <Icon name="navigate-next" size={24} color="#ccc" />
      </View>
      <View style={styles.menuItem}>
        <Icon name="brightness-3" size={24} color="#666" />
        <View style={styles.menuText}>
          <Text style={styles.menuTitle}>Dark mode</Text>
        </View>
        <View style={styles.menuEnd}>
          <Text style={styles.automaticText}>Automatic</Text>
          <Icon name="navigate-next" size={24} color="#ccc" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
  },
  menuEnd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  automaticText: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
});

export default MeScreen;