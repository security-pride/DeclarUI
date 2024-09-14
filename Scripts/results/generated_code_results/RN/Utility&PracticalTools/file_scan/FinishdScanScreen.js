import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FinishScanPage = () => {
const [fileName, setFileName] = useState('File name');
const navigation = useNavigation();
const handleSavePDF = () => {
// Save PDF logic here
navigation.navigate('Home');
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.time}>9:41</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
</View>
  <View style={styles.fileNameContainer}>
    <TextInput
      style={styles.fileNameInput}
      value={fileName}
      onChangeText={setFileName}
    />
    <TouchableOpacity style={styles.savePDFButton} onPress={handleSavePDF}>
      <Text style={styles.savePDFText}>Save PDF</Text>
    </TouchableOpacity>
  </View>

  <ScrollView style={styles.documentPreview}>
    <View style={styles.documentHeader}>
      <Text style={styles.documentTitle}>LOREM IPSUM</Text>
      <Text style={styles.contactInfo}>info@companyname.com</Text>
      <Text style={styles.contactInfo}>Dummy Road 125c</Text>
      <Text style={styles.contactInfo}>Street Location, City, Area</Text>
      <Text style={styles.contactInfo}>+00 1234 5678 9012</Text>
      <Text style={styles.contactInfo}>+00 1234 5678 9012</Text>
    </View>

    <Text style={styles.headline}>HEADLINE</Text>

    <Text style={styles.bodyText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium
      consectetur. Curabitur femar posuere massa in varius. Pellentesque viverra nibh
      eu vehicula mattis. Nullam porta facilisis justo, a feugiat dolor sodales sed.
      Vestibulum neque nisl, elementum tincidunt metus ut amet, sagittis hendrerit
      enim. Aenean a blandit elit, vel rutrum mi. Nunc eleifend turpis sed massa aliquet
      tincidunt.
    </Text>

    <Text style={styles.bodyText}>
      Pellentesque id neque ligula. Nullam posuere, ligula e mattis posuere, lacus nisl
      adipiscing nunc, eu congue justo est ut diam. Nam quam nibh, dignissim non
      consequat in, semper eget purus. Nulla arcu sapien, viverra vitae metus tempor,
      congue ornare diam.
    </Text>

    <Text style={styles.bodyText}>
      Pellentesque vel nibh tempus, ullamcorper felis sed, bibendum augue. Phasellus
      pellentesque justo et quam aliquam sollicitudin. Sed eget nibh mollis, mattis sem
      et, viverra nulla.
    </Text>

    <Text style={styles.signature}>Creative Art Director</Text>
    <Text style={styles.signatureSub}>Pellentesque id neque ligula. Nullam posuere</Text>
    <Text style={styles.signatureSub}>www.companyname.com</Text>
  </ScrollView>

  <View style={styles.pageIndicator}>
    <Text style={styles.pageNumber}>Page 1 of 5</Text>
  </View>

  <View style={styles.toolbar}>
    <TouchableOpacity style={styles.toolbarItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
      <Text style={styles.toolbarText}>Sign</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
      <Text style={styles.toolbarText}>Reorder</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarItem}>
      <Text style={styles.toolbarText}>Add page</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.toolbarIcon} />
      <Text style={styles.toolbarText}>Rotate</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.toolbarItem}>
      <Text style={styles.toolbarText}>Color</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#085d5e',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 10,
},
time: {
color: 'white',
fontSize: 16,
},
signalIcon: {
width: 20,
height: 20,
},
fileNameContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
fileNameInput: {
flex: 1,
color: 'white',
fontSize: 18,
borderBottomWidth: 1,
borderBottomColor: 'white',
},
savePDFButton: {
marginLeft: 10,
},
savePDFText: {
color: 'white',
fontSize: 16,
},
documentPreview: {
flex: 1,
backgroundColor: 'white',
margin: 10,
borderRadius: 10,
padding: 20,
},
documentHeader: {
marginBottom: 20,
},
documentTitle: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
contactInfo: {
fontSize: 12,
color: '#666',
},
headline: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
bodyText: {
fontSize: 14,
marginBottom: 10,
},
signature: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 20,
},
signatureSub: {
fontSize: 12,
color: '#666',
},
pageIndicator: {
alignItems: 'center',
padding: 10,
},
pageNumber: {
color: 'white',
},
toolbar: {
flexDirection: 'row',
justifyContent: 'space-around',
backgroundColor: '#064344',
padding: 10,
},
toolbarItem: {
alignItems: 'center',
},
toolbarIcon: {
width: 24,
height: 24,
tintColor: '#04c9c1',
},
toolbarText: {
color: '#04c9c1',
fontSize: 12,
},
});
export default FinishScanPage;