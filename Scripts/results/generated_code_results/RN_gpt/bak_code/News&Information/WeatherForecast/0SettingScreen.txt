import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SETTING</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Home')}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EditLocation')}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Manage location</Text>
      </TouchableOpacity>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Temperature</Text>
        <View style={styles.temperatureSwitch}>
          <Text style={[styles.tempUnit, { color: '#333' }]}>F</Text>
          <Text style={[styles.tempUnit, { color: '#fff', backgroundColor: '#0088cc' }]}>C</Text>
        </View>
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Lock screen</Text>
        <Switch style={styles.switch} />
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Notification</Text>
        <Switch style={styles.switch} />
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Status bar</Text>
        <Switch style={styles.switch} />
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Hide background image</Text>
        <Switch style={styles.switch} />
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Weather radar</Text>
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View>
          <Text style={styles.text}>Weather widgets</Text>
          <Text style={styles.subtext}>Show on phone screen</Text>
        </View>
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Remove ads</Text>
      </View>

      <View style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <View>
          <Text style={styles.text}>Unit setting</Text>
          <Text style={styles.subtext}>pressure, wind speed, time format...</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Feedback and Suggestion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Report problem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Image style={styles.icon} source={require('../assets/snack-icon.png')} />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  },
  subtext: {
    fontSize: 14,
    color: '#ddd',
  },
  switch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
  },
  temperatureSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#888',
    borderRadius: 15,
    padding: 3,
  },
  tempUnit: {
    padding: 5,
    borderRadius: 15,
    margin: 1,
  },
});

export default SettingScreen;