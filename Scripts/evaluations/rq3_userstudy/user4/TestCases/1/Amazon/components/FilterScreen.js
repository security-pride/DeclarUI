import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FilterPage = () => {
const navigation = useNavigation();
const [orderTypeFilter, setOrderTypeFilter] = useState('Orders');
const [orderDateFilter, setOrderDateFilter] = useState('Last 3 months');
const handleApplyFilter = () => {
navigation.navigate('Orders', { orderTypeFilter, orderDateFilter });
};
const renderRadioButton = (value, selectedValue, onSelect) => (
<TouchableOpacity
style={[styles.radioButton, value === selectedValue && styles.radioButtonSelected]}
onPress={() => onSelect(value)}
>
{value === selectedValue && <View style={styles.radioButtonInner} />}
</TouchableOpacity>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<View style={styles.searchBar}>
<TextInput placeholder="Search Amazon.co.uk" style={styles.searchInput} />
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
</View>
</View>
  <ScrollView>
    <View style={styles.filterSection}>
      <Text style={styles.filterSectionTitle}>FILTER BY ORDER TYPE</Text>
      {['Orders', 'Not Yet Dispatched', 'Local shops', 'Cancelled'].map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.filterOption}
          onPress={() => setOrderTypeFilter(option)}
        >
          {renderRadioButton(option, orderTypeFilter, setOrderTypeFilter)}
          <Text style={styles.filterOptionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={styles.filterSection}>
      <Text style={styles.filterSectionTitle}>FILTER BY ORDER DATE</Text>
      {['Last 30 days', 'Last 3 months', '2024', '2023', '2022', '2021'].map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.filterOption}
          onPress={() => setOrderDateFilter(option)}
        >
          {renderRadioButton(option, orderDateFilter, setOrderDateFilter)}
          <Text style={styles.filterOptionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </ScrollView>

  <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}>
    <Text style={styles.applyButtonText}>Apply</Text>
  </TouchableOpacity>

  <View style={styles.bottomBar}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
      <View style={styles.cartBadge}>
        <Text style={styles.cartBadgeText}>2</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.bottomBarIcon} />
    </TouchableOpacity>
  </View>
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
padding: 10,
backgroundColor: '#e6f2ff',
},
backButton: {
marginRight: 10,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
borderRadius: 5,
paddingHorizontal: 10,
},
searchInput: {
flex: 1,
height: 40,
},
icon: {
width: 20,
height: 20,
marginLeft: 10,
},
filterSection: {
marginTop: 20,
paddingHorizontal: 15,
},
filterSectionTitle: {
fontWeight: 'bold',
marginBottom: 10,
},
filterOption: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 15,
borderBottomWidth: 1,
borderColor: '#e0e0e0',
paddingBottom: 10,
},
filterOptionText: {
marginLeft: 10,
},
radioButton: {
height: 24,
width: 24,
borderRadius: 12,
borderWidth: 2,
borderColor: '#007185',
alignItems: 'center',
justifyContent: 'center',
},
radioButtonSelected: {
borderColor: '#007185',
},
radioButtonInner: {
height: 12,
width: 12,
borderRadius: 6,
backgroundColor: '#007185',
},
applyButton: {
backgroundColor: '#FFD814',
padding: 15,
alignItems: 'center',
margin: 15,
borderRadius: 5,
},
applyButtonText: {
fontWeight: 'bold',
},
bottomBar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
},
bottomBarIcon: {
width: 25,
height: 25,
},
cartBadge: {
position: 'absolute',
right: -6,
top: -6,
backgroundColor: '#007185',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
cartBadgeText: {
color: '#fff',
fontSize: 12,
},
});
export default FilterPage;