import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, StatusBar, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const PDFFileItem = ({ item, onMorePress }) => (
<View style={styles.pdfFileItem}>
<ImageBackground
source={require('../assets/snack-icon.png')}
style={styles.pdfIcon}
>
<Text style={styles.fileName}>{item.name}</Text>
<Text style={styles.fileInfo}>{${item.date} ${item.size}}</Text>
</ImageBackground>
<Pressable onPress={() => onMorePress(item)} style={styles.moreButton}>
<Text style={styles.moreButtonText}>⋮</Text>
</Pressable>
</View>
);
const HomeScreen = () => {
const navigation = useNavigation();
const [pdfFiles, setPdfFiles] = useState([
{ id: '1', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '2', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '3', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '4', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '5', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '6', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
]);
const handleMorePress = (item) => {
navigation.navigate('more', { file: item });
};
const handleSearchPress = () => {
navigation.navigate('search');
};
const handleAddPress = () => {
navigation.navigate('select');
};
const handleMenuPress = () => {
navigation.navigate('sort');
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
<Text style={styles.menuButtonText}>☰</Text>
</TouchableOpacity>
<Text style={styles.title}>PDF file management</Text>
<TouchableOpacity onPress={handleSearchPress} style={styles.searchButton}>
<Text style={styles.searchButtonText}>🔍</Text>
</TouchableOpacity>
</View>
<FlatList
data={pdfFiles}
renderItem={({ item }) => (
<PDFFileItem item={item} onMorePress={handleMorePress} />
)}
keyExtractor={(item) => item.id}
style={styles.fileList}
/>
<TouchableOpacity onPress={handleAddPress} style={styles.addButton}>
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
alignItems: 'center',
justifyContent: 'space-between',
padding: 10,
backgroundColor: '#f0f0f0',
},
menuButton: {
padding: 10,
},
menuButtonText: {
fontSize: 20,
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
searchButton: {
padding: 10,
},
searchButtonText: {
fontSize: 20,
},
fileList: {
flex: 1,
},
pdfFileItem: {
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
justifyContent: 'center',
alignItems: 'center',
},
fileName: {
fontSize: 16,
fontWeight: 'bold',
},
fileInfo: {
fontSize: 12,
color: '#666',
},
moreButton: {
padding: 10,
marginLeft: 'auto',
},
moreButtonText: {
fontSize: 20,
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
export default HomeScreen;