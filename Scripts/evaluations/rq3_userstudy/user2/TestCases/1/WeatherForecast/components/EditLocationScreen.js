import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const EditLocation = () => {
const [isAutoDetectEnabled, setIsAutoDetectEnabled] = useState(true);
const navigation = useNavigation();
const handleBackPress = () => {
navigation.navigate('Setting');
};
const handleAddLocation = () => {
navigation.navigate('AddLocations');
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Icon name="arrow-back" size={24} color="#fff" />
</TouchableOpacity>
<Text style={styles.headerTitle}>Edit location</Text>
<View style={styles.circularIcon} />
</View>
  <TouchableOpacity style={styles.addLocationButton} onPress={handleAddLocation}>
    <Icon name="add" size={24} color="#fff" />
    <Text style={styles.addLocationText}>Add location</Text>
  </TouchableOpacity>

  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>Current location</Text>
  </View>

  <View style={styles.optionContainer}>
    <View style={styles.optionLeft}>
      <Icon name="location-on" size={24} color="#fff" style={styles.optionIcon} />
      <Text style={styles.optionText}>Automatic detection</Text>
    </View>
    <Switch
      value={isAutoDetectEnabled}
      onValueChange={setIsAutoDetectEnabled}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isAutoDetectEnabled ? "#f5dd4b" : "#f4f3f4"}
    />
  </View>

  <View style={styles.footer}>
    <Text style={styles.footerText}>
      In some places, the function of automatic detection does not work well. For example:
      Found location is very far from your real location. In that case you can turn off
      automatic detection, then add your city manually by searching with name of your city
    </Text>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#0a2d3d',
},
header: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 16,
paddingVertical: 12,
},
backButton: {
padding: 8,
},
headerTitle: {
flex: 1,
color: '#fff',
fontSize: 20,
fontWeight: 'bold',
marginLeft: 16,
},
circularIcon: {
width: 32,
height: 32,
borderRadius: 16,
backgroundColor: '#fff',
},
addLocationButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#1e4559',
padding: 16,
marginTop: 16,
},
addLocationText: {
color: '#fff',
fontSize: 16,
marginLeft: 16,
},
sectionHeader: {
backgroundColor: '#1e4559',
padding: 16,
marginTop: 16,
},
sectionHeaderText: {
color: '#fff',
fontSize: 16,
},
optionContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#1e4559',
},
optionLeft: {
flexDirection: 'row',
alignItems: 'center',
},
optionIcon: {
marginRight: 16,
},
optionText: {
color: '#fff',
fontSize: 16,
},
footer: {
padding: 16,
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
},
footerText: {
color: '#fff',
fontSize: 14,
textAlign: 'center',
},
});
export default EditLocation;