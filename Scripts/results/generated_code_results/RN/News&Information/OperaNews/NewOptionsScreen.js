import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const NewOptions = () => {
const navigation = useNavigation();
const [currentTime, setCurrentTime] = useState('');
useEffect(() => {
const updateTime = () => {
const now = new Date();
setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
};
updateTime();
const interval = setInterval(updateTime, 60000);
return () => clearInterval(interval);
}, []);
const handleBackPress = () => {
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.statusBar}>
<Text style={styles.timeDisplay}>{currentTime}</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.statusIcons} />
</View>
  <View style={styles.header}>
    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>News options</Text>
  </View>

  <ScrollView style={styles.content}>
    <Text style={styles.sectionTitle}>Country & language</Text>
    <TouchableOpacity style={styles.countrySelector}>
      <Image source={require('../assets/snack-icon.png')} style={styles.flagIcon} />
      <Text style={styles.countryLanguageText}>United States - English</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />
    </TouchableOpacity>

    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>My channels</Text>
      <Text style={styles.sectionSubtitle}>Long press to edit</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.channelButton}>
      <Text style={styles.channelButtonText}>For you</Text>
    </TouchableOpacity>

    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Recommended</Text>
      <Text style={styles.sectionSubtitle}>Click to add</Text>
    </View>
  </ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center',
paddingHorizontal: 10,
height: 30,
},
timeDisplay: {
fontSize: 14,
marginRight: 5,
},
batteryIcon: {
width: 20,
height: 20,
marginRight: 5,
},
statusIcons: {
width: 20,
height: 20,
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
backButton: {
padding: 5,
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 10,
},
content: {
flex: 1,
},
sectionTitle: {
fontSize: 22,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 15,
},
countrySelector: {
flexDirection: 'row',
alignItems: 'center',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#E0E0E0',
},
flagIcon: {
width: 30,
height: 20,
marginRight: 10,
},
countryLanguageText: {
fontSize: 16,
flex: 1,
},
checkIcon: {
width: 20,
height: 20,
},
sectionContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 20,
paddingHorizontal: 15,
},
sectionSubtitle: {
fontSize: 14,
color: '#757575',
},
editButton: {
padding: 5,
},
editButtonText: {
color: '#FF0000',
fontSize: 16,
},
channelButton: {
backgroundColor: '#F0F0F0',
padding: 10,
borderRadius: 5,
marginHorizontal: 15,
marginTop: 10,
},
channelButtonText: {
fontSize: 16,
textAlign: 'center',
},
});
export default NewOptions;