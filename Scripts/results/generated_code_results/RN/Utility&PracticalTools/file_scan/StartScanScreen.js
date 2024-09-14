import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
const StartScanPage = () => {
const navigation = useNavigation();
const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
const [autoMode, setAutoMode] = useState(false);
const handleCapture = async () => {
// Capture image logic here
navigation.navigate('FinishScan');
};
const toggleFlash = () => {
setFlashMode(
flashMode === Camera.Constants.FlashMode.off
? Camera.Constants.FlashMode.on
: Camera.Constants.FlashMode.off
);
};
const toggleAutoMode = () => {
setAutoMode(!autoMode);
};
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</View>
</View>
  <Text style={styles.instructionText}>Position photo within frame</Text>

  <View style={styles.cameraContainer}>
    <Camera style={styles.camera} flashMode={flashMode}>
      <View style={styles.frameBorder}>
        <View style={styles.documentPreview}>
          <Text style={styles.documentTitle}>LOREM IPSUM</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.infoText}>info@companyname.com</Text>
            <Text style={styles.infoText}>Dummy Road 125c</Text>
            <Text style={styles.infoText}>Street Location, City, Area</Text>
            <Text style={styles.infoText}>+00 1234 5678 9012</Text>
            <Text style={styles.infoText}>+00 1234 5678 9012</Text>
          </View>
          <Text style={styles.headlineText}>HEADLINE</Text>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium
            consectetur. Curabitur femar posuere massa in varius. Pellentesque viverra nibh
            eu vehicula mattis. Nullam porta facilisis justo, a feugiat dolor sodales sed.
            Vestibulum neque nisl, elementum tincidunt metus ut amet, sagittis hendrerit
            enim. Aenean a blandit elit, vel rutrum mi. Nunc eleifend turpis sed massa aliquet
            tincidunt.
          </Text>
          <Text style={styles.signature}>Creative Art Director</Text>
          <Text style={styles.signatureSub}>Pellentesque id neque ligula. Nullam posuere</Text>
          <Text style={styles.signatureSub}>www.companyname.com</Text>
        </View>
      </View>
    </Camera>
  </View>

  <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.bottomButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.buttonIcon} />
      <Text style={styles.buttonText}>Import</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomButton} onPress={toggleAutoMode}>
      <Image source={require('../assets/snack-icon.png')} style={styles.buttonIcon} />
      <Text style={styles.buttonText}>Auto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
      <Image source={require('../assets/snack-icon.png')} style={styles.captureIcon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomButton} onPress={toggleFlash}>
      <Image source={require('../assets/snack-icon.png')} style={styles.buttonIcon} />
      <Text style={styles.buttonText}>Flash</Text>
    </TouchableOpacity>
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>3</Text>
    </View>
  </View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#004d40',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
height: 44,
},
time: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
icon: {
width: 20,
height: 20,
marginLeft: 5,
},
instructionText: {
color: 'white',
fontSize: 18,
textAlign: 'center',
marginVertical: 20,
},
cameraContainer: {
flex: 1,
overflow: 'hidden',
},
camera: {
flex: 1,
},
frameBorder: {
flex: 1,
margin: 20,
borderWidth: 2,
borderColor: 'white',
borderRadius: 10,
},
documentPreview: {
flex: 1,
backgroundColor: 'white',
padding: 20,
},
documentTitle: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
contactInfo: {
marginBottom: 20,
},
infoText: {
fontSize: 12,
color: '#666',
},
headlineText: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
bodyText: {
fontSize: 14,
marginBottom: 20,
},
signature: {
fontSize: 16,
fontWeight: 'bold',
},
signatureSub: {
fontSize: 12,
color: '#666',
},
bottomBar: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
backgroundColor: '#00695c',
paddingVertical: 20,
},
bottomButton: {
alignItems: 'center',
},
buttonIcon: {
width: 30,
height: 30,
tintColor: 'white',
},
buttonText: {
color: 'white',
marginTop: 5,
},
captureButton: {
width: 70,
height: 70,
borderRadius: 35,
backgroundColor: '#00bfa5',
justifyContent: 'center',
alignItems: 'center',
},
captureIcon: {
width: 40,
height: 40,
tintColor: 'white',
},
counterContainer: {
width: 30,
height: 30,
borderRadius: 15,
backgroundColor: '#ffd54f',
justifyContent: 'center',
alignItems: 'center',
},
counterText: {
color: '#004d40',
fontWeight: 'bold',
},
});
export default StartScanPage;