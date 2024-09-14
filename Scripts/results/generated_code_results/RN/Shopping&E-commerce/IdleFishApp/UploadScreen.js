import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Upload = () => {
const navigation = useNavigation();
const [description, setDescription] = useState('');
const [price, setPrice] = useState('0.00');
const [location, setLocation] = useState('烟台 芝罘区');
const navigateToSell = () => {
navigation.navigate('Sell');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={navigateToSell} style={styles.closeButton}>
<Text style={styles.closeButtonText}>X</Text>
</TouchableOpacity>
<Text style={styles.headerTitle}>发闲置</Text>
<TouchableOpacity style={styles.publishButton}>
<Text style={styles.publishButtonText}>发布</Text>
</TouchableOpacity>
</View>
  <View style={styles.imageUploadArea}>
    <TouchableOpacity style={styles.addImageButton}>
      <Text style={styles.addImageButtonText}>+</Text>
      <Text style={styles.addImageDescription}>添加优质首图更吸引人~</Text>
    </TouchableOpacity>
  </View>

  <TextInput
    style={styles.descriptionInput}
    multiline
    placeholder="描述一下宝贝的品牌型号、货品来源..."
    value={description}
    onChangeText={setDescription}
  />

  <TouchableOpacity style={styles.locationButton}>
    <Image source={require('../assets/snack-icon.png')} style={styles.locationIcon} />
    <Text style={styles.locationText}>{location}</Text>
    <Text style={styles.arrowIcon}>›</Text>
  </TouchableOpacity>

  <View style={styles.itemNotNearbyContainer}>
    <Image source={require('../assets/snack-icon.png')} style={styles.characterIcon} />
    <Text style={styles.itemNotNearbyText}>宝贝不在身边？点我</Text>
  </View>

  <View style={styles.priceContainer}>
    <Text style={styles.priceLabel}>价格</Text>
    <View style={styles.priceInputContainer}>
      <Text style={styles.currencySymbol}>¥</Text>
      <TextInput
        style={styles.priceInput}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
    </View>
    <Text style={styles.arrowIcon}>›</Text>
  </View>

  <View style={styles.shippingContainer}>
    <Text style={styles.shippingLabel}>发货方式</Text>
    <Text style={styles.shippingMethod}>包邮</Text>
    <Text style={styles.arrowIcon}>›</Text>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15,
backgroundColor: '#fff',
},
closeButton: {
padding: 5,
},
closeButtonText: {
fontSize: 20,
fontWeight: 'bold',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
publishButton: {
backgroundColor: '#FFD700',
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
},
publishButtonText: {
fontSize: 16,
fontWeight: 'bold',
},
imageUploadArea: {
height: 200,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
marginTop: 10,
},
addImageButton: {
alignItems: 'center',
},
addImageButtonText: {
fontSize: 40,
color: '#999',
},
addImageDescription: {
color: '#999',
marginTop: 10,
},
descriptionInput: {
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
minHeight: 100,
textAlignVertical: 'top',
},
locationButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
locationIcon: {
width: 20,
height: 20,
marginRight: 10,
},
locationText: {
flex: 1,
},
arrowIcon: {
fontSize: 18,
color: '#999',
},
itemNotNearbyContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
marginTop: 1,
},
characterIcon: {
width: 30,
height: 30,
marginRight: 10,
},
itemNotNearbyText: {
color: '#1E90FF',
},
priceContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
marginTop: 10,
},
priceLabel: {
flex: 1,
},
priceInputContainer: {
flexDirection: 'row',
alignItems: 'center',
},
currencySymbol: {
fontSize: 16,
color: '#FF4500',
marginRight: 5,
},
priceInput: {
fontSize: 16,
color: '#FF4500',
width: 100,
textAlign: 'right',
},
shippingContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff',
padding: 15,
marginTop: 1,
},
shippingLabel: {
flex: 1,
},
shippingMethod: {
marginRight: 10,
},
});
export default Upload;