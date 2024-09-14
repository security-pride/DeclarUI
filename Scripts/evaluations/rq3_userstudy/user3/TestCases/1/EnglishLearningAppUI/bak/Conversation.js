import React, { useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
const ConversationPracticePage = () => {
const [isListening, setIsListening] = useState(false);
const [isSpeaking, setIsSpeaking] = useState(false);
return (
<View style={styles.container}>
<View style={styles.header}>
<Pressable style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</Pressable>
<Text style={styles.title}>When taking a taxi</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
<View style={styles.notificationBadge} />
</View>
  <View style={styles.conversationContainer}>
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>Hey there</Text>
      <Text style={styles.translationText}>Xin chào</Text>
      <Pressable style={styles.repeatButton}>
        <Text style={styles.repeatButtonText}>REPEAT</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatarIcon} />
      </Pressable>
    </View>

    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>Hey,where are you going today?</Text>
      <Text style={styles.translationText}>Chào cô, hôm nay cô sẽ đi đâu</Text>
      <Pressable style={styles.repeatButton}>
        <Text style={styles.repeatButtonText}>REPEAT</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatarIcon} />
      </Pressable>
    </View>

    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>25 Gerhold Valley, please.</Text>
      <Text style={styles.translationText}>Cho tôi tới 25 Gerhold Valley.</Text>
      <Pressable style={styles.repeatButton}>
        <Text style={styles.repeatButtonText}>REPEAT</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.avatarIcon} />
      </Pressable>
    </View>

    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>No problem.</Text>
      <Text style={styles.translationText}>Không vấn đề.</Text>
      <Pressable style={styles.repeatButton}>
        <Text style={styles.repeatButtonText}>REPEAT</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.micIcon} />
      </Pressable>
    </View>
  </View>

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
paddingHorizontal: 15,
paddingTop: 40,
paddingBottom: 10,
backgroundColor: '#3F51B5',
},
backButton: {
padding: 5,
},
backIcon: {
width: 20,
height: 20,
tintColor: 'white',
},
title: {
flex: 1,
color: 'white',
fontSize: 18,
fontWeight: 'bold',
marginLeft: 10,
},
wifiIcon: {
width: 20,
height: 20,
tintColor: 'white',
},
notificationBadge: {
width: 10,
height: 10,
borderRadius: 5,
backgroundColor: 'white',
marginLeft: 5,
},
conversationContainer: {
flex: 1,
padding: 15,
},
messageContainer: {
backgroundColor: 'white',
borderRadius: 10,
padding: 15,
marginBottom: 15,
},
messageText: {
fontSize: 16,
marginBottom: 5,
},
translationText: {
fontSize: 14,
color: '#666',
marginBottom: 10,
},
repeatButton: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#E0E0E0',
borderRadius: 20,
paddingVertical: 5,
paddingHorizontal: 15,
},
repeatButtonText: {
fontSize: 14,
fontWeight: 'bold',
marginRight: 5,
},
avatarIcon: {
width: 20,
height: 20,
borderRadius: 10,
},
micIcon: {
width: 20,
height: 20,
},
controlsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 15,
backgroundColor: 'white',
},
controlButton: {
backgroundColor: '#3F51B5',
borderRadius: 25,
paddingVertical: 10,
paddingHorizontal: 30,
},
activeButton: {
backgroundColor: '#1A237E',
},
controlButtonText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
});
export default ConversationPracticePage;