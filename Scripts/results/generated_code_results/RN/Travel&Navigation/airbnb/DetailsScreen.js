import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DetailsScreen = () => {
const navigation = useNavigation();
const [isFavorite, setIsFavorite] = useState(false);
const handleBackPress = () => {
navigation.goBack();
};
const handleSharePress = () => {
// Implement share functionality
};
const handleFavoritePress = () => {
setIsFavorite(!isFavorite);
};
const handleBookPress = () => {
navigation.navigate('Reservation');
};
const handleReviewsPress = () => {
navigation.navigate('Comments');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<View style={styles.headerRight}>
<TouchableOpacity onPress={handleSharePress} style={styles.iconButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity onPress={handleFavoritePress} style={styles.iconButton}>
<Image
source={require('../assets/snack-icon.png')}
style={[styles.icon, isFavorite && styles.favoriteIcon]}
/>
</TouchableOpacity>
</View>
</View>
  <Image source={require('../assets/snack-icon.png')} style={styles.mainImage} />
  <Text style={styles.imageCount}>1/52</Text>

  <View style={styles.content}>
    <Text style={styles.title}>Pitch 24 Creek Caravan Park Ringstead狗友好</Text>
    <Text style={styles.subtitle}>英国英格兰多塞特(Dorset)的整套小木屋</Text>
    <Text style={styles.capacity}>6位房客 · 2间卧室 · 3张床 · 1.5个卫生间</Text>

    <View style={styles.ratingContainer}>
      <Text style={styles.rating}>4.80</Text>
      <View style={styles.recommendationBadge}>
        <Image source={require('../assets/snack-icon.png')} style={styles.badgeIcon} />
        <Text style={styles.badgeText}>房客推荐</Text>
      </View>
      <TouchableOpacity onPress={handleReviewsPress}>
        <Text style={styles.reviewCount}>5条评价</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.featuresContainer}>
      <FeatureItem icon={require('../assets/snack-icon.png')} text="海景民宿" />
      <FeatureItem icon={require('../assets/snack-icon.png')} text="超赞房东" />
      <FeatureItem icon={require('../assets/snack-icon.png')} text="位置极佳" />
      <FeatureItem icon={require('../assets/snack-icon.png')} text="入住便捷" />
      <FeatureItem icon={require('../assets/snack-icon.png')} text="无线网络" />
    </View>

    <View style={styles.cancellationPolicy}>
      <Image source={require('../assets/snack-icon.png')} style={styles.calendarIcon} />
      <Text style={styles.cancellationText}>8月3日前免费取消</Text>
    </View>

    <View style={styles.specialNote}>
      <Image source={require('../assets/snack-icon.png')} style={styles.gemIcon} />
      <Text style={styles.specialNoteText}>这个房源很抢手</Text>
    </View>

    <View style={styles.priceContainer}>
      <Text style={styles.price}>¥2,424 /晚</Text>
      <Text style={styles.dateRange}>9月2日至7日</Text>
    </View>

    <TouchableOpacity style={styles.bookButton} onPress={handleBookPress}>
      <Text style={styles.bookButtonText}>预订</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const FeatureItem = ({ icon, text }) => (
<View style={styles.featureItem}>
<Image source={icon} style={styles.featureIcon} />
<Text style={styles.featureText}>{text}</Text>
</View>
);
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
padding: 16,
position: 'absolute',
top: 0,
left: 0,
right: 0,
zIndex: 1,
},
backButton: {
padding: 8,
},
headerRight: {
flexDirection: 'row',
},
iconButton: {
padding: 8,
marginLeft: 16,
},
icon: {
width: 24,
height: 24,
},
favoriteIcon: {
tintColor: 'red',
},
mainImage: {
width: '100%',
height: 300,
resizeMode: 'cover',
},
imageCount: {
position: 'absolute',
right: 16,
bottom: 16,
backgroundColor: 'rgba(0,0,0,0.6)',
color: '#fff',
padding: 4,
borderRadius: 12,
},
content: {
padding: 16,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 8,
},
subtitle: {
fontSize: 16,
color: '#666',
marginBottom: 8,
},
capacity: {
fontSize: 14,
color: '#666',
marginBottom: 16,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
rating: {
fontSize: 18,
fontWeight: 'bold',
marginRight: 8,
},
recommendationBadge: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#f0f0f0',
borderRadius: 16,
paddingVertical: 4,
paddingHorizontal: 8,
marginRight: 8,
},
badgeIcon: {
width: 16,
height: 16,
marginRight: 4,
},
badgeText: {
fontSize: 14,
},
reviewCount: {
fontSize: 14,
color: '#666',
textDecorationLine: 'underline',
},
featuresContainer: {
flexDirection: 'row',
flexWrap: 'wrap',
marginBottom: 16,
},
featureItem: {
flexDirection: 'row',
alignItems: 'center',
width: '50%',
marginBottom: 8,
},
featureIcon: {
width: 20,
height: 20,
marginRight: 8,
},
featureText: {
fontSize: 14,
},
cancellationPolicy: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 16,
},
calendarIcon: {
width: 20,
height: 20,
marginRight: 8,
},
cancellationText: {
fontSize: 14,
},
specialNote: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#fff0f0',
padding: 12,
borderRadius: 8,
marginBottom: 16,
},
gemIcon: {
width: 20,
height: 20,
marginRight: 8,
},
specialNoteText: {
fontSize: 14,
color: '#ff4d4f',
},
priceContainer: {
flexDirection: 'row',
alignItems: 'baseline',
marginBottom: 16,
},
price: {
fontSize: 20,
fontWeight: 'bold',
marginRight: 8,
},
dateRange: {
fontSize: 14,
color: '#666',
},
bookButton: {
backgroundColor: '#ff385c',
borderRadius: 8,
padding: 16,
alignItems: 'center',
},
bookButtonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
});
export default DetailsScreen;