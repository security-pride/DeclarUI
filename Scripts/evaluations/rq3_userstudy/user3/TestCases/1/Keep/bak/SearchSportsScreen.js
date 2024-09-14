import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchSportsScreen = () => {
const navigation = useNavigation();
const [selectedSport, setSelectedSport] = useState('运动日历');
const sportOptions = [
{ id: '1', name: '运动日历', icon: 'lightning' },
{ id: '2', name: '户外跑步', icon: 'running' },
{ id: '3', name: '户外行走', icon: 'walking' },
{ id: '4', name: '跳绳', icon: 'jumprope' },
{ id: '5', name: '室内骑行', icon: 'indoor-cycling' },
{ id: '6', name: '户外骑行', icon: 'outdoor-cycling' },
{ id: '7', name: '室内跑步', icon: 'indoor-running' },
{ id: '8', name: '室内行走', icon: 'indoor-walking' },
{ id: '9', name: '爬楼梯', icon: 'stairs' },
];
const renderSportItem = ({ item }) => (
<TouchableOpacity
style={styles.sportItem}
onPress={() => setSelectedSport(item.name)}
>
<Image source={require('../assets/snack-icon.png')} style={styles.sportIcon} />
<Text style={styles.sportText}>{item.name}</Text>
{selectedSport === item.name && (
<View style={styles.selectedIndicator} />
)}
</TouchableOpacity>
);
const handleConfirm = () => {
navigation.navigate('Sports', { selectedSport });
};
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>选择运动类别</Text>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
<Text style={styles.closeButtonText}>✕</Text>
</TouchableOpacity>
</View>
  <View style={styles.subHeader}>
    <Text style={styles.subHeaderText}>我的运动</Text>
    <TouchableOpacity style={styles.manageButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.editIcon} />
      <Text style={styles.manageButtonText}>管理</Text>
    </TouchableOpacity>
  </View>

  <FlatList
    data={sportOptions}
    renderItem={renderSportItem}
    keyExtractor={item => item.id}
    style={styles.list}
  />

  <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
    <Text style={styles.confirmButtonText}>确认</Text>
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
padding: 16,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
closeButton: {
padding: 8,
},
closeButtonText: {
fontSize: 20,
color: '#000',
},
subHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 16,
},
subHeaderText: {
fontSize: 16,
color: '#666',
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
color: '#666',
},
list: {
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
sportText: {
fontSize: 16,
flex: 1,
},
selectedIndicator: {
width: 20,
height: 20,
borderRadius: 10,
backgroundColor: '#4CAF50',
},
confirmButton: {
backgroundColor: '#4CAF50',
padding: 16,
alignItems: 'center',
margin: 16,
borderRadius: 8,
},
confirmButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
});
export default SearchSportsScreen;