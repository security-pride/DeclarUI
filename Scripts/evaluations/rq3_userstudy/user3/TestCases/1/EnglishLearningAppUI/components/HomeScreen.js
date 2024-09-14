import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
const navigation = useNavigation();
const [activeTab, setActiveTab] = useState('NEW FEED');
const feedItems = [
{
author: 'Charlie Herrera',
content: {
type: 'lesson',
title: 'ENGLISH TOURISM',
subtitle: 'Through the airport security door',
ctaButton: 'LEARN FREE NOW'
}
},
{
title: 'When get hurt',
author: 'Ellen Jacobs',
content: {
type: 'video',
duration: '0:17'
}
}
];
const handleTabPress = (tab) => {
setActiveTab(tab);
};
const handleLessonPress = () => {
navigation.navigate('LessonDetail');
};
const handleNavPress = (screen) => {
switch (screen) {
case 'Search':
navigation.navigate('Search');
break;
case 'Speak':
navigation.navigate('Speak');
break;
default:
navigation.navigate(screen);
}
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.signalIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <ScrollView style={styles.content}>
    <Text style={styles.greeting}>Hi, Steven !</Text>
    <Text style={styles.subtitle}>Learn new sentences right away</Text>
    
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'NEW FEED' && styles.activeTab]}
        onPress={() => handleTabPress('NEW FEED')}
      >
        <Text style={[styles.tabText, activeTab === 'NEW FEED' && styles.activeTabText]}>NEW FEED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'SUBSCRIPTION' && styles.activeTab]}
        onPress={() => handleTabPress('SUBSCRIPTION')}
      >
        <Text style={[styles.tabText, activeTab === 'SUBSCRIPTION' && styles.activeTabText]}>SUBSCRIPTION</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notificationButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.bellIcon} />
        <View style={styles.notificationDot}>
          <Text style={styles.notificationCount}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
    
    {feedItems.map((item, index) => (
      <View key={index} style={styles.feedItem}>
        <View style={styles.authorInfo}>
          <Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />
          <Text style={styles.authorName}>{item.author}</Text>
        </View>
        {item.content.type === 'lesson' ? (
          <TouchableOpacity style={styles.lessonCard} onPress={handleLessonPress}>
            <Text style={styles.lessonTitle}>{item.content.title}</Text>
            <Text style={styles.lessonSubtitle}>{item.content.subtitle}</Text>
            <TouchableOpacity style={styles.ctaButton} onPress={handleLessonPress}>
              <Text style={styles.ctaButtonText}>{item.content.ctaButton}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ) : (
          <View style={styles.videoCard}>
            <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
            <Text style={styles.videoDuration}>{item.content.duration}</Text>
          </View>
        )}
        <Text style={styles.itemTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>view all</Text>
        </TouchableOpacity>
      </View>
    ))}
  </ScrollView>
  
  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Speak')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Speak</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Word')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Word</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => handleNavPress('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
    </TouchableOpacity>
  </View>
</SafeAreaView>
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
paddingHorizontal: 20,
paddingTop: 10,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
signalIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
content: {
flex: 1,
paddingHorizontal: 20,
},
greeting: {
fontSize: 28,
fontWeight: 'bold',
marginTop: 20,
},
subtitle: {
fontSize: 16,
color: '#888',
marginTop: 5,
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginTop: 20,
marginBottom: 10,
},
tab: {
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 20,
},
activeTab: {
backgroundColor: '#E6F0FF',
},
tabText: {
fontSize: 16,
color: '#888',
},
activeTabText: {
color: '#2E7DFF',
fontWeight: 'bold',
},
notificationButton: {
position: 'relative',
},
bellIcon: {
width: 24,
height: 24,
},
notificationDot: {
position: 'absolute',
top: -5,
right: -5,
backgroundColor: '#FF6B6B',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
notificationCount: {
color: '#FFFFFF',
fontSize: 12,
fontWeight: 'bold',
},
feedItem: {
marginBottom: 20,
},
authorInfo: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
profilePic: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
authorName: {
fontSize: 16,
fontWeight: 'bold',
},
lessonCard: {
backgroundColor: '#2E7DFF',
borderRadius: 20,
padding: 20,
},
lessonTitle: {
color: '#FFFFFF',
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
lessonSubtitle: {
color: '#FFFFFF',
fontSize: 16,
marginBottom: 20,
},
ctaButton: {
backgroundColor: '#FFFFFF',
borderRadius: 25,
paddingVertical: 10,
paddingHorizontal: 20,
alignSelf: 'flex-start',
},
ctaButtonText: {
color: '#2E7DFF',
fontWeight: 'bold',
},
videoCard: {
position: 'relative',
},
videoThumbnail: {
width: '100%',
height: 200,
borderRadius: 20,
},
videoDuration: {
position: 'absolute',
bottom: 10,
right: 10,
backgroundColor: 'rgba(0, 0, 0, 0.7)',
color: '#FFFFFF',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
},
itemTitle: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 10,
},
viewAllButton: {
alignSelf: 'flex-end',
marginTop: 5,
},
viewAllText: {
color: '#2E7DFF',
fontSize: 14,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
color: '#888',
},
activeNavText: {
color: '#2E7DFF',
fontWeight: 'bold',
},
});
export default HomePage;