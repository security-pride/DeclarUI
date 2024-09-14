import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DiscoverScreen = () => {
const navigation = useNavigation();
const renderVideoThumbnail = (views) => (
<View style={styles.videoThumbnail}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.thumbnailImage} />
<Text style={styles.viewCount}>{views}</Text>
</View>
);
return (
<View style={styles.container}>
<View style={styles.statusBar}>
<Text style={styles.time}>9:41</Text>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.wifiIcon} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.signalIcon} />
</View>
  <View style={styles.searchBarContainer}>
    <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.searchIcon} />
    <TextInput
      style={styles.searchInput}
      placeholder="Search"
      placeholderTextColor="#666"
      onFocus={() => navigation.navigate('search')}
    />
  </View>

  <ScrollView>
    <View style={styles.bannerContainer}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.bannerImage} />
      <View style={styles.bannerOverlay}>
        <Text style={styles.bannerTitle}>Camp day</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Join now</Text>
        </TouchableOpacity>
      </View>
    </View>

    <ScrollView horizontal style={styles.categoriesContainer}>
      <TouchableOpacity style={[styles.categoryButton, styles.categoryButtonActive]}>
        <Text style={styles.categoryButtonText}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryButtonText}>Challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryButtonText}>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton}>
        <Text style={styles.categoryButtonText}>Dance</Text>
      </TouchableOpacity>
    </ScrollView>

    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Hot 🔥</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {renderVideoThumbnail('420.8K')}
        {renderVideoThumbnail('316.0K')}
        {renderVideoThumbnail('180.6K')}
      </ScrollView>
    </View>

    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured ✨</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {renderVideoThumbnail()}
        {renderVideoThumbnail()}
        {renderVideoThumbnail()}
      </ScrollView>
    </View>
  </ScrollView>

  <View style={styles.bottomNav}>
    <TouchableOpacity onPress={() => navigation.navigate('home')}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.navText}>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.createIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#000',
},
statusBar: {
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center',
paddingTop: 5,
paddingRight: 10,
},
time: {
color: '#fff',
marginRight: 5,
},
wifiIcon: {
width: 15,
height: 15,
marginRight: 5,
},
signalIcon: {
width: 15,
height: 15,
},
searchBarContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#333',
borderRadius: 20,
margin: 10,
paddingHorizontal: 10,
},
searchIcon: {
width: 20,
height: 20,
marginRight: 10,
},
searchInput: {
flex: 1,
color: '#fff',
height: 40,
},
bannerContainer: {
height: 200,
marginBottom: 10,
},
bannerImage: {
width: '100%',
height: '100%',
},
bannerOverlay: {
position: 'absolute',
bottom: 20,
left: 20,
},
bannerTitle: {
color: '#fff',
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
joinButton: {
backgroundColor: '#3897f0',
paddingHorizontal: 20,
paddingVertical: 10,
borderRadius: 20,
},
joinButtonText: {
color: '#fff',
fontWeight: 'bold',
},
categoriesContainer: {
flexDirection: 'row',
paddingVertical: 10,
},
categoryButton: {
paddingHorizontal: 15,
paddingVertical: 5,
borderRadius: 15,
marginHorizontal: 5,
backgroundColor: '#333',
},
categoryButtonActive: {
backgroundColor: '#f00',
},
categoryButtonText: {
color: '#fff',
},
sectionContainer: {
marginTop: 20,
},
sectionHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingHorizontal: 10,
marginBottom: 10,
},
sectionTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
seeAllText: {
color: '#3897f0',
},
videoThumbnail: {
width: 150,
height: 200,
marginHorizontal: 5,
borderRadius: 10,
overflow: 'hidden',
},
thumbnailImage: {
width: '100%',
height: '100%',
},
viewCount: {
position: 'absolute',
bottom: 5,
left: 5,
color: '#fff',
backgroundColor: 'rgba(0,0,0,0.5)',
padding: 3,
borderRadius: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopWidth: 1,
borderTopColor: '#333',
paddingVertical: 10,
},
navIcon: {
width: 25,
height: 25,
},
createIcon: {
width: 40,
height: 40,
},
navText: {
color: '#fff',
},
});
export default DiscoverScreen;