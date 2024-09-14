import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchScreen = () => {
const navigation = useNavigation();
const topSearches = ['Camp day', 'Halloween', 'Candy Challenge', 'Dancing', 'Christmas'];
const handleBackPress = () => {
navigation.navigate('home');
};
const renderTopSearchItem = (item) => (
<TouchableOpacity key={item} style={styles.topSearchItem}>
<Text style={styles.topSearchText}>{item}</Text>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="light-content" />
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Text style={styles.backButtonText}>←</Text>
</TouchableOpacity>
<View style={styles.searchBarContainer}>
<TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#999" />
</View>
</View>
<Text style={styles.topSearchTitle}>Top Search</Text>
<View style={styles.topSearchContainer}>
{topSearches.map(renderTopSearchItem)}
</View>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
header: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 10,
paddingTop: 10,
},
backButton: {
padding: 10,
},
backButtonText: {
color: '#fff',
fontSize: 24,
},
searchBarContainer: {
flex: 1,
backgroundColor: '#333',
borderRadius: 20,
marginLeft: 10,
},
searchInput: {
height: 40,
color: '#fff',
paddingHorizontal: 15,
},
topSearchTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
marginTop: 20,
marginLeft: 15,
},
topSearchContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
padding: 15,
},
topSearchItem: {
backgroundColor: '#333',
borderRadius: 20,
paddingHorizontal: 15,
paddingVertical: 8,
margin: 5,
},
topSearchText: {
color: '#fff',
},
});
export default SearchScreen;