import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ClassroomScreen = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('Description');
const renderTabContent = () => {
switch (activeTab) {
case 'Description':
return (
<View style={styles.tabContent}>
<Text style={styles.descriptionTitle}>About this class</Text>
<Text style={styles.descriptionText}>
Force: The push or pull on an object with mass that causes it to change its velocity.
          Force is a vector quantity capable of changing the state of rest or motion of a particular body.
          It has a magnitude and a direction. The direction in which the force is applied is known as the direction of
          the force and the application of force is in a point where force is applied.
        </Text>
      </View>
    );
  case 'Discussion':
    return (
      <View style={styles.tabContent}>
        <Text>Discussion content goes here</Text>
      </View>
    );
  case 'Resources':
    return (
      <View style={styles.tabContent}>
        <Text>Resources content goes here</Text>
      </View>
    );
  default:
    return null;
}
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.dateText}>Today, 17 Sept</Text>
<Text style={styles.title}>Classroom</Text>
<TouchableOpacity style={styles.addClassButton}>
<Text style={styles.addClassButtonText}>+ Add Class</Text>
</TouchableOpacity>
</View>
  <ScrollView>
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.classImage}
    >
      {/* Placeholder for class image */}
    </ImageBackground>

    <View style={styles.classDetails}>
      <Text style={styles.subjectText}>Physics</Text>
      <Text style={styles.chapterText}>Chapter 3: Force</Text>
      <View style={styles.instructorEnrollment}>
        <Text style={styles.instructorText}>Alex Jesus</Text>
        <Text style={styles.enrollmentText}>45 enrolled</Text>
      </View>
    </View>

    <View style={styles.tabSection}>
      {['Description', 'Discussion', 'Resources'].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => setActiveTab(tab)}
        >
          <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>

    {renderTabContent()}
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.navText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
      <Text style={styles.navText}>Tasks</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={[styles.navText, styles.activeNavText]}>Classroom</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Discussion')}>
      <Text style={styles.navText}>Chat</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
dateText: {
fontSize: 14,
color: '#888888',
},
title: {
fontSize: 20,
fontWeight: 'bold',
},
addClassButton: {
backgroundColor: '#4CAF50',
paddingHorizontal: 12,
paddingVertical: 6,
borderRadius: 20,
},
addClassButtonText: {
color: '#FFFFFF',
fontWeight: 'bold',
},
classImage: {
height: 150,
justifyContent: 'flex-end',
},
classDetails: {
padding: 16,
},
subjectText: {
fontSize: 24,
fontWeight: 'bold',
},
chapterText: {
fontSize: 16,
color: '#555555',
marginTop: 4,
},
instructorEnrollment: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 8,
},
instructorText: {
fontSize: 14,
color: '#888888',
},
enrollmentText: {
fontSize: 14,
color: '#888888',
},
tabSection: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
tab: {
flex: 1,
paddingVertical: 16,
alignItems: 'center',
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#007AFF',
},
tabText: {
fontSize: 16,
color: '#888888',
},
activeTabText: {
color: '#007AFF',
fontWeight: 'bold',
},
tabContent: {
padding: 16,
},
descriptionTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 8,
},
descriptionText: {
fontSize: 14,
lineHeight: 20,
color: '#333333',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 12,
},
navText: {
fontSize: 14,
color: '#888888',
},
activeNavText: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default ClassroomScreen;