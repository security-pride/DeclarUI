import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CalmMethods = () => {
const navigation = useNavigation();
const [currentTime, setCurrentTime] = useState('00:43');
const handleExplorePress = () => {
navigation.navigate('Explore');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>{currentTime}</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <View style={styles.titleContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
    </TouchableOpacity>
    <Text style={styles.title}>Calming Everyday Anxiety</Text>
  </View>

  <Text style={styles.description}>
    Get in-the-moment support for anxious thinking, plus expert guidance for cultivating a calmer mind every day.
  </Text>

  <Text style={styles.sectionTitle}>SOS for Anxious Moments</Text>

  <ScrollView style={styles.contentContainer}>
    <TouchableOpacity style={styles.sessionCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.sessionImage} />
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>Feeling Overwhelmed SOS</Text>
        <Text style={styles.sessionDuration}>Meditation · 3-4 min</Text>
        <Text style={styles.sessionDescription}>Give yourself room to breathe.</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.sessionCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.sessionImage} />
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>Panicking SOS</Text>
        <Text style={styles.sessionDuration}>Meditation · 3 min</Text>
        <Text style={styles.sessionDescription}>Anchor your mind and body in the present.</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.sessionCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.sessionImage} />
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>Breathe</Text>
        <Text style={styles.sessionDuration}>Meditation · 1-3 min</Text>
        <Text style={styles.sessionDescription}>Add a sense of spaciousness to your day.</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.sessionCard}>
      <Image source={require('../assets/snack-icon.png')} style={styles.sessionImage} />
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>Reset</Text>
        <Text style={styles.sessionDuration}>Meditation · 3-10 min</Text>
        <Text style={styles.sessionDescription}>Find some focus and relaxation during a busy day.</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>

  <View style={styles.footer}>
    <Text style={styles.footerText}>Unlock the Headspace Library</Text>
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={handleExplorePress}>
        <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
        <Text style={styles.navText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>子骆</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1E2746',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 40,
},
time: {
color: 'white',
fontSize: 16,
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 20,
},
backIcon: {
width: 24,
height: 24,
marginRight: 10,
},
title: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
description: {
color: 'white',
fontSize: 16,
paddingHorizontal: 20,
paddingTop: 10,
},
sectionTitle: {
color: 'white',
fontSize: 20,
fontWeight: 'bold',
paddingHorizontal: 20,
paddingTop: 20,
},
contentContainer: {
flex: 1,
paddingHorizontal: 20,
},
sessionCard: {
flexDirection: 'row',
backgroundColor: '#2A3456',
borderRadius: 10,
marginVertical: 10,
overflow: 'hidden',
},
sessionImage: {
width: 100,
height: 100,
},
sessionInfo: {
flex: 1,
padding: 10,
},
sessionTitle: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
sessionDuration: {
color: '#8E9AB2',
fontSize: 14,
},
sessionDescription: {
color: 'white',
fontSize: 14,
marginTop: 5,
},
footer: {
paddingBottom: 20,
},
footerText: {
color: 'white',
textAlign: 'center',
paddingVertical: 10,
},
navBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#3A4567',
paddingTop: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
},
navText: {
color: 'white',
marginTop: 5,
},
});
export default CalmMethods;