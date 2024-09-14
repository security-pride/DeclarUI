import React from 'react';
import { View, Text, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to More Screen"
        onPress={() => navigation.navigate('More')}
      />
      <Image source={require('../assets/snack-icon.png')} style={{ width: 50, height: 50 }} />
    </View>
  );
};

export default HomeScreen;