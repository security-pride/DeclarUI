import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topNavBar}>
        <Image source={require('../assets/snack-icon.png')} style={styles.logo} />
        {/* Add additional content or components here */}
      </View>
      {/* Add more components or content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNavBar: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default ProfileScreen;