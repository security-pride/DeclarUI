import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DetailsScreen = () => {
const navigation = useNavigation();
const [favorite, setFavorite] = useState(false);
const toggleFavorite = () => {
setFavorite(!favorite);
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Text style={styles.backButtonText}>{'<'}</Text>
</TouchableOpacity>
<TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
<Text style={styles.favoriteButtonText}>{favorite ? '♥' : '♡'}</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.shareButton}>
<Text style={styles.shareButtonText}>Share</Text>
</TouchableOpacity>
</View>
  <ScrollView horizontal pagingEnabled style={styles.imageGallery}>
    <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.hotelImage} />
    <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.roomImage} />
    <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.officeImage} />
    <View style={styles.imageCounter}>
      <Text style={styles.imageCounterText}>+118</Text>
    </View>
  </ScrollView>

  <View style={styles.hotelInfo}>
    <Text style={styles.hotelName}>烟台南山皇冠假日酒店</Text>
    <View style={styles.ratingBadge}>
      <Text style={styles.ratingText}>8.6</Text>
    </View>
  </View>

  <View style={styles.amenitiesBar}>
    <View style={styles.amenityItem}>
      <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.amenityIcon} />
      <Text style={styles.amenityText}>免费停车</Text>
    </View>
    <View style={styles.amenityItem}>
      <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.amenityIcon} />
      <Text style={styles.amenityText}>室内游泳池</Text>
    </View>
    <View style={styles.amenityItem}>
      <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.amenityIcon} />
      <Text style={styles.amenityText}>餐厅</Text>
    </View>
    <View style={styles.amenityItem}>
      <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.amenityIcon} />
      <Text style={styles.amenityText}>Spa及健康中心</Text>
    </View>
    <View style={styles.amenityItem}>
      <ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.amenityIcon} />
      <Text style={styles.amenityText}>免费无线网络连接</Text>
    </View>
  </View>

  <View style={styles.bookingInfo}>
    <View style={styles.bookingRow}>
      <Text style={styles.bookingLabel}>入住时间</Text>
      <Text style={styles.bookingValue}>7月18日 周四</Text>
    </View>
    <View style={styles.bookingRow}>
      <Text style={styles.bookingLabel}>退房时间</Text>
      <Text style={styles.bookingValue}>7月19日 周五</Text>
    </View>
    <View style={styles.bookingRow}>
      <Text style={styles.bookingLabel}>客房与客人数</Text>
      <Text style={styles.bookingValue}>1间房 · 2位成人 · 无儿童</Text>
    </View>
    <View style={styles.bookingRow}>
      <Text style={styles.bookingLabel}>1晚房价</Text>
      <Text style={styles.bookingValue}>(显示价格)</Text>
    </View>
  </View>

  <TouchableOpacity
    style={styles.viewRoomTypesButton}
    onPress={() => navigation.navigate('TypeDetails')}
  >
    <Text style={styles.viewRoomTypesButtonText}>查看房型列表</Text>
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
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
backButton: {
padding: 10,
},
backButtonText: {
fontSize: 24,
fontWeight: 'bold',
},
favoriteButton: {
padding: 10,
},
favoriteButtonText: {
fontSize: 24,
},
shareButton: {
padding: 10,
},
shareButtonText: {
fontSize: 16,
},
imageGallery: {
height: 200,
},
hotelImage: {
width: 300,
height: 200,
},
roomImage: {
width: 300,
height: 200,
},
officeImage: {
width: 300,
height: 200,
},
imageCounter: {
position: 'absolute',
right: 10,
bottom: 10,
backgroundColor: 'rgba(0,0,0,0.6)',
padding: 5,
borderRadius: 5,
},
imageCounterText: {
color: '#fff',
},
hotelInfo: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
},
hotelName: {
fontSize: 20,
fontWeight: 'bold',
},
ratingBadge: {
backgroundColor: 'blue',
padding: 5,
borderRadius: 5,
},
ratingText: {
color: '#fff',
fontWeight: 'bold',
},
amenitiesBar: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
},
amenityItem: {
alignItems: 'center',
},
amenityIcon: {
width: 30,
height: 30,
},
amenityText: {
fontSize: 12,
textAlign: 'center',
},
bookingInfo: {
padding: 10,
},
bookingRow: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 5,
},
bookingLabel: {
fontWeight: 'bold',
},
viewRoomTypesButton: {
backgroundColor: 'blue',
padding: 15,
margin: 10,
borderRadius: 5,
alignItems: 'center',
},
viewRoomTypesButtonText: {
color: '#fff',
fontWeight: 'bold',
},
});
export default DetailsScreen;