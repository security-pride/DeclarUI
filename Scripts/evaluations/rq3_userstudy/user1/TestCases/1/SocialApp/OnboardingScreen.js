import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Onboarding = () => {
const navigation = useNavigation();
const handleContinue = (method) => {
// Here you would typically handle the authentication process
// For now, we'll just navigate to the Homepage
navigation.navigate('Homepage');
};
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.backgroundImage}
>
<View style={styles.content}>
<Text style={styles.time}>9:41</Text>
<View style={styles.logoContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.logo} />
<Text style={styles.logoText}>heact</Text>
</View>
<View style={styles.textContainer}>
<Text style={styles.title}>Effortlessly Discover Your Ideal Match</Text>
<Text style={styles.subtitle}>
Experience a seamless journey uncovering the ideal match that aligns with your preferences and aspirations
</Text>
</View>
<View style={styles.buttonContainer}>
<TouchableOpacity
style={[styles.button, styles.appleButton]}
onPress={() => handleContinue('apple')}
>
<Image source={require('../assets/snack-icon.png')} style={styles.buttonIcon} />
<Text style={styles.buttonText}>Continue with Apple</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.button, styles.facebookButton]}
onPress={() => handleContinue('facebook')}
>
<Image source={require('../assets/snack-icon.png')} style={styles.buttonIcon} />
<Text style={styles.buttonText}>Continue with Facebook</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.button, styles.phoneButton]}
onPress={() => handleContinue('phone')}
>
<Text style={styles.buttonText}>Use Phone Number</Text>
</TouchableOpacity>
</View>
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
},
content: {
flex: 1,
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 20,
},
time: {
color: '#fff',
fontSize: 16,
position: 'absolute',
top: 10,
left: 20,
},
logoContainer: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginTop: 50,
},
logo: {
width: 30,
height: 30,
marginRight: 10,
},
logoText: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
},
textContainer: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
title: {
color: '#fff',
fontSize: 28,
fontWeight: 'bold',
textAlign: 'center',
marginBottom: 20,
},
subtitle: {
color: '#fff',
fontSize: 16,
textAlign: 'center',
marginBottom: 40,
},
buttonContainer: {
width: '100%',
marginBottom: 20,
},
button: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
padding: 15,
borderRadius: 25,
marginBottom: 15,
},
appleButton: {
backgroundColor: '#fff',
},
facebookButton: {
backgroundColor: '#1877F2',
},
phoneButton: {
backgroundColor: '#333',
},
buttonIcon: {
width: 20,
height: 20,
marginRight: 10,
},
buttonText: {
fontSize: 16,
fontWeight: 'bold',
},
});
export default Onboarding;