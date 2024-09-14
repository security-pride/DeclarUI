import React, { useState } from 'react';
import { View, Text, Button, Switch, ImageBackground, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const AddLocations = () => {
const [isLockScreenEnabled, setIsLockScreenEnabled] = useState(false);
const navigation = useNavigation();
const handleAddLocation = () => {
// Implement add location functionality
console.log('Add location clicked');
};
const handleMenuPress = () => {
// Navigate to Settings page
navigation.navigate('Setting');
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.backgroundImage}
>
<View style={styles.header}>
<TouchableOpacity onPress={handleMenuPress} style={styles.menuIcon}>
<Icon name="menu" size={24} color="black" />
</TouchableOpacity>
<Text style={styles.headerText}>Add location</Text>
<View style={styles.locationIcon}>
<Icon name="location-on" size={24} color="black" />
</View>
</View>
    <View style={styles.lockScreenContainer}>
      <View style={styles.lockScreenIconLabel}>
        <Icon name="lock" size={24} color="black" />
        <Text style={styles.lockScreenText}>Lock screen</Text>
      </View>
      <Switch
        value={isLockScreenEnabled}
        onValueChange={setIsLockScreenEnabled}
      />
    </View>

    <TouchableOpacity style={styles.addLocationButton} onPress={handleAddLocation}>
      <Text style={styles.addLocationButtonText}>Click to add location</Text>
    </TouchableOpacity>

    <View style={styles.streetSign}>
      <Text style={styles.streetSignText}>Pine</Text>
    </View>

    <View style={styles.statusIcons}>
      <Icon name="sd-card" size={24} color="black" />
      <Icon name="battery-full" size={24} color="black" />
    </View>

    <View style={styles.blackCircle} />
  </ImageBackground>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
},
backgroundImage: {
flex: 1,
resizeMode: 'cover',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
headerText: {
fontSize: 20,
fontWeight: 'bold',
},
menuIcon: {
padding: 8,
},
locationIcon: {
padding: 8,
},
lockScreenContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
backgroundColor: 'rgba(255, 255, 255, 0.7)',
marginHorizontal: 16,
borderRadius: 8,
},
lockScreenIconLabel: {
flexDirection: 'row',
alignItems: 'center',
},
lockScreenText: {
marginLeft: 8,
fontSize: 16,
},
addLocationButton: {
backgroundColor: 'rgba(0, 0, 0, 0.6)',
padding: 16,
margin: 16,
borderRadius: 8,
alignItems: 'center',
},
addLocationButtonText: {
color: 'white',
fontSize: 18,
},
streetSign: {
position: 'absolute',
bottom: 100,
left: 16,
backgroundColor: 'rgba(255, 255, 255, 0.7)',
padding: 8,
borderRadius: 4,
},
streetSignText: {
fontSize: 16,
},
statusIcons: {
flexDirection: 'row',
position: 'absolute',
top: 16,
right: 16,
},
blackCircle: {
position: 'absolute',
top: 16,
left: '50%',
width: 12,
height: 12,
borderRadius: 6,
backgroundColor: 'black',
},
});
export default AddLocations;