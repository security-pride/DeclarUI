import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, ImageBackground } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.timeText}>9:41</Text>
        <Text style={styles.logo}>heact</Text>
        <Text style={styles.title}>Effortlessly Discover Your Ideal Match</Text>
        <Text style={styles.subtitle}>
          Experience a seamless journey uncovering the ideal match that aligns with your preferences and aspirations
        </Text>

        <Button
          title="Continue with Apple"
          onPress={() => navigation.navigate('Homepage')}
          color="black"
        />
        <Button
          title="Continue with Facebook"
          onPress={() => navigation.navigate('Homepage')}
          color="#4267B2"
        />
        <Button
          title="Use Phone Number"
          onPress={() => navigation.navigate('Homepage')}
          color="black"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  timeText: {
    position: 'absolute',
    top: 10,
    left: 15,
    color: 'white',
    fontSize: 12,
  },
  logo: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
});

export default OnboardingScreen;