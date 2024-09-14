import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Sports = () => {
const navigation = useNavigation();
const [selectedRunType, setSelectedRunType] = useState('轻松跑');
const handleHomePress = () => {
navigation.navigate('Home');
};
const handleSearchSportsPress = () => {
navigation.navigate('SearchSports');
};
return (
<View style={styles.container}>
<ImageBackground source={{ uri: '../assets/snack-icon.png' }} style={styles.logo}>
<Text style={styles.title}>为你推荐更适合的跑步方式</Text>
<TouchableOpacity style={styles.customizeButton}>
<Text style={styles.customizeButtonText}>开始定制</Text>
<Image source={{ uri: '../assets/snack-icon.png' }} style={styles.lightBulbIcon} />
</TouchableOpacity>
</ImageBackground>
  <View style={styles.mainContent}>
    <Text style={styles.coachText}>Hi~ 我是你的轻松跑教练</Text>
    <Text style={styles.distanceText}>帮你轻松面对 3 公里</Text>
    <View style={styles.tagsContainer}>
      <Text style={styles.tag}>#高效减脂</Text>
      <Text style={styles.tag}>#不窒气</Text>
      <Text style={styles.tag}>#轻松跑更远</Text>
    </View>
    <View style={styles.freeTrialContainer}>
      <Text style={styles.freeTrialText}>限时免费，剩余 3 次</Text>
      <TouchableOpacity>
        <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.refreshIcon} />
      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.runTypesContainer}>
    <TouchableOpacity
      style={[styles.runTypeButton, selectedRunType === '目标跑' && styles.selectedRunType]}
      onPress={() => setSelectedRunType('目标跑')}
    >
      <Text style={styles.runTypeText}>目标跑</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.runTypeButton, selectedRunType === '自由跑' && styles.selectedRunType]}
      onPress={() => setSelectedRunType('自由跑')}
    >
      <Text style={styles.runTypeText}>自由跑</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.runTypeButton, selectedRunType === '轻松跑' && styles.selectedRunType]}
      onPress={() => setSelectedRunType('轻松跑')}
    >
      <Text style={styles.runTypeText}>轻松跑</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.runTypeButton, selectedRunType === '课程跑' && styles.selectedRunType]}
      onPress={() => setSelectedRunType('课程跑')}
    >
      <Text style={styles.runTypeText}>课程跑</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.runTypeButton, selectedRunType === '自定义' && styles.selectedRunType]}
      onPress={() => setSelectedRunType('自定义')}
    >
      <Text style={styles.runTypeText}>自定义</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.actionButtonsContainer}>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>路线</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.goButton}>
      <Text style={styles.goButtonText}>GO</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.actionIcon} />
      <Text style={styles.actionText}>跑鞋</Text>
    </TouchableOpacity>
  </View>

  <View style={styles.bottomNav}>
    <TouchableOpacity style={styles.navItem} onPress={handleSearchSportsPress}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>运动日历</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>户外跑步</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>户外行走</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>跳绳</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navItem}>
      <Image source={{ uri: '../assets/snack-icon.png' }} style={styles.navIcon} />
      <Text style={styles.navText}>更多</Text>
    </TouchableOpacity>
  </View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ffffff',
},
logo: {
height: 200,
justifyContent: 'space-between',
padding: 20,
},
title: {
fontSize: 20,
fontWeight: 'bold',
color: '#ffffff',
},
customizeButton: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'rgba(255, 255, 255, 0.3)',
paddingVertical: 8,
paddingHorizontal: 12,
borderRadius: 20,
alignSelf: 'flex-start',
},
customizeButtonText: {
color: '#ffffff',
marginRight: 5,
},
lightBulbIcon: {
width: 20,
height: 20,
},
mainContent: {
padding: 20,
},
coachText: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
},
distanceText: {
fontSize: 18,
marginBottom: 10,
},
tagsContainer: {
flexDirection: 'row',
marginBottom: 10,
},
tag: {
backgroundColor: '#f0f0f0',
paddingVertical: 5,
paddingHorizontal: 10,
borderRadius: 15,
marginRight: 10,
},
freeTrialContainer: {
flexDirection: 'row',
alignItems: 'center',
},
freeTrialText: {
color: '#ffa500',
marginRight: 10,
},
refreshIcon: {
width: 20,
height: 20,
},
runTypesContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
marginBottom: 20,
},
runTypeButton: {
paddingVertical: 10,
paddingHorizontal: 15,
borderRadius: 20,
},
selectedRunType: {
backgroundColor: '#e0e0e0',
},
runTypeText: {
fontSize: 16,
},
actionButtonsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
marginBottom: 20,
},
actionButton: {
alignItems: 'center',
},
actionIcon: {
width: 30,
height: 30,
marginBottom: 5,
},
actionText: {
fontSize: 14,
},
goButton: {
backgroundColor: '#4CAF50',
width: 80,
height: 80,
borderRadius: 40,
justifyContent: 'center',
alignItems: 'center',
},
goButtonText: {
color: '#ffffff',
fontSize: 24,
fontWeight: 'bold',
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
width: 24,
height: 24,
marginBottom: 5,
},
navText: {
fontSize: 12,
},
});
export default Sports;