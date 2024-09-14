import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ShareScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Text style={styles.tabText}>Following</Text>
        <Text style={styles.tabText}>For You</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.image}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.avatarButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
        </TouchableOpacity>
      </Image>
      <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Share to</Text>
        <ScrollView contentContainerStyle={styles.shareOptions}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.navigate('WhatsApp')} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WhatsApp status')} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>WhatsApp status</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Message')} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Message</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SMS')} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Messenger')} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Messenger</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Instagram')} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Instagram</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => {}} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Not interested</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Save video</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Duet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>React</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.shareButton}>
              <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
              <Text style={styles.iconLabel}>Add to Favorites</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text style={styles.cancelText}>Cancel</Text>
      </View>
      <View style={styles.homeBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  tabText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'white',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  avatarButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  shareContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  shareText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  shareOptions: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  shareButton: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  iconLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  cancelText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginTop: 10,
  },
  homeBar: {
    height: 5,
    backgroundColor: 'gray',
    marginHorizontal: 'auto',
    marginTop: 10,
  },
});

export default ShareScreen;