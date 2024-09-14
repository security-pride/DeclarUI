import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SearchPage = () => {
const navigation = useNavigation();
const categoryTags = ['UI/UX DESIGN', 'GRAPHICS DESIGN', 'INTERACTION'];
const searchResults = [
{ id: '1', title: 'How to make modern poster for Beginner', type: 'GRAPHICS DESIGN', rating: 4.9, price: '$12.00', image: require('../assets/snack-icon.png') },
{ id: '2', title: 'How to make Design system in easy waen', type: 'UI/UX DESIGN', rating: 4.9, price: '$23.99', image: require('../assets/snack-icon.png') },
{ id: '3', title: 'How to make modern poster for Beginner', type: 'INTERACTION DESIGN', rating: 4.9, price: '$15.45', image: require('../assets/snack-icon.png') },
{ id: '4', title: 'How to make Design system in easy waen', type: 'PHOTO EDITOR', rating: 4.9, price: '$16.13', image: require('../assets/snack-icon.png') },
];
const renderCategoryTag = ({ item }) => (
<TouchableOpacity style={styles.categoryTag}>
<Text style={styles.categoryTagText}>{item}</Text>
</TouchableOpacity>
);
const renderSearchResult = ({ item }) => (
<TouchableOpacity
style={styles.searchResultCard}
onPress={() => navigation.navigate('CourseDetail', { course: item })}
>
<Image source={item.image} style={styles.courseImage} />
<View style={styles.courseInfo}>
<Text style={styles.courseType}>{item.type}</Text>
<Text style={styles.courseTitle}>{item.title}</Text>
<View style={styles.ratingContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.starIcon} />
<Text style={styles.ratingText}>{item.rating}</Text>
</View>
<Text style={styles.coursePrice}>{item.price}</Text>
</View>
</TouchableOpacity>
);
return (
<SafeAreaView style={styles.container}>
<StatusBar barStyle="dark-content" />
<View style={styles.header}>
<Text style={styles.headerTitle}>Discover</Text>
<TouchableOpacity style={styles.notificationButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.notificationIcon} />
<View style={styles.notificationBadge}>
<Text style={styles.notificationBadgeText}>9+</Text>
</View>
</TouchableOpacity>
</View>
<View style={styles.searchContainer}>
<View style={styles.searchBar}>
<Image source={require('../assets/snack-icon.png')} style={styles.searchIcon} />
<TextInput style={styles.searchInput} placeholder="Design" placeholderTextColor="#888" />
</View>
<TouchableOpacity style={styles.filterButton}>
<Image source={require('../assets/snack-icon.png')} style={styles.filterIcon} />
<View style={styles.filterBadge}>
<Text style={styles.filterBadgeText}>1</Text>
</View>
</TouchableOpacity>
</View>
<FlatList
horizontal
data={categoryTags}
renderItem={renderCategoryTag}
keyExtractor={(item) => item}
style={styles.categoryList}
showsHorizontalScrollIndicator={false}
/>
<View style={styles.resultHeader}>
<Text style={styles.resultTitle}>Search Result</Text>
<Text style={styles.resultCount}>32 Result</Text>
</View>
<FlatList
data={searchResults}
renderItem={renderSearchResult}
keyExtractor={(item) => item.id}
showsVerticalScrollIndicator={false}
contentContainerStyle={styles.searchResultList}
/>
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
headerTitle: {
fontSize: 24,
fontWeight: 'bold',
},
notificationButton: {
position: 'relative',
},
notificationIcon: {
width: 24,
height: 24,
},
notificationBadge: {
position: 'absolute',
top: -5,
right: -5,
backgroundColor: '#FF3B30',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
notificationBadgeText: {
color: '#FFFFFF',
fontSize: 12,
fontWeight: 'bold',
},
searchContainer: {
flexDirection: 'row',
paddingHorizontal: 20,
marginTop: 20,
},
searchBar: {
flex: 1,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F2F2F7',
borderRadius: 10,
paddingHorizontal: 10,
marginRight: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
height: 40,
fontSize: 16,
},
filterButton: {
backgroundColor: '#000000',
borderRadius: 10,
width: 40,
height: 40,
justifyContent: 'center',
alignItems: 'center',
},
filterIcon: {
width: 20,
height: 20,
tintColor: '#FFFFFF',
},
filterBadge: {
position: 'absolute',
top: -5,
right: -5,
backgroundColor: '#FF3B30',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
filterBadgeText: {
color: '#FFFFFF',
fontSize: 12,
fontWeight: 'bold',
},
categoryList: {
paddingHorizontal: 20,
marginTop: 20,
},
categoryTag: {
backgroundColor: '#F2F2F7',
borderRadius: 20,
paddingHorizontal: 15,
paddingVertical: 8,
marginRight: 10,
},
categoryTagText: {
fontSize: 14,
color: '#007AFF',
},
resultHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 20,
marginTop: 20,
},
resultTitle: {
fontSize: 18,
fontWeight: 'bold',
},
resultCount: {
fontSize: 14,
color: '#888',
},
searchResultList: {
paddingHorizontal: 20,
paddingTop: 20,
},
searchResultCard: {
flexDirection: 'row',
backgroundColor: '#F2F2F7',
borderRadius: 10,
marginBottom: 15,
overflow: 'hidden',
},
courseImage: {
width: 80,
height: 80,
},
courseInfo: {
flex: 1,
padding: 10,
},
courseType: {
fontSize: 12,
color: '#888',
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
ratingText: {
fontSize: 14,
color: '#FFA500',
},
coursePrice: {
fontSize: 16,
fontWeight: 'bold',
color: '#007AFF',
},
});
export default SearchPage;