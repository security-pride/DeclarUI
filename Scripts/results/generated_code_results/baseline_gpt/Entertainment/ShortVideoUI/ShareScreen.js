import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShareScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarOption}>Following</Text>
        <Text style={[styles.topBarOption, styles.activeOption]}>For You</Text>
      </View>
      <Image source={require('../assets/snack-icon.png')} style={styles.backgroundImage} />
      <View style={styles.overlayView}>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        </View>
        <View style={styles.actionsContainer}>
          <Icon name="heart" size={30} color="red" />
          <Text style={styles.likesText}>328.7K</Text>
        </View>
      </View>
      <View style={styles.shareContainer}>
        <Text style={styles.shareText}>Share to</Text>
        <ScrollView horizontal={true} style={styles.iconsRow}>
          {[
            { icon: 'logo-whatsapp', label: 'WhatsApp' },
            { icon: 'logo-whatsapp', label: 'WhatsApp status' },
            { icon: 'md-send', label: 'Message' },
            { icon: 'ios-chatbubbles', label: 'SMS' },
            { icon: 'logo-facebook-messenger', label: 'Messenger' },
            { icon: 'logo-instagram', label: 'Instagram' },
          ].map((item, index) => (
            <View key={index} style={styles.iconContainer}>
              <Icon name={item.icon} size={40} color="#25D366" />
              <Text style={styles.iconLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
        <ScrollView horizontal={true} style={styles.iconsRow}>
          {[
            { icon: 'ios-warning', label: 'Report' },
            { icon: 'ios-heart-outline', label: 'Not interested' },
            { icon: 'ios-save', label: 'Save video' },
            { icon: 'ios-people', label: 'Duet' },
            { icon: 'ios-happy', label: 'React' },
            { icon: 'ios-add', label: 'Add to Favorites' },
          ].map((item, index) => (
            <View key={index} style={styles.iconContainer}>
              <Icon name={item.icon} size={40} color="#000" />
              <Text style={styles.iconLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  topBarOption: {
    marginHorizontal: 20,
    fontSize: 16,
    color: 'grey',
  },
  activeOption: {
    color: 'white',
    fontWeight: 'bold',
  },
  backgroundImage: {
    width: '100%',
    height: '60%',
  },
  overlayView: {
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  profileContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  actionsContainer: {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    alignItems: 'center',
  },
  likesText: {
    color: 'white',
    marginTop: 5,
  },
  shareContainer: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  shareText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  iconsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 5,
    color: '#000',
  },
  cancelButton: {
    alignSelf: 'center',
    marginTop: 10,
  },
  cancelText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
});

export default ShareScreen;