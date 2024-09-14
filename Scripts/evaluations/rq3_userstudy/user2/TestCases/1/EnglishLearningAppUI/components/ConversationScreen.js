import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ConversationPracticePage = () => {
const navigation = useNavigation();
const [isListening, setIsListening] = useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);
const conversation = [
{ speaker: 'Ellen', text: 'Hey there', translation: 'Xin chào' },
{ speaker: 'Taxi Driver', text: 'Hey,where are you going today?', translation: 'Chào cô, hôm nay cô sẽ đi đâu' },
{ speaker: 'Ellen', text: '25 Gerhold Valley, please.', translation: 'Cho tôi tới 25 Gerhold Valley.' },
{ speaker: 'Taxi Driver', text: 'No problem.', translation: 'Không vấn đề.' },
];
return (
<View style={styles.container}>
<View style={styles.header}>
<Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</Pressable>
<Text style={styles.title}>When taking a taxi</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
<View style={styles.notificationBadge} />
</View>
  <ScrollView style={styles.conversationContainer}>
    {conversation.map((item, index) => (
      <View key={index} style={styles.messageContainer}>
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>{item.text}</Text>
          <Text style={styles.translationText}>{item.translation}</Text>
        </View>
        <Pressable style={styles.repeatButton}>
          <Text style={styles.repeatButtonText}>REPEAT</Text>
          <Image source={require('../assets/snack-icon.png')} style={styles.micIcon} />
        </Pressable>
      </View>
    ))}
  </ScrollView>

  <View style={styles.controlsContainer}>
    <Pressable
      style={[styles.controlButton, isListening && styles.activeButton]}
      onPress={() => setIsListening(!isListening)}
    >
      <Text style={styles.controlButtonText}>LISTEN</Text>
    </Pressable>
    <Pressable
      style={[styles.controlButton, isSpeaking && styles.activeButton]}
      onPress={() => setIsSpeaking(!isSpeaking)}
    >
      <Text style={styles.controlButtonText}>SPEAKING</Text>
    </Pressable>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F0F0F0',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#FFFFFF',
},
backButton: {
padding: 5,
},
backIcon: {
width: 20,
height: 20,
},
title: {
flex: 1,
fontSize: 18,
fontWeight: 'bold',
textAlign: 'center',
},
wifiIcon: {
width: 20,
height: 20,
},
notificationBadge: {
width: 10,
height: 10,
borderRadius: 5,
backgroundColor: '#FF0000',
position: 'absolute',
top: 10,
right: 10,
},
conversationContainer: {
flex: 1,
padding: 10,
},
messageContainer: {
backgroundColor: '#FFFFFF',
borderRadius: 10,
padding: 10,
marginBottom: 10,
},
messageContent: {
marginBottom: 10,
},
messageText: {
fontSize: 16,
marginBottom: 5,
},
translationText: {
fontSize: 14,
color: '#666666',
},
repeatButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#E0E0E0',
borderRadius: 20,
padding: 10,
},
repeatButtonText: {
marginRight: 5,
fontWeight: 'bold',
},
micIcon: {
width: 15,
height: 15,
},
controlsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: '#FFFFFF',
},
controlButton: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
padding: 15,
borderRadius: 25,
backgroundColor: '#E0E0E0',
marginHorizontal: 5,
},
activeButton: {
backgroundColor: '#4CAF50',
},
controlButtonText: {
fontWeight: 'bold',
color: '#333333',
},
});
export default ConversationPracticePage;