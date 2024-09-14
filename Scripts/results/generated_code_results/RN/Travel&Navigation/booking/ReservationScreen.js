import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const ReservationScreen = () => {
const navigation = useNavigation();
const [roomCount, setRoomCount] = useState(1);
const [selectedBedType, setSelectedBedType] = useState('无偏好');
const increaseRoomCount = () => {
setRoomCount(prevCount => prevCount + 1);
};
const decreaseRoomCount = () => {
if (roomCount > 1) {
setRoomCount(prevCount => prevCount - 1);
}
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.navigate('TypeDetails')} style={styles.closeButton}>
<Text style={styles.closeButtonText}>X</Text>
</TouchableOpacity>
<Text style={styles.headerTitle}>标准间</Text>
</View>
  <View style={styles.roomCountContainer}>
    <Text style={styles.label}>客房数量</Text>
    <View style={styles.roomCountControls}>
      <TouchableOpacity onPress={decreaseRoomCount} style={styles.countButton}>
        <Text style={styles.countButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.roomCount}>{roomCount}</Text>
      <TouchableOpacity onPress={increaseRoomCount} style={styles.countButton}>
        <Text style={styles.countButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.separator} />

  <View style={styles.bedTypeContainer}>
    <Text style={styles.label}>标准间 1</Text>
    <Text style={styles.subLabel}>选择床型</Text>
    <Text style={styles.note}>请求能否满足需视供应情况而定</Text>

    {['无偏好', '2张单人床', '1张超大号双人床'].map((bedType) => (
      <TouchableOpacity
        key={bedType}
        style={styles.bedTypeOption}
        onPress={() => setSelectedBedType(bedType)}
      >
        <View style={[styles.radioButton, selectedBedType === bedType && styles.radioButtonSelected]} />
        <Text style={styles.bedTypeText}>{bedType}</Text>
      </TouchableOpacity>
    ))}
  </View>

  <View style={styles.priceContainer}>
    <Text style={styles.priceLabel}>707元</Text>
    <Text style={styles.priceNote}>含税费及其他费用</Text>
  </View>

  <TouchableOpacity
    style={styles.confirmButton}
    onPress={() => {
      // Here you would typically handle the reservation confirmation
      // For now, we'll just navigate back to the TypeDetails screen
      navigation.navigate('TypeDetails');
    }}
  >
    <Text style={styles.confirmButtonText}>确认</Text>
  </TouchableOpacity>
</ScrollView>
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
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
closeButton: {
padding: 10,
},
closeButtonText: {
fontSize: 20,
fontWeight: 'bold',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
marginLeft: 20,
},
roomCountContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
},
label: {
fontSize: 16,
fontWeight: 'bold',
},
roomCountControls: {
flexDirection: 'row',
alignItems: 'center',
},
countButton: {
width: 30,
height: 30,
borderRadius: 15,
backgroundColor: '#f0f0f0',
justifyContent: 'center',
alignItems: 'center',
},
countButtonText: {
fontSize: 20,
fontWeight: 'bold',
},
roomCount: {
fontSize: 18,
marginHorizontal: 15,
},
separator: {
height: 1,
backgroundColor: '#e0e0e0',
marginHorizontal: 15,
},
bedTypeContainer: {
padding: 15,
},
subLabel: {
fontSize: 14,
color: '#666',
marginTop: 5,
},
note: {
fontSize: 12,
color: '#999',
marginTop: 5,
marginBottom: 10,
},
bedTypeOption: {
flexDirection: 'row',
alignItems: 'center',
marginVertical: 10,
},
radioButton: {
width: 20,
height: 20,
borderRadius: 10,
borderWidth: 2,
borderColor: '#0066cc',
marginRight: 10,
},
radioButtonSelected: {
backgroundColor: '#0066cc',
},
bedTypeText: {
fontSize: 16,
},
priceContainer: {
padding: 15,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
priceLabel: {
fontSize: 20,
fontWeight: 'bold',
color: '#0066cc',
},
priceNote: {
fontSize: 12,
color: '#666',
marginTop: 5,
},
confirmButton: {
backgroundColor: '#0066cc',
padding: 15,
margin: 15,
borderRadius: 5,
alignItems: 'center',
},
confirmButtonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
});
export default ReservationScreen;