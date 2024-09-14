import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ChatScreen = () => {
const navigation = useNavigation();
const [message, setMessage] = useState('');
const messages = [
{ id: '1', text: 'Hi! Your last shot was really good!', time: '9:30', sender: 'user' },
{ id: '2', type: 'audio', duration: '1.35', time: '9:32', sender: 'contact' },
{ id: '3', text: 'What tools do you use?', time: '9:34', sender: 'user' },
{ id: '4', text: 'Figma, for prototype i use Principle', time: '9:35', sender: 'contact' },
{ id: '5', text: 'Cool! Your designs inspire me a lot bro. Keep posting!', time: '9:36', sender: 'user' },
{ id: '6', text: 'Thank u so much Antonio! Glad to hear that :)', time: '9:37', sender: 'contact' },
{ id: '7', text: "You're welcome!", time: '9:39', sender: 'user' },
];
const renderMessage = ({ item }) => (
<View style={[styles.messageBubble, item.sender === 'user' ? styles.userMessage : styles.contactMessage]}>
{item.type === 'audio' ? (
<View style={styles.audioMessage}>
<View style={styles.waveform} />
<Text style={styles.audioDuration}>{item.duration}</Text>
</View>
) : (
<Text style={styles.messageText}>{item.text}</Text>
)}
<Text style={styles.messageTime}>{item.time}</Text>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.profilePicture} />
<View>
<Text style={styles.userName}>Antonio Banderas</Text>
<Text style={styles.userStatus}>Online</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
<Image source={require('../assets/snack-icon.png')} style={styles.optionsIcon} />
</TouchableOpacity>
</View>
  <FlatList
    data={messages}
    renderItem={renderMessage}
    keyExtractor={(item) => item.id}
    contentContainerStyle={styles.messageList}
  />

  <View style={styles.inputContainer}>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />
    </TouchableOpacity>
    <TextInput
      style={styles.input}
      placeholder="Type a message"
      value={message}
      onChangeText={setMessage}
    />
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.inputIcon} />
    </TouchableOpacity>
  </View>
</View>
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
profilePicture: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
userName: {
fontSize: 18,
fontWeight: 'bold',
},
userStatus: {
fontSize: 14,
color: 'green',
},
optionsIcon: {
width: 24,
height: 24,
marginLeft: 'auto',
},
messageList: {
paddingVertical: 10,
},
messageBubble: {
maxWidth: '80%',
padding: 10,
borderRadius: 20,
marginVertical: 5,
},
userMessage: {
alignSelf: 'flex-end',
backgroundColor: '#dcf8c6',
},
contactMessage: {
alignSelf: 'flex-start',
backgroundColor: '#fff',
borderWidth: 1,
borderColor: '#e0e0e0',
},
messageText: {
fontSize: 16,
},
messageTime: {
fontSize: 12,
color: '#888',
alignSelf: 'flex-end',
marginTop: 5,
},
audioMessage: {
flexDirection: 'row',
alignItems: 'center',
},
waveform: {
width: 100,
height: 30,
backgroundColor: '#e0e0e0',
borderRadius: 15,
},
audioDuration: {
marginLeft: 10,
fontSize: 14,
color: '#888',
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
borderColor: '#e0e0e0',
borderRadius: 20,
paddingHorizontal: 10,
marginHorizontal: 10,
},
inputIcon: {
width: 24,
height: 24,
},
});
export default ChatScreen;