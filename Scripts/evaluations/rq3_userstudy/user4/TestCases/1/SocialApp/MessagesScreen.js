import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Messages = () => {
const [message, setMessage] = useState('');
const navigation = useNavigation();
const messages = [
{ text: 'How are you?', sender: 'other', time: '8:43 AM' },
{ text: 'Hi Hasley, I am good. How are you?', sender: 'user', time: '8:43 AM' },
{ type: 'audio', sender: 'other', time: '8:43 AM' },
{ type: 'image', sender: 'other', time: '8:43 AM' },
{ text: "Omg! you're so beautiful!!", sender: 'user', time: '8:43 AM' },
];
const handleSend = () => {
if (message.trim()) {
// Add logic to send message
setMessage('');
}
};
const goBack = () => {
navigation.goBack();
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={goBack}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.profilePic} />
<View style={styles.userInfo}>
<Text style={styles.userName}>Hasley Junior</Text>
<Text style={styles.userStatus}>Online</Text>
</View>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.videoCallIcon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.audioCallIcon} />
</TouchableOpacity>
</View>
  <ScrollView style={styles.messageContainer}>
    {messages.map((msg, index) => (
      <View key={index} style={[styles.messageBubble, msg.sender === 'user' ? styles.userBubble : styles.otherBubble]}>
        {msg.type === 'audio' ? (
          <TouchableOpacity style={styles.audioMessage}>
            <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
            <View style={styles.audioWaveform} />
          </TouchableOpacity>
        ) : msg.type === 'image' ? (
          <TouchableOpacity>
            <Image source={require('../assets/snack-icon.png')} style={styles.imageMessage} />
            <Image source={require('../assets/snack-icon.png')} style={styles.playOverlay} />
          </TouchableOpacity>
        ) : (
          <Text style={styles.messageText}>{msg.text}</Text>
        )}
        <Text style={styles.messageTime}>{msg.time}</Text>
        {msg.sender === 'user' && (
          <Image source={require('../assets/snack-icon.png')} style={styles.doubleCheck} />
        )}
      </View>
    ))}
  </ScrollView>

  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Type here..."
      value={message}
      onChangeText={setMessage}
    />
    <TouchableOpacity onPress={handleSend}>
      <Image source={require('../assets/snack-icon.png')} style={styles.sendIcon} />
    </TouchableOpacity>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backIcon: {
width: 24,
height: 24,
marginRight: 10,
},
profilePic: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
userInfo: {
flex: 1,
},
userName: {
fontWeight: 'bold',
fontSize: 16,
},
userStatus: {
color: 'green',
fontSize: 12,
},
videoCallIcon: {
width: 24,
height: 24,
marginHorizontal: 10,
},
audioCallIcon: {
width: 24,
height: 24,
},
messageContainer: {
flex: 1,
padding: 10,
},
messageBubble: {
maxWidth: '80%',
padding: 10,
borderRadius: 20,
marginBottom: 10,
},
userBubble: {
alignSelf: 'flex-end',
backgroundColor: '#e0e0ff',
},
otherBubble: {
alignSelf: 'flex-start',
backgroundColor: '#f0f0f0',
},
messageText: {
fontSize: 16,
},
messageTime: {
fontSize: 10,
color: '#888',
alignSelf: 'flex-end',
marginTop: 5,
},
audioMessage: {
flexDirection: 'row',
alignItems: 'center',
},
playIcon: {
width: 24,
height: 24,
marginRight: 10,
},
audioWaveform: {
height: 30,
width: 100,
backgroundColor: '#ddd',
},
imageMessage: {
width: 200,
height: 150,
borderRadius: 10,
},
playOverlay: {
position: 'absolute',
top: '50%',
left: '50%',
width: 40,
height: 40,
marginLeft: -20,
marginTop: -20,
},
doubleCheck: {
width: 16,
height: 16,
alignSelf: 'flex-end',
},
inputContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
input: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 20,
paddingHorizontal: 15,
marginRight: 10,
},
sendIcon: {
width: 24,
height: 24,
},
});
export default Messages;