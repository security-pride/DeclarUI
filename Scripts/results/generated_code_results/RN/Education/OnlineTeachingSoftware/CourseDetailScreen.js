import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CourseDetail = () => {
const navigation = useNavigation();
return (
<View style={styles.container}>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.time}>19:27</Text>
<View style={styles.statusIcons}>
<Image source={require('../assets/snack-icon.png')} style={styles.signalIcon} />
<Image source={require('../assets/snack-icon.png')} style={styles.wifiIcon} />
</View>
<TouchableOpacity style={styles.moreOptions}>
<Image source={require('../assets/snack-icon.png')} style={styles.moreIcon} />
</TouchableOpacity>
</View>
  <ScrollView>
    <View style={styles.courseImageContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
      <View style={styles.uiDesignTag}>
        <Text style={styles.uiDesignText}>UI Design</Text>
      </View>
      <TouchableOpacity style={styles.favoriteButton}>
        <Image source={require('../assets/snack-icon.png')} style={styles.heartIcon} />
      </TouchableOpacity>
    </View>

    <Text style={styles.courseTitle}>Expert Wireframing for Webiste Design theme food</Text>

    <View style={styles.instructorInfo}>
      <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />
      <Text style={styles.instructorName}>Jerremy Mamika</Text>
      <View style={styles.ratingContainer}>
        <Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
        <Text style={styles.ratingText}>4.6</Text>
      </View>
    </View>

    <Text style={styles.aboutCourseTitle}>About Course</Text>
    <Text style={styles.courseDescription}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    </Text>

    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statValue}>30+</Text>
        <Text style={styles.statLabel}>Leason</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statValue}>4.5</Text>
        <Text style={styles.statLabel}>Rating</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statValue}>1.4K</Text>
        <Text style={styles.statLabel}>Student</Text>
      </View>
    </View>
  </ScrollView>

  <View style={styles.footer}>
    <View style={styles.priceContainer}>
      <Text style={styles.priceLabel}>Price</Text>
      <Text style={styles.price}>$129</Text>
    </View>
    <TouchableOpacity style={styles.buyButton} onPress={() => {/* Handle buy action */}}>
      <Text style={styles.buyButtonText}>Buy Now</Text>
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
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingHorizontal: 20,
paddingTop: 40,
paddingBottom: 10,
},
backButton: {
padding: 5,
},
backIcon: {
width: 20,
height: 20,
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
statusIcons: {
flexDirection: 'row',
},
signalIcon: {
width: 15,
height: 15,
marginRight: 5,
},
wifiIcon: {
width: 15,
height: 15,
},
moreOptions: {
padding: 5,
},
moreIcon: {
width: 20,
height: 20,
},
courseImageContainer: {
position: 'relative',
marginHorizontal: 20,
marginTop: 20,
borderRadius: 15,
overflow: 'hidden',
},
courseImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
uiDesignTag: {
position: 'absolute',
top: 10,
left: 10,
backgroundColor: 'rgba(255, 255, 255, 0.8)',
paddingHorizontal: 10,
paddingVertical: 5,
borderRadius: 15,
},
uiDesignText: {
fontSize: 12,
fontWeight: 'bold',
},
favoriteButton: {
position: 'absolute',
top: 10,
right: 10,
backgroundColor: 'white',
borderRadius: 20,
padding: 5,
},
heartIcon: {
width: 20,
height: 20,
},
courseTitle: {
fontSize: 24,
fontWeight: 'bold',
marginHorizontal: 20,
marginTop: 20,
},
instructorInfo: {
flexDirection: 'row',
alignItems: 'center',
marginHorizontal: 20,
marginTop: 10,
},
instructorAvatar: {
width: 40,
height: 40,
borderRadius: 20,
marginRight: 10,
},
instructorName: {
fontSize: 16,
fontWeight: '500',
flex: 1,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
},
starIcon: {
width: 15,
height: 15,
marginRight: 5,
},
ratingText: {
fontSize: 14,
fontWeight: 'bold',
},
aboutCourseTitle: {
fontSize: 18,
fontWeight: 'bold',
marginHorizontal: 20,
marginTop: 20,
},
courseDescription: {
fontSize: 14,
marginHorizontal: 20,
marginTop: 10,
color: '#666',
},
statsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginHorizontal: 20,
marginTop: 20,
},
statItem: {
alignItems: 'center',
},
statValue: {
fontSize: 18,
fontWeight: 'bold',
},
statLabel: {
fontSize: 12,
color: '#666',
marginTop: 5,
},
footer: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingVertical: 15,
borderTopWidth: 1,
borderTopColor: '#EEE',
},
priceContainer: {
flex: 1,
},
priceLabel: {
fontSize: 12,
color: '#666',
},
price: {
fontSize: 24,
fontWeight: 'bold',
},
buyButton: {
backgroundColor: '#6B4EFF',
paddingHorizontal: 30,
paddingVertical: 15,
borderRadius: 25,
},
buyButtonText: {
color: 'white',
fontSize: 16,
fontWeight: 'bold',
},
});
export default CourseDetail;