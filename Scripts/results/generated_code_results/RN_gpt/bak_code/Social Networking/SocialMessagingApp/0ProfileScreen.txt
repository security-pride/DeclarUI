import React from 'react';
import { View, Text, Switch, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} onPress={() => navigation.goBack()} />
        <Icon name="more-vert" size={24} />
      </View>

      <View style={styles.profileSection}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Antonio Banderas</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>

      <View style={styles.optionsSection}>
        <View style={styles.optionItem}>
          <Text style={styles.optionLabel}>Mute notifications</Text>
          <Switch value={true} />
        </View>
        <Text style={styles.optionItem}>Custom notifications</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.infoHeader}>Bio and phone number</Text>
        <Text style={styles.bio}>UI Design enthusiast</Text>
        <Text style={styles.date}>June 24, 2020</Text>
        <View style={styles.phoneSection}>
          <Text style={styles.phone}>+62 009 1212 3131</Text>
          <Text style={styles.mobileLabel}>Mobile</Text>
          <Icon name="phone" size={24} onPress={() => {}} />
          <Icon name="videocam" size={24} onPress={() => {}} />
        </View>
      </View>

      <View style={styles.mediaSection}>
        <Text style={styles.mediaLabel}>Media</Text>
        <Text style={styles.mediaLabel}>Documents</Text>
        <Text style={styles.mediaLabel}>Links</Text>
        <Text style={styles.mediaLabel}>Groups</Text>
      </View>

      <View style={styles.placeholderSection}>
        <View style={styles.graySquare} />
        <View style={styles.graySquare} />
        <View style={styles.graySquare} />
        <View style={styles.graySquare} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profileInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    color: 'green',
  },
  optionsSection: {
    marginTop: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  optionLabel: {
    fontSize: 16,
  },
  infoSection: {
    marginTop: 16,
    paddingBottom: 8,
  },
  infoHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bio: {
    marginTop: 8,
    fontSize: 14,
  },
  date: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
  phoneSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  phone: {
    fontSize: 16,
    marginRight: 8,
  },
  mobileLabel: {
    fontSize: 14,
    color: '#666',
    marginRight: 16,
  },
  mediaSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
  },
  mediaLabel: {
    fontSize: 16,
  },
  placeholderSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 16,
  },
  graySquare: {
    width: 80,
    height: 80,
    backgroundColor: '#eee',
  },
});

export default ProfileScreen;