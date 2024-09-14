import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const [searchQuery, setSearchQuery] = useState('');
const [filteredFiles, setFilteredFiles] = useState([]);
const navigation = useNavigation();
const dummyFiles = [
{ id: '1', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '2', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '3', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '4', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '5', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
{ id: '6', name: 'Travel plan_America.pdf', date: 'Oct 22,2022', size: '98KB' },
];
const handleSearch = (text) => {
setSearchQuery(text);
const filtered = dummyFiles.filter(file =>
file.name.toLowerCase().includes(text.toLowerCase())
);
setFilteredFiles(filtered);
};
const handleFinishSearch = () => {
navigation.navigate('home', { updatedFiles: filteredFiles });
};
const renderFileItem = ({ item }) => (
<View style={styles.fileItem}>
<Image source={require('../assets/snack-icon.png')} style={styles.pdfIcon} />
<View style={styles.fileDetails}>
<Text style={styles.fileName}>{item.name}</Text>
<Text style={styles.fileInfo}>{${item.date}    ${item.size}}</Text>
</View>
<TouchableOpacity style={styles.moreButton}>
<Text style={styles.moreButtonText}>⋮</Text>
</TouchableOpacity>
</View>
);
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.title}>PDF file management</Text>
<TouchableOpacity onPress={handleFinishSearch} style={styles.searchButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
</TouchableOpacity>
</View>
<View style={styles.searchBarContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="Search your files" value={searchQuery} onChangeText={handleSearch} onSubmitEditing={handleFinishSearch} />
</View>
<FlatList data={filteredFiles.length > 0 ? filteredFiles : dummyFiles}
renderItem={renderFileItem}
keyExtractor={item => item.id}
style={styles.fileList}
/>
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
searchButton: {
padding: 10,
},
searchIcon: {
width: 20,
height: 20,
},
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 20,
margin: 10,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
height: 40,
marginLeft: 10,
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
fileDetails: {
flex: 1,
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
export default SearchScreen;