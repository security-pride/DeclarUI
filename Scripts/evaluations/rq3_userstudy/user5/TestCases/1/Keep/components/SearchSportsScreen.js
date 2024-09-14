import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchSports = () => {
const navigation = useNavigation();
const [selectedSport, setSelectedSport] = useState('运动日历');
const sportOptions = [
{ id: '1', name: '运动日历', icon: 'lightning' },
{ id: '2', name: '户外跑步', icon: 'run' },
{ id: '3', name: '户外行走', icon: 'walk' },
{ id: '4', name: '跳绳', icon: 'jump-rope' },
{ id: '5', name: '室内骑行', icon: 'indoor-cycle' },
{ id: '6', name: '户外骑行', icon: 'outdoor-cycle' },
{ id: '7', name: '室内跑步', icon: 'indoor-run' },
{ id: '8', name: '室内行走', icon: 'indoor-walk' },
{ id: '9', name: '爬楼梯', icon: 'stairs' },
{ id: '10', name: '室内行走', icon: 'indoor-walk' },
];
const handleSportSelect = (sportName) => {
setSelectedSport(sportName);
navigation.navigate('Sports', { selectedType: sportName });
};
const renderSportItem = ({ item }) => (
<TouchableOpacity
style={styles.sportItem}
onPress={() => handleSportSelect(item.name)}
>
<Image
source={require('../assets/snack-icon.png')}
style={styles.sportIcon}
/>
<Text style={styles.sportName}>{item.name}</Text>
{selectedSport === item.name && (
<View style={styles.selectedIndicator} />
)}
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.title}>选择运动类别</Text>
<TouchableOpacity
style={styles.closeButton}
onPress={() => navigation.goBack()}
>
<Text style={styles.closeButtonText}>×</Text>
</TouchableOpacity>
</View>
  <View style={styles.subHeader}>
    <Text style={styles.subHeaderText}>我的运动</Text>
    <TouchableOpacity style={styles.manageButton}>
      <Image
        source={{ uri: '../assets/edit-icon.png' }}
        style={styles.editIcon}
      />
      <Text style={styles.manageButtonText}>管理</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={sportOptions}
    renderItem={renderSportItem}
    keyExtractor={(item) => item.id}
    style={styles.sportList}
  />

  <Text style={styles.sectionTitle}>跑走骑运动</Text>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffffff',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
title: {
fontSize: 18,
fontWeight: 'bold',
},
closeButton: {
padding: 8,
},
closeButtonText: {
fontSize: 24,
color: '#000000',
},
subHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
subHeaderText: {
fontSize: 16,
color: '#888888',
},
manageButton: {
flexDirection: 'row',
alignItems: 'center',
},
editIcon: {
width: 16,
height: 16,
marginRight: 4,
},
manageButtonText: {
fontSize: 14,
color: '#333333',
},
sportList: {
flex: 1,
},
sportItem: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
sportIcon: {
width: 24,
height: 24,
marginRight: 16,
},
sportName: {
fontSize: 16,
flex: 1,
},
selectedIndicator: {
width: 20,
height: 20,
borderRadius: 10,
backgroundColor: '#4CAF50',
},
sectionTitle: {
fontSize: 16,
color: '#888888',
padding: 16,
backgroundColor: '#f5f5f5',
},
});
export default SearchSports;