import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Setting = () => {
const navigation = useNavigation();
const [temperatureUnit, setTemperatureUnit] = useState('C');
const [lockScreen, setLockScreen] = useState(true);
const [notification, setNotification] = useState(true);
const [statusBar, setStatusBar] = useState(true);
const [hideBackground, setHideBackground] = useState(false);
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleManageLocationPress = () => {
navigation.navigate('EditLocation');
};
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<Text style={styles.header}>SETTING</Text>
<ScrollView style={styles.scrollView}>
<TouchableOpacity style={styles.option} onPress={handleHomePress}>
<Icon name="home" size={24} color="white" />
<Text style={styles.optionText}>Home</Text>
</TouchableOpacity>
    <TouchableOpacity style={styles.option} onPress={handleManageLocationPress}>
      <Icon name="location-on" size={24} color="white" />
      <Text style={styles.optionText}>Manage location</Text>
    </TouchableOpacity>

    <View style={styles.option}>
      <Icon name="wb-sunny" size={24} color="white" />
      <Text style={styles.optionText}>Temperature</Text>
      <View style={styles.tempSwitch}>
        <TouchableOpacity 
          style={[styles.tempUnit, temperatureUnit === 'F' && styles.activeUnit]} 
          onPress={() => setTemperatureUnit('F')}
        >
          <Text style={styles.tempUnitText}>F</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tempUnit, temperatureUnit === 'C' && styles.activeUnit]} 
          onPress={() => setTemperatureUnit('C')}
        >
          <Text style={styles.tempUnitText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.option}>
      <Icon name="lock" size={24} color="white" />
      <Text style={styles.optionText}>Lock screen</Text>
      <Switch
        value={lockScreen}
        onValueChange={setLockScreen}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={lockScreen ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <View style={styles.option}>
      <Icon name="notifications" size={24} color="white" />
      <Text style={styles.optionText}>Notification</Text>
      <Switch
        value={notification}
        onValueChange={setNotification}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={notification ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <View style={styles.option}>
      <Icon name="phone-android" size={24} color="white" />
      <Text style={styles.optionText}>Status bar</Text>
      <Switch
        value={statusBar}
        onValueChange={setStatusBar}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={statusBar ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <View style={styles.option}>
      <Icon name="image" size={24} color="white" />
      <Text style={styles.optionText}>Hide background image</Text>
      <Switch
        value={hideBackground}
        onValueChange={setHideBackground}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={hideBackground ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>

    <TouchableOpacity style={styles.option}>
      <Icon name="radar" size={24} color="white" />
      <Text style={styles.optionText}>Weather radar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option}>
      <Icon name="widgets" size={24} color="white" />
      <Text style={styles.optionText}>Weather widgets</Text>
      <Text style={styles.subOptionText}>Show on phone screen</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option}>
      <Icon name="block" size={24} color="white" />
      <Text style={styles.optionText}>Remove ads</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option}>
      <Icon name="settings" size={24} color="white" />
      <Text style={styles.optionText}>Unit setting</Text>
      <Text style={styles.subOptionText}>pressure, wind speed, time format...</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option}>
      <Icon name="feedback" size={24} color="white" />
      <Text style={styles.optionText}>Feedback and Suggestion</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option}>
      <Icon name="report-problem" size={24} color="white" />
      <Text style={styles.optionText}>Report problem</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option}>
      <Icon name="share" size={24} color="white" />
      <Text style={styles.optionText}>Share</Text>
    </TouchableOpacity>
  </ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#3498db',
},
header: {
fontSize: 24,
fontWeight: 'bold',
color: 'white',
padding: 16,
},
scrollView: {
flex: 1,
},
option: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: 'rgba(255,255,255,0.1)',
},
optionText: {
color: 'white',
fontSize: 16,
marginLeft: 16,
flex: 1,
},
subOptionText: {
color: 'rgba(255,255,255,0.7)',
fontSize: 12,
marginLeft: 16,
},
tempSwitch: {
flexDirection: 'row',
backgroundColor: 'rgba(255,255,255,0.2)',
borderRadius: 15,
},
tempUnit: {
padding: 8,
width: 40,
alignItems: 'center',
},
activeUnit: {
backgroundColor: 'white',
borderRadius: 15,
},
tempUnitText: {
color: 'white',
fontWeight: 'bold',
},
});
export default Setting;