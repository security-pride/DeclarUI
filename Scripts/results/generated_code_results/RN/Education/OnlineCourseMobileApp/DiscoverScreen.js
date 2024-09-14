import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DiscoverPage = () => {
const navigation = useNavigation();
const renderCourseCard = ({ item }) => (
<TouchableOpacity
style={styles.courseCard}
onPress={() => navigation.navigate('CourseDetail', { course: item })}
>
<Image source={require('../assets/snack-icon.png')} style={styles.courseImage} />
<Text style={styles.courseType}>{item.type}</Text>
<Text style={styles.courseTitle}>{item.title}</Text>
<View style={styles.ratingContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
<Text style={styles.rating}>{item.rating}</Text>
</View>
<Text style={styles.price}>{item.price}</Text>
</TouchableOpacity>
);
const renderSection = (title, courses) => (
<View style={styles.section}>
<View style={styles.sectionHeader}>
<Text style={styles.sectionTitle}>{title}</Text>
<TouchableOpacity>
<Text style={styles.seeAllText}>See all</Text>
</TouchableOpacity>
</View>
<FlatList
data={courses}
renderItem={renderCourseCard}
keyExtractor={(item) => item.title}
horizontal
showsHorizontalScrollIndicator={false}
/>
</View>
);
return (
<SafeAreaView style={styles.container}>
<View style={styles.header}>
<View style={styles.titleContainer}>
<Text style={styles.title}>Discover the best</Text>
<Text style={styles.title}>course that suits to you</Text>
<Image source={require('../assets/snack-icon.png')} style={styles.bookIcon} />
</View>
<TouchableOpacity>
<Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
</TouchableOpacity>
</View>
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Search course..."
      onFocus={() => navigation.navigate('Search')}
    />
    <TouchableOpacity style={styles.filterButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
    </TouchableOpacity>
  </View>

  {renderSection('Course of the weeks', [
    { title: 'How to make modern poster for Beginner', type: 'GRAPHICS DESIGN', rating: 4.9, price: '$12.00' },
    { title: 'How to make Design system in easy waen', type: 'UI/UX DESIGN', rating: 4.9, price: '$12.00' },
  ])}

  {renderSection('Suits to you', [
    { title: 'How to make modern poster', type: 'GRAPHICS DESIGN', rating: 4.9 },
    { title: 'How to make Design system', type: 'UI/UX DESIGN', rating: 4.9 },
  ])}

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={[styles.navIcon, styles.activeNavIcon]} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('MyCourses')}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</SafeAreaView>
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
paddingTop: 20,
},
titleContainer: {
flexDirection: 'row',
alignItems: 'center',
flexWrap: 'wrap',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginRight: 5,
},
bookIcon: {
width: 24,
height: 24,
},
notificationIcon: {
width: 24,
height: 24,
},
searchContainer: {
flexDirection: 'row',
paddingHorizontal: 20,
marginTop: 20,
},
searchInput: {
flex: 1,
height: 50,
backgroundColor: '#F5F5F5',
borderRadius: 25,
paddingHorizontal: 20,
marginRight: 10,
},
filterButton: {
width: 50,
height: 50,
backgroundColor: '#000000',
borderRadius: 25,
justifyContent: 'center',
alignItems: 'center',
},
filterIcon: {
width: 24,
height: 24,
tintColor: '#FFFFFF',
},
section: {
marginTop: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
marginBottom: 10,
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
},
seeAllText: {
color: '#007AFF',
},
courseCard: {
width: 200,
marginLeft: 20,
backgroundColor: '#F5F5F5',
borderRadius: 10,
padding: 10,
},
courseImage: {
width: 180,
height: 100,
borderRadius: 10,
marginBottom: 10,
},
courseType: {
fontSize: 12,
color: '#888888',
marginBottom: 5,
},
courseTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
ratingContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 5,
},
starIcon: {
width: 16,
height: 16,
marginRight: 5,
},
rating: {
fontSize: 14,
color: '#FFA500',
},
price: {
fontSize: 16,
fontWeight: 'bold',
color: '#007AFF',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
height: 60,
borderTopWidth: 1,
borderTopColor: '#EEEEEE',
},
navIcon: {
width: 24,
height: 24,
},
activeNavIcon: {
tintColor: '#007AFF',
},
});
export default DiscoverPage;