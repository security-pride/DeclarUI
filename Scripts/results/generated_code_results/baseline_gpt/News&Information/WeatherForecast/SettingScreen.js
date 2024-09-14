import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingScreen = () => {

  const [isTemperatureCelsius, setIsTemperatureCelsius] = React.useState(true);
  const [settings, setSettings] = React.useState({
    lockScreen: false,
    notifications: false,
    statusBar: false,
    hideBackgroundImage: false,
  });

  const toggleSwitch = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>SETTING</Text>
      
      <TouchableOpacity style={styles.row}>
        <Icon name="home" size={20} color="#fff" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Icon name="map-marker" size={20} color="#fff" />
        <Text style={styles.text}>Manage location</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Icon name="thermometer-half" size={20} color="#fff" />
        <Text style={styles.text}>Temperature</Text>
        <View style={styles.temperatureSwitch}>
          <Text style={styles.tempText}>F</Text>
          <Switch
            onValueChange={() => setIsTemperatureCelsius(!isTemperatureCelsius)}
            value={isTemperatureCelsius}
          />
          <Text style={styles.tempText}>C</Text>
        </View>
      </View>

      <View style={styles.row}>
        <Icon name="lock" size={20} color="#fff" />
        <Text style={styles.text}>Lock screen</Text>
        <Switch
          onValueChange={() => toggleSwitch('lockScreen')}
          value={settings.lockScreen}
        />
      </View>

      <View style={styles.row}>
        <Icon name="bell" size={20} color="#fff" />
        <Text style={styles.text}>Notification</Text>
        <Switch
          onValueChange={() => toggleSwitch('notifications')}
          value={settings.notifications}
        />
      </View>

      <View style={styles.row}>
        <Icon name="info" size={20} color="#fff" />
        <Text style={styles.text}>Status bar</Text>
        <Switch
          onValueChange={() => toggleSwitch('statusBar')}
          value={settings.statusBar}
        />
      </View>

      <View style={styles.row}>
        <Icon name="image" size={20} color="#fff" />
        <Text style={styles.text}>Hide background image</Text>
        <Switch
          onValueChange={() => toggleSwitch('hideBackgroundImage')}
          value={settings.hideBackgroundImage}
        />
      </View>

      <TouchableOpacity style={styles.row}>
        <Icon name="globe" size={20} color="#fff" />
        <Text style={styles.text}>Weather radar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Icon name="th-large" size={20} color="#fff" />
        <Text style={styles.text}>Weather widgets</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.row}>
        <Icon name="ban" size={20} color="#fff" />
        <Text style={styles.text}>Remove ads</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.row}>
        <Icon name="cogs" size={20} color="#fff" />
        <Text style={styles.text}>Unit setting</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row}>
        <Icon name="envelope" size={20} color="#fff" />
        <Text style={styles.text}>Feedback and Suggestion</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.row}>
        <Icon name="bug" size={20} color="#fff" />
        <Text style={styles.text}>Report problem</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.row}>
        <Icon name="share-alt" size={20} color="#fff" />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23659e',
  },
  header: {
    fontSize: 18,
    color: '#fff',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#1d4d7b',
  },
  text: {
    color: '#fff',
    marginLeft: 20,
    flexGrow: 1,
  },
  temperatureSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempText: {
    color: '#fff',
    marginHorizontal: 5,
  },
});

export default SettingScreen;