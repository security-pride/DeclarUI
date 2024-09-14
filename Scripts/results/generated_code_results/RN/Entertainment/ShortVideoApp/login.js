import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
const navigation = useNavigation();
const handleSignIn = () => {
navigation.navigate('home');
};
const handleSocialLogin = (platform) => {
// Implement social login logic here
console.log(Logging in with ${platform});
// After successful login, navigate to home screen
navigation.navigate('home');
};
return (
<ImageBackground
source={{ uri: '../assets/snack-icon.png' }}
style={styles.backgroundImage}
>
<View style={styles.container}>
<View style={styles.logoContainer}>
<Image
source={{ uri: '../assets/snack-icon.png' }}
style={styles.logo}
/>
<Text style={styles.appName}>CutG</Text>
</View>
    <View style={styles.contentContainer}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.descriptionText}>
        Discover interesting short videos. Share your moments with the CutG community
      </Text>
    </View>

    <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
      <Text style={styles.signInButtonText}>Sign in</Text>
    </TouchableOpacity>

    <View style={styles.socialLoginContainer}>
      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => handleSocialLogin('Apple')}
      >
        <Image
          source={{ uri: '../assets/snack-icon.png' }}
          style={styles.socialIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => handleSocialLogin('Facebook')}
      >
        <Image
          source={{ uri: '../assets/snack-icon.png' }}
          style={styles.socialIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.socialButton}
        onPress={() => handleSocialLogin('Google')}
      >
        <Image
          source={{ uri: '../assets/snack-icon.png' }}
          style={styles.socialIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
</ImageBackground>
);
};
const styles = StyleSheet.create({
backgroundImage: {
flex: 1,
resizeMode: 'cover',
},
container: {
flex: 1,
backgroundColor: 'rgba(0, 0, 0, 0.5)',
justifyContent: 'space-between',
padding: 20,
},
logoContainer: {
alignItems: 'center',
marginTop: 50,
},
logo: {
width: 80,
height: 80,
},
appName: {
color: 'white',
fontSize: 32,
fontWeight: 'bold',
marginTop: 10,
},
contentContainer: {
alignItems: 'center',
},
welcomeText: {
color: 'white',
fontSize: 28,
fontWeight: 'bold',
marginBottom: 10,
},
descriptionText: {
color: 'white',
fontSize: 16,
textAlign: 'center',
},
signInButton: {
backgroundColor: '#39C5BB',
padding: 15,
borderRadius: 25,
alignItems: 'center',
marginBottom: 20,
},
signInButtonText: {
color: 'white',
fontSize: 18,
fontWeight: 'bold',
},
socialLoginContainer: {
flexDirection: 'row',
justifyContent: 'center',
marginBottom: 30,
},
socialButton: {
width: 50,
height: 50,
borderRadius: 25,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
marginHorizontal: 10,
},
socialIcon: {
width: 30,
height: 30,
},
});
export default LoginScreen;