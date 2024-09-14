import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const [searchQuery, setSearchQuery] = useState('');
const navigation = useNavigation();
const handleSportPress = () => {
navigation.navigate('SearchSports');
};
const handleStorePress = () => {
navigation.navigate('Store');
};
const handleProfilePress = () => {
navigation.navigate('Profile');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TextInput style={styles.searchBar} placeholder="心火已燃" value={searchQuery} onChangeText={setSearchQuery} />
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.kLogo} />
<View style={styles.notificationIcon}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.envelopeIcon} />
<View style={styles.badge}>
<Text style={styles.badgeText}>13</Text>
</View>
</View>
</View>
  <View style={styles.tabBar}>
    <Text style={styles.tabText}>关注</Text>
    <Text style={[styles.tabText, styles.activeTab]}>发现</Text>
    <Text style={styles.tabText}>活动</Text>
  </View>

  <View style={styles.quickAccessBar}>
    <TouchableOpacity style={styles.quickAccessItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>跟练</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickAccessItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>同城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickAccessItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>心火已燃</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickAccessItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>城市K车</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.content}>
    <ImageBackground
      source={{ uri: '../assets/snack-icon.png' }}
      style={styles.workoutVideo}
      imageStyle={styles.workoutVideoImage}
    >
      <Text style={styles.warmUpText}>WARM UP</Text>
      <View style={styles.progressBar} />
    </ImageBackground>

    <View style={styles.workoutInfo}>
      <Text style={styles.workoutTitle}>急性子狠瘦全身</Text>
      <View style={styles.workoutStats}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.megaphoneIcon} />
        <Text style={styles.commentCount}>1373</Text>
        <Text style={styles.instructor}>朱七七教授</Text>
      </View>
    </View>

    <View style={styles.runningTracker}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.mapImage} />
      <View style={styles.runningInfo}>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.runningIcon} />
        <Text style={styles.runningType}>户外跑步</Text>
        <Text style={styles.distance}>5.00</Text>
        <Text style={styles.unit}>公里</Text>
        <Text style={styles.time}>成绩 00:22:30</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.adBanner}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.adImage} />
      <View style={styles.adContent}>
        <Text style={styles.adTitle}>只送不卖! 100份简爱轻食酸奶免费领</Text>
        <Text style={styles.adSponsor}>Keep_活动</Text>
      </View>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>课程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleSportPress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleStorePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>商城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={handleProfilePress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>我的</Text>
    </TouchableOpacity>
  </View>
</ScrollView>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
},
header: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
searchBar: {
flex: 1,
height: 40,
backgroundColor: '#fff',
borderRadius: 20,
paddingHorizontal: 15,
},
kLogo: {
width: 40,
height: 40,
marginLeft: 10,
},
notificationIcon: {
marginLeft: 10,
},
envelopeIcon: {
width: 30,
height: 30,
},
badge: {
position: 'absolute',
top: -5,
right: -5,
backgroundColor: 'red',
borderRadius: 10,
width: 20,
height: 20,
justifyContent: 'center',
alignItems: 'center',
},
badgeText: {
color: '#fff',
fontSize: 12,
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
borderBottomWidth: 1,
borderBottomColor: '#e0e0e0',
},
tabText: {
fontSize: 16,
},
activeTab: {
fontWeight: 'bold',
color: '#000',
},
quickAccessBar: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 15,
},
quickAccessItem: {
alignItems: 'center',
},
quickAccessIcon: {
width: 40,
height: 40,
},
quickAccessText: {
marginTop: 5,
fontSize: 12,
},
content: {
padding: 10,
},
workoutVideo: {
height: 200,
justifyContent: 'flex-end',
padding: 10,
},
workoutVideoImage: {
borderRadius: 10,
},
warmUpText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
progressBar: {
height: 3,
backgroundColor: '#fff',
marginTop: 5,
width: '50%',
},
workoutInfo: {
marginTop: 10,
},
workoutTitle: {
fontSize: 16,
fontWeight: 'bold',
},
workoutStats: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 5,
},
megaphoneIcon: {
width: 20,
height: 20,
},
commentCount: {
marginLeft: 5,
color: '#888',
},
instructor: {
marginLeft: 10,
color: '#888',
},
runningTracker: {
marginTop: 20,
backgroundColor: '#fff',
borderRadius: 10,
padding: 10,
},
mapImage: {
height: 150,
borderRadius: 10,
},
runningInfo: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 10,
},
runningIcon: {
width: 30,
height: 30,
},
runningType: {
marginLeft: 10,
fontSize: 16,
},
distance: {
marginLeft: 'auto',
fontSize: 24,
fontWeight: 'bold',
},
unit: {
marginLeft: 5,
fontSize: 14,
alignSelf: 'flex-end',
},
time: {
marginLeft: 10,
fontSize: 14,
color: '#888',
},
adBanner: {
marginTop: 20,
backgroundColor: '#fff',
borderRadius: 10,
overflow: 'hidden',
},
adImage: {
height: 150,
},
adContent: {
padding: 10,
},
adTitle: {
fontSize: 16,
fontWeight: 'bold',
},
adSponsor: {
marginTop: 5,
color: '#888',
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 10,
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
backgroundColor: '#fff',
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 25,
height: 25,
},
navText: {
marginTop: 5,
fontSize: 12,
},
});
export default Home;