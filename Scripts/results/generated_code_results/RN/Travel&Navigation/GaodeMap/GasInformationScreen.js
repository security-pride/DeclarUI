import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const GasInformation = () => {
const navigation = useNavigation();
const [selectedFuel, setSelectedFuel] = useState('92#');
const renderGasStation = (name, distance, price, originalPrice, discount) => (
<View style={styles.gasStationItem}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.gasStationImage} />
<View style={styles.gasStationInfo}>
<Text style={styles.gasStationName}>{name}</Text>
<Text style={styles.gasStationDistance}>{distance}</Text>
<View style={styles.priceContainer}>
<Text style={styles.price}>{price}</Text>
<Text style={styles.originalPrice}>{originalPrice}</Text>
</View>
<Text style={styles.discount}>{discount}</Text>
</View>
<TouchableOpacity
style={styles.refuelButton}
onPress={() => navigation.navigate('GasStationDetails', { stationName: name })}
>
<Text style={styles.refuelButtonText}>立即加油</Text>
</TouchableOpacity>
</View>
);
return (
<View style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>高德车服·加油</Text>
</View>
<ScrollView>
<View style={styles.quickAccessButtons}>
<TouchableOpacity style={styles.quickAccessButton}>
<Text>新人专享</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.quickAccessButton}>
<Text>调价补贴</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.quickAccessButton}>
<Text>领券中心</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.quickAccessButton}>
<Text>分享油礼</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.quickAccessButton}>
<Text>油惠卡</Text>
</TouchableOpacity>
</View>
<View style={styles.promoSection}>
<Text style={styles.promoTitle}>天天"油"惠</Text>
<Text style={styles.promoSubtitle}>单回本，单单省！</Text>
<TouchableOpacity style={styles.promoButton}>
<Text style={styles.promoButtonText}>立即查看</Text>
</TouchableOpacity>
</View>
<View style={styles.filterOptions}>
<TouchableOpacity style={styles.filterOption}>
<Text>推荐排序</Text>
</TouchableOpacity>
<TouchableOpacity
style={[styles.filterOption, selectedFuel === '92#' && styles.selectedFilter]}
onPress={() => setSelectedFuel('92#')}
>
<Text>92#</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.filterOption}>
<Text>全部品牌</Text>
</TouchableOpacity>
</View>
<View style={styles.gasStationList}>
{renderGasStation('供销石油加油站', '3km 最便宜', '¥7.56/L', '油站价￥7.87/L', '加200省8')}
{renderGasStation('烟台交运石油二马路金沟寨加油站', '1.4公里', '¥7.56/L', '油站价￥8.07/L', '加200省13')}
{renderGasStation('中化石油安顺加油站(安顺站)', '7.1公里', '¥6.86/L', '油站价￥7.97/L', '加200省28')}
</View>
</ScrollView>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
backgroundColor: '#ffffff',
padding: 15,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
quickAccessButtons: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: '#ffffff',
},
quickAccessButton: {
alignItems: 'center',
},
promoSection: {
backgroundColor: '#ffffff',
margin: 10,
padding: 15,
borderRadius: 8,
},
promoTitle: {
fontSize: 16,
fontWeight: 'bold',
},
promoSubtitle: {
fontSize: 14,
color: '#666',
},
promoButton: {
backgroundColor: '#ff6b6b',
padding: 8,
borderRadius: 4,
marginTop: 10,
},
promoButtonText: {
color: '#ffffff',
textAlign: 'center',
},
filterOptions: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
backgroundColor: '#ffffff',
},
filterOption: {
padding: 5,
},
selectedFilter: {
borderBottomWidth: 2,
borderBottomColor: '#ff6b6b',
},
gasStationList: {
marginTop: 10,
},
gasStationItem: {
flexDirection: 'row',
backgroundColor: '#ffffff',
marginBottom: 10,
padding: 15,
},
gasStationImage: {
width: 60,
height: 60,
borderRadius: 4,
},
gasStationInfo: {
flex: 1,
marginLeft: 15,
},
gasStationName: {
fontSize: 16,
fontWeight: 'bold',
},
gasStationDistance: {
fontSize: 14,
color: '#666',
},
priceContainer: {
flexDirection: 'row',
alignItems: 'baseline',
},
price: {
fontSize: 18,
color: '#ff6b6b',
fontWeight: 'bold',
},
originalPrice: {
fontSize: 14,
color: '#999',
textDecorationLine: 'line-through',
marginLeft: 5,
},
discount: {
fontSize: 14,
color: '#ff6b6b',
},
refuelButton: {
backgroundColor: '#ff6b6b',
padding: 8,
borderRadius: 4,
justifyContent: 'center',
},
refuelButtonText: {
color: '#ffffff',
textAlign: 'center',
},
});
export default GasInformation;