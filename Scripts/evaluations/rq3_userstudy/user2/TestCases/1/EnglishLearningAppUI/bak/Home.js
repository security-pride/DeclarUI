import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
const HomePage = ({ navigation }) => {
const [activeTab, setActiveTab] = useState('NEW FEED');
const renderFeedItem = (item) => {
if (item.content.type === 'lesson') {
return (
<View style={styles.lessonCard}>
<Image source={require('../assets/snack-icon.png')} style={styles.lessonImage} />
<Text style={styles.lessonTitle}>{item.content.title}</Text>
<Text style={styles.lessonSubtitle}>{item.content.subtitle}</Text>
<TouchableOpacity
style={styles.learnButton}
onPress={() => navigation.navigate('LessonDetail', { lesson: item })}
>
<Text style={styles.learnButtonText}>{item.content.cta_button}</Text>
</TouchableOpacity>
</View>
);
} else if (item.content.type === 'video') {
return (
<View style={styles.videoCard}>
<Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
<View style={styles.videoDuration}>
<Text style={styles.videoDurationText}>{item.content.duration}</Text>
</View>
<TextInput style={styles.sentenceInput} placeholder="It's just a" />
<Text style={styles.translationText}>Chỉ xước nhẹ thôi ý mà.</Text>
</View>
);
}
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.timeText}>9:41</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
</View>
  <ScrollView>
    <Text style={styles.greeting}>Hi, Steven!</Text>
    <Text style={styles.subtitle}>Learn new sentences right away</Text>

    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'NEW FEED' && styles.activeTab]}
        onPress={() => setActiveTab('NEW FEED')}
      >
        <Text style={[styles.tabText, activeTab === 'NEW FEED' && styles.activeTabText]}>NEW FEED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'SUBSCRIPTION' && styles.activeTab]}
        onPress={() => setActiveTab('SUBSCRIPTION')}
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

    {renderFeedItem({
      author: 'Charlie Herrera',
      content: {
        type: 'lesson',
        title: 'ENGLISH TOURISM',
        subtitle: 'Through the airport security door',
        cta_button: 'LEARN FREE NOW'
      }
    })}

    <Text style={styles.sectionTitle}>When get hurt</Text>
    <TouchableOpacity style={styles.viewAllButton}>
      <Text style={styles.viewAllText}>view all</Text>
    </TouchableOpacity>

    <View style={styles.authorContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.authorAvatar} />
      <Text style={styles.authorName}>Ellen Jacobs</Text>
    </View>

    {renderFeedItem({
      title: 'When get hurt',
      author: 'Ellen Jacobs',
      content: {
        type: 'video',
        duration: '0:17'
      }
    })}
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Speak')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Speak</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Word</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Profile</Text>
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
paddingHorizontal: 20,
paddingTop: 10,
},
timeText: {
fontSize: 16,
fontWeight: 'bold',
},
signalIcon: {
width: 20,
height: 20,
},
greeting: {
fontSize: 28,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 20,
},
subtitle: {
fontSize: 16,
color: '#888',
marginLeft: 20,
marginBottom: 20,
},
tabContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
marginBottom: 20,
},
tab: {
paddingVertical: 10,
},
activeTab: {
borderBottomWidth: 2,
borderBottomColor: '#4A90E2',
},
tabText: {
fontSize: 16,
color: '#888',
},
activeTabText: {
color: '#4A90E2',
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
lessonCard: {
backgroundColor: '#4A90E2',
borderRadius: 10,
padding: 20,
marginHorizontal: 20,
marginBottom: 20,
},
lessonImage: {
width: '100%',
height: 150,
borderRadius: 10,
marginBottom: 10,
},
lessonTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#FFFFFF',
marginBottom: 5,
},
lessonSubtitle: {
fontSize: 14,
color: '#FFFFFF',
marginBottom: 15,
},
learnButton: {
backgroundColor: '#FFFFFF',
borderRadius: 20,
paddingVertical: 10,
paddingHorizontal: 20,
alignSelf: 'flex-start',
},
learnButtonText: {
color: '#4A90E2',
fontWeight: 'bold',
},
sectionTitle: {
fontSize: 20,
fontWeight: 'bold',
marginLeft: 20,
marginTop: 20,
},
viewAllButton: {
position: 'absolute',
right: 20,
top: 20,
},
viewAllText: {
color: '#4A90E2',
fontSize: 14,
},
authorContainer: {
flexDirection: 'row',
alignItems: 'center',
marginLeft: 20,
marginTop: 10,
},
authorAvatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
authorName: {
fontSize: 16,
fontWeight: 'bold',
},
videoCard: {
marginHorizontal: 20,
marginTop: 10,
marginBottom: 20,
},
videoThumbnail: {
width: '100%',
height: 200,
borderRadius: 10,
},
videoDuration: {
position: 'absolute',
bottom: 10,
right: 10,
backgroundColor: 'rgba(0, 0, 0, 0.7)',
borderRadius: 5,
paddingHorizontal: 5,
paddingVertical: 2,
},
videoDurationText: {
color: '#FFFFFF',
fontSize: 12,
},
sentenceInput: {
borderWidth: 1,
borderColor: '#DDD',
borderRadius: 5,
padding: 10,
marginTop: 10,
},
translationText: {
color: '#888',
marginTop: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#DDD',
paddingVertical: 10,
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
color: '#4A90E2',
fontWeight: 'bold',
},
});
export default HomePage;