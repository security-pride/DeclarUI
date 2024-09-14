import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HomePage = () => {
const [searchText, setSearchText] = useState('');
const navigation = useNavigation();
const navigateToStore = () => {
navigation.navigate('Store');
};
const navigateToProfile = () => {
navigation.navigate('Profile');
};
const navigateToSports = () => {
navigation.navigate('Sports');
};
return (
<ScrollView style={styles.container}>
<View style={styles.header}>
<TextInput style={styles.searchBar} placeholder="心火已燃" value={searchText} onChangeText={setSearchText} />
<Image source={require('../assets/snack-icon.png')} style={styles.logoK} />
<View style={styles.notificationContainer}>
<Image source={require('../assets/snack-icon.png')} style={styles.envelopeIcon} />
<View style={styles.notificationBadge}>
<Text style={styles.notificationText}>13</Text>
</View>
</View>
</View>
  <View style={styles.tabContainer}>
    <Text style={styles.tabText}>关注</Text>
    <Text style={[styles.tabText, styles.activeTab]}>发现</Text>
    <Text style={styles.tabText}>活动</Text>
  </View>

  <View style={styles.quickAccessContainer}>
    <TouchableOpacity style={styles.quickAccessButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>跟练</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickAccessButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>同城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickAccessButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>心火已燃</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.quickAccessButton}>
      <Image source={require('../assets/snack-icon.png')} style={styles.quickAccessIcon} />
      <Text style={styles.quickAccessText}>城市K车</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.contentContainer}>
    <View style={styles.videoContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.videoThumbnail} />
      <Text style={styles.videoTitle}>急性子狠瘦全身</Text>
      <Text style={styles.videoAuthor}>朱七七教授</Text>
      <View style={styles.videoStats}>
        <Image source={require('../assets/snack-icon.png')} style={styles.megaphoneIcon} />
        <Text style={styles.statsText}>1373</Text>
      </View>
    </View>

    <View style={styles.runningStatsContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.mapImage} />
      <View style={styles.runningInfo}>
        <Text style={styles.runningType}>户外跑步</Text>
        <Text style={styles.runningDistance}>5.00公里</Text>
        <Text style={styles.runningTime}>成绩 00:22:30</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.medalIcon} />
        <Text style={styles.achievementText}>5公里最快时间</Text>
      </View>
    </View>

    <TouchableOpacity style={styles.promotionContainer}>
      <Image source={require('../assets/snack-icon.png')} style={styles.promotionImage} />
      <View style={styles.promotionTextContainer}>
        <Text style={styles.promotionTitle}>只送不卖! 100份简爱轻食酸奶免费领</Text>
        <Text style={styles.promotionSubtitle}>Keep_活动</Text>
      </View>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>首页</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>课程</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToSports}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>运动</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToStore}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
      <Text style={styles.navText}>商城</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem} onPress={navigateToProfile}>
      <Image source={require('../assets/snack-icon.png')} style={styles.navIcon} />
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
logoK: {
width: 30,
height: 30,
marginLeft: 10,
},
notificationContainer: {
marginLeft: 10,
},
envelopeIcon: {
width: 25,
height: 25,
},
notificationBadge: {
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
notificationText: {
color: '#fff',
fontSize: 12,
},
tabContainer: {
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
borderBottomWidth: 2,
borderBottomColor: '#000',
},
quickAccessContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingVertical: 15,
},
quickAccessButton: {
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
contentContainer: {
padding: 15,
},
videoContainer: {
marginBottom: 20,
},
videoThumbnail: {
width: '100%',
height: 200,
borderRadius: 10,
},
videoTitle: {
fontSize: 18,
fontWeight: 'bold',
marginTop: 10,
},
videoAuthor: {
fontSize: 14,
color: '#666',
},
videoStats: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 5,
},
megaphoneIcon: {
width: 20,
height: 20,
marginRight: 5,
},
statsText: {
fontSize: 14,
color: '#666',
},
runningStatsContainer: {
flexDirection: 'row',
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
marginBottom: 20,
},
mapImage: {
width: 100,
height: 100,
borderRadius: 10,
marginRight: 15,
},
runningInfo: {
flex: 1,
},
runningType: {
fontSize: 16,
fontWeight: 'bold',
},
runningDistance: {
fontSize: 24,
fontWeight: 'bold',
marginVertical: 5,
},
runningTime: {
fontSize: 14,
color: '#666',
},
medalIcon: {
width: 20,
height: 20,
marginTop: 5,
},
achievementText: {
fontSize: 12,
color: '#666',
},
promotionContainer: {
flexDirection: 'row',
backgroundColor: '#fff',
borderRadius: 10,
padding: 15,
},
promotionImage: {
width: 80,
height: 80,
borderRadius: 10,
marginRight: 15,
},
promotionTextContainer: {
flex: 1,
},
promotionTitle: {
fontSize: 16,
fontWeight: 'bold',
},
promotionSubtitle: {
fontSize: 14,
color: '#666',
marginTop: 5,
},
bottomNav: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#e0e0e0',
paddingVertical: 10,
},
navItem: {
alignItems: 'center',
},
navIcon: {
width: 25,
height: 25,
},
navText: {
fontSize: 12,
marginTop: 5,
},
});
export default HomePage;