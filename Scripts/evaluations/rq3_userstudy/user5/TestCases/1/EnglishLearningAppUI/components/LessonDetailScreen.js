import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LessonDetailPage = () => {
const navigation = useNavigation();
const [isSubscribed, setIsSubscribed] = useState(true);
const [currentSpeed, setCurrentSpeed] = useState('1x');
const handleBackPress = () => {
navigation.goBack();
};
const toggleSubscription = () => {
setIsSubscribed(!isSubscribed);
};
const handleSpeedChange = () => {
const speeds = ['1x', '1.5x', '2x'];
const currentIndex = speeds.indexOf(currentSpeed);
const nextIndex = (currentIndex + 1) % speeds.length;
setCurrentSpeed(speeds[nextIndex]);
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity style={styles.languageToggle}>
<Text style={styles.languageToggleText}>EN/VN</Text>
</TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
</View>
  <ScrollView style={styles.content}>
    <View style={styles.videoPlayer}>
      <TouchableOpacity style={styles.playButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
      </TouchableOpacity>
    </View>

    <View style={styles.lessonContent}>
      <Text style={styles.instructionText}>Tap to see word in dictionary</Text>
      <View style={styles.sentenceContainer}>
        <Text style={styles.slideNumber}>6 / 12</Text>
        <Text style={styles.sentence}>
          NBD, let's <Text style={styles.highlightedWord}>kee</Text> going.
        </Text>
        <Text style={styles.translation}>Không có gì to tát cả, tiếp tục nào.</Text>
        <Text style={styles.explanation}>NBD: (no big deal) không có gì to tát cả.</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton} onPress={handleSpeedChange}>
          <Text style={styles.speedText}>{currentSpeed}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.controlIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.additionalSentence}>Chỉ xước nhẹ thôi ý mà.</Text>

      <View style={styles.interactionButtons}>
        <TouchableOpacity style={styles.interactionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />
          <Text style={styles.interactionText}>62</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />
          <Text style={styles.interactionText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />
          <Text style={styles.interactionText}>Bookmark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />
          <Text style={styles.interactionText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.interactionButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.interactionIcon} />
          <Text style={styles.interactionText}>More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authorInfo}>
        <Image source={require('../assets/snack-icon.png')} style={styles.authorAvatar} />
        <View style={styles.authorDetails}>
          <Text style={styles.authorName}>Ellen Jacobs</Text>
          <Text style={styles.subscriberCount}>3.7k Subscriber</Text>
        </View>
        <TouchableOpacity style={styles.subscribeButton} onPress={toggleSubscription}>
          <Text style={styles.subscribeButtonText}>
            {isSubscribed ? 'Subscribed' : 'Subscribe'}
          </Text>
          {isSubscribed && <Image source={require('../assets/snack-icon.png')} style={styles.checkIcon} />}
        </TouchableOpacity>
      </View>

      <View style={styles.practiceSection}>
        <Text style={styles.practiceTitle}>Practice Speaking !</Text>
        <View style={styles.practiceSentence}>
          <Text style={styles.practiceSentenceText}>It's just a scratch.</Text>
          <Text style={styles.practiceSentenceTranslation}>Chỉ xước nhẹ thôi ý mà.</Text>
        </View>
        <TouchableOpacity style={styles.speakButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.speakIcon} />
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
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
padding: 10,
},
backButton: {
padding: 5,
},
icon: {
width: 24,
height: 24,
},
languageToggle: {
backgroundColor: '#E0E0E0',
padding: 5,
borderRadius: 5,
},
languageToggleText: {
fontWeight: 'bold',
},
signalIcon: {
width: 20,
height: 20,
},
content: {
flex: 1,
},
videoPlayer: {
height: 200,
backgroundColor: '#000000',
justifyContent: 'center',
alignItems: 'center',
},
playButton: {
backgroundColor: 'rgba(255, 255, 255, 0.5)',
borderRadius: 30,
padding: 10,
},
playIcon: {
width: 30,
height: 30,
},
lessonContent: {
padding: 15,
},
instructionText: {
textAlign: 'center',
color: '#FF9800',
marginBottom: 10,
},
sentenceContainer: {
backgroundColor: '#F5F5F5',
padding: 15,
borderRadius: 10,
},
slideNumber: {
color: '#888888',
marginBottom: 5,
},
sentence: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
highlightedWord: {
backgroundColor: '#2196F3',
color: '#FFFFFF',
padding: 2,
},
translation: {
color: '#666666',
marginBottom: 5,
},
explanation: {
fontStyle: 'italic',
color: '#888888',
},
controls: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginTop: 15,
},
controlButton: {
marginHorizontal: 10,
},
controlIcon: {
width: 30,
height: 30,
},
speedText: {
fontWeight: 'bold',
},
additionalSentence: {
marginTop: 15,
color: '#666666',
},
interactionButtons: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 15,
},
interactionButton: {
alignItems: 'center',
},
interactionIcon: {
width: 24,
height: 24,
},
interactionText: {
fontSize: 12,
color: '#666666',
},
authorInfo: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 20,
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingTop: 15,
},
authorAvatar: {
width: 50,
height: 50,
borderRadius: 25,
marginRight: 10,
},
authorDetails: {
flex: 1,
},
authorName: {
fontWeight: 'bold',
},
subscriberCount: {
color: '#666666',
fontSize: 12,
},
subscribeButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#E0E0E0',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 5,
},
subscribeButtonText: {
fontWeight: 'bold',
marginRight: 5,
},
checkIcon: {
width: 16,
height: 16,
},
practiceSection: {
marginTop: 20,
backgroundColor: '#F5F5F5',
padding: 15,
borderRadius: 10,
},
practiceTitle: {
fontWeight: 'bold',
marginBottom: 10,
},
practiceSentence: {
marginBottom: 10,
},
practiceSentenceText: {
fontWeight: 'bold',
},
practiceSentenceTranslation: {
color: '#666666',
},
speakButton: {
alignSelf: 'flex-end',
backgroundColor: '#2196F3',
padding: 10,
borderRadius: 20,
},
speakIcon: {
width: 24,
height: 24,
tintColor: '#FFFFFF',
},
});
export default LessonDetailPage;