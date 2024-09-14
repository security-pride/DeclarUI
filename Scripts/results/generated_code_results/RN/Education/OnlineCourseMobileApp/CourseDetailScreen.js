import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CourseDetailPage = () => {
const navigation = useNavigation();
return (
<View style={styles.container}>
<StatusBar barStyle="dark-content" />
<ScrollView>
<View style={styles.header}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
</TouchableOpacity>
<Text style={styles.headerTitle}>Details Course</Text>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.optionsIcon} />
</TouchableOpacity>
</View>
    <ImageBackground
      source={require('../assets/snack-icon.png')}
      style={styles.courseBanner}
    >
      <Text style={styles.courseType}>GRAPICS DESIGN</Text>
    </ImageBackground>

    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle}>How to make modern design for Beginner</Text>
      <View style={styles.instructorRow}>
        <Image source={require('../assets/snack-icon.png')} style={styles.instructorAvatar} />
        <Text style={styles.instructorName}>Nicola Tesla</Text>
        <Text style={styles.rating}>4.9 (1.2k)</Text>
      </View>
      <Text style={styles.courseDescription}>
        Lorem ipsum dolor sit amet consectetur. Mattis amet accumsan tellus sapien amet tempus elit feugiat. Elementum vulputate arcu urna.
      </Text>
    </View>

    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.activeTab}>
        <Text style={styles.activeTabText}>Lessons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Reviews</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.lessonContainer}>
      <View style={styles.lessonItem}>
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>1. Graphics Design Introduction</Text>
          <Text style={styles.lessonDuration}>12:34</Text>
        </View>
        <TouchableOpacity style={styles.playButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.playIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.lessonItem}>
        <View style={styles.lessonInfo}>
          <Text style={styles.lessonTitle}>2. Shape & Line</Text>
          <Text style={styles.lessonDuration}>12:34</Text>
        </View>
        <TouchableOpacity style={styles.lockButton}>
          <Image source={require('../assets/snack-icon.png')} style={styles.lockIcon} />
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>

  <TouchableOpacity style={styles.buyButton}>
    <Text style={styles.buyButtonText}>Buy $23.00</Text>
    <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
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
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
paddingTop: 50,
paddingBottom: 20,
},
backIcon: {
width: 24,
height: 24,
},
headerTitle: {
fontSize: 18,
fontWeight: 'bold',
},
optionsIcon: {
width: 24,
height: 24,
},
courseBanner: {
height: 200,
justifyContent: 'flex-end',
padding: 20,
},
courseType: {
color: '#FFFFFF',
fontSize: 16,
fontWeight: 'bold',
},
courseInfo: {
padding: 20,
},
courseTitle: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
instructorRow: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 10,
},
instructorAvatar: {
width: 30,
height: 30,
borderRadius: 15,
marginRight: 10,
},
instructorName: {
fontSize: 16,
marginRight: 10,
},
rating: {
fontSize: 14,
color: '#FFA500',
},
courseDescription: {
fontSize: 14,
color: '#666666',
lineHeight: 20,
},
tabContainer: {
flexDirection: 'row',
borderBottomWidth: 1,
borderBottomColor: '#EEEEEE',
},
tab: {
flex: 1,
paddingVertical: 15,
alignItems: 'center',
},
activeTab: {
flex: 1,
paddingVertical: 15,
alignItems: 'center',
borderBottomWidth: 2,
borderBottomColor: '#007AFF',
},
tabText: {
fontSize: 16,
color: '#666666',
},
activeTabText: {
fontSize: 16,
color: '#007AFF',
fontWeight: 'bold',
},
lessonContainer: {
padding: 20,
},
lessonItem: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: 20,
},
lessonInfo: {
flex: 1,
},
lessonTitle: {
fontSize: 16,
fontWeight: 'bold',
},
lessonDuration: {
fontSize: 14,
color: '#666666',
marginTop: 5,
},
playButton: {
width: 40,
height: 40,
borderRadius: 20,
backgroundColor: '#007AFF',
justifyContent: 'center',
alignItems: 'center',
},
playIcon: {
width: 20,
height: 20,
tintColor: '#FFFFFF',
},
lockButton: {
width: 40,
height: 40,
borderRadius: 20,
backgroundColor: '#EEEEEE',
justifyContent: 'center',
alignItems: 'center',
},
lockIcon: {
width: 20,
height: 20,
tintColor: '#666666',
},
buyButton: {
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#007AFF',
padding: 15,
margin: 20,
borderRadius: 10,
},
buyButtonText: {
color: '#FFFFFF',
fontSize: 18,
fontWeight: 'bold',
marginRight: 10,
},
arrowIcon: {
width: 20,
height: 20,
tintColor: '#FFFFFF',
},
});
export default CourseDetailPage;