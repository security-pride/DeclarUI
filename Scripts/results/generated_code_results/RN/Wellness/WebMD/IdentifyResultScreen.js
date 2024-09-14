import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const IdentifyResultScreen = () => {
const navigation = useNavigation();
const searchResults = [
{
id: '1',
name: 'Abilify',
description: 'This medicine is a pink, round, tablet imprinted with "A-011 30".',
image: '../assets/abilify_pink_pill.png',
},
{
id: '2',
name: 'Abilify',
description: 'This medicine is a white, round, tablet imprinted with "A-010 20".',
image: '../assets/abilify_white_pill.png',
},
{
id: '3',
name: 'Abilify',
description: 'This medicine is a yellow, round, tablet imprinted with "A-009 15".',
image: '../assets/abilify_yellow_pill.png',
},
{
id: '4',
name: 'acamprosate CALCIUM',
description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "435".',
image: '../assets/acamprosate_435_pill.png',
},
{
id: '5',
name: 'acamprosate CALCIUM',
description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "569".',
image: '../assets/acamprosate_569_pill.png',
},
{
id: '6',
name: 'acamprosate CALCIUM',
description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "77" and "1140".',
image: '../assets/acamprosate_77_1140_pill.png',
},
{
id: '7',
name: 'acamprosate CALCIUM',
description: 'This medicine is a white, round, enteric-coated, tablet imprinted with "M AC".',
image: '../assets/acamprosate_mac_pill.png',
},
];
const renderItem = ({ item }) => (
<TouchableOpacity
style={styles.resultItem}
onPress={() => navigation.navigate('ResultDetail', { pillId: item.id })}
>
<Image source={{ uri: item.image }} style={styles.pillImage} />
<View style={styles.textContainer}>
<Text style={styles.pillName}>{item.name}</Text>
<Text style={styles.pillDescription}>{item.description}</Text>
</View>
<TouchableOpacity style={styles.arrowContainer}>
<Text style={styles.arrowText}>{'>'}</Text>
</TouchableOpacity>
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('PillIdentifier')}>
<Image source={{ uri: '../assets/back_arrow.png' }} style={styles.backArrow} />
</TouchableOpacity>
<Text style={styles.title}>Search Results</Text>
</View>
<FlatList
data={searchResults}
renderItem={renderItem}
keyExtractor={(item) => item.id}
contentContainerStyle={styles.listContainer}
/>
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
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
backArrow: {
width: 24,
height: 24,
marginRight: 16,
},
title: {
fontSize: 20,
fontWeight: 'bold',
},
listContainer: {
paddingVertical: 8,
},
resultItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
pillImage: {
width: 60,
height: 60,
marginRight: 16,
borderRadius: 8,
},
textContainer: {
flex: 1,
},
pillName: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 4,
},
pillDescription: {
fontSize: 14,
color: '#666',
},
arrowContainer: {
padding: 8,
},
arrowText: {
fontSize: 18,
color: '#999',
},
});
export default IdentifyResultScreen;