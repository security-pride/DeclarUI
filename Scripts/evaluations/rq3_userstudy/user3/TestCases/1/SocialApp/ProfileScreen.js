import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
const navigation = useNavigation();
const handleBack = () => {
navigation.goBack();
};
const handleStartConversation = () => {
navigation.navigate('Messages');
};
const handleDismiss = () => {
navigation.goBack();
};
const handleLike = () => {
// Handle like action
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.backgroundImage}
>
<View style={styles.header}>
<TouchableOpacity onPress={handleBack} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.batteryIcon} />
</View>
</View>
    <View style={styles.profileInfo}>
      <View style={styles.potentialMatchBadge}>
        <Image source={require('../assets/snack-icon.png')} style={styles.boltIcon} />
        <Text style={styles.potentialMatchText}>Potential Match!</Text>
      </View>
      <Text style={styles.name}>Klee Gracia, 24</Text>
      <Image source={require('../assets/snack-icon.png')} style={styles.verifiedIcon} />
      <View style={styles.interestsContainer}>
        {['Running', 'Outdoor', 'Anime'].map((interest, index) => (
          <TouchableOpacity key={index} style={styles.interestTag}>
            <Text style={styles.interestText}>{interest}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.bio}>
        Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections.
      </Text>
    </View>

    <View style={styles.actionButtons}>
      <TouchableOpacity onPress={handleDismiss} style={styles.actionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStartConversation} style={[styles.actionButton, styles.startConversationButton]}>
        <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
        <Text style={styles.startConversationText}>Start Conversation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.actionIcon} />
      </TouchableOpacity>
    </View>
  </ImageBackground>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
},
backgroundImage: {
flex: 1,
resizeMode: 'cover',
justifyContent: 'space-between',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 20,
},
backButton: {
padding: 10,
},
backIcon: {
width: 20,
height: 20,
tintColor: 'white',
},
statusIcons: {
flexDirection: 'row',
},
wifiIcon: {
width: 15,
height: 15,
marginRight: 5,
tintColor: 'white',
},
signalIcon: {
width: 15,
height: 15,
marginRight: 5,
tintColor: 'white',
},
batteryIcon: {
width: 20,
height: 15,
tintColor: 'white',
},
profileInfo: {
padding: 20,
},
potentialMatchBadge: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'rgba(0,0,0,0.5)',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
alignSelf: 'flex-start',
marginBottom: 10,
},
boltIcon: {
width: 15,
height: 15,
marginRight: 5,
tintColor: 'yellow',
},
potentialMatchText: {
color: 'white',
fontWeight: 'bold',
},
name: {
color: 'white',
fontSize: 24,
fontWeight: 'bold',
},
verifiedIcon: {
width: 20,
height: 20,
marginLeft: 5,
},
interestsContainer: {
flexDirection: 'row',
marginTop: 10,
},
interestTag: {
backgroundColor: 'rgba(255,255,255,0.2)',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
marginRight: 10,
},
interestText: {
color: 'white',
},
bio: {
color: 'white',
marginTop: 10,
},
actionButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 20,
},
actionButton: {
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 15,
borderRadius: 30,
},
startConversationButton: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20,
},
actionIcon: {
width: 25,
height: 25,
tintColor: 'white',
},
startConversationText: {
color: 'white',
marginLeft: 10,
fontWeight: 'bold',
},
});
export default Profile;