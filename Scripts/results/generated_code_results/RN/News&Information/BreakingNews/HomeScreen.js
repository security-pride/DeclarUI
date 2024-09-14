import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const [currentTime, setCurrentTime] = useState('');
const [currentDate, setCurrentDate] = useState('');
const navigation = useNavigation();
useEffect(() => {
const updateDateTime = () => {
const now = new Date();
setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
setCurrentDate(now.toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }));
updateDateTime();
const interval = setInterval(updateDateTime, 60000);

return () => clearInterval(interval);
}, []);
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" backgroundColor="black" />
<View style={styles.header}>
<Text style={styles.time}>{currentTime}</Text>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.weatherIcon} />
<TouchableOpacity onPress={() => navigation.navigate('Notice')}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.megaphoneIcon} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.userAvatar} />
</TouchableOpacity>
</View>
  <ScrollView>
    <Text style={styles.appTitle}>突发新闻</Text>
    <TouchableOpacity style={styles.citySelector}>
      <Text style={styles.cityText}>选择您的城市</Text>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.weatherIconSmall} />
    </TouchableOpacity>
    
    <Text style={styles.dateTime}>{currentDate}</Text>
    
    <View style={styles.newsContainer}>
      <View style={styles.newsBanner}>
        <Text style={styles.newsTitle}>总统核定成立大法官提名审查小组 擬明日開會</Text>
      </View>
      <Text style={styles.newsSource}>UDN.COM - 33分钟</Text>
      <View style={styles.newsActions}>
        <TouchableOpacity>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
        </TouchableOpacity>
      </View>
    </View>
    
    <View style={styles.adContainer}>
      <Text style={styles.adLabel}>AD</Text>
      <Text style={styles.adText}>RSI C6</Text>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.adImage} />
      <Text style={styles.adDescription}>RSI.c6 advanced composite technology</Text>
    </View>
  </ScrollView>
  
  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabText}>新闻</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabText}>话题墙</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabText}>BELOUD</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabText}>提醒</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.tabIcon} />
      <Text style={styles.tabText}>更多</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f0f0f0',
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 10,
backgroundColor: '#fff',
},
time: {
fontSize: 16,
fontWeight: 'bold',
},
weatherIcon: {
width: 24,
height: 24,
},
megaphoneIcon: {
width: 24,
height: 24,
},
userAvatar: {
width: 24,
height: 24,
borderRadius: 12,
},
appTitle: {
fontSize: 24,
fontWeight: 'bold',
padding: 10,
},
citySelector: {
flexDirection: 'row',
alignItems: 'center',
padding: 10,
},
cityText: {
fontSize: 16,
marginRight: 5,
},
weatherIconSmall: {
width: 16,
height: 16,
},
dateTime: {
fontSize: 14,
color: '#666',
padding: 10,
},
newsContainer: {
backgroundColor: '#fff',
margin: 10,
borderRadius: 8,
overflow: 'hidden',
},
newsBanner: {
backgroundColor: 'red',
padding: 10,
},
newsTitle: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
newsSource: {
padding: 10,
color: '#666',
},
newsActions: {
flexDirection: 'row',
justifyContent: 'space-around',
padding: 10,
},
actionIcon: {
width: 24,
height: 24,
},
adContainer: {
backgroundColor: '#fff',
margin: 10,
borderRadius: 8,
padding: 10,
},
adLabel: {
position: 'absolute',
top: 5,
right: 5,
backgroundColor: '#ddd',
padding: 2,
borderRadius: 4,
},
adText: {
fontSize: 16,
fontWeight: 'bold',
},
adImage: {
width: '100%',
height: 200,
marginVertical: 10,
borderRadius: 8,
},
adDescription: {
fontSize: 14,
color: '#666',
},
tabBar: {
flexDirection: 'row',
justifyContent: 'space-around',
borderTopWidth: 1,
borderTopColor: '#ddd',
backgroundColor: '#fff',
},
tabItem: {
alignItems: 'center',
padding: 10,
},
tabIcon: {
width: 24,
height: 24,
marginBottom: 5,
},
tabText: {
fontSize: 12,
},
});
export default Home;