import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
const ShareScreen = ({ navigation }) => {
const handleShare = (platform) => {
console.log(Sharing to ${platform});
// Implement sharing logic here
};
const handleAction = (action) => {
console.log(Performing action: ${action});
// Implement action logic here
};
return (
<SafeAreaView style={styles.container}>
<ScrollView>
<View style={styles.header}>
<Text style={styles.headerText}>Following</Text>
<Text style={styles.headerTextActive}>For You</Text>
</View>
    <View style={styles.contentPreview}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.previewImage} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.avatar} />
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.likeContainer}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.heartIcon} />
        <Text style={styles.likeCount}>328.7K</Text>
      </View>
    </View>

    <Text style={styles.shareTo}>Share to</Text>

    <View style={styles.shareOptionsContainer}>
      {['WhatsApp', 'WhatsApp status', 'Message', 'SMS', 'Messenger', 'Instagram'].map((option, index) => (
        <TouchableOpacity key={index} style={styles.shareOption} onPress={() => handleShare(option)}>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.shareIcon} />
          <Text style={styles.shareOptionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.actionOptionsContainer}>
      {['Report', 'Not interested', 'Save video', 'Duet', 'React', 'Add to Favorites'].map((action, index) => (
        <TouchableOpacity key={index} style={styles.actionOption} onPress={() => handleAction(action)}>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
          <Text style={styles.actionOptionText}>{action}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </ScrollView>

  <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
    <Text style={styles.cancelText}>Cancel</Text>
  </TouchableOpacity>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white',
},
header: {
flexDirection: 'row',
justifyContent: 'center',
paddingVertical: 10,
},
headerText: {
fontSize: 16,
fontWeight: '500',
marginHorizontal: 15,
color: 'gray',
},
headerTextActive: {
fontSize: 16,
fontWeight: 'bold',
marginHorizontal: 15,
color: 'black',
},
contentPreview: {
height: 300,
backgroundColor: '#f0f0f0',
justifyContent: 'center',
alignItems: 'center',
},
previewImage: {
width: '100%',
height: '100%',
resizeMode: 'cover',
},
avatarContainer: {
position: 'absolute',
right: 10,
bottom: 60,
},
avatar: {
width: 40,
height: 40,
borderRadius: 20,
borderWidth: 2,
borderColor: 'white',
},
plusButton: {
position: 'absolute',
bottom: -5,
right: -5,
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
plusButtonText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
likeContainer: {
position: 'absolute',
right: 10,
bottom: 10,
flexDirection: 'row',
alignItems: 'center',
},
heartIcon: {
width: 24,
height: 24,
tintColor: 'white',
},
likeCount: {
color: 'white',
marginLeft: 5,
},
shareTo: {
fontSize: 18,
fontWeight: 'bold',
margin: 15,
},
shareOptionsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
paddingHorizontal: 10,
},
shareOption: {
alignItems: 'center',
marginBottom: 20,
width: '16%',
},
shareIcon: {
width: 50,
height: 50,
borderRadius: 25,
},
shareOptionText: {
marginTop: 5,
fontSize: 12,
textAlign: 'center',
},
actionOptionsContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'space-around',
paddingHorizontal: 10,
marginTop: 20,
},
actionOption: {
alignItems: 'center',
marginBottom: 20,
width: '16%',
},
actionIcon: {
width: 40,
height: 40,
},
actionOptionText: {
marginTop: 5,
fontSize: 12,
textAlign: 'center',
},
cancelButton: {
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 15,
},
cancelText: {
textAlign: 'center',
fontSize: 16,
color: 'black',
},
});
export default ShareScreen;