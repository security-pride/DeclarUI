import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SelectScreen = () => {
const navigation = useNavigation();
const handleConversionOption = (option) => {
// Here you would implement the actual conversion logic
console.log(Converting ${option});
// After conversion, navigate back to home screen
navigation.navigate('home', { conversionCompleted: true });
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.title}>PDF file management</Text>
<TouchableOpacity onPress={() => navigation.navigate('search')}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('sort')}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
  <View style={styles.conversionOptions}>
    <TouchableOpacity 
      style={styles.optionButton} 
      onPress={() => handleConversionOption('DOC TO PDF')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
      <Text style={styles.optionText}>DOC TO PDF</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={styles.optionButton} 
      onPress={() => handleConversionOption('IMG TO PDF')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.optionIcon} />
      <Text style={styles.optionText}>IMG TO PDF</Text>
    </TouchableOpacity>
  </View>
  
  <View style={styles.fileList}>
    {[1, 2, 3, 4, 5].map((item) => (
      <View key={item} style={styles.fileItem}>
        <Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>Travel plan_America.pdf</Text>
          <Text style={styles.fileDetails}>Oct 22,2022    98KB</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('more', { fileId: item })}>
          <Text style={styles.moreOptions}>⋮</Text>
        </TouchableOpacity>
      </View>
    ))}
  </View>
  
  <TouchableOpacity 
    style={styles.addButton}
    onPress={() => navigation.navigate('select')}
  >
    <Text style={styles.addButtonText}>+</Text>
  </TouchableOpacity>
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
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#f0f0f0',
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
icon: {
width: 24,
height: 24,
},
conversionOptions: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 20,
backgroundColor: '#fff',
borderRadius: 10,
margin: 10,
elevation: 5,
},
optionButton: {
alignItems: 'center',
},
optionIcon: {
width: 50,
height: 50,
},
optionText: {
marginTop: 10,
fontSize: 16,
},
fileList: {
flex: 1,
},
fileItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
pdfIcon: {
width: 40,
height: 40,
marginRight: 10,
},
fileInfo: {
flex: 1,
},
fileName: {
fontSize: 16,
fontWeight: 'bold',
},
fileDetails: {
fontSize: 14,
color: '#888',
},
moreOptions: {
fontSize: 20,
paddingHorizontal: 10,
},
addButton: {
position: 'absolute',
right: 20,
bottom: 20,
width: 60,
height: 60,
borderRadius: 30,
backgroundColor: 'red',
justifyContent: 'center',
alignItems: 'center',
},
addButtonText: {
color: '#fff',
fontSize: 30,
},
});
export default SelectScreen;