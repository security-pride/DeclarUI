import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native';
const LessonDetailPage = ({ navigation }) => {
const [isSubscribed, setIsSubscribed] = useState(true);
const [currentLanguage, setCurrentLanguage] = useState('EN');
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.timeText}>9:41</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
<Pressable style={styles.wifiButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
</Pressable>
</View>
  <ScrollView>
    <View style={styles.videoContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.videoPlaceholder} />
      <TouchableOpacity style={styles.playButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
      </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.languageToggle} onPress={() => setCurrentLanguage(currentLanguage === 'EN' ? 'VN' : 'EN')}>
      <Text style={styles.languageToggleText}>{currentLanguage}/VN</Text>
    </TouchableOpacity>

    <View style={styles.contentContainer}>
      <Text style={styles.instructionText}>Tap to see word in dictionary</Text>
      <View style={styles.sentenceContainer}>
        <Text style={styles.slideNumber}>6 / 12</Text>
        <Text style={styles.sentenceText}>
          NBD, let's <Text style={styles.highlightedWord}>kee</Text> going.
        </Text>
        <Text style={styles.translationText}>Không có gì to tát cả, tiếp tục nào.</Text>
        <Text style={styles.explanationText}>NBD: (no big deal) không có gì to tát cả.</Text>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>Drill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlText}>1x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.secondaryText}>Chỉ xước nhẹ thôi ý mà.</Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>62</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authorContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.authorAvatar} />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>Ellen Jacobs</Text>
          <Text style={styles.subscriberCount}>3.7k Subscriber</Text>
        </View>
        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() => setIsSubscribed(!isSubscribed)}
        >
          <Text style={styles.subscribeButtonText}>{isSubscribed ? 'Subscribed' : 'Subscribe'}</Text>
          {isSubscribed && <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />}
        </TouchableOpacity>
      </View>

      <View style={styles.practiceContainer}>
        <Text style={styles.practiceTitle}>Practice Speaking !</Text>
        <View style={styles.practiceSentenceContainer}>
          <Text style={styles.practiceSentence}>It's just a scratch.</Text>
          <Text style={styles.practiceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>
        </View>
        <TouchableOpacity style={styles.speakButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.speakIcon} />
        </TouchableOpacity>
      </View>
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
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 10,
paddingTop: 40,
paddingBottom: 10,
},
backButton: {
padding: 5,
},
backIcon: {
width: 20,
height: 20,
},
timeText: {
fontSize: 16,
fontWeight: 'bold',
},
signalIcon: {
width: 20,
height: 20,
},
wifiButton: {
padding: 5,
},
wifiIcon: {
width: 20,
height: 20,
},
videoContainer: {
height: 200,
backgroundColor: '#000',
justifyContent: 'center',
alignItems: 'center',
},
videoPlaceholder: {
width: '100%',
height: '100%',
},
playButton: {
position: 'absolute',
},
playIcon: {
width: 50,
height: 50,
},
languageToggle: {
position: 'absolute',
top: 10,
right: 10,
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 5,
borderRadius: 5,
},
languageToggleText: {
color: '#FFF',
fontWeight: 'bold',
},
contentContainer: {
padding: 15,
},
instructionText: {
fontSize: 12,
color: '#888',
marginBottom: 10,
},
sentenceContainer: {
marginBottom: 20,
},
slideNumber: {
fontSize: 12,
color: '#888',
marginBottom: 5,
},
sentenceText: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
highlightedWord: {
backgroundColor: '#4A90E2',
color: '#FFF',
},
translationText: {
fontSize: 16,
color: '#444',
marginBottom: 5,
},
explanationText: {
fontSize: 14,
color: '#666',
},
controlsContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
controlButton: {
padding: 10,
},
controlIcon: {
width: 20,
height: 20,
},
controlText: {
fontSize: 16,
},
secondaryText: {
fontSize: 16,
color: '#444',
marginBottom: 20,
},
actionContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 20,
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 20,
height: 20,
marginBottom: 5,
},
actionText: {
fontSize: 12,
color: '#666',
},
authorContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
authorAvatar: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
authorInfo: {
flex: 1,
},
authorName: {
fontSize: 16,
fontWeight: 'bold',
},
subscriberCount: {
fontSize: 14,
color: '#666',
},
subscribeButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#4A90E2',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 5,
},
subscribeButtonText: {
color: '#FFF',
fontWeight: 'bold',
marginRight: 5,
},
checkIcon: {
width: 15,
height: 15,
tintColor: '#FFF',
},
practiceContainer: {
backgroundColor: '#F0F0F0',
padding: 15,
borderRadius: 10,
},
practiceTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
practiceSentenceContainer: {
marginBottom: 10,
},
practiceSentence: {
fontSize: 16,
fontWeight: 'bold',
},
practiceTranslation: {
fontSize: 14,
color: '#666',
},
speakButton: {
alignSelf: 'flex-end',
backgroundColor: '#4A90E2',
padding: 10,
borderRadius: 20,
},
speakIcon: {
width: 20,
height: 20,
tintColor: '#FFF',
},
});
export default LessonDetailPage;