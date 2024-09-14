import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DiscussionScreen = () => {
const navigation = useNavigation();
const [message, setMessage] = useState('');
const renderMessage = (user, content, files = []) => (
<View style={styles.messageContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.avatar} />
<View style={styles.messageContent}>
<Text style={styles.userName}>{user}</Text>
<Text style={styles.messageText}>{content}</Text>
{files.map((file, index) => (
<View key={index} style={styles.fileContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.fileIcon} />
<Text style={styles.fileName}>{file}</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.downloadIcon} />
</TouchableOpacity>
</View>
))}
</View>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Discussion</Text>
<Text style={styles.headerSubtitle}>Physics</Text>
<View style={styles.headerIcons}>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView style={styles.chatContainer}>
    {renderMessage("Maya", "Here are the resource files of todays' physics class", ["Introduction to force", "Work and energy"])}
    {renderMessage("Liana", "Thanks a lot Maya\nIs anyone please share your class notes of this lecture.")}
    {renderMessage("Vishal", "I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.", ["Force, Energy & Work"])}
  </ScrollView>

  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder="Type something"
      value={message}
      onChangeText={setMessage}
    />
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.attachIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.cameraIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.sendIcon} />
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
      <Text>Tasks</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Classroom')}>
      <Text>Classroom</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.activeNavText}>Chat</Text>
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
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
headerTitle: {
fontSize: 14,
color: '#888888',
},
headerSubtitle: {
fontSize: 18,
fontWeight: 'bold',
},
headerIcons: {
flexDirection: 'row',
},
icon: {
width: 24,
height: 24,
marginLeft: 16,
},
chatContainer: {
flex: 1,
},
messageContainer: {
flexDirection: 'row',
padding: 16,
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 12,
},
messageContent: {
flex: 1,
},
userName: {
fontWeight: 'bold',
marginBottom: 4,
},
messageText: {
fontSize: 16,
marginBottom: 8,
},
fileContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F0F0F0',
borderRadius: 8,
padding: 8,
marginBottom: 8,
},
fileIcon: {
width: 24,
height: 24,
marginRight: 8,
},
fileName: {
flex: 1,
},
downloadIcon: {
width: 24,
height: 24,
},
inputContainer: {
flexDirection: 'row',
alignItems: 'center',
padding: 8,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
input: {
flex: 1,
height: 40,
borderWidth: 1,
borderColor: '#CCCCCC',
borderRadius: 20,
paddingHorizontal: 16,
marginRight: 8,
},
attachIcon: {
width: 24,
height: 24,
marginHorizontal: 8,
},
cameraIcon: {
width: 24,
height: 24,
marginHorizontal: 8,
},
sendIcon: {
width: 24,
height: 24,
marginLeft: 8,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
paddingVertical: 8,
},
activeNavText: {
color: '#007AFF',
fontWeight: 'bold',
},
});
export default DiscussionScreen;