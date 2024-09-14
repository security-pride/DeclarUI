import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SendParcelParcelSize = () => {
const navigation = useNavigation();
const [selectedSize, setSelectedSize] = useState(null);
const parcelSizes = [
{
id: 'small',
title: 'Small',
maxDimensions: 'Max. 25 kg, 8 x 38 x 64 cm',
description: 'Fits in an envelope',
},
{
id: 'medium',
title: 'Medium',
maxDimensions: 'Max. 25 kg, 19 x 38 x 64 cm',
description: 'Fits in a shoe box',
},
{
id: 'large',
title: 'Large',
maxDimensions: 'Max. 25 kg, 41 x 38 x 64 cm',
description: 'Fits in a cardboard box',
},
{
id: 'custom',
title: 'Custom',
maxDimensions: 'Max: 30kg or 300cm',
description: 'Fits on a skid',
},
];
const handleSizeSelection = (id) => {
setSelectedSize(id);
// Here you would typically navigate to the next screen or process the selection
};
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
<Text style={styles.header}>Send parcel</Text>
<Text style={styles.subHeader}>Parcel size</Text>
    {parcelSizes.map((size) => (
      <TouchableOpacity
        key={size.id}
        style={[styles.sizeOption, selectedSize === size.id && styles.selectedOption]}
        onPress={() => handleSizeSelection(size.id)}
      >
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.sizeIcon}
        />
        <View style={styles.sizeInfo}>
          <Text style={styles.sizeTitle}>{size.title}</Text>
          <Text style={styles.sizeDimensions}>{size.maxDimensions}</Text>
          <Text style={styles.sizeDescription}>{size.description}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </ScrollView>

  <View style={styles.navbar}>
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => navigation.navigate('Home_Top_drawer_open')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>My parcels</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={[styles.navText, styles.activeNavText]}>Send parcel</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.navItem}
      onPress={() => navigation.navigate('Parcel_center')}
    >
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>Parcel center</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF',
},
header: {
fontSize: 28,
fontWeight: 'bold',
padding: 16,
paddingTop: 60,
},
subHeader: {
fontSize: 20,
fontWeight: '600',
paddingHorizontal: 16,
marginBottom: 16,
},
sizeOption: {
flexDirection: 'row',
alignItems: 'center',
padding: 16,
borderWidth: 1,
borderColor: '#E0E0E0',
borderRadius: 20,
margin: 10,
},
selectedOption: {
backgroundColor: '#F0F0F0',
},
sizeIcon: {
width: 60,
height: 60,
marginRight: 16,
},
sizeInfo: {
flex: 1,
},
sizeTitle: {
fontSize: 18,
fontWeight: 'bold',
},
sizeDimensions: {
fontSize: 14,
color: '#333',
marginTop: 4,
},
sizeDescription: {
fontSize: 14,
color: '#666',
marginTop: 4,
},
navbar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#E0E0E0',
paddingVertical: 8,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 24,
height: 24,
marginBottom: 4,
},
navText: {
fontSize: 12,
color: '#888888',
},
activeNavItem: {
// Add styles for active state if needed
},
activeNavText: {
color: '#000000',
fontWeight: 'bold',
},
});
export default SendParcelParcelSize;